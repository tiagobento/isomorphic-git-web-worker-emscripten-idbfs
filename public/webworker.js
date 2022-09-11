console.time("all");

var Module = {
  locateFile: function (s) {
    console.info(`Loading '${s}'`);
    return "https://unpkg.com/wasm-git@0.0.8/" + s;
  },
  print: function (text) {
    console.log(text);
  },
  printErr: function (text) {
    console.error(text);
  },
};

importScripts("https://unpkg.com/wasm-git@0.0.8/lg2.js");
importScripts("https://unpkg.com/isomorphic-git");
importScripts("http.js");
importScripts("fs.js");

corsProxy =
  "https://cors-proxy-kie-sandbox.rhba-cluster-0ad6762cc85bcef5745bb684498c2436-0000.us-south.containers.appdomain.cloud";
repoName = "kogito-examples";
repoUrl = `https://github.com/kiegroup/${repoName}`;
repoBranch = "main";
// dir = `/${repoName}_${new Date().getTime()}_${(Math.random() + 1)
//   .toString(36)
//   .substring(7)}`;
dir = "/test123/test456";

Module.onRuntimeInitialized = async () => {
  FS.mkdir("/test123")
  FS.mkdir(dir);
  FS.mount(IDBFS, {}, dir);

  console.log(
    `😎 Restoring from existing IndexedDB store named '${dir}' (if present)`
  );
  console.time("restore");
  await restoreFs();
  console.timeEnd("restore");

  console.log("😎 Cloning...");
  console.time("clone");
  await git.clone({
    fs,
    http,
    dir,
    corsProxy,
    url: repoUrl,
    ref: repoBranch,
    singleBranch: true,
    depth: 1,
  });
  console.timeEnd("clone");


  // console.log("😎 Fetching the rest of the repo");
  // console.time("fetch");
  // await git.fetch({ fs, http, dir });
  // console.timeEnd("fetch");

  // console.log(`😎 Creating new file to commit...`);
  // console.time("commit 1");
  // await testCommit(`myNewFile1.txt`);
  // console.timeEnd("commit 1");

  // console.log(`😎 Creating new file to commit...`);
  // console.time("commit 2");
  // await testCommit(`myNewFile2.txt`);
  // console.timeEnd("commit 2");

  console.log("😎 Running a pseudo `git status`...");
  console.time("status");
  const statusMatrix = await pseudoGitStatus();
  console.info(statusMatrix);
  console.timeEnd("status");


  console.log(`😎 Flushing in-memory '${dir}' to IndexedDB...`);
  console.time("flush");
  await flushFs();
  console.timeEnd("flush");

  console.log("😎 Running `git log`...");
  console.time("log");
  const log = await git.log({ fs, dir });
  console.info(
    JSON.stringify(
      log.map((s) => ({ payload: s.payload })),
      null,
      2
    )
  );
  console.timeEnd("log");

  // console.log(`😎 Finding all for '${dir}'`);
  // console.time("findAllPersisted (hot)");
  // console.info((await findAllPersisted(dir)).length);
  // console.info(
  //   (await findAllPersisted(dir)).filter((p) => p.endsWith(".dmn")).length
  // );
  // console.timeEnd("findAllPersisted (hot)");

  console.log(`😎 Finding in memory for '${dir}'`);
  console.time("findAllInMemory (hot)");
  console.info((await findAllInMemory(dir)).length);
  console.info(
    (await findAllInMemory(dir)).filter((p) => p.endsWith(".dmn")).length
  );
  console.timeEnd("findAllInMemory (hot)");

  // console.log(`😎 Finding all for '${"/kie-tools_1662666842462"}'`);
  // console.time("findAllPersisted DMNs (cold)");
  // console.info(
  //   (await findAllPersisted("/kie-tools_1662666842462")).filter((p) =>
  //     p.endsWith(".dmn")
  //   ).length
  // );
  // console.timeEnd("findAllPersisted DMNs (cold)");

  // console.log(`😎 Flushing in-memory '${dir}' to IndexedDB...`);
  // console.time("flush");
  // await flushFs();
  // console.timeEnd("flush");

  // console.log(`😎 Flushing in-memory '${dir}' to IndexedDB...`);
  // console.time("flush");
  // await flushFs();
  // console.timeEnd("flush");

  console.log("😎 Done.");
  console.timeEnd("all");
};

