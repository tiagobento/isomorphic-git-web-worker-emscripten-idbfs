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
repoUrl = `https://github.com/tiagobento/${repoName}`;
repoBranch = "main";
dir = `/${repoName}`;

Module.onRuntimeInitialized = async () => {
  FS.mkdir(dir);
  FS.mount(IDBFS, {}, dir);

  console.log(`😎 Restoring from existing IndexedDB store named '${dir}' (if present)`);
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

  console.log(`😎 Flushing in-memory '${dir}' to IndexedDB...`);
  console.time("flush");
  await flushFs();
  console.timeEnd("flush");

  // console.log("😎 Fetching the rest of the repo");
  // console.time("fetch");
  // await git.fetch({ fs, http, dir });
  // console.timeEnd("fetch");

  console.log(`😎 Creating new file to commit...`);
  console.time("commit");
  await testCommit();
  console.timeEnd("commit");

  console.log("😎 Running a pseudo `git status`...");
  console.time("status");
  const statusMatrix = await pseudoGitStatus();
  console.info(statusMatrix);
  console.timeEnd("status");

  console.log("😎 Running `git log`...");
  console.time("log");
  const log = await git.log({fs, dir});
  console.info(JSON.stringify(log.map( s => ({payload: s.payload})), null, 2));
  console.timeEnd("log");

  console.log("😎 Done.");
};

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

async function testCommit() {
  const filepath = `myNewFile.txt`;
  FS.writeFile(`${dir}/${filepath}`, "foo,bar,baz", { encoding: "utf-8"});
  
  await git.add({
    fs,
    dir,
    filepath: `myNewFile.txt`,
  });

  await git.commit({
    fs,
    dir,
    message: "My 1st commit from Isomorphic Git + Emscripten's IDBFS",
    author: {
      name: "Tiago Bento",
      email: "tfernand@redhat.com"
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
  return new Promise((res) => {
    FS.syncfs(mode, res);
  });
}

async function flushFs() {
  return syncfs(false);
}

async function restoreFs() {
  return syncfs(true);
}
