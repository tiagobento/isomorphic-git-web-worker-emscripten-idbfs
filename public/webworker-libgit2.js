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

corsProxy =
  "https://cors-proxy-kie-sandbox.rhba-cluster-0ad6762cc85bcef5745bb684498c2436-0000.us-south.containers.appdomain.cloud";
repoName = "kogito-examples";
repoUrl = `github.com/kiegroup/${repoName}`;
cloneUrl = `${corsProxy}/${repoUrl}`
dir = `/${repoName}_${new Date().getTime()}_${(Math.random() + 1)
  .toString(36)
  .substring(7)}`;

Module.onRuntimeInitialized = async () => {
  const lg2 = await Module;

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
  lg2.callMain(["clone", cloneUrl, dir]);
  FS.chdir(dir);
  console.timeEnd("clone");

  console.log("😎 Running a pseudo `git status`...");
  console.time("status");
  
  lg2.callMain(["status"])
  console.timeEnd("status");

  console.log(`😎 Flushing in-memory '${dir}' to IndexedDB...`);
  console.time("flush");
  await flushFs();
  console.timeEnd("flush");

  console.log("😎 Done.");
};

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