async function findAll() {
  return await git.listFiles({ fs, dir });
}

async function findAllInMemory(folder) {
  const files = [];

  async function impl(curFolder) {
    for (const name of await fs.promises.readdir(curFolder)) {
      const path = `${curFolder}/${name}`;
      const stat = await fs.promises.stat(path);
      if (stat.isFile()) {
        files.push(path);
      } else if (stat.isDirectory()) {
        files.push(path);
        await impl(path);
      } else if (stat.isSymbolicLink()) {
        const { path } = FS.lookupPath(path, { follow: true });
        await impl(path);
      }
    }
  }

  await impl(folder);
  return files;
}

async function findAllPersisted(dir) {
  const store = "FILE_DATA";
  return new Promise((resolve) => {
    const request = indexedDB.open(dir);
    request.onerror = (event) => console.error(`Error opening '${dir}'`);
    request.onsuccess = (dbEvent) => {
      const keysQuery = dbEvent.target.result
        .transaction(store)
        .objectStore(store)
        .getAllKeys();
      keysQuery.onsuccess = (keysEvent) =>
        resolve(keysEvent.target.result ?? []);
    };
  });
}

async function pseudoGitStatus() {
  const cache = {};
  const pseudoStatusMatrix = await git.walk({
    cache,
    fs,
    dir,
    trees: [git.WORKDIR(), git.STAGE()],
    map: async (filepath, [workdir, stage]) => {
      if (!stage && workdir && (await git.isIgnored({ fs, dir, filepath }))) {
        return null;
      }

      // match against base paths
      if (filepath.startsWith(".git")) {
        return null;
      }

      // For now, just bail on directories
      const workdirType = workdir && (await workdir.type());
      if (workdirType === "tree" || workdirType === "special") return;

      const stageType = stage && (await stage.type());
      if (stageType === "commit") return null;
      if (stageType === "tree" || stageType === "special") return;

      // Figure out the oids, using the staged oid for the working dir oid if the stats match.
      const stageOid = stage ? await stage.oid() : undefined;
      let workdirOid;
      if (workdir && !stage) {
        // We don't actually NEED the sha. Any sha will do
        // TODO: update this logic to handle N trees instead of just 3.
        workdirOid = "42";
      } else if (workdir) {
        workdirOid = await workdir.oid();
      }
      const entry = [undefined, undefined, workdirOid, stageOid];
      const result = entry.map((value) => entry.indexOf(value));
      result.shift(); // remove leading undefined entry
      return [filepath, ...result];
    },
  });

  const _WORKDIR = 2;
  const _STAGE = 3;
  const _FILE = 0;

  return pseudoStatusMatrix
    .filter((row) => row[_WORKDIR] !== row[_STAGE])
    .map((row) => row[_FILE]);
}

async function testCommit(filename) {
  const filepath = filename;
  await fs.promises.writeFile(`${dir}/${filepath}`, "foo,bar,baz", {
    encoding: "utf-8",
  });

  await git.add({
    fs,
    dir,
    filepath: filename,
  });

  await git.commit({
    fs,
    dir,
    message: `Add '${filename}'`,
    author: {
      name: "Tiago Bento",
      email: "tfernand@redhat.com",
    },
    ref: repoBranch,
  });

  await git.writeRef({
    fs,
    dir,
    ref: "HEAD",
    force: true,
    value: repoBranch,
  });

  await flushFs();
}

async function syncfs(mode) {
  return new Promise((res, rej) => {
    FS.syncfs({ mountpoint: dir }, mode, (err) => {
      if (err) {
        console.info(err);
        rej(err);
      } else {
        res();
      }
    });
  });
}

async function flushFs() {
  return syncfs(false);
}

async function restoreFs() {
  return syncfs(true);
}
