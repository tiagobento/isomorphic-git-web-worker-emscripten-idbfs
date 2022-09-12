inos = {};

fs = {
  promises: {
    readFile: async (path, options) => {
      try {
        // console.log("readFile",path, options)
        return FS.readFile(path, toReadWriteFileOptions(options));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    writeFile: async (path, data, options) => {
      try {
        // console.log("writeFile",path, data, options)
        const ret = await FS.writeFile(path, data, toReadWriteFileOptions(options));
        await fs.promises.lstat(path);
        return ret;
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, data, options);
      }
    },
    unlink: async (path) => {
      try {
        // console.log("unlink",path)
        return FS.unlink(path);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path);
      }
    },
    readdir: async (path, options) => {
      try {
        // console.log("readdir",path, options)
        return removeDotPaths(FS.readdir(path, options));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    mkdir: async (path, mode) => {
      try {
        // console.log("mkdir",path, mode)
        return FS.mkdir(path, mode);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, mode);
      }
    },
    rmdir: async (path) => {
      try {
        // console.log("rmdir",path)
        return FS.rmdir(path);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path);
      }
    },
    stat: async (path, options) => {
      try {
        // console.log("stat",path, options)
        return toLfsStat(path, FS.stat(path, options));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    lstat: async (path, options) => {
      try {
        // console.log("lstat",path, options)
        return toLfsStat(path, FS.stat(path, true));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    readlink: async (path, options) => {
      try {
        // console.log("readlink",path, options)
        return FS.readlink(path, options);
      } catch (e) {
        throw new Error(fromWasiErrorToNodeError(e), path, option);
      }
    },
    symlink: async (target, path, type) => {
      try {
        // console.log("symlink",target, path, type)
        return FS.symlink(target, path, type);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, target, path, typ);
      }
    },
    chmod: async (path, mode) => {
      try {
        // console.log("chmod",path, mode)
        return FS.chmod(path, mode);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, mod);
      }
    },
  },
};

// Reference: https://github.com/isomorphic-git/lightning-fs#fsstatfilepath-opts-cb
function toLfsStat(path, stat) {
  // isomorphic-git expects that `ino` and `mode` never change once they are created,
  // however, IDBFS does not keep `ino`s consistent between syncfs calls.
  //
  // We need to persist an index containig the `ino`s and `mode`s for all files.
  // Luckily this is very cheap to do, as long as we kepe the `inos[dir]` map up-to-date.
  const perpetualStat = inos[dir]
    .set(path, inos[dir].get(path) ?? { ino: stat.ino, mode: stat.mode })
    .get(path);

  const isDir = FS.isDir(perpetualStat.mode);
  const isFile = FS.isFile(perpetualStat.mode);
  const isLink = FS.isLink(perpetualStat.mode);

  return {
    mode: perpetualStat.mode,
    size: -1,
    ino: perpetualStat.ino,
    mtimeMs: 0,
    ctimeMs: 0,
    uid: 1,
    gid: 1,
    dev: 1,
    isDirectory: () => isDir,
    isFile: () => isFile,
    isSymbolicLink: () => isLink,
  };
}

// Reference: https://github.com/emscripten-core/emscripten/blob/main/system/include/wasi/api.h
function fromWasiErrorToNodeError(e, ...args) {
  switch (e.errno) {
    case 20:
      return { code: "EEXIST", message: "EEXIST", args };
    case 44:
      return { code: "ENOENT", message: "ENOENT", args };
    case 54:
      return { code: "ENOTDIR", message: "ENOTDIR", args };
    case 55:
      return { code: "ENOTEMPTY", message: "ENOTEMPTY", args };
    case 73:
      return { code: "ETIMEDOUT", message: "ETIMEDOUT", args };
    default:
      throw { e, code: "UNKNOWN", args };
  }
}

// Reference: https://github.com/isomorphic-git/lightning-fs#fswritefilefilepath-data-opts-cb
function toReadWriteFileOptions(options) {
  return typeof options === "string" ? { encoding: options } : options;
}

// Not doing that causes a loop during `clone`s.
function removeDotPaths(a) {
  return a.slice(2); // Remove "." and ".." entries
}

//

async function syncfs(isRestore) {
  await new Promise((res) => {
    IDBFS.syncfs({ mountpoint: dir }, isRestore, res);
  });
  await new Promise((res) => {
    IDBFS.syncfs({ mountpoint: inosDir() }, isRestore, res);
  });
}

async function flushFs() {
  const all = JSON.stringify(Array.from(inos[dir].entries()));
  fs.promises.writeFile(inosIndexJsonPath(), all, { encoding: "utf-8" });
  return syncfs(false);
}

async function initFs() {
  FS.mkdir(dir);
  FS.mount(IDBFS, {}, dir);
  FS.mkdir(inosDir());
  FS.mount(IDBFS, {}, inosDir());
  inos[dir] = new Map();
}

async function deinitFs() {
  delete inos[dir];
  FS.unmount(inosDir());
  FS.rmdir(inosDir());
  FS.unmount(dir);
  FS.rmdir(dir);
}

async function restoreFs() {
  await syncfs(true);

  let inosIndexJson;
  try {
    inosIndexJson = await fs.promises.readFile(inosIndexJsonPath(), "utf8");
  } catch (e) {
    // ENOENT
    inosIndexJson = "[]";
  }

  inos[dir] = new Map(JSON.parse(inosIndexJson));
}

function inosDir() {
  return dir + "_inos";
}

function inosIndexJsonPath() {
  return inosDir() + "/index.json";
}
