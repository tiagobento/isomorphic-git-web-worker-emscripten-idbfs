fs = {
  promises: {
    readFile: async (path, options) => {
      try {
        return FS.readFile(path, options);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    writeFile: async (file, data, options) => {
      try {
        return FS.writeFile(file, data, toWriteFileOptions(options));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, file, data, options);
      }
    },
    unlink: async (path) => {
      try {
        return FS.unlink(path);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path);
      }
    },
    readdir: async (path, options) => {
      try {
        return removeDotPaths(FS.readdir(path, options));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    mkdir: async (path, mode) => {
      try {
        return FS.mkdir(path, mode);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, mode);
      }
    },
    rmdir: async (path) => {
      try {
        return FS.rmdir(path);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path);
      }
    },
    stat: async (path, options) => {
      try {
        return toLfsStat(FS.stat(path, options));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    lstat: async (path, options) => {
      try {
        return toLfsStat(FS.lstat(path, options));
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, options);
      }
    },
    readlink: async (path, options) => {
      try {
        return FS.readlink(path, options);
      } catch (e) {
        throw new Error(fromWasiErrorToNodeError(e), path, option);
      }
    },
    symlink: async (target, path, type) => {
      try {
        return FS.symlink(target, path, type);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, target, path, typ);
      }
    },
    chmod: async (path, mode) => {
      try {
        return FS.chmod(path, mode);
      } catch (e) {
        throw fromWasiErrorToNodeError(e, path, mod);
      }
    },
  },
};

function toLfsStat(stat) {
  return {
    ...stat,
    isDirectory: () => FS.isDir(stat.mode),
    isFile: () => FS.isFile(stat.mode),
    isSymbolicLink: () => FS.isLink(stat.mode),
  };
}

function fromWasiErrorToNodeError(e, ...args) {
  switch (e.errno) {
    case 20:
      return { code: "EEXIST", message: "EEXIST" };
    case 44:
      return { code: "ENOENT", message: "ENOENT" };
    case 54:
      return { code: "ENOTDIR", message: "ENOTDIR" };
    case 55:
      return { code: "ENOTEMPTY", message: "ENOTEMPTY" };
    case 73:
      return { code: "ETIMEDOUT", message: "ETIMEDOUT" };
    default:
      throw { e, code: "UNKNOWN", args };
  }
}

function toWriteFileOptions(options) {
  return typeof options === "string" ? { encoding: options } : options;
}

function removeDotPaths(a) {
  return a.slice(2); // Remove "." and ".." entries
}
