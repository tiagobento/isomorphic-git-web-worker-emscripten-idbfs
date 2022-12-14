!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.git = e())
    : (t.git = e());
})(self, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            r.d(
              n,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 156))
    );
  })([
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(24);
      function i(t, e) {
        if (void 0 === e) throw new n.a(t);
      }
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        const normalizedPath = t
          .replace(/\/\.\//g, "/")
          .replace(/\/{2,}/g, "/")
          .replace(/^\/\.$/, "/")
          .replace(/^\.\/$/, ".")
          .replace(/^\.\//, "")
          .replace(/\/\.$/, "")
        //   .replace(/(.+)\/$/, "$1")
          .replace(/^$/, ".");
        return normalizedPath.endsWith("/") ? normalizedPath.slice(0, -1) : normalizedPath;
      }
      function i(...t) {
        return n(t.map(n).join("/"));
      }
      r.d(e, "a", function () {
        return i;
      });
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return f;
        });
        var n = r(20),
          i = r.n(n),
          o = r(32),
          a = r(26),
          s = r(102);
        function c(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function u(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                c(o, n, i, a, s, "next", t);
              }
              function s(t) {
                c(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        class f {
          constructor(t) {
            if (void 0 !== t._original_unwrapped_fs) return t;
            const e = Object.getOwnPropertyDescriptor(t, "promises");
            e && e.enumerable
              ? ((this._readFile = t.promises.readFile.bind(t.promises)),
                (this._writeFile = t.promises.writeFile.bind(t.promises)),
                (this._mkdir = t.promises.mkdir.bind(t.promises)),
                t.promises.rm
                  ? (this._rm = t.promises.rm.bind(t.promises))
                  : t.promises.rmdir.length > 1
                  ? (this._rm = t.promises.rmdir.bind(t.promises))
                  : (this._rm = s.a.bind(null, this)),
                (this._rmdir = t.promises.rmdir.bind(t.promises)),
                (this._unlink = t.promises.unlink.bind(t.promises)),
                (this._stat = t.promises.stat.bind(t.promises)),
                (this._lstat = t.promises.lstat.bind(t.promises)),
                (this._readdir = t.promises.readdir.bind(t.promises)),
                (this._readlink = t.promises.readlink.bind(t.promises)),
                (this._symlink = t.promises.symlink.bind(t.promises)))
              : ((this._readFile = i()(t.readFile.bind(t))),
                (this._writeFile = i()(t.writeFile.bind(t))),
                (this._mkdir = i()(t.mkdir.bind(t))),
                t.rm
                  ? (this._rm = i()(t.rm.bind(t)))
                  : t.rmdir.length > 2
                  ? (this._rm = i()(t.rmdir.bind(t)))
                  : (this._rm = s.a.bind(null, this)),
                (this._rmdir = i()(t.rmdir.bind(t))),
                (this._unlink = i()(t.unlink.bind(t))),
                (this._stat = i()(t.stat.bind(t))),
                (this._lstat = i()(t.lstat.bind(t))),
                (this._readdir = i()(t.readdir.bind(t))),
                (this._readlink = i()(t.readlink.bind(t))),
                (this._symlink = i()(t.symlink.bind(t)))),
              (this._original_unwrapped_fs = t);
          }
          exists(t, e = {}) {
            var r = this;
            return u(function* () {
              try {
                return yield r._stat(t), !0;
              } catch (t) {
                if ("ENOENT" === t.code || "ENOTDIR" === t.code) return !1;
                throw (
                  (console.log(
                    'Unhandled error in "FileSystem.exists()" function',
                    t
                  ),
                  t)
                );
              }
            })();
          }
          read(e, r = {}) {
            var n = this;
            return u(function* () {
              try {
                let i = yield n._readFile(e, r);
                return "string" != typeof i && (i = t.from(i)), i;
              } catch (t) {
                return null;
              }
            })();
          }
          write(t, e, r = {}) {
            var n = this;
            return u(function* () {
              try {
                return void (yield n._writeFile(t, e, r));
              } catch (i) {
                yield n.mkdir(Object(a.a)(t)), yield n._writeFile(t, e, r);
              }
            })();
          }
          mkdir(t, e = !1) {
            var r = this;
            return u(function* () {
              try {
                return void (yield r._mkdir(t));
              } catch (n) {
                if (null === n) return;
                if ("EEXIST" === n.code) return;
                if (e) throw n;
                if ("ENOENT" === n.code) {
                  const e = Object(a.a)(t);
                  if ("." === e || "/" === e || e === t) throw n;
                  yield r.mkdir(e), yield r.mkdir(t, !0);
                }
              }
            })();
          }
          rm(t) {
            var e = this;
            return u(function* () {
              try {
                yield e._unlink(t);
              } catch (t) {
                if ("ENOENT" !== t.code) throw t;
              }
            })();
          }
          rmdir(t, e) {
            var r = this;
            return u(function* () {
              try {
                e && e.recursive ? yield r._rm(t, e) : yield r._rmdir(t);
              } catch (t) {
                if ("ENOENT" !== t.code) throw t;
              }
            })();
          }
          readdir(t) {
            var e = this;
            return u(function* () {
              try {
                const r = yield e._readdir(t);
                return r.sort(o.a), r;
              } catch (t) {
                return "ENOTDIR" === t.code ? null : [];
              }
            })();
          }
          readdirDeep(t) {
            var e = this;
            return u(function* () {
              const r = yield e._readdir(t);
              return (yield Promise.all(
                r.map(
                  (function () {
                    var r = u(function* (r) {
                      const n = t + "/" + r;
                      return (yield e._stat(n)).isDirectory()
                        ? e.readdirDeep(n)
                        : n;
                    });
                    return function (t) {
                      return r.apply(this, arguments);
                    };
                  })()
                )
              )).reduce((t, e) => t.concat(e), []);
            })();
          }
          lstat(t) {
            var e = this;
            return u(function* () {
              try {
                return yield e._lstat(t);
              } catch (t) {
                if ("ENOENT" === t.code) return null;
                throw t;
              }
            })();
          }
          readlink(e, r = { encoding: "buffer" }) {
            var n = this;
            return u(function* () {
              try {
                const i = yield n._readlink(e, r);
                return t.isBuffer(i) ? i : t.from(i);
              } catch (t) {
                if ("ENOENT" === t.code) return null;
                throw t;
              }
            })();
          }
          writelink(t, e) {
            var r = this;
            return u(function* () {
              return r._symlink(e.toString("utf8"), t);
            })();
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      class n extends Error {
        constructor(t) {
          super(t), (this.caller = "");
        }
        toJSON() {
          return {
            code: this.code,
            data: this.data,
            caller: this.caller,
            message: this.message,
            stack: this.stack,
          };
        }
        fromJSON(t) {
          const e = new n(t.message);
          return (
            (e.code = t.code),
            (e.data = t.data),
            (e.caller = t.caller),
            (e.stack = t.stack),
            e
          );
        }
        get isIsomorphicGitError() {
          return !0;
        }
      }
    },
    function (t, e, r) {
      "use strict";
      var n = r(28),
        i = r(65),
        o = r(9);
      class a {
        constructor(t) {
          if (((this.refs = new Map()), (this.parsedConfig = []), t)) {
            let e = null;
            this.parsedConfig = t
              .trim()
              .split("\n")
              .map((t) => {
                if (/^\s*#/.test(t)) return { line: t, comment: !0 };
                const r = t.indexOf(" ");
                if (t.startsWith("^")) {
                  const r = t.slice(1);
                  return (
                    this.refs.set(e + "^{}", r), { line: t, ref: e, peeled: r }
                  );
                }
                {
                  const n = t.slice(0, r);
                  return (
                    (e = t.slice(r + 1)),
                    this.refs.set(e, n),
                    { line: t, ref: e, oid: n }
                  );
                }
              });
          }
          return this;
        }
        static from(t) {
          return new a(t);
        }
        delete(t) {
          (this.parsedConfig = this.parsedConfig.filter((e) => e.ref !== t)),
            this.refs.delete(t);
        }
        toString() {
          return this.parsedConfig.map(({ line: t }) => t).join("\n") + "\n";
        }
      }
      var s = r(97);
      function c(t, e) {
        const r = t.replace(/\^\{\}$/, ""),
          n = e.replace(/\^\{\}$/, ""),
          i = -(r < n) || +(r > n);
        return 0 === i ? (t.endsWith("^{}") ? 1 : -1) : i;
      }
      var u = r(1),
        f = r(13);
      function l(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function d(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              l(o, n, i, a, s, "next", t);
            }
            function s(t) {
              l(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      r.d(e, "a", function () {
        return y;
      });
      const h = (t) => [
          `${t}`,
          `refs/${t}`,
          `refs/tags/${t}`,
          `refs/heads/${t}`,
          `refs/remotes/${t}`,
          `refs/remotes/${t}/HEAD`,
        ],
        p = ["config", "description", "index", "shallow", "commondir"];
      class y {
        static updateRemoteRefs({
          fs: t,
          gitdir: e,
          remote: r,
          refs: o,
          symrefs: a,
          tags: c,
          refspecs: l,
          prune: h = !1,
          pruneTags: p = !1,
        }) {
          return d(function* () {
            for (const t of o.values())
              if (!t.match(/[0-9a-f]{40}/)) throw new n.a(t);
            const d = yield f.a.get({ fs: t, gitdir: e });
            if (!l) {
              if (0 === (l = yield d.getall(`remote.${r}.fetch`)).length)
                throw new i.a(r);
              l.unshift(`+HEAD:refs/remotes/${r}/HEAD`);
            }
            const g = s.a.from(l),
              v = new Map();
            if (p) {
              const r = yield y.listRefs({
                fs: t,
                gitdir: e,
                filepath: "refs/tags",
              });
              yield y.deleteRefs({
                fs: t,
                gitdir: e,
                refs: r.map((t) => `refs/tags/${t}`),
              });
            }
            if (c)
              for (const r of o.keys())
                if (
                  r.startsWith("refs/tags") &&
                  !r.endsWith("^{}") &&
                  !(yield y.exists({ fs: t, gitdir: e, ref: r }))
                ) {
                  const t = o.get(r);
                  v.set(r, t);
                }
            const m = g.translate([...o.keys()]);
            for (const [t, e] of m) {
              const r = o.get(t);
              v.set(e, r);
            }
            const w = g.translate([...a.keys()]);
            for (const [t, e] of w) {
              const r = a.get(t),
                n = g.translateOne(r);
              n && v.set(e, `ref: ${n}`);
            }
            const b = [];
            if (h) {
              for (const r of g.localNamespaces()) {
                const n = (yield y.listRefs({
                  fs: t,
                  gitdir: e,
                  filepath: r,
                })).map((t) => `${r}/${t}`);
                for (const t of n) v.has(t) || b.push(t);
              }
              b.length > 0 &&
                (yield y.deleteRefs({ fs: t, gitdir: e, refs: b }));
            }
            for (const [r, n] of v)
              yield t.write(Object(u.a)(e, r), `${n.trim()}\n`, "utf8");
            return { pruned: b };
          })();
        }
        static writeRef({ fs: t, gitdir: e, ref: r, value: i }) {
          return d(function* () {
            if (!i.match(/[0-9a-f]{40}/)) throw new n.a(i);
            yield t.write(Object(u.a)(e, r), `${i.trim()}\n`, "utf8");
          })();
        }
        static writeSymbolicRef({ fs: t, gitdir: e, ref: r, value: n }) {
          return d(function* () {
            yield t.write(Object(u.a)(e, r), "ref: " + `${n.trim()}\n`, "utf8");
          })();
        }
        static deleteRef({ fs: t, gitdir: e, ref: r }) {
          return d(function* () {
            return y.deleteRefs({ fs: t, gitdir: e, refs: [r] });
          })();
        }
        static deleteRefs({ fs: t, gitdir: e, refs: r }) {
          return d(function* () {
            yield Promise.all(r.map((r) => t.rm(Object(u.a)(e, r))));
            let n = yield t.read(`${e}/packed-refs`, { encoding: "utf8" });
            const i = a.from(n),
              o = i.refs.size;
            for (const t of r) i.refs.has(t) && i.delete(t);
            i.refs.size < o &&
              ((n = i.toString()),
              yield t.write(`${e}/packed-refs`, n, { encoding: "utf8" }));
          })();
        }
        static resolve({ fs: t, gitdir: e, ref: r, depth: n }) {
          return d(function* () {
            if (void 0 !== n && -1 === --n) return r;
            let i;
            if (r.startsWith("ref: "))
              return (
                (r = r.slice("ref: ".length)),
                y.resolve({ fs: t, gitdir: e, ref: r, depth: n })
              );
            if (40 === r.length && /[0-9a-f]{40}/.test(r)) return r;
            const a = yield y.packedRefs({ fs: t, gitdir: e }),
              s = h(r).filter((t) => !p.includes(t));
            for (const r of s)
              if (
                ((i =
                  (yield t.read(`${e}/${r}`, { encoding: "utf8" })) ||
                  a.get(r)),
                i)
              )
                return y.resolve({ fs: t, gitdir: e, ref: i.trim(), depth: n });
            throw new o.a(r);
          })();
        }
        static exists({ fs: t, gitdir: e, ref: r }) {
          return d(function* () {
            try {
              return yield y.expand({ fs: t, gitdir: e, ref: r }), !0;
            } catch (t) {
              return !1;
            }
          })();
        }
        static expand({ fs: t, gitdir: e, ref: r }) {
          return d(function* () {
            if (40 === r.length && /[0-9a-f]{40}/.test(r)) return r;
            const n = yield y.packedRefs({ fs: t, gitdir: e }),
              i = h(r);
            for (const r of i) {
              if (yield t.exists(`${e}/${r}`)) return r;
              if (n.has(r)) return r;
            }
            throw new o.a(r);
          })();
        }
        static expandAgainstMap({ ref: t, map: e }) {
          return d(function* () {
            const r = h(t);
            for (const t of r) if (yield e.has(t)) return t;
            throw new o.a(t);
          })();
        }
        static resolveAgainstMap({ ref: t, fullref: e = t, depth: r, map: n }) {
          if (void 0 !== r && -1 === --r) return { fullref: e, oid: t };
          if (t.startsWith("ref: "))
            return (
              (t = t.slice("ref: ".length)),
              y.resolveAgainstMap({ ref: t, fullref: e, depth: r, map: n })
            );
          if (40 === t.length && /[0-9a-f]{40}/.test(t))
            return { fullref: e, oid: t };
          const i = h(t);
          for (const t of i) {
            const e = n.get(t);
            if (e)
              return y.resolveAgainstMap({
                ref: e.trim(),
                fullref: t,
                depth: r,
                map: n,
              });
          }
          throw new o.a(t);
        }
        static packedRefs({ fs: t, gitdir: e }) {
          return d(function* () {
            const r = yield t.read(`${e}/packed-refs`, { encoding: "utf8" });
            return a.from(r).refs;
          })();
        }
        static listRefs({ fs: t, gitdir: e, filepath: r }) {
          return d(function* () {
            const n = y.packedRefs({ fs: t, gitdir: e });
            let i = null;
            try {
              (i = yield t.readdirDeep(`${e}/${r}`)),
                (i = i.map((t) => t.replace(`${e}/${r}/`, "")));
            } catch (t) {
              i = [];
            }
            for (let t of (yield n).keys())
              t.startsWith(r) &&
                ((t = t.replace(r + "/", "")), i.includes(t) || i.push(t));
            return i.sort(c), i;
          })();
        }
        static listBranches({ fs: t, gitdir: e, remote: r }) {
          return d(function* () {
            return r
              ? y.listRefs({ fs: t, gitdir: e, filepath: `refs/remotes/${r}` })
              : y.listRefs({ fs: t, gitdir: e, filepath: "refs/heads" });
          })();
        }
        static listTags({ fs: t, gitdir: e }) {
          return d(function* () {
            return (yield y.listRefs({
              fs: t,
              gitdir: e,
              filepath: "refs/tags",
            })).filter((t) => !t.endsWith("^{}"));
          })();
        }
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(
            `An internal error caused this command to fail. Please file a bug report at https://github.com/isomorphic-git/isomorphic-git/issues with this error message: ${t}`
          ),
            (this.code = this.name = i.code),
            (this.data = { message: t });
        }
      }
      i.code = "InternalError";
    },
    ,
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return d;
        });
        var n = r(5),
          i = r(9),
          o = r(23),
          a = r(120),
          s = r(121),
          c = r(76),
          u = r(17);
        function f(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function l(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                f(o, n, i, a, s, "next", t);
              }
              function s(t) {
                f(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function d(t) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = l(function* ({
            fs: e,
            cache: r,
            gitdir: f,
            oid: l,
            format: h = "content",
          }) {
            const p = (t) => d({ fs: e, cache: r, gitdir: f, oid: t });
            let y;
            if (
              ("4b825dc642cb6eb9a060e54bf8d69288fbee4904" === l &&
                (y = { format: "wrapped", object: t.from("tree 0\0") }),
              y || (y = yield Object(a.a)({ fs: e, gitdir: f, oid: l })),
              y ||
                (y = yield Object(s.a)({
                  fs: e,
                  cache: r,
                  gitdir: f,
                  oid: l,
                  getExternalRefDelta: p,
                })),
              !y)
            )
              throw new i.a(l);
            if ("deflated" === h) return y;
            if (
              ("deflated" === y.format &&
                ((y.object = t.from(yield Object(c.a)(y.object))),
                (y.format = "wrapped")),
              "wrapped" === y.format)
            ) {
              if ("wrapped" === h && "wrapped" === y.format) return y;
              const t = yield Object(u.a)(y.object);
              if (t !== l)
                throw new n.a(`SHA check failed! Expected ${l}, computed ${t}`);
              const { object: e, type: r } = o.a.unwrap(y.object);
              (y.type = r), (y.object = e), (y.format = "content");
            }
            if ("content" === y.format) return "content" === h ? y : void 0;
            throw new n.a(`invalid format "${y.format}"`);
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return a;
        });
        var n = r(75),
          i = r(43);
        function o(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        class a {
          static flush() {
            return t.from("0000", "utf8");
          }
          static delim() {
            return t.from("0001", "utf8");
          }
          static encode(e) {
            "string" == typeof e && (e = t.from(e));
            const r = e.length + 4,
              n = Object(i.a)(4, r);
            return t.concat([t.from(n, "utf8"), e]);
          }
          static streamReader(t) {
            const e = new n.a(t);
            return (function () {
              var t,
                r =
                  ((t = function* () {
                    try {
                      let t = yield e.read(4);
                      if (null == t) return !0;
                      if (((t = parseInt(t.toString("utf8"), 16)), 0 === t))
                        return null;
                      if (1 === t) return null;
                      const r = yield e.read(t - 4);
                      return null == r || r;
                    } catch (t) {
                      return console.log("error", t), !0;
                    }
                  }),
                  function () {
                    var e = this,
                      r = arguments;
                    return new Promise(function (n, i) {
                      var a = t.apply(e, r);
                      function s(t) {
                        o(a, n, i, s, c, "next", t);
                      }
                      function c(t) {
                        o(a, n, i, s, c, "throw", t);
                      }
                      s(void 0);
                    });
                  });
              return function () {
                return r.apply(this, arguments);
              };
            })();
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(`Could not find ${t}.`),
            (this.code = this.name = i.code),
            (this.data = { what: t });
        }
      }
      i.code = "NotFoundError";
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var n = r(135),
          i = r(136),
          o = r(137);
        function a() {
          return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function s(t, e) {
          if (a() < e) throw new RangeError("Invalid typed array length");
          return (
            c.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = c.prototype)
              : (null === t && (t = new c(e)), (t.length = e)),
            t
          );
        }
        function c(t, e, r) {
          if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
            return new c(t, e, r);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return l(this, t);
          }
          return u(this, t, e, r);
        }
        function u(t, e, r, n) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, r, n) {
                if ((e.byteLength, r < 0 || e.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(e)
                    : void 0 === n
                    ? new Uint8Array(e, r)
                    : new Uint8Array(e, r, n);
                c.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = c.prototype)
                  : (t = d(t, e));
                return t;
              })(t, e, r, n)
            : "string" == typeof e
            ? (function (t, e, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!c.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | p(e, r),
                  i = (t = s(t, n)).write(e, r);
                i !== n && (t = t.slice(0, i));
                return t;
              })(t, e, r)
            : (function (t, e) {
                if (c.isBuffer(e)) {
                  var r = 0 | h(e.length);
                  return 0 === (t = s(t, r)).length
                    ? t
                    : (e.copy(t, 0, 0, r), t);
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length || (n = e.length) != n
                      ? s(t, 0)
                      : d(t, e);
                  if ("Buffer" === e.type && o(e.data)) return d(t, e.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function f(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function l(t, e) {
          if ((f(e), (t = s(t, e < 0 ? 0 : 0 | h(e))), !c.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < e; ++r) t[r] = 0;
          return t;
        }
        function d(t, e) {
          var r = e.length < 0 ? 0 : 0 | h(e.length);
          t = s(t, r);
          for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
          return t;
        }
        function h(t) {
          if (t >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function p(t, e) {
          if (c.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var r = t.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return M(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return F(t).length;
              default:
                if (n) return M(t).length;
                (e = ("" + e).toLowerCase()), (n = !0);
            }
        }
        function y(t, e, r) {
          var n = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return S(this, e, r);
              case "utf8":
              case "utf-8":
                return k(this, e, r);
              case "ascii":
                return E(this, e, r);
              case "latin1":
              case "binary":
                return A(this, e, r);
              case "base64":
                return P(this, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return $(this, e, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (n = !0);
            }
        }
        function g(t, e, r) {
          var n = t[e];
          (t[e] = t[r]), (t[r] = n);
        }
        function v(t, e, r, n, i) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (i) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)))
            return 0 === e.length ? -1 : m(t, e, r, n, i);
          if ("number" == typeof e)
            return (
              (e &= 255),
              c.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : m(t, [e], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function m(t, e, r, n, i) {
          var o,
            a = 1,
            s = t.length,
            c = e.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (s /= 2), (c /= 2), (r /= 2);
          }
          function u(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (i) {
            var f = -1;
            for (o = r; o < s; o++)
              if (u(t, o) === u(e, -1 === f ? 0 : o - f)) {
                if ((-1 === f && (f = o), o - f + 1 === c)) return f * a;
              } else -1 !== f && (o -= o - f), (f = -1);
          } else
            for (r + c > s && (r = s - c), o = r; o >= 0; o--) {
              for (var l = !0, d = 0; d < c; d++)
                if (u(t, o + d) !== u(e, d)) {
                  l = !1;
                  break;
                }
              if (l) return o;
            }
          return -1;
        }
        function w(t, e, r, n) {
          r = Number(r) || 0;
          var i = t.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          var o = e.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          n > o / 2 && (n = o / 2);
          for (var a = 0; a < n; ++a) {
            var s = parseInt(e.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            t[r + a] = s;
          }
          return a;
        }
        function b(t, e, r, n) {
          return H(M(e, t.length - r), t, r, n);
        }
        function _(t, e, r, n) {
          return H(
            (function (t) {
              for (var e = [], r = 0; r < t.length; ++r)
                e.push(255 & t.charCodeAt(r));
              return e;
            })(e),
            t,
            r,
            n
          );
        }
        function O(t, e, r, n) {
          return _(t, e, r, n);
        }
        function j(t, e, r, n) {
          return H(F(e), t, r, n);
        }
        function x(t, e, r, n) {
          return H(
            (function (t, e) {
              for (
                var r, n, i, o = [], a = 0;
                a < t.length && !((e -= 2) < 0);
                ++a
              )
                (r = t.charCodeAt(a)),
                  (n = r >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n);
              return o;
            })(e, t.length - r),
            t,
            r,
            n
          );
        }
        function P(t, e, r) {
          return 0 === e && r === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, r));
        }
        function k(t, e, r) {
          r = Math.min(t.length, r);
          for (var n = [], i = e; i < r; ) {
            var o,
              a,
              s,
              c,
              u = t[i],
              f = null,
              l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + l <= r)
              switch (l) {
                case 1:
                  u < 128 && (f = u);
                  break;
                case 2:
                  128 == (192 & (o = t[i + 1])) &&
                    (c = ((31 & u) << 6) | (63 & o)) > 127 &&
                    (f = c);
                  break;
                case 3:
                  (o = t[i + 1]),
                    (a = t[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      (c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                        2047 &&
                      (c < 55296 || c > 57343) &&
                      (f = c);
                  break;
                case 4:
                  (o = t[i + 1]),
                    (a = t[i + 2]),
                    (s = t[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      128 == (192 & s) &&
                      (c =
                        ((15 & u) << 18) |
                        ((63 & o) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) > 65535 &&
                      c < 1114112 &&
                      (f = c);
              }
            null === f
              ? ((f = 65533), (l = 1))
              : f > 65535 &&
                ((f -= 65536),
                n.push(((f >>> 10) & 1023) | 55296),
                (f = 56320 | (1023 & f))),
              n.push(f),
              (i += l);
          }
          return (function (t) {
            var e = t.length;
            if (e <= 4096) return String.fromCharCode.apply(String, t);
            var r = "",
              n = 0;
            for (; n < e; )
              r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
            return r;
          })(n);
        }
        (e.Buffer = c),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return c.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (c.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = a()),
          (c.poolSize = 8192),
          (c._augment = function (t) {
            return (t.__proto__ = c.prototype), t;
          }),
          (c.from = function (t, e, r) {
            return u(null, t, e, r);
          }),
          c.TYPED_ARRAY_SUPPORT &&
            ((c.prototype.__proto__ = Uint8Array.prototype),
            (c.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              c[Symbol.species] === c &&
              Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (c.alloc = function (t, e, r) {
            return (function (t, e, r, n) {
              return (
                f(e),
                e <= 0
                  ? s(t, e)
                  : void 0 !== r
                  ? "string" == typeof n
                    ? s(t, e).fill(r, n)
                    : s(t, e).fill(r)
                  : s(t, e)
              );
            })(null, t, e, r);
          }),
          (c.allocUnsafe = function (t) {
            return l(null, t);
          }),
          (c.allocUnsafeSlow = function (t) {
            return l(null, t);
          }),
          (c.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (c.compare = function (t, e) {
            if (!c.isBuffer(t) || !c.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
              i < o;
              ++i
            )
              if (t[i] !== e[i]) {
                (r = t[i]), (n = e[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (c.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (c.concat = function (t, e) {
            if (!o(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return c.alloc(0);
            var r;
            if (void 0 === e)
              for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = c.allocUnsafe(e),
              i = 0;
            for (r = 0; r < t.length; ++r) {
              var a = t[r];
              if (!c.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(n, i), (i += a.length);
            }
            return n;
          }),
          (c.byteLength = p),
          (c.prototype._isBuffer = !0),
          (c.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) g(this, e, e + 1);
            return this;
          }),
          (c.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              g(this, e, e + 3), g(this, e + 1, e + 2);
            return this;
          }),
          (c.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              g(this, e, e + 7),
                g(this, e + 1, e + 6),
                g(this, e + 2, e + 5),
                g(this, e + 3, e + 4);
            return this;
          }),
          (c.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? k(this, 0, t)
              : y.apply(this, arguments);
          }),
          (c.prototype.equals = function (t) {
            if (!c.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === c.compare(this, t);
          }),
          (c.prototype.inspect = function () {
            var t = "",
              r = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
                this.length > r && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (c.prototype.compare = function (t, e, r, n, i) {
            if (!c.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              e < 0 || r > t.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && e >= r) return 0;
            if (n >= i) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            for (
              var o = (i >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (e >>>= 0),
                s = Math.min(o, a),
                u = this.slice(n, i),
                f = t.slice(e, r),
                l = 0;
              l < s;
              ++l
            )
              if (u[l] !== f[l]) {
                (o = u[l]), (a = f[l]);
                break;
              }
            return o < a ? -1 : a < o ? 1 : 0;
          }),
          (c.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }),
          (c.prototype.indexOf = function (t, e, r) {
            return v(this, t, e, r, !0);
          }),
          (c.prototype.lastIndexOf = function (t, e, r) {
            return v(this, t, e, r, !1);
          }),
          (c.prototype.write = function (t, e, r, n) {
            if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e)
              (n = e), (r = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            var i = this.length - e;
            if (
              ((void 0 === r || r > i) && (r = i),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
              switch (n) {
                case "hex":
                  return w(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return b(this, t, e, r);
                case "ascii":
                  return _(this, t, e, r);
                case "latin1":
                case "binary":
                  return O(this, t, e, r);
                case "base64":
                  return j(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return x(this, t, e, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (c.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function E(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
          return n;
        }
        function A(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
          return n;
        }
        function S(t, e, r) {
          var n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = "", o = e; o < r; ++o) i += N(t[o]);
          return i;
        }
        function $(t, e, r) {
          for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
            i += String.fromCharCode(n[o] + 256 * n[o + 1]);
          return i;
        }
        function R(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function B(t, e, r, n, i, o) {
          if (!c.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > t.length) throw new RangeError("Index out of range");
        }
        function I(t, e, r, n) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
            t[r + i] =
              (e & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function T(t, e, r, n) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
            t[r + i] = (e >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function U(t, e, r, n, i, o) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function C(t, e, r, n, o) {
          return o || U(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
        }
        function z(t, e, r, n, o) {
          return o || U(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
        }
        (c.prototype.slice = function (t, e) {
          var r,
            n = this.length;
          if (
            ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0
              ? (e += n) < 0 && (e = 0)
              : e > n && (e = n),
            e < t && (e = t),
            c.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(t, e)).__proto__ = c.prototype;
          else {
            var i = e - t;
            r = new c(i, void 0);
            for (var o = 0; o < i; ++o) r[o] = this[o + t];
          }
          return r;
        }),
          (c.prototype.readUIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || R(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              n += this[t + o] * i;
            return n;
          }),
          (c.prototype.readUIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || R(t, e, this.length);
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
              n += this[t + --e] * i;
            return n;
          }),
          (c.prototype.readUInt8 = function (t, e) {
            return e || R(t, 1, this.length), this[t];
          }),
          (c.prototype.readUInt16LE = function (t, e) {
            return e || R(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (c.prototype.readUInt16BE = function (t, e) {
            return e || R(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (c.prototype.readUInt32LE = function (t, e) {
            return (
              e || R(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (c.prototype.readUInt32BE = function (t, e) {
            return (
              e || R(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (c.prototype.readIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || R(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              n += this[t + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
          }),
          (c.prototype.readIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || R(t, e, this.length);
            for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
              o += this[t + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
          }),
          (c.prototype.readInt8 = function (t, e) {
            return (
              e || R(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (c.prototype.readInt16LE = function (t, e) {
            e || R(t, 2, this.length);
            var r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (c.prototype.readInt16BE = function (t, e) {
            e || R(t, 2, this.length);
            var r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (c.prototype.readInt32LE = function (t, e) {
            return (
              e || R(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (c.prototype.readInt32BE = function (t, e) {
            return (
              e || R(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (c.prototype.readFloatLE = function (t, e) {
            return e || R(t, 4, this.length), i.read(this, t, !0, 23, 4);
          }),
          (c.prototype.readFloatBE = function (t, e) {
            return e || R(t, 4, this.length), i.read(this, t, !1, 23, 4);
          }),
          (c.prototype.readDoubleLE = function (t, e) {
            return e || R(t, 8, this.length), i.read(this, t, !0, 52, 8);
          }),
          (c.prototype.readDoubleBE = function (t, e) {
            return e || R(t, 8, this.length), i.read(this, t, !1, 52, 8);
          }),
          (c.prototype.writeUIntLE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
          (c.prototype.writeUIntBE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
          (c.prototype.writeUInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 1, 255, 0),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (c.prototype.writeUInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : I(this, t, e, !0),
              e + 2
            );
          }),
          (c.prototype.writeUInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : I(this, t, e, !1),
              e + 2
            );
          }),
          (c.prototype.writeUInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : T(this, t, e, !0),
              e + 4
            );
          }),
          (c.prototype.writeUInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : T(this, t, e, !1),
              e + 4
            );
          }),
          (c.prototype.writeIntLE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              B(this, t, e, r, i - 1, -i);
            }
            var o = 0,
              a = 1,
              s = 0;
            for (this[e] = 255 & t; ++o < r && (a *= 256); )
              t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                (this[e + o] = (((t / a) >> 0) - s) & 255);
            return e + r;
          }),
          (c.prototype.writeIntBE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              B(this, t, e, r, i - 1, -i);
            }
            var o = r - 1,
              a = 1,
              s = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
              t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                (this[e + o] = (((t / a) >> 0) - s) & 255);
            return e + r;
          }),
          (c.prototype.writeInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 1, 127, -128),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (c.prototype.writeInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : I(this, t, e, !0),
              e + 2
            );
          }),
          (c.prototype.writeInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : I(this, t, e, !1),
              e + 2
            );
          }),
          (c.prototype.writeInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 2147483647, -2147483648),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : T(this, t, e, !0),
              e + 4
            );
          }),
          (c.prototype.writeInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : T(this, t, e, !1),
              e + 4
            );
          }),
          (c.prototype.writeFloatLE = function (t, e, r) {
            return C(this, t, e, !0, r);
          }),
          (c.prototype.writeFloatBE = function (t, e, r) {
            return C(this, t, e, !1, r);
          }),
          (c.prototype.writeDoubleLE = function (t, e, r) {
            return z(this, t, e, !0, r);
          }),
          (c.prototype.writeDoubleBE = function (t, e, r) {
            return z(this, t, e, !1, r);
          }),
          (c.prototype.copy = function (t, e, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              t.length - e < n - r && (n = t.length - e + r);
            var i,
              o = n - r;
            if (this === t && r < e && e < n)
              for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) t[i + e] = this[i + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
            return o;
          }),
          (c.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((n = e), (e = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== n && "string" != typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !c.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= e) return this;
            var o;
            if (
              ((e >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (o = e; o < r; ++o) this[o] = t;
            else {
              var a = c.isBuffer(t) ? t : M(new c(t, n).toString()),
                s = a.length;
              for (o = 0; o < r - e; ++o) this[o + e] = a[o % s];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function N(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function M(t, e) {
          var r;
          e = e || 1 / 0;
          for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
            if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === n) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((e -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function F(t) {
          return n.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(D, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function H(t, e, r, n) {
          for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
            e[i + r] = t[i];
          return i;
        }
      }.call(this, r(134)));
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return u;
        });
        var n = r(5),
          i = r(39),
          o = r(53),
          a = r(119);
        function s(t) {
          switch (t) {
            case "040000":
              return "tree";
            case "100644":
            case "100755":
            case "120000":
              return "blob";
            case "160000":
              return "commit";
          }
          throw new n.a(`Unexpected GitTree entry mode: ${t}`);
        }
        function c(t) {
          return (
            !t.oid && t.sha && (t.oid = t.sha),
            (t.mode = (function (t) {
              if (
                ("number" == typeof t && (t = t.toString(8)), t.match(/^0?4.*/))
              )
                return "040000";
              if (t.match(/^1006.*/)) return "100644";
              if (t.match(/^1007.*/)) return "100755";
              if (t.match(/^120.*/)) return "120000";
              if (t.match(/^160.*/)) return "160000";
              throw new n.a(`Could not understand file mode: ${t}`);
            })(t.mode)),
            t.type || (t.type = s(t.mode)),
            t
          );
        }
        class u {
          constructor(e) {
            if (t.isBuffer(e))
              this._entries = (function (t) {
                const e = [];
                let r = 0;
                for (; r < t.length; ) {
                  const o = t.indexOf(32, r);
                  if (-1 === o)
                    throw new n.a(
                      `GitTree: Error parsing buffer at byte location ${r}: Could not find the next space character.`
                    );
                  const a = t.indexOf(0, r);
                  if (-1 === a)
                    throw new n.a(
                      `GitTree: Error parsing buffer at byte location ${r}: Could not find the next null character.`
                    );
                  let c = t.slice(r, o).toString("utf8");
                  "40000" === c && (c = "040000");
                  const u = s(c),
                    f = t.slice(o + 1, a).toString("utf8");
                  if (f.includes("\\") || f.includes("/")) throw new i.a(f);
                  const l = t.slice(a + 1, a + 21).toString("hex");
                  (r = a + 21), e.push({ mode: c, path: f, oid: l, type: u });
                }
                return e;
              })(e);
            else {
              if (!Array.isArray(e))
                throw new n.a("invalid type passed to GitTree constructor");
              this._entries = e.map(c);
            }
            this._entries.sort(o.a);
          }
          static from(t) {
            return new u(t);
          }
          render() {
            return this._entries
              .map((t) => `${t.mode} ${t.type} ${t.oid}    ${t.path}`)
              .join("\n");
          }
          toObject() {
            const e = [...this._entries];
            return (
              e.sort(a.a),
              t.concat(
                e.map((e) => {
                  const r = t.from(e.mode.replace(/^0/, "")),
                    n = t.from(" "),
                    i = t.from(e.path, "utf8"),
                    o = t.from([0]),
                    a = t.from(e.oid, "hex");
                  return t.concat([r, n, i, o, a]);
                })
              )
            );
          }
          entries() {
            return this._entries;
          }
          *[Symbol.iterator]() {
            for (const t of this._entries) yield t;
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return f;
        });
        var n = r(5),
          i = r(58),
          o = r(81),
          a = r(21),
          s = r(125),
          c = r(45);
        function u(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        class f {
          constructor(e) {
            if ("string" == typeof e) this._commit = e;
            else if (t.isBuffer(e)) this._commit = e.toString("utf8");
            else {
              if ("object" != typeof e)
                throw new n.a("invalid type passed to GitCommit constructor");
              this._commit = f.render(e);
            }
          }
          static fromPayloadSignature({ payload: t, signature: e }) {
            const r = f.justHeaders(t),
              n = f.justMessage(t),
              i = Object(a.a)(r + "\ngpgsig" + Object(o.a)(e) + "\n" + n);
            return new f(i);
          }
          static from(t) {
            return new f(t);
          }
          toObject() {
            return t.from(this._commit, "utf8");
          }
          headers() {
            return this.parseHeaders();
          }
          message() {
            return f.justMessage(this._commit);
          }
          parse() {
            return Object.assign({ message: this.message() }, this.headers());
          }
          static justMessage(t) {
            return Object(a.a)(t.slice(t.indexOf("\n\n") + 2));
          }
          static justHeaders(t) {
            return t.slice(0, t.indexOf("\n\n"));
          }
          parseHeaders() {
            const t = f.justHeaders(this._commit).split("\n"),
              e = [];
            for (const r of t)
              " " === r[0] ? (e[e.length - 1] += "\n" + r.slice(1)) : e.push(r);
            const r = { parent: [] };
            for (const t of e) {
              const e = t.slice(0, t.indexOf(" ")),
                n = t.slice(t.indexOf(" ") + 1);
              Array.isArray(r[e]) ? r[e].push(n) : (r[e] = n);
            }
            return (
              r.author && (r.author = Object(c.a)(r.author)),
              r.committer && (r.committer = Object(c.a)(r.committer)),
              r
            );
          }
          static renderHeaders(t) {
            let e = "";
            if (
              (t.tree
                ? (e += `tree ${t.tree}\n`)
                : (e += "tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904\n"),
              t.parent)
            ) {
              if (void 0 === t.parent.length)
                throw new n.a("commit 'parent' property should be an array");
              for (const r of t.parent) e += `parent ${r}\n`;
            }
            const r = t.author;
            e += `author ${Object(i.a)(r)}\n`;
            const a = t.committer || t.author;
            return (
              (e += `committer ${Object(i.a)(a)}\n`),
              t.gpgsig && (e += "gpgsig" + Object(o.a)(t.gpgsig)),
              e
            );
          }
          static render(t) {
            return f.renderHeaders(t) + "\n" + Object(a.a)(t.message);
          }
          render() {
            return this._commit;
          }
          withoutSignature() {
            const t = Object(a.a)(this._commit);
            if (-1 === t.indexOf("\ngpgsig")) return t;
            const e = t.slice(0, t.indexOf("\ngpgsig")),
              r = t.slice(
                t.indexOf("-----END PGP SIGNATURE-----\n") +
                  "-----END PGP SIGNATURE-----\n".length
              );
            return Object(a.a)(e + "\n" + r);
          }
          isolateSignature() {
            const t = this._commit.slice(
              this._commit.indexOf("-----BEGIN PGP SIGNATURE-----"),
              this._commit.indexOf("-----END PGP SIGNATURE-----") +
                "-----END PGP SIGNATURE-----".length
            );
            return Object(s.a)(t);
          }
          static sign(t, e, r) {
            return ((n = function* () {
              const n = t.withoutSignature(),
                i = f.justMessage(t._commit);
              let { signature: s } = yield e({ payload: n, secretKey: r });
              s = Object(a.a)(s);
              const c =
                f.justHeaders(t._commit) +
                "\ngpgsig" +
                Object(o.a)(s) +
                "\n" +
                i;
              return f.from(c);
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (r, i) {
                var o = n.apply(t, e);
                function a(t) {
                  u(o, r, i, a, s, "next", t);
                }
                function s(t) {
                  u(o, r, i, a, s, "throw", t);
                }
                a(void 0);
              });
            })();
            var n;
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(96);
      function i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function s(t) {
              i(a, n, o, s, c, "next", t);
            }
            function c(t) {
              i(a, n, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      class a {
        static get({ fs: t, gitdir: e }) {
          return o(function* () {
            const r = yield t.read(`${e}/config`, { encoding: "utf8" });
            return n.a.from(r);
          })();
        }
        static save({ fs: t, gitdir: e, config: r }) {
          return o(function* () {
            yield t.write(`${e}/config`, r.toString(), { encoding: "utf8" });
          })();
        }
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e, r, n) {
          super(
            `Object ${t} ${
              n ? `at ${n}` : ""
            }was anticipated to be a ${r} but it is a ${e}.`
          ),
            (this.code = this.name = i.code),
            (this.data = { oid: t, actual: e, expected: r, filepath: n });
        }
      }
      i.code = "ObjectTypeError";
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return c;
        });
        var n = r(5),
          i = r(58),
          o = r(21),
          a = r(45);
        function s(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        class c {
          constructor(e) {
            if ("string" == typeof e) this._tag = e;
            else if (t.isBuffer(e)) this._tag = e.toString("utf8");
            else {
              if ("object" != typeof e)
                throw new n.a(
                  "invalid type passed to GitAnnotatedTag constructor"
                );
              this._tag = c.render(e);
            }
          }
          static from(t) {
            return new c(t);
          }
          static render(t) {
            return `object ${t.object}\ntype ${t.type}\ntag ${
              t.tag
            }\ntagger ${Object(i.a)(t.tagger)}\n\n${t.message}\n${
              t.gpgsig ? t.gpgsig : ""
            }`;
          }
          justHeaders() {
            return this._tag.slice(0, this._tag.indexOf("\n\n"));
          }
          message() {
            const t = this.withoutSignature();
            return t.slice(t.indexOf("\n\n") + 2);
          }
          parse() {
            return Object.assign(this.headers(), {
              message: this.message(),
              gpgsig: this.gpgsig(),
            });
          }
          render() {
            return this._tag;
          }
          headers() {
            const t = this.justHeaders().split("\n"),
              e = [];
            for (const r of t)
              " " === r[0] ? (e[e.length - 1] += "\n" + r.slice(1)) : e.push(r);
            const r = {};
            for (const t of e) {
              const e = t.slice(0, t.indexOf(" ")),
                n = t.slice(t.indexOf(" ") + 1);
              Array.isArray(r[e]) ? r[e].push(n) : (r[e] = n);
            }
            return (
              r.tagger && (r.tagger = Object(a.a)(r.tagger)),
              r.committer && (r.committer = Object(a.a)(r.committer)),
              r
            );
          }
          withoutSignature() {
            const t = Object(o.a)(this._tag);
            return -1 === t.indexOf("\n-----BEGIN PGP SIGNATURE-----")
              ? t
              : t.slice(0, t.lastIndexOf("\n-----BEGIN PGP SIGNATURE-----"));
          }
          gpgsig() {
            if (-1 === this._tag.indexOf("\n-----BEGIN PGP SIGNATURE-----"))
              return;
            const t = this._tag.slice(
              this._tag.indexOf("-----BEGIN PGP SIGNATURE-----"),
              this._tag.indexOf("-----END PGP SIGNATURE-----") +
                "-----END PGP SIGNATURE-----".length
            );
            return Object(o.a)(t);
          }
          payload() {
            return this.withoutSignature() + "\n";
          }
          toObject() {
            return t.from(this._tag, "utf8");
          }
          static sign(t, e, r) {
            return ((n = function* () {
              const n = t.payload();
              let { signature: i } = yield e({ payload: n, secretKey: r });
              i = Object(o.a)(i);
              const a = n + i;
              return c.from(a);
            }),
            function () {
              var t = this,
                e = arguments;
              return new Promise(function (r, i) {
                var o = n.apply(t, e);
                function a(t) {
                  s(o, r, i, a, c, "next", t);
                }
                function c(t) {
                  s(o, r, i, a, c, "throw", t);
                }
                a(void 0);
              });
            })();
            var n;
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return u;
        });
        var n = r(23),
          i = r(127),
          o = r(77),
          a = r(17);
        function s(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function c(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                s(o, n, i, a, c, "next", t);
              }
              function c(t) {
                s(o, n, i, a, c, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function u(t) {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = c(function* ({
            fs: e,
            gitdir: r,
            type: s,
            object: c,
            format: u = "content",
            oid: f,
            dryRun: l = !1,
          }) {
            return (
              "deflated" !== u &&
                ("wrapped" !== u && (c = n.a.wrap({ type: s, object: c })),
                (f = yield Object(a.a)(c)),
                (c = t.from(yield Object(o.a)(c)))),
              l ||
                (yield Object(i.a)({
                  fs: e,
                  gitdir: r,
                  object: c,
                  format: "deflated",
                  oid: f,
                })),
              f
            );
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      var n = r(71),
        i = r.n(n);
      function o(t) {
        let e = "";
        for (const r of new Uint8Array(t))
          r < 16 && (e += "0"), (e += r.toString(16));
        return e;
      }
      function a(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function s(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function s(t) {
              a(o, n, i, s, c, "next", t);
            }
            function c(t) {
              a(o, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      r.d(e, "a", function () {
        return u;
      });
      let c = null;
      function u(t) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = s(function* (t) {
          return null === c && (c = yield p()), c ? d(t) : l(t);
        })).apply(this, arguments);
      }
      function l(t) {
        return new i.a().update(t).digest("hex");
      }
      function d(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = s(function* (t) {
          return o(yield crypto.subtle.digest("SHA-1", t));
        })).apply(this, arguments);
      }
      function p() {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = s(function* () {
          try {
            if (
              "da39a3ee5e6b4b0d3255bfef95601890afd80709" ===
              (yield d(new Uint8Array([])))
            )
              return !0;
          } catch (t) {}
          return !1;
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return h;
      });
      var n = r(57),
        i = r.n(n),
        o = r(94),
        a = r(61);
      function s(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function c(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              s(o, n, i, a, c, "next", t);
            }
            function c(t) {
              s(o, n, i, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      let u = null;
      const f = Symbol("IndexCache");
      function l() {
        return (l = c(function* (t, e, r) {
          const n = yield t.lstat(e),
            i = yield t.read(e),
            a = yield o.a.from(i);
          r.map.set(e, a), r.stats.set(e, n);
        })).apply(this, arguments);
      }
      function d() {
        return (d = c(function* (t, e, r) {
          const n = r.stats.get(e);
          if (void 0 === n) return !0;
          const i = yield t.lstat(e);
          return null !== n && null !== i && Object(a.a)(n, i);
        })).apply(this, arguments);
      }
      class h {
        static acquire({ fs: t, gitdir: e, cache: r }, n) {
          return c(function* () {
            r[f] || (r[f] = { map: new Map(), stats: new Map() });
            const o = `${e}/index`;
            let a;
            return (
              null === u && (u = new i.a({ maxPending: 1 / 0 })),
              yield u.acquire(
                o,
                c(function* () {
                  (yield (function (t, e, r) {
                    return d.apply(this, arguments);
                  })(t, o, r[f])) &&
                    (yield (function (t, e, r) {
                      return l.apply(this, arguments);
                    })(t, o, r[f]));
                  const e = r[f].map.get(o);
                  if (((a = yield n(e)), e._dirty)) {
                    const n = yield e.toObject();
                    yield t.write(o, n),
                      r[f].stats.set(o, yield t.lstat(o)),
                      (e._dirty = !1);
                  }
                })
              ),
              a
            );
          })();
        }
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      class n {
        constructor(t) {
          (this.buffer = t), (this._start = 0);
        }
        eof() {
          return this._start >= this.buffer.length;
        }
        tell() {
          return this._start;
        }
        seek(t) {
          this._start = t;
        }
        slice(t) {
          const e = this.buffer.slice(this._start, this._start + t);
          return (this._start += t), e;
        }
        toString(t, e) {
          const r = this.buffer.toString(t, this._start, this._start + e);
          return (this._start += e), r;
        }
        write(t, e, r) {
          const n = this.buffer.write(t, this._start, e, r);
          return (this._start += e), n;
        }
        copy(t, e, r) {
          const n = t.copy(this.buffer, this._start, e, r);
          return (this._start += n), n;
        }
        readUInt8() {
          const t = this.buffer.readUInt8(this._start);
          return (this._start += 1), t;
        }
        writeUInt8(t) {
          const e = this.buffer.writeUInt8(t, this._start);
          return (this._start += 1), e;
        }
        readUInt16BE() {
          const t = this.buffer.readUInt16BE(this._start);
          return (this._start += 2), t;
        }
        writeUInt16BE(t) {
          const e = this.buffer.writeUInt16BE(t, this._start);
          return (this._start += 2), e;
        }
        readUInt32BE() {
          const t = this.buffer.readUInt32BE(this._start);
          return (this._start += 4), t;
        }
        writeUInt32BE(t) {
          const e = this.buffer.writeUInt32BE(t, this._start);
          return (this._start += 4), e;
        }
      }
    },
    function (t, e, r) {
      "use strict";
      const n = (t, e) =>
        function (...r) {
          return new (0, e.promiseModule)((n, i) => {
            e.multiArgs
              ? r.push((...t) => {
                  e.errorFirst ? (t[0] ? i(t) : (t.shift(), n(t))) : n(t);
                })
              : e.errorFirst
              ? r.push((t, e) => {
                  t ? i(t) : n(e);
                })
              : r.push(n),
              t.apply(this, r);
          });
        };
      t.exports = (t, e) => {
        e = Object.assign(
          {
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise,
          },
          e
        );
        const r = typeof t;
        if (null === t || ("object" !== r && "function" !== r))
          throw new TypeError(
            `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
              null === t ? "null" : r
            }\``
          );
        const i = (t) => {
          const r = (e) => ("string" == typeof e ? t === e : e.test(t));
          return e.include ? e.include.some(r) : !e.exclude.some(r);
        };
        let o;
        o =
          "function" === r
            ? function (...r) {
                return e.excludeMain ? t(...r) : n(t, e).apply(this, r);
              }
            : Object.create(Object.getPrototypeOf(t));
        for (const r in t) {
          const a = t[r];
          o[r] = "function" == typeof a && i(r) ? n(a, e) : a;
        }
        return o;
      };
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return (t =
          (t = (t = t.replace(/\r/g, "")).replace(/^\n+/, "")).replace(
            /\n+$/,
            ""
          ) + "\n");
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(
            `No name was provided for ${t} in the argument or in the .git/config file.`
          ),
            (this.code = this.name = i.code),
            (this.data = { role: t });
        }
      }
      i.code = "MissingNameError";
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return i;
        });
        var n = r(5);
        class i {
          static wrap({ type: e, object: r }) {
            return t.concat([
              t.from(`${e} ${r.byteLength.toString()}\0`),
              t.from(r),
            ]);
          }
          static unwrap(e) {
            const r = e.indexOf(32),
              i = e.indexOf(0),
              o = e.slice(0, r).toString("utf8"),
              a = e.slice(r + 1, i).toString("utf8"),
              s = e.length - (i + 1);
            if (parseInt(a) !== s)
              throw new n.a(
                `Length mismatch: expected ${a} bytes but got ${s} instead.`
              );
            return { type: o, object: t.from(e.slice(i + 1)) };
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(
            `The function requires a "${t}" parameter but none was provided.`
          ),
            (this.code = this.name = i.code),
            (this.data = { parameter: t });
        }
      }
      i.code = "MissingParameterError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e, r = !0) {
          super(
            `Failed to create ${t} at ${e} because it already exists.${
              r
                ? ` (Hint: use 'force: true' parameter to overwrite existing ${t}.)`
                : ""
            }`
          ),
            (this.code = this.name = i.code),
            (this.data = { noun: t, where: e, canForce: r });
        }
      }
      i.code = "AlreadyExistsError";
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        const e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
        return -1 === e ? "." : 0 === e ? "/" : t.slice(0, e);
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      var n =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Int32Array;
      function i(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.assign = function (t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
          var r = e.shift();
          if (r) {
            if ("object" != typeof r)
              throw new TypeError(r + "must be non-object");
            for (var n in r) i(r, n) && (t[n] = r[n]);
          }
        }
        return t;
      }),
        (e.shrinkBuf = function (t, e) {
          return t.length === e
            ? t
            : t.subarray
            ? t.subarray(0, e)
            : ((t.length = e), t);
        });
      var o = {
          arraySet: function (t, e, r, n, i) {
            if (e.subarray && t.subarray) t.set(e.subarray(r, r + n), i);
            else for (var o = 0; o < n; o++) t[i + o] = e[r + o];
          },
          flattenChunks: function (t) {
            var e, r, n, i, o, a;
            for (n = 0, e = 0, r = t.length; e < r; e++) n += t[e].length;
            for (a = new Uint8Array(n), i = 0, e = 0, r = t.length; e < r; e++)
              (o = t[e]), a.set(o, i), (i += o.length);
            return a;
          },
        },
        a = {
          arraySet: function (t, e, r, n, i) {
            for (var o = 0; o < n; o++) t[i + o] = e[r + o];
          },
          flattenChunks: function (t) {
            return [].concat.apply([], t);
          },
        };
      (e.setTyped = function (t) {
        t
          ? ((e.Buf8 = Uint8Array),
            (e.Buf16 = Uint16Array),
            (e.Buf32 = Int32Array),
            e.assign(e, o))
          : ((e.Buf8 = Array),
            (e.Buf16 = Array),
            (e.Buf32 = Array),
            e.assign(e, a));
      }),
        e.setTyped(n);
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(`Expected a 40-char hex object id but saw "${t}".`),
            (this.code = this.name = i.code),
            (this.data = { value: t });
        }
      }
      i.code = "InvalidOidError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return o;
      });
      var n = r(72);
      function i(t, e, r, n) {
        if (void 0 !== t && void 0 !== e) return [t, e];
        void 0 === r && (r = n.valueOf());
        const i = Math.floor(r / 1e3);
        return [i, 1e6 * (r - 1e3 * i)];
      }
      function o(t) {
        const [e, r] = i(
            t.ctimeSeconds,
            t.ctimeNanoseconds,
            t.ctimeMs,
            t.ctime
          ),
          [o, a] = i(t.mtimeSeconds, t.mtimeNanoseconds, t.mtimeMs, t.mtime);
        return {
          ctimeSeconds: e % 2 ** 32,
          ctimeNanoseconds: r % 2 ** 32,
          mtimeSeconds: o % 2 ** 32,
          mtimeNanoseconds: a % 2 ** 32,
          dev: t.dev % 2 ** 32,
          ino: t.ino % 2 ** 32,
          mode: Object(n.a)(t.mode % 2 ** 32),
          uid: t.uid % 2 ** 32,
          gid: t.gid % 2 ** 32,
          size: t.size > -1 ? t.size % 2 ** 32 : 0,
        };
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e) {
          super(`Expected "${t}" but received "${e}".`),
            (this.code = this.name = i.code),
            (this.data = { expected: t, actual: e });
        }
      }
      i.code = "ParseError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      const n = Symbol("GitWalkSymbol");
    },
    function (t, e, r) {
      "use strict";
      function n(t, e) {
        return -(t < e) || +(t > e);
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(80);
      function i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function s(t) {
              i(a, n, o, s, c, "next", t);
            }
            function c(t) {
              i(a, n, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function a(t, e) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = o(function* (t, e) {
          const r = Object(n.a)(t);
          for (;;) {
            const { value: t, done: n } = yield r.next();
            if ((t && (yield e(t)), n)) break;
          }
          r.return && r.return();
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        const e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
        return e > -1 && (t = t.slice(e + 1)), t;
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      var n = r(9),
        i = r(14),
        o = r(4),
        a = r(11),
        s = r(7),
        c = r(1),
        u = r(72),
        f = r(40);
      function l(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function d(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              l(o, n, i, a, s, "next", t);
            }
            function s(t) {
              l(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      class h {
        constructor({ fs: t, gitdir: e, ref: r, cache: i }) {
          var a = this;
          (this.fs = t),
            (this.cache = i),
            (this.gitdir = e),
            (this.mapPromise = d(function* () {
              const i = new Map();
              let s;
              try {
                s = yield o.a.resolve({ fs: t, gitdir: e, ref: r });
              } catch (t) {
                t instanceof n.a &&
                  (s = "4b825dc642cb6eb9a060e54bf8d69288fbee4904");
              }
              const c = yield Object(f.a)({
                fs: t,
                cache: a.cache,
                gitdir: e,
                oid: s,
              });
              return (c.type = "tree"), (c.mode = "40000"), i.set(".", c), i;
            })());
          const s = this;
          this.ConstructEntry = class {
            constructor(t) {
              (this._fullpath = t),
                (this._type = !1),
                (this._mode = !1),
                (this._stat = !1),
                (this._content = !1),
                (this._oid = !1);
            }
            type() {
              var t = this;
              return d(function* () {
                return s.type(t);
              })();
            }
            mode() {
              var t = this;
              return d(function* () {
                return s.mode(t);
              })();
            }
            stat() {
              var t = this;
              return d(function* () {
                return s.stat(t);
              })();
            }
            content() {
              var t = this;
              return d(function* () {
                return s.content(t);
              })();
            }
            oid() {
              var t = this;
              return d(function* () {
                return s.oid(t);
              })();
            }
          };
        }
        readdir(t) {
          var e = this;
          return d(function* () {
            const r = t._fullpath,
              { fs: n, cache: o, gitdir: u } = e,
              f = yield e.mapPromise,
              l = f.get(r);
            if (!l) throw new Error(`No obj for ${r}`);
            const d = l.oid;
            if (!d) throw new Error(`No oid for obj ${JSON.stringify(l)}`);
            if ("tree" !== l.type) return null;
            const { type: h, object: p } = yield Object(s.a)({
              fs: n,
              cache: o,
              gitdir: u,
              oid: d,
            });
            if (h !== l.type) throw new i.a(d, h, l.type);
            const y = a.a.from(p);
            for (const t of y) f.set(Object(c.a)(r, t.path), t);
            return y.entries().map((t) => Object(c.a)(r, t.path));
          })();
        }
        type(t) {
          var e = this;
          return d(function* () {
            if (!1 === t._type) {
              const r = yield e.mapPromise,
                { type: n } = r.get(t._fullpath);
              t._type = n;
            }
            return t._type;
          })();
        }
        mode(t) {
          var e = this;
          return d(function* () {
            if (!1 === t._mode) {
              const r = yield e.mapPromise,
                { mode: n } = r.get(t._fullpath);
              t._mode = Object(u.a)(parseInt(n, 8));
            }
            return t._mode;
          })();
        }
        stat(t) {
          return d(function* () {})();
        }
        content(t) {
          var e = this;
          return d(function* () {
            if (!1 === t._content) {
              const r = yield e.mapPromise,
                { fs: n, cache: i, gitdir: o } = e,
                a = r.get(t._fullpath).oid,
                { type: c, object: u } = yield Object(s.a)({
                  fs: n,
                  cache: i,
                  gitdir: o,
                  oid: a,
                });
              t._content = "blob" !== c ? void 0 : new Uint8Array(u);
            }
            return t._content;
          })();
        }
        oid(t) {
          var e = this;
          return d(function* () {
            if (!1 === t._oid) {
              const r = (yield e.mapPromise).get(t._fullpath);
              t._oid = r.oid;
            }
            return t._oid;
          })();
        }
      }
      var p = r(31);
      function y({ ref: t = "HEAD" } = {}) {
        const e = Object.create(null);
        return (
          Object.defineProperty(e, p.a, {
            value: function ({ fs: e, gitdir: r, cache: n }) {
              return new h({ fs: e, gitdir: r, ref: t, cache: n });
            },
          }),
          Object.freeze(e),
          e
        );
      }
      r.d(e, "a", function () {
        return y;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e) {
          super(
            `"${t}" would be an invalid git reference. (Hint: a valid alternative would be "${e}".)`
          ),
            (this.code = this.name = i.code),
            (this.data = { ref: t, suggestion: e });
        }
      }
      i.code = "InvalidRefNameError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return u;
      });
      var n = r(57),
        i = r.n(n),
        o = r(1);
      function a(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function s(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function s(t) {
              a(o, n, i, s, c, "next", t);
            }
            function c(t) {
              a(o, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      let c = null;
      class u {
        static read({ fs: t, gitdir: e }) {
          return s(function* () {
            null === c && (c = new i.a());
            const r = Object(o.a)(e, "shallow"),
              n = new Set();
            return (
              yield c.acquire(
                r,
                s(function* () {
                  const e = yield t.read(r, { encoding: "utf8" });
                  return null === e
                    ? n
                    : "" === e.trim()
                    ? n
                    : void e
                        .trim()
                        .split("\n")
                        .map((t) => n.add(t));
                })
              ),
              n
            );
          })();
        }
        static write({ fs: t, gitdir: e, oids: r }) {
          return s(function* () {
            null === c && (c = new i.a());
            const n = Object(o.a)(e, "shallow");
            if (r.size > 0) {
              const e = [...r].join("\n") + "\n";
              yield c.acquire(
                n,
                s(function* () {
                  yield t.write(n, e, { encoding: "utf8" });
                })
              );
            } else
              yield c.acquire(
                n,
                s(function* () {
                  yield t.rm(n);
                })
              );
          })();
        }
      }
    },
    function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        return (
          (e =
            e instanceof RegExp
              ? e
              : new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")),
          t.replace(e, r)
        );
      }
      var i = {
        clean: function (t) {
          if ("string" != typeof t)
            throw new Error("Expected a string, received: " + t);
          return (
            (t = n(t, "./", "/")),
            (t = n(t, "..", ".")),
            (t = n(t, " ", "-")),
            (t = n(t, /^[~^:?*\\\-]/g, "")),
            (t = n(t, /[~^:?*\\]/g, "-")),
            (t = n(t, /[~^:?*\\\-]$/g, "")),
            (t = n(t, "@{", "-")),
            (t = n(t, /\.$/g, "")),
            (t = n(t, /\/$/g, "")),
            (t = n(t, /\.lock$/g, ""))
          );
        },
      };
      t.exports = i;
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(`The filepath "${t}" contains unsafe character sequences`),
            (this.code = this.name = i.code),
            (this.data = { filepath: t });
        }
      }
      i.code = "UnsafeFilepathError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return f;
      });
      var n = r(14),
        i = r(15),
        o = r(12),
        a = r(11),
        s = r(7);
      function c(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function u(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              c(o, n, i, a, s, "next", t);
            }
            function s(t) {
              c(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function f(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = u(function* ({ fs: t, cache: e, gitdir: r, oid: c }) {
          if ("4b825dc642cb6eb9a060e54bf8d69288fbee4904" === c)
            return { tree: a.a.from([]), oid: c };
          const { type: u, object: l } = yield Object(s.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: c,
          });
          if ("tag" === u)
            return f({
              fs: t,
              cache: e,
              gitdir: r,
              oid: (c = i.a.from(l).parse().object),
            });
          if ("commit" === u)
            return f({
              fs: t,
              cache: e,
              gitdir: r,
              oid: (c = o.a.from(l).parse().tree),
            });
          if ("tree" !== u) throw new n.a(c, u, "tree");
          return { tree: a.a.from(l), oid: c };
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      const n = {
        name: "isomorphic-git",
        version: "1.21.0",
        agent: "git/isomorphic-git@1.21.0",
      };
    },
    function (t, e, r) {
      "use strict";
      var n = {};
      (0, r(27).assign)(n, r(140), r(143), r(112)), (t.exports = n);
    },
    function (t, e, r) {
      "use strict";
      function n(t, e) {
        const r = e.toString(16);
        return "0".repeat(t - r.length) + r;
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      function n(t, e) {
        const r = e - t;
        return Array.from({ length: r }, (e, r) => t + r);
      }
      var i = r(100),
        o = r(31);
      class a {
        constructor() {
          this.value = null;
        }
        consider(t) {
          null != t &&
            (null === this.value
              ? (this.value = t)
              : t < this.value && (this.value = t));
        }
        reset() {
          this.value = null;
        }
      }
      function* s(t) {
        const e = new a();
        let r;
        const n = [],
          i = t.length;
        for (let r = 0; r < i; r++)
          (n[r] = t[r].next().value), void 0 !== n[r] && e.consider(n[r]);
        if (null !== e.value)
          for (;;) {
            const o = [];
            (r = e.value), e.reset();
            for (let a = 0; a < i; a++)
              void 0 !== n[a] && n[a] === r
                ? ((o[a] = n[a]), (n[a] = t[a].next().value))
                : (o[a] = null),
                void 0 !== n[a] && e.consider(n[a]);
            if ((yield o, null === e.value)) return;
          }
      }
      function c(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function u(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              c(o, n, i, a, s, "next", t);
            }
            function s(t) {
              c(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function f(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = u(function* ({
          fs: t,
          cache: e,
          dir: r,
          gitdir: a,
          trees: c,
          map: f = (function () {
            var t = u(function* (t, e) {
              return e;
            });
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })(),
          reduce: l = (function () {
            var t = u(function* (t, e) {
              const r = Object(i.a)(e);
              return void 0 !== t && r.unshift(t), r;
            });
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })(),
          iterate: d = (t, e) => Promise.all([...e].map(t)),
        }) {
          const h = c.map((n) =>
              n[o.a]({ fs: t, dir: r, gitdir: a, cache: e })
            ),
            p = new Array(h.length).fill("."),
            y = n(0, h.length),
            g = (function () {
              var t = u(function* (t) {
                y.map((e) => {
                  t[e] = t[e] && new h[e].ConstructEntry(t[e]);
                });
                const e = (yield Promise.all(
                  y.map((e) => (t[e] ? h[e].readdir(t[e]) : []))
                ))
                  .map((t) => (null === t ? [] : t))
                  .map((t) => t[Symbol.iterator]());
                return { entries: t, children: s(e) };
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            v = (function () {
              var t = u(function* (t) {
                const { entries: e, children: r } = yield g(t),
                  n = e.find((t) => t && t._fullpath)._fullpath,
                  i = yield f(n, e);
                if (null !== i) {
                  let t = yield d(v, r);
                  return (t = t.filter((t) => void 0 !== t)), l(i, t);
                }
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return v(p);
        })).apply(this, arguments);
      }
      r.d(e, "a", function () {
        return f;
      });
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        const [, e, r, n, o] = t.match(/^(.*) <(.*)> (.*) (.*)$/);
        return {
          name: e,
          email: r,
          timestamp: Number(n),
          timezoneOffset: i(o),
        };
      }
      function i(t) {
        let [, e, r, n] = t.match(/(\+|-)(\d\d)(\d\d)/);
        return (
          (n = ("+" === e ? 1 : -1) * (60 * Number(r) + Number(n))),
          0 === (i = n) ? i : -i
        );
        var i;
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(33);
      function i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function s(t) {
              i(a, n, o, s, c, "next", t);
            }
            function c(t) {
              i(a, n, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function a(t) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = o(function* (t) {
          let e = 0;
          const r = [];
          yield Object(n.a)(t, (t) => {
            r.push(t), (e += t.byteLength);
          });
          const i = new Uint8Array(e);
          let o = 0;
          for (const t of r) i.set(t, o), (o += t.byteLength);
          return i;
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var n = r(62),
        i = r(40);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function s(t) {
              o(a, n, i, s, c, "next", t);
            }
            function c(t) {
              o(a, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function s(t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = a(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: o,
          filepath: a,
        }) {
          void 0 !== a &&
            (o = yield Object(n.a)({
              fs: t,
              cache: e,
              gitdir: r,
              oid: o,
              filepath: a,
            }));
          const { tree: s, oid: c } = yield Object(i.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: o,
          });
          return { oid: c, tree: s.entries() };
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var n = r(4),
        i = r(82);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function s(t) {
              o(a, n, i, s, c, "next", t);
            }
            function c(t) {
              o(a, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function s(t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = a(function* ({
          fs: t,
          gitdir: e,
          fullname: r = !1,
          test: o = !1,
        }) {
          const a = yield n.a.resolve({
            fs: t,
            gitdir: e,
            ref: "HEAD",
            depth: 2,
          });
          if (o)
            try {
              yield n.a.resolve({ fs: t, gitdir: e, ref: a });
            } catch (t) {
              return;
            }
          if (a.startsWith("refs/")) return r ? a : Object(i.a)(a);
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return m;
        });
        var n = r(51),
          i = r(66),
          o = r(69),
          a = r(78),
          s = r(46),
          c = r(103),
          u = r(79);
        function f(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(r), !0).forEach(function (e) {
                  d(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function d(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function h(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function p(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                h(o, n, i, a, s, "next", t);
              }
              function s(t) {
                h(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        const y = (t, e) =>
            t.endsWith("?")
              ? `${t}${e}`
              : `${t}/${e.replace(/^https?:\/\//, "")}`,
          g = (t, e) => {
            (e.username || e.password) && (t.Authorization = Object(a.a)(e)),
              e.headers && Object.assign(t, e.headers);
          },
          v = (function () {
            var e = p(function* (e) {
              try {
                const r = t.from(yield Object(s.a)(e.body)),
                  n = r.toString("utf8");
                return {
                  preview: n.length < 256 ? n : n.slice(0, 256) + "...",
                  response: n,
                  data: r,
                };
              } catch (t) {
                return {};
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        class m {
          static capabilities() {
            return p(function* () {
              return ["discover", "connect"];
            })();
          }
          static discover({
            http: t,
            onProgress: e,
            onAuth: r,
            onAuthSuccess: s,
            onAuthFailure: f,
            corsProxy: d,
            service: h,
            url: m,
            headers: w,
            protocolVersion: b,
          }) {
            return p(function* () {
              let { url: p, auth: _ } = Object(c.a)(m);
              const O = d ? y(d, p) : p;
              let j, x;
              (_.username || _.password) && (w.Authorization = Object(a.a)(_)),
                2 === b && (w["Git-Protocol"] = "version=2");
              let P = !1;
              do {
                if (
                  ((j = yield t.request({
                    onProgress: e,
                    method: "GET",
                    url: `${O}/info/refs?service=${h}`,
                    headers: w,
                  })),
                  (x = !1),
                  401 === j.statusCode || 203 === j.statusCode)
                ) {
                  const t = P ? f : r;
                  if (t) {
                    if (
                      ((_ = yield t(p, l({}, _, { headers: l({}, w) }))),
                      _ && _.cancel)
                    )
                      throw new o.a();
                    _ && (g(w, _), (P = !0), (x = !0));
                  }
                } else 200 === j.statusCode && P && s && (yield s(p, _));
              } while (x);
              if (200 !== j.statusCode) {
                const { response: t } = yield v(j);
                throw new n.a(j.statusCode, j.statusMessage, t);
              }
              if (
                j.headers["content-type"] === `application/x-${h}-advertisement`
              ) {
                const t = yield Object(u.a)(j.body, { service: h });
                return (t.auth = _), t;
              }
              {
                const { preview: t, response: e, data: r } = yield v(j);
                try {
                  const t = yield Object(u.a)([r], { service: h });
                  return (t.auth = _), t;
                } catch (r) {
                  throw new i.a(t, e);
                }
              }
            })();
          }
          static connect({
            http: t,
            onProgress: e,
            corsProxy: r,
            service: i,
            url: o,
            auth: a,
            body: s,
            headers: u,
          }) {
            return p(function* () {
              const f = Object(c.a)(o);
              f && (o = f.url),
                r && (o = y(r, o)),
                (u["content-type"] = `application/x-${i}-request`),
                (u.accept = `application/x-${i}-result`),
                g(u, a);
              const l = yield t.request({
                onProgress: e,
                method: "POST",
                url: `${o}/${i}`,
                body: s,
                headers: u,
              });
              if (200 !== l.statusCode) {
                const { response: t } = v(l);
                throw new n.a(l.statusCode, l.statusMessage, t);
              }
              return l;
            })();
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor() {
          super("Merges with conflicts are not supported yet."),
            (this.code = this.name = i.code),
            (this.data = {});
        }
      }
      i.code = "MergeNotSupportedError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e, r) {
          super(`HTTP Error: ${t} ${e}`),
            (this.code = this.name = i.code),
            (this.data = { statusCode: t, statusMessage: e, response: r });
        }
      }
      i.code = "HttpError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          let e = "invalid filepath";
          "leading-slash" === t || "trailing-slash" === t
            ? (e =
                '"filepath" parameter should not include leading or trailing directory separators because these can cause problems on some platforms.')
            : "directory" === t &&
              (e = '"filepath" should not be a directory.'),
            super(e),
            (this.code = this.name = i.code),
            (this.data = { reason: t });
        }
      }
      i.code = "InvalidFilepathError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(32);
      function i(t, e) {
        return Object(n.a)(t.path, e.path);
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return p;
        });
        var n = r(122),
          i = r.n(n),
          o = r(5),
          a = r(23),
          s = r(19),
          c = r(124),
          u = r(123),
          f = r(76),
          l = r(17);
        function d(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function h(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                d(o, n, i, a, s, "next", t);
              }
              function s(t) {
                d(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        class p {
          constructor(t) {
            Object.assign(this, t), (this.offsetCache = {});
          }
          static fromIdx({ idx: t, getExternalRefDelta: e }) {
            return h(function* () {
              const r = new s.a(t);
              if ("ff744f63" !== r.slice(4).toString("hex")) return;
              const n = r.readUInt32BE();
              if (2 !== n)
                throw new o.a(
                  `Unable to read version ${n} packfile IDX. (Only version 2 supported)`
                );
              if (t.byteLength > 2147483648)
                throw new o.a(
                  "To keep implementation simple, I haven't implemented the layer 5 feature needed to support packfiles > 2GB in size."
                );
              r.seek(r.tell() + 1020);
              const i = r.readUInt32BE(),
                a = [];
              for (let t = 0; t < i; t++) {
                const e = r.slice(20).toString("hex");
                a[t] = e;
              }
              r.seek(r.tell() + 4 * i);
              const c = new Map();
              for (let t = 0; t < i; t++) c.set(a[t], r.readUInt32BE());
              const u = r.slice(20).toString("hex");
              return new p({
                hashes: a,
                crcs: {},
                offsets: c,
                packfileSha: u,
                getExternalRefDelta: e,
              });
            })();
          }
          static fromPack({ pack: t, getExternalRefDelta: e, onProgress: r }) {
            return h(function* () {
              const n = {
                  1: "commit",
                  2: "tree",
                  3: "blob",
                  4: "tag",
                  6: "ofs-delta",
                  7: "ref-delta",
                },
                o = {},
                s = t.slice(-20).toString("hex"),
                c = [],
                f = {},
                d = new Map();
              let y = null,
                g = null;
              yield Object(u.a)(
                [t],
                (function () {
                  var t = h(function* ({
                    data: t,
                    type: e,
                    reference: i,
                    offset: a,
                    num: s,
                  }) {
                    null === y && (y = s);
                    const c = Math.floor((100 * (y - s)) / y);
                    c !== g &&
                      r &&
                      (yield r({
                        phase: "Receiving objects",
                        loaded: y - s,
                        total: y,
                      })),
                      (g = c),
                      ["commit", "tree", "blob", "tag"].includes((e = n[e]))
                        ? (o[a] = { type: e, offset: a })
                        : "ofs-delta" === e
                        ? (o[a] = { type: e, offset: a })
                        : "ref-delta" === e && (o[a] = { type: e, offset: a });
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              );
              const v = Object.keys(o).map(Number);
              for (const [e, r] of v.entries()) {
                const n = e + 1 === v.length ? t.byteLength - 20 : v[e + 1],
                  a = o[r],
                  s = i.a.buf(t.slice(r, n)) >>> 0;
                (a.end = n), (a.crc = s);
              }
              const m = new p({
                pack: Promise.resolve(t),
                packfileSha: s,
                crcs: f,
                hashes: c,
                offsets: d,
                getExternalRefDelta: e,
              });
              g = null;
              let w = 0;
              const b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (let t in o) {
                t = Number(t);
                const e = Math.floor((100 * w) / y);
                e !== g &&
                  r &&
                  (yield r({ phase: "Resolving deltas", loaded: w, total: y })),
                  w++,
                  (g = e);
                const n = o[t];
                if (!n.oid)
                  try {
                    (m.readDepth = 0), (m.externalReadDepth = 0);
                    const { type: e, object: r } = yield m.readSlice({
                      start: t,
                    });
                    b[m.readDepth] += 1;
                    const i = yield Object(l.a)(
                      a.a.wrap({ type: e, object: r })
                    );
                    (n.oid = i), c.push(i), d.set(i, t), (f[i] = n.crc);
                  } catch (t) {
                    continue;
                  }
              }
              return c.sort(), m;
            })();
          }
          toBuffer() {
            var e = this;
            return h(function* () {
              const r = [],
                n = (e, n) => {
                  r.push(t.from(e, n));
                };
              n("ff744f63", "hex"), n("00000002", "hex");
              const i = new s.a(t.alloc(1024));
              for (let t = 0; t < 256; t++) {
                let r = 0;
                for (const n of e.hashes)
                  parseInt(n.slice(0, 2), 16) <= t && r++;
                i.writeUInt32BE(r);
              }
              r.push(i.buffer);
              for (const t of e.hashes) n(t, "hex");
              const o = new s.a(t.alloc(4 * e.hashes.length));
              for (const t of e.hashes) o.writeUInt32BE(e.crcs[t]);
              r.push(o.buffer);
              const a = new s.a(t.alloc(4 * e.hashes.length));
              for (const t of e.hashes) a.writeUInt32BE(e.offsets.get(t));
              r.push(a.buffer), n(e.packfileSha, "hex");
              const c = t.concat(r),
                u = yield Object(l.a)(c),
                f = t.alloc(20);
              return f.write(u, "hex"), t.concat([c, f]);
            })();
          }
          load({ pack: t }) {
            var e = this;
            return h(function* () {
              e.pack = t;
            })();
          }
          unload() {
            var t = this;
            return h(function* () {
              t.pack = null;
            })();
          }
          read({ oid: t }) {
            var e = this;
            return h(function* () {
              if (!e.offsets.get(t)) {
                if (e.getExternalRefDelta)
                  return e.externalReadDepth++, e.getExternalRefDelta(t);
                throw new o.a(`Could not read object ${t} from packfile`);
              }
              const r = e.offsets.get(t);
              return e.readSlice({ start: r });
            })();
          }
          readSlice({ start: e }) {
            var r = this;
            return h(function* () {
              if (r.offsetCache[e]) return Object.assign({}, r.offsetCache[e]);
              r.readDepth++;
              if (!r.pack)
                throw new o.a(
                  "Tried to read from a GitPackIndex with no packfile loaded into memory"
                );
              const n = (yield r.pack).slice(e),
                i = new s.a(n),
                a = i.readUInt8(),
                u = 112 & a;
              let l = {
                16: "commit",
                32: "tree",
                48: "blob",
                64: "tag",
                96: "ofs_delta",
                112: "ref_delta",
              }[u];
              if (void 0 === l)
                throw new o.a("Unrecognized type: 0b" + u.toString(2));
              const d = 15 & a;
              let h = d;
              128 & a &&
                (h = (function (t, e) {
                  let r = e,
                    n = 4,
                    i = null;
                  do {
                    (i = t.readUInt8()), (r |= (127 & i) << n), (n += 7);
                  } while (128 & i);
                  return r;
                })(i, d));
              let p = null,
                y = null;
              if ("ofs_delta" === l) {
                const t = (function (t) {
                    const e = [];
                    let r = 0,
                      n = 0;
                    do {
                      r = t.readUInt8();
                      const i = 127 & r;
                      e.push(i), (n = 128 & r);
                    } while (n);
                    return e.reduce((t, e) => ((t + 1) << 7) | e, -1);
                  })(i),
                  n = e - t;
                ({ object: p, type: l } = yield r.readSlice({ start: n }));
              }
              if ("ref_delta" === l) {
                const t = i.slice(20).toString("hex");
                ({ object: p, type: l } = yield r.read({ oid: t }));
              }
              const g = n.slice(i.tell());
              if (((y = t.from(yield Object(f.a)(g))), y.byteLength !== h))
                throw new o.a(
                  `Packfile told us object would have length ${h} but it had length ${y.byteLength}`
                );
              return (
                p && (y = t.from(Object(c.a)(y, p))),
                r.readDepth > 3 && (r.offsetCache[e] = { type: l, object: y }),
                { type: l, format: "content", object: y }
              );
            })();
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return u;
      });
      var n = r(126),
        i = r.n(n),
        o = r(34),
        a = r(26),
        s = r(1);
      function c(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      class u {
        static isIgnored({
          fs: t,
          dir: e,
          gitdir: r = Object(s.a)(e, ".git"),
          filepath: n,
        }) {
          return ((u = function* () {
            if (".git" === Object(o.a)(n)) return !0;
            if ("." === n) return !1;
            let c = "";
            const u = Object(s.a)(r, "info", "exclude");
            (yield t.exists(u)) && (c = yield t.read(u, "utf8"));
            const f = [
                { gitignore: Object(s.a)(e, ".gitignore"), filepath: n },
              ],
              l = n.split("/").filter(Boolean);
            for (let t = 1; t < l.length; t++) {
              const r = l.slice(0, t).join("/"),
                n = l.slice(t).join("/");
              f.push({
                gitignore: Object(s.a)(e, r, ".gitignore"),
                filepath: n,
              });
            }
            let d = !1;
            for (const e of f) {
              let r;
              try {
                r = yield t.read(e.gitignore, "utf8");
              } catch (t) {
                if ("NOENT" === t.code) continue;
              }
              const n = i()().add(c);
              n.add(r);
              const o = Object(a.a)(e.filepath);
              if ("." !== o && n.ignores(o)) return !0;
              d = d
                ? !n.test(e.filepath).unignored
                : n.test(e.filepath).ignored;
            }
            return d;
          }),
          function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, n) {
              var i = u.apply(t, e);
              function o(t) {
                c(i, r, n, o, a, "next", t);
              }
              function a(t) {
                c(i, r, n, o, a, "throw", t);
              }
              o(void 0);
            });
          })();
          var u;
        }
      }
    },
    function (t, e, r) {
      "use strict";
      var n = r(67),
        i = r(68);
      var o = r(49);
      r.d(e, "a", function () {
        return a;
      });
      class a {
        static getRemoteHelperFor({ url: t }) {
          const e = new Map();
          e.set("http", o.a), e.set("https", o.a);
          const r = (function ({ url: t }) {
            if (t.startsWith("git@")) return { transport: "ssh", address: t };
            const e = t.match(/(\w+)(:\/\/|::)(.*)/);
            return null !== e
              ? "://" === e[2]
                ? { transport: e[1], address: e[0] }
                : "::" === e[2]
                ? { transport: e[1], address: e[3] }
                : void 0
              : void 0;
          })({ url: t });
          if (!r) throw new i.a(t);
          if (e.has(r.transport)) return e.get(r.transport);
          throw new n.a(
            t,
            r.transport,
            "ssh" === r.transport
              ? (function (t) {
                  return (t = (t = t.replace(
                    /^git@([^:]+):/,
                    "https://$1/"
                  )).replace(/^ssh:\/\//, "https://"));
                })(t)
              : void 0
          );
        }
      }
    },
    function (t, e, r) {
      "use strict";
      t.exports = r(133);
    },
    function (t, e, r) {
      "use strict";
      function n({ name: t, email: e, timestamp: r, timezoneOffset: n }) {
        return `${t} <${e}> ${r} ${(n = (function (t) {
          const e = (function (t) {
            return Math.sign(t) || (Object.is(t, -0) ? -1 : 1);
          })(((r = t), 0 === r ? r : -r));
          var r;
          t = Math.abs(t);
          const n = Math.floor(t / 60);
          t -= 60 * n;
          let i = String(n),
            o = String(t);
          i.length < 2 && (i = "0" + i);
          o.length < 2 && (o = "0" + o);
          return (-1 === e ? "-" : "+") + i + o;
        })(n))}`;
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      function n(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      r.d(e, "a", function () {
        return i;
      });
      class i {
        constructor() {
          this._queue = [];
        }
        write(t) {
          if (this._ended)
            throw Error(
              "You cannot write to a FIFO that has already been ended!"
            );
          if (this._waiting) {
            const e = this._waiting;
            (this._waiting = null), e({ value: t });
          } else this._queue.push(t);
        }
        end() {
          if (((this._ended = !0), this._waiting)) {
            const t = this._waiting;
            (this._waiting = null), t({ done: !0 });
          }
        }
        destroy(t) {
          (this._ended = !0), (this.error = t);
        }
        next() {
          var t,
            e = this;
          return ((t = function* () {
            if (e._queue.length > 0) return { value: e._queue.shift() };
            if (e._ended) return { done: !0 };
            if (e._waiting)
              throw Error(
                "You cannot call read until the previous call to read has returned!"
              );
            return new Promise((t) => {
              e._waiting = t;
            });
          }),
          function () {
            var e = this,
              r = arguments;
            return new Promise(function (i, o) {
              var a = t.apply(e, r);
              function s(t) {
                n(a, i, o, s, c, "next", t);
              }
              function c(t) {
                n(a, i, o, s, c, "throw", t);
              }
              s(void 0);
            });
          })();
        }
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e) {
          super(
            `Remote does not support the "${t}" so the "${e}" parameter cannot be used.`
          ),
            (this.code = this.name = i.code),
            (this.data = { capability: t, parameter: e });
        }
      }
      i.code = "RemoteCapabilityError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(29);
      function i(t, e) {
        const r = Object(n.a)(t),
          i = Object(n.a)(e);
        return (
          r.mode !== i.mode ||
          r.mtimeSeconds !== i.mtimeSeconds ||
          r.ctimeSeconds !== i.ctimeSeconds ||
          r.uid !== i.uid ||
          r.gid !== i.gid ||
          r.ino !== i.ino ||
          r.size !== i.size
        );
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return l;
      });
      var n = r(52),
        i = r(9),
        o = r(14),
        a = r(11),
        s = r(7),
        c = r(40);
      function u(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function f(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              u(o, n, i, a, s, "next", t);
            }
            function s(t) {
              u(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function l(t) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = f(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: i,
          filepath: o,
        }) {
          if (o.startsWith("/")) throw new n.a("leading-slash");
          if (o.endsWith("/")) throw new n.a("trailing-slash");
          const a = i,
            s = yield Object(c.a)({ fs: t, cache: e, gitdir: r, oid: i }),
            u = s.tree;
          if ("" === o) i = s.oid;
          else {
            const n = o.split("/");
            i = yield h({
              fs: t,
              cache: e,
              gitdir: r,
              tree: u,
              pathArray: n,
              oid: a,
              filepath: o,
            });
          }
          return i;
        })).apply(this, arguments);
      }
      function h(t) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = f(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          tree: n,
          pathArray: c,
          oid: u,
          filepath: f,
        }) {
          const l = c.shift();
          for (const i of n)
            if (i.path === l) {
              if (0 === c.length) return i.oid;
              {
                const { type: l, object: d } = yield Object(s.a)({
                  fs: t,
                  cache: e,
                  gitdir: r,
                  oid: i.oid,
                });
                if ("tree" !== l) throw new o.a(u, l, "blob", f);
                return h({
                  fs: t,
                  cache: e,
                  gitdir: r,
                  tree: (n = a.a.from(d)),
                  pathArray: c,
                  oid: u,
                  filepath: f,
                });
              }
            }
          throw new i.a(`file or directory found at "${u}:${f}"`);
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor() {
          super("Empty response from git server."),
            (this.code = this.name = i.code),
            (this.data = {});
        }
      }
      i.code = "EmptyServerResponseError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(
            `Automatic merge failed with one or more merge conflicts in the following files: ${t.toString()}. Fix conflicts then commit the result.`
          ),
            (this.code = this.name = i.code),
            (this.data = { filepaths: t });
        }
      }
      i.code = "MergeConflictError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(
            `Could not find a fetch refspec for remote "${t}". Make sure the config file has an entry like the following:\n[remote "${t}"]\n\tfetch = +refs/heads/*:refs/remotes/origin/*\n`
          ),
            (this.code = this.name = i.code),
            (this.data = { remote: t });
        }
      }
      i.code = "NoRefspecError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e) {
          super(
            `Remote did not reply using the "smart" HTTP protocol. Expected "001e# service=git-upload-pack" but received: ${t}`
          ),
            (this.code = this.name = i.code),
            (this.data = { preview: t, response: e });
        }
      }
      i.code = "SmartHttpError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e, r) {
          super(
            `Git remote "${t}" uses an unrecognized transport protocol: "${e}"`
          ),
            (this.code = this.name = i.code),
            (this.data = { url: t, transport: e, suggestion: r });
        }
      }
      i.code = "UnknownTransportError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(`Cannot parse remote URL: "${t}"`),
            (this.code = this.name = i.code),
            (this.data = { url: t });
        }
      }
      i.code = "UrlParseError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor() {
          super("The operation was canceled."),
            (this.code = this.name = i.code),
            (this.data = {});
        }
      }
      i.code = "UserCanceledError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(59),
        i = r(8);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      class a {
        static demux(t) {
          const e = i.a.streamReader(t),
            r = new n.a(),
            a = new n.a(),
            s = new n.a(),
            c = (function () {
              var t,
                n =
                  ((t = function* () {
                    const t = yield e();
                    if (null === t) return c();
                    if (!0 === t) return r.end(), s.end(), void a.end();
                    switch (t[0]) {
                      case 1:
                        a.write(t.slice(1));
                        break;
                      case 2:
                        s.write(t.slice(1));
                        break;
                      case 3: {
                        const e = t.slice(1);
                        return (
                          s.write(e),
                          void a.destroy(new Error(e.toString("utf8")))
                        );
                      }
                      default:
                        r.write(t.slice(0));
                    }
                    c();
                  }),
                  function () {
                    var e = this,
                      r = arguments;
                    return new Promise(function (n, i) {
                      var a = t.apply(e, r);
                      function s(t) {
                        o(a, n, i, s, c, "next", t);
                      }
                      function c(t) {
                        o(a, n, i, s, c, "throw", t);
                      }
                      s(void 0);
                    });
                  });
              return function () {
                return n.apply(this, arguments);
              };
            })();
          return c(), { packetlines: r, packfile: a, progress: s };
        }
      }
    },
    function (t, e, r) {
      var n = r(138),
        i = r(139),
        o = r(107).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function c() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function u(t) {
        return (t << 5) | (t >>> 27);
      }
      function f(t) {
        return (t << 30) | (t >>> 2);
      }
      function l(t, e, r, n) {
        return 0 === t
          ? (e & r) | (~e & n)
          : 2 === t
          ? (e & r) | (e & n) | (r & n)
          : e ^ r ^ n;
      }
      n(c, i),
        (c.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (c.prototype._update = function (t) {
          for (
            var e,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              c = 0 | this._e,
              d = 0;
            d < 16;
            ++d
          )
            r[d] = t.readInt32BE(4 * d);
          for (; d < 80; ++d)
            r[d] =
              ((e = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1) |
              (e >>> 31);
          for (var h = 0; h < 80; ++h) {
            var p = ~~(h / 20),
              y = (u(n) + l(p, i, o, s) + c + r[h] + a[p]) | 0;
            (c = s), (s = o), (o = f(i)), (i = n), (n = y);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (c + this._e) | 0);
        }),
        (c.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = c);
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        let e = t > 0 ? t >> 12 : 0;
        4 !== e && 8 !== e && 10 !== e && 14 !== e && (e = 8);
        let r = 511 & t;
        return (r = 73 & r ? 493 : 420), 8 !== e && (r = 0), (e << 12) + r;
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(5);
      class i {
        constructor({ remotePath: t, localPath: e, force: r, matchPrefix: n }) {
          Object.assign(this, {
            remotePath: t,
            localPath: e,
            force: r,
            matchPrefix: n,
          });
        }
        static from(t) {
          const [e, r, o, a, s] = t
              .match(/^(\+?)(.*?)(\*?):(.*?)(\*?)$/)
              .slice(1),
            c = "+" === e,
            u = "*" === o;
          if (u !== ("*" === s)) throw new n.a("Invalid refspec");
          return new i({
            remotePath: r,
            localPath: a,
            force: c,
            matchPrefix: u,
          });
        }
        translate(t) {
          if (this.matchPrefix) {
            if (t.startsWith(this.remotePath))
              return this.localPath + t.replace(this.remotePath, "");
          } else if (t === this.remotePath) return this.localPath;
          return null;
        }
        reverseTranslate(t) {
          if (this.matchPrefix) {
            if (t.startsWith(this.localPath))
              return this.remotePath + t.replace(this.localPath, "");
          } else if (t === this.localPath) return this.remotePath;
          return null;
        }
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return c;
      });
      var n = r(54);
      function i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function s(t) {
              i(a, n, o, s, c, "next", t);
            }
            function c(t) {
              i(a, n, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      const a = Symbol("PackfileCache");
      function s() {
        return (s = o(function* ({
          fs: t,
          filename: e,
          getExternalRefDelta: r,
          emitter: i,
          emitterPrefix: o,
        }) {
          const a = yield t.read(e);
          return n.a.fromIdx({ idx: a, getExternalRefDelta: r });
        })).apply(this, arguments);
      }
      function c({
        fs: t,
        cache: e,
        filename: r,
        getExternalRefDelta: n,
        emitter: i,
        emitterPrefix: o,
      }) {
        e[a] || (e[a] = new Map());
        let c = e[a].get(r);
        return (
          c ||
            ((c = (function (t) {
              return s.apply(this, arguments);
            })({
              fs: t,
              filename: r,
              getExternalRefDelta: n,
              emitter: i,
              emitterPrefix: o,
            })),
            e[a].set(r, c)),
          c
        );
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return a;
        });
        var n = r(80);
        function i(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function o(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var a = t.apply(e, r);
              function s(t) {
                i(a, n, o, s, c, "next", t);
              }
              function c(t) {
                i(a, n, o, s, c, "throw", t);
              }
              s(void 0);
            });
          };
        }
        class a {
          constructor(t) {
            (this.stream = Object(n.a)(t)),
              (this.buffer = null),
              (this.cursor = 0),
              (this.undoCursor = 0),
              (this.started = !1),
              (this._ended = !1),
              (this._discardedBytes = 0);
          }
          eof() {
            return this._ended && this.cursor === this.buffer.length;
          }
          tell() {
            return this._discardedBytes + this.cursor;
          }
          byte() {
            var t = this;
            return o(function* () {
              if (
                !t.eof() &&
                (t.started || (yield t._init()),
                t.cursor !== t.buffer.length ||
                  (yield t._loadnext(), !t._ended))
              )
                return t._moveCursor(1), t.buffer[t.undoCursor];
            })();
          }
          chunk() {
            var t = this;
            return o(function* () {
              if (
                !t.eof() &&
                (t.started || (yield t._init()),
                t.cursor !== t.buffer.length ||
                  (yield t._loadnext(), !t._ended))
              )
                return (
                  t._moveCursor(t.buffer.length),
                  t.buffer.slice(t.undoCursor, t.cursor)
                );
            })();
          }
          read(t) {
            var e = this;
            return o(function* () {
              if (!e.eof())
                return (
                  e.started || (yield e._init()),
                  e.cursor + t > e.buffer.length &&
                    (e._trim(), yield e._accumulate(t)),
                  e._moveCursor(t),
                  e.buffer.slice(e.undoCursor, e.cursor)
                );
            })();
          }
          skip(t) {
            var e = this;
            return o(function* () {
              e.eof() ||
                (e.started || (yield e._init()),
                e.cursor + t > e.buffer.length &&
                  (e._trim(), yield e._accumulate(t)),
                e._moveCursor(t));
            })();
          }
          undo() {
            var t = this;
            return o(function* () {
              t.cursor = t.undoCursor;
            })();
          }
          _next() {
            var e = this;
            return o(function* () {
              e.started = !0;
              let { done: r, value: n } = yield e.stream.next();
              return r && (e._ended = !0), n && (n = t.from(n)), n;
            })();
          }
          _trim() {
            (this.buffer = this.buffer.slice(this.undoCursor)),
              (this.cursor -= this.undoCursor),
              (this._discardedBytes += this.undoCursor),
              (this.undoCursor = 0);
          }
          _moveCursor(t) {
            (this.undoCursor = this.cursor),
              (this.cursor += t),
              this.cursor > this.buffer.length &&
                (this.cursor = this.buffer.length);
          }
          _accumulate(e) {
            var r = this;
            return o(function* () {
              if (r._ended) return;
              const n = [r.buffer];
              for (; r.cursor + e > s(n); ) {
                const t = yield r._next();
                if (r._ended) break;
                n.push(t);
              }
              r.buffer = t.concat(n);
            })();
          }
          _loadnext() {
            var t = this;
            return o(function* () {
              (t._discardedBytes += t.buffer.length),
                (t.undoCursor = 0),
                (t.cursor = 0),
                (t.buffer = yield t._next());
            })();
          }
          _init() {
            var t = this;
            return o(function* () {
              t.buffer = yield t._next();
            })();
          }
        }
        function s(t) {
          return t.reduce((t, e) => t + e.length, 0);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return c;
      });
      var n = r(42),
        i = r.n(n);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function s(t) {
              o(a, n, i, s, c, "next", t);
            }
            function c(t) {
              o(a, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      let s = !1;
      function c(t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = a(function* (t) {
          return null === s && (s = d()), s ? f(t) : i.a.inflate(t);
        })).apply(this, arguments);
      }
      function f(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = a(function* (t) {
          const e = new DecompressionStream("deflate"),
            r = new Blob([t]).stream().pipeThrough(e);
          return new Uint8Array(yield new Response(r).arrayBuffer());
        })).apply(this, arguments);
      }
      function d() {
        try {
          if (new DecompressionStream("deflate")) return !0;
        } catch (t) {}
        return !1;
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return c;
      });
      var n = r(42),
        i = r.n(n);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function s(t) {
              o(a, n, i, s, c, "next", t);
            }
            function c(t) {
              o(a, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      let s = null;
      function c(t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = a(function* (t) {
          return null === s && (s = d()), s ? f(t) : i.a.deflate(t);
        })).apply(this, arguments);
      }
      function f(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = a(function* (t) {
          const e = new CompressionStream("deflate"),
            r = new Blob([t]).stream().pipeThrough(e);
          return new Uint8Array(yield new Response(r).arrayBuffer());
        })).apply(this, arguments);
      }
      function d() {
        try {
          const t = new CompressionStream("deflate");
          if ((new Blob([]).stream(), t)) return !0;
        } catch (t) {}
        return !1;
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        function n({ username: e = "", password: r = "" }) {
          return `Basic ${t.from(`${e}:${r}`).toString("base64")}`;
        }
        r.d(e, "a", function () {
          return n;
        });
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      var n = r(63),
        i = r(30),
        o = r(8);
      function a(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function s(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function s(t) {
              a(o, n, i, s, c, "next", t);
            }
            function c(t) {
              a(o, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function c(t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = s(function* (t) {
          const e = {};
          let r;
          for (; (r = yield t()), !0 !== r; ) {
            if (null === r) continue;
            r = r.toString("utf8").replace(/\n$/, "");
            const t = r.indexOf("=");
            if (t > -1) {
              const n = r.slice(0, t),
                i = r.slice(t + 1);
              e[n] = i;
            } else e[r] = !0;
          }
          return { protocolVersion: 2, capabilities2: e };
        })).apply(this, arguments);
      }
      function f(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function l(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              f(o, n, i, a, s, "next", t);
            }
            function s(t) {
              f(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function d(t, e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = l(function* (t, { service: e }) {
          const r = new Set(),
            a = new Map(),
            s = new Map(),
            u = o.a.streamReader(t);
          let f = yield u();
          for (; null === f; ) f = yield u();
          if (!0 === f) throw new n.a();
          if (f.includes("version 2")) return c(u);
          if (f.toString("utf8").replace(/\n$/, "") !== `# service=${e}`)
            throw new i.a(`# service=${e}\\n`, f.toString("utf8"));
          let l = yield u();
          for (; null === l; ) l = yield u();
          if (!0 === l) return { capabilities: r, refs: a, symrefs: s };
          if (((l = l.toString("utf8")), l.includes("version 2"))) return c(u);
          const [d, h] = p(l, "\0", "\\x00");
          h.split(" ").map((t) => r.add(t));
          const [y, g] = p(d, " ", " ");
          for (a.set(g, y); ; ) {
            const t = yield u();
            if (!0 === t) break;
            if (null !== t) {
              const [e, r] = p(t.toString("utf8"), " ", " ");
              a.set(r, e);
            }
          }
          for (const t of r)
            if (t.startsWith("symref=")) {
              const e = t.match(/symref=([^:]+):(.*)/);
              3 === e.length && s.set(e[1], e[2]);
            }
          return { protocolVersion: 1, capabilities: r, refs: a, symrefs: s };
        })).apply(this, arguments);
      }
      function p(t, e, r) {
        const n = t.trim().split(e);
        if (2 !== n.length)
          throw new i.a(`Two strings separated by '${r}'`, t.toString("utf8"));
        return n;
      }
      r.d(e, "a", function () {
        return d;
      });
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return t[Symbol.asyncIterator]
          ? t[Symbol.asyncIterator]()
          : t[Symbol.iterator]
          ? t[Symbol.iterator]()
          : t.next
          ? t
          : (function (t) {
              let e = [t];
              return {
                next: () =>
                  Promise.resolve({ done: 0 === e.length, value: e.pop() }),
                return: () => ((e = []), {}),
                [Symbol.asyncIterator]() {
                  return this;
                },
              };
            })(t);
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return (
          t
            .trim()
            .split("\n")
            .map((t) => " " + t)
            .join("\n") + "\n"
        );
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      const n = new RegExp("^refs/(heads/|tags/|remotes/)?(.*)");
      function i(t) {
        const e = n.exec(t);
        return e
          ? "remotes/" === e[1] && t.endsWith("/HEAD")
            ? e[2].slice(0, -5)
            : e[2]
          : t;
      }
    },
    function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(25);
      r.d(e, "AlreadyExistsError", function () {
        return n.a;
      });
      var i = r(87);
      r.d(e, "AmbiguousError", function () {
        return i.a;
      });
      var o = r(88);
      r.d(e, "CheckoutConflictError", function () {
        return o.a;
      });
      var a = r(89);
      r.d(e, "CommitNotFetchedError", function () {
        return a.a;
      });
      var s = r(63);
      r.d(e, "EmptyServerResponseError", function () {
        return s.a;
      });
      var c = r(90);
      r.d(e, "FastForwardError", function () {
        return c.a;
      });
      var u = r(91);
      r.d(e, "GitPushError", function () {
        return u.a;
      });
      var f = r(51);
      r.d(e, "HttpError", function () {
        return f.a;
      });
      var l = r(5);
      r.d(e, "InternalError", function () {
        return l.a;
      });
      var d = r(52);
      r.d(e, "InvalidFilepathError", function () {
        return d.a;
      });
      var h = r(28);
      r.d(e, "InvalidOidError", function () {
        return h.a;
      });
      var p = r(36);
      r.d(e, "InvalidRefNameError", function () {
        return p.a;
      });
      var y = r(92);
      r.d(e, "MaxDepthError", function () {
        return y.a;
      });
      var g = r(50);
      r.d(e, "MergeNotSupportedError", function () {
        return g.a;
      });
      var v = r(64);
      r.d(e, "MergeConflictError", function () {
        return v.a;
      });
      var m = r(22);
      r.d(e, "MissingNameError", function () {
        return m.a;
      });
      var w = r(24);
      r.d(e, "MissingParameterError", function () {
        return w.a;
      });
      var b = r(93);
      r.d(e, "MultipleGitError", function () {
        return b.a;
      });
      var _ = r(65);
      r.d(e, "NoRefspecError", function () {
        return _.a;
      });
      var O = r(9);
      r.d(e, "NotFoundError", function () {
        return O.a;
      });
      var j = r(14);
      r.d(e, "ObjectTypeError", function () {
        return j.a;
      });
      var x = r(30);
      r.d(e, "ParseError", function () {
        return x.a;
      });
      var P = r(84);
      r.d(e, "PushRejectedError", function () {
        return P.a;
      });
      var k = r(60);
      r.d(e, "RemoteCapabilityError", function () {
        return k.a;
      });
      var E = r(66);
      r.d(e, "SmartHttpError", function () {
        return E.a;
      });
      var A = r(67);
      r.d(e, "UnknownTransportError", function () {
        return A.a;
      });
      var S = r(39);
      r.d(e, "UnsafeFilepathError", function () {
        return S.a;
      });
      var $ = r(68);
      r.d(e, "UrlParseError", function () {
        return $.a;
      });
      var R = r(69);
      r.d(e, "UserCanceledError", function () {
        return R.a;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          let e = "";
          "not-fast-forward" === t
            ? (e = " because it was not a simple fast-forward")
            : "tag-exists" === t && (e = " because tag already exists"),
            super(`Push rejected${e}. Use "force: true" to override.`),
            (this.code = this.name = i.code),
            (this.data = { reason: t });
        }
      }
      i.code = "PushRejectedError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return l;
      });
      var n = r(18),
        i = r(4),
        o = r(12),
        a = r(11),
        s = r(16),
        c = r(95);
      function u(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function f(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              u(o, n, i, a, s, "next", t);
            }
            function s(t) {
              u(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function l(t) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = f(function* ({
          fs: t,
          cache: e,
          onSign: r,
          gitdir: a,
          message: u,
          author: l,
          committer: d,
          signingKey: p,
          dryRun: y = !1,
          noUpdateBranch: g = !1,
          ref: v,
          parent: m,
          tree: w,
        }) {
          return (
            v ||
              (v = yield i.a.resolve({
                fs: t,
                gitdir: a,
                ref: "HEAD",
                depth: 2,
              })),
            n.a.acquire(
              { fs: t, gitdir: a, cache: e },
              (function () {
                var e = f(function* (e) {
                  const n = Object(c.a)(e.entries).get(".");
                  if (
                    (w ||
                      (w = yield h({ fs: t, gitdir: a, inode: n, dryRun: y })),
                    m)
                  )
                    m = yield Promise.all(
                      m.map((e) => i.a.resolve({ fs: t, gitdir: a, ref: e }))
                    );
                  else
                    try {
                      m = [yield i.a.resolve({ fs: t, gitdir: a, ref: v })];
                    } catch (t) {
                      m = [];
                    }
                  let f = o.a.from({
                    tree: w,
                    parent: m,
                    author: l,
                    committer: d,
                    message: u,
                  });
                  p && (f = yield o.a.sign(f, r, p));
                  const b = yield Object(s.a)({
                    fs: t,
                    gitdir: a,
                    type: "commit",
                    object: f.toObject(),
                    dryRun: y,
                  });
                  return (
                    g ||
                      y ||
                      (yield i.a.writeRef({
                        fs: t,
                        gitdir: a,
                        ref: v,
                        value: b,
                      })),
                    b
                  );
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            )
          );
        })).apply(this, arguments);
      }
      function h(t) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = f(function* ({ fs: t, gitdir: e, inode: r, dryRun: n }) {
          const i = r.children;
          for (const r of i)
            "tree" === r.type &&
              ((r.metadata.mode = "040000"),
              (r.metadata.oid = yield h({
                fs: t,
                gitdir: e,
                inode: r,
                dryRun: n,
              })));
          const o = i.map((t) => ({
              mode: t.metadata.mode,
              path: t.basename,
              oid: t.metadata.oid,
              type: t.type,
            })),
            c = a.a.from(o);
          return yield Object(s.a)({
            fs: t,
            gitdir: e,
            type: "tree",
            object: c.toObject(),
            dryRun: n,
          });
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      t.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      };
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e, r) {
          super(
            `Found multiple ${t} matching "${e}" (${r.join(
              ", "
            )}). Use a longer abbreviation length to disambiguate them.`
          ),
            (this.code = this.name = i.code),
            (this.data = { nouns: t, short: e, matches: r });
        }
      }
      i.code = "AmbiguousError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(
            `Your local changes to the following files would be overwritten by checkout: ${t.join(
              ", "
            )}`
          ),
            (this.code = this.name = i.code),
            (this.data = { filepaths: t });
        }
      }
      i.code = "CheckoutConflictError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e) {
          super(
            `Failed to checkout "${t}" because commit ${e} is not available locally. Do a git fetch to make the branch available locally.`
          ),
            (this.code = this.name = i.code),
            (this.data = { ref: t, oid: e });
        }
      }
      i.code = "CommitNotFetchedError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor() {
          super("A simple fast-forward merge was not possible."),
            (this.code = this.name = i.code),
            (this.data = {});
        }
      }
      i.code = "FastForwardError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t, e) {
          super(`One or more branches were not updated: ${t}`),
            (this.code = this.name = i.code),
            (this.data = { prettyDetails: t, result: e });
        }
      }
      i.code = "GitPushError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(`Maximum search depth of ${t} exceeded.`),
            (this.code = this.name = i.code),
            (this.data = { depth: t });
        }
      }
      i.code = "MaxDepthError";
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(3);
      class i extends n.a {
        constructor(t) {
          super(
            'There are multiple errors that were thrown by the method. Please refer to the "errors" property to see more'
          ),
            (this.code = this.name = i.code),
            (this.data = { errors: t }),
            (this.errors = t);
        }
      }
      i.code = "MultipleGitError";
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return l;
        });
        var n = r(5),
          i = r(39),
          o = r(19),
          a = r(53),
          s = r(29),
          c = r(17);
        function u(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function f(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                u(o, n, i, a, s, "next", t);
              }
              function s(t) {
                u(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        class l {
          constructor(t) {
            (this._dirty = !1), (this._entries = t || new Map());
          }
          static from(e) {
            return f(function* () {
              if (t.isBuffer(e)) return l.fromBuffer(e);
              if (null === e) return new l(null);
              throw new n.a("invalid type passed to GitIndex.from");
            })();
          }
          static fromBuffer(t) {
            return f(function* () {
              const e = yield Object(c.a)(t.slice(0, -20)),
                r = t.slice(-20).toString("hex");
              if (r !== e)
                throw new n.a(
                  `Invalid checksum in GitIndex buffer: expected ${r} but saw ${e}`
                );
              const a = new o.a(t),
                s = new Map(),
                u = a.toString("utf8", 4);
              if ("DIRC" !== u)
                throw new n.a(`Inavlid dircache magic file number: ${u}`);
              const f = a.readUInt32BE();
              if (2 !== f) throw new n.a(`Unsupported dircache version: ${f}`);
              const d = a.readUInt32BE();
              let h = 0;
              for (; !a.eof() && h < d; ) {
                const e = {};
                (e.ctimeSeconds = a.readUInt32BE()),
                  (e.ctimeNanoseconds = a.readUInt32BE()),
                  (e.mtimeSeconds = a.readUInt32BE()),
                  (e.mtimeNanoseconds = a.readUInt32BE()),
                  (e.dev = a.readUInt32BE()),
                  (e.ino = a.readUInt32BE()),
                  (e.mode = a.readUInt32BE()),
                  (e.uid = a.readUInt32BE()),
                  (e.gid = a.readUInt32BE()),
                  (e.size = a.readUInt32BE()),
                  (e.oid = a.slice(20).toString("hex"));
                const r = a.readUInt16BE();
                e.flags =
                  ((p = r),
                  {
                    assumeValid: Boolean(32768 & p),
                    extended: Boolean(16384 & p),
                    stage: (12288 & p) >> 12,
                    nameLength: 4095 & p,
                  });
                const o = t.indexOf(0, a.tell() + 1) - a.tell();
                if (o < 1) throw new n.a(`Got a path length of: ${o}`);
                if (
                  ((e.path = a.toString("utf8", o)),
                  e.path.includes("..\\") || e.path.includes("../"))
                )
                  throw new i.a(e.path);
                let c = 8 - ((a.tell() - 12) % 8);
                for (0 === c && (c = 8); c--; ) {
                  const t = a.readUInt8();
                  if (0 !== t)
                    throw new n.a(
                      `Expected 1-8 null characters but got '${t}' after ${e.path}`
                    );
                  if (a.eof()) throw new n.a("Unexpected end of file");
                }
                s.set(e.path, e), h++;
              }
              var p;
              return new l(s);
            })();
          }
          get entries() {
            return [...this._entries.values()].sort(a.a);
          }
          get entriesMap() {
            return this._entries;
          }
          *[Symbol.iterator]() {
            for (const t of this.entries) yield t;
          }
          insert({ filepath: e, stats: r, oid: n }) {
            r = Object(s.a)(r);
            const i = t.from(e),
              o = {
                ctimeSeconds: r.ctimeSeconds,
                ctimeNanoseconds: r.ctimeNanoseconds,
                mtimeSeconds: r.mtimeSeconds,
                mtimeNanoseconds: r.mtimeNanoseconds,
                dev: r.dev,
                ino: r.ino,
                mode: r.mode || 33188,
                uid: r.uid,
                gid: r.gid,
                size: r.size,
                path: e,
                oid: n,
                flags: {
                  assumeValid: !1,
                  extended: !1,
                  stage: 0,
                  nameLength: i.length < 4095 ? i.length : 4095,
                },
              };
            this._entries.set(o.path, o), (this._dirty = !0);
          }
          delete({ filepath: t }) {
            if (this._entries.has(t)) this._entries.delete(t);
            else
              for (const e of this._entries.keys())
                e.startsWith(t + "/") && this._entries.delete(e);
            this._dirty = !0;
          }
          clear() {
            this._entries.clear(), (this._dirty = !0);
          }
          has({ filepath: t }) {
            return this._entries.has(t);
          }
          render() {
            return this.entries
              .map((t) => `${t.mode.toString(8)} ${t.oid}    ${t.path}`)
              .join("\n");
          }
          toObject() {
            var e = this;
            return f(function* () {
              const r = t.alloc(12),
                n = new o.a(r);
              n.write("DIRC", 4, "utf8"),
                n.writeUInt32BE(2),
                n.writeUInt32BE(e.entries.length);
              const i = t.concat(
                  e.entries.map((e) => {
                    const r = t.from(e.path),
                      n = 8 * Math.ceil((62 + r.length + 1) / 8),
                      i = t.alloc(n),
                      a = new o.a(i),
                      c = Object(s.a)(e);
                    return (
                      a.writeUInt32BE(c.ctimeSeconds),
                      a.writeUInt32BE(c.ctimeNanoseconds),
                      a.writeUInt32BE(c.mtimeSeconds),
                      a.writeUInt32BE(c.mtimeNanoseconds),
                      a.writeUInt32BE(c.dev),
                      a.writeUInt32BE(c.ino),
                      a.writeUInt32BE(c.mode),
                      a.writeUInt32BE(c.uid),
                      a.writeUInt32BE(c.gid),
                      a.writeUInt32BE(c.size),
                      a.write(e.oid, 20, "hex"),
                      a.writeUInt16BE(
                        (function (e) {
                          const r = e.flags;
                          return (
                            (r.extended = !1),
                            (r.nameLength = Math.min(
                              t.from(e.path).length,
                              4095
                            )),
                            (r.assumeValid ? 32768 : 0) +
                              (r.extended ? 16384 : 0) +
                              ((3 & r.stage) << 12) +
                              (4095 & r.nameLength)
                          );
                        })(e)
                      ),
                      a.write(e.path, r.length, "utf8"),
                      i
                    );
                  })
                ),
                a = t.concat([r, i]),
                u = yield Object(c.a)(a);
              return t.concat([a, t.from(u, "hex")]);
            })();
          }
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return o;
      });
      var n = r(34),
        i = r(26);
      function o(t) {
        const e = new Map(),
          r = function (t) {
            if (!e.has(t)) {
              const o = {
                type: "tree",
                fullpath: t,
                basename: Object(n.a)(t),
                metadata: {},
                children: [],
              };
              e.set(t, o),
                (o.parent = r(Object(i.a)(t))),
                o.parent && o.parent !== o && o.parent.children.push(o);
            }
            return e.get(t);
          },
          o = function (t, o) {
            if (!e.has(t)) {
              const a = {
                type: "blob",
                fullpath: t,
                basename: Object(n.a)(t),
                metadata: o,
                parent: r(Object(i.a)(t)),
                children: [],
              };
              a.parent && a.parent.children.push(a), e.set(t, a);
            }
            return e.get(t);
          };
        r(".");
        for (const e of t) o(e.path, e);
        return e;
      }
    },
    function (t, e, r) {
      "use strict";
      function n(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function i(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = t.apply(e, r);
            function s(t) {
              n(a, i, o, s, c, "next", t);
            }
            function c(t) {
              n(a, i, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      r.d(e, "a", function () {
        return m;
      });
      const o = (t) => {
          if (
            "true" === (t = t.trim().toLowerCase()) ||
            "yes" === t ||
            "on" === t
          )
            return !0;
          if ("false" === t || "no" === t || "off" === t) return !1;
          throw Error(
            `Expected 'true', 'false', 'yes', 'no', 'on', or 'off', but got ${t}`
          );
        },
        a = {
          core: {
            filemode: o,
            bare: o,
            logallrefupdates: o,
            symlinks: o,
            ignorecase: o,
            bigFileThreshold: (t) => {
              t = t.toLowerCase();
              let e = parseInt(t);
              return (
                t.endsWith("k") && (e *= 1024),
                t.endsWith("m") && (e *= 1048576),
                t.endsWith("g") && (e *= 1073741824),
                e
              );
            },
          },
        },
        s = /^\[([A-Za-z0-9-.]+)(?: "(.*)")?\]$/,
        c = /^[A-Za-z0-9-.]+$/,
        u = /^([A-Za-z][A-Za-z-]*)(?: *= *(.*))?$/,
        f = /^[A-Za-z][A-Za-z-]*$/,
        l = /^(.*?)( *[#;].*)$/,
        d = (t) => {
          const e = l.exec(t);
          if (null == e) return t;
          const [r, n] = e.slice(1);
          return h(r) && h(n) ? `${r}${n}` : r;
        },
        h = (t) => (t.match(/(?:^|[^\\])"/g) || []).length % 2 != 0,
        p = (t) =>
          t.split("").reduce((t, e, r, n) => {
            const i = '"' === e && "\\" !== n[r - 1],
              o = "\\" === e && '"' === n[r + 1];
            return i || o ? t : t + e;
          }, ""),
        y = (t) => (null != t ? t.toLowerCase() : null),
        g = (t, e, r) => [y(t), e, y(r)].filter((t) => null != t).join("."),
        v = (t) => {
          const e = t.split("."),
            r = e.shift(),
            n = e.pop(),
            i = e.length ? e.join(".") : void 0;
          return {
            section: r,
            subsection: i,
            name: n,
            path: g(r, i, n),
            sectionPath: g(r, i, null),
          };
        };
      class m {
        constructor(t) {
          let e = null,
            r = null;
          this.parsedConfig = t.split("\n").map((t) => {
            let n = null,
              i = null;
            const o = t.trim(),
              a = ((t) => {
                const e = s.exec(t);
                if (null != e) {
                  const [t, r] = e.slice(1);
                  return [t, r];
                }
                return null;
              })(o),
              c = null != a;
            if (c) [e, r] = a;
            else {
              const t = ((t) => {
                const e = u.exec(t);
                if (null != e) {
                  const [t, r = "true"] = e.slice(1),
                    n = d(r);
                  return [t, p(n)];
                }
                return null;
              })(o);
              null != t && ([n, i] = t);
            }
            const f = g(e, r, n);
            return {
              line: t,
              isSection: c,
              section: e,
              subsection: r,
              name: n,
              value: i,
              path: f,
            };
          });
        }
        static from(t) {
          return new m(t);
        }
        get(t, e = !1) {
          var r = this;
          return i(function* () {
            const n = v(t).path,
              i = r.parsedConfig
                .filter((t) => t.path === n)
                .map(({ section: t, name: e, value: r }) => {
                  const n = a[t] && a[t][e];
                  return n ? n(r) : r;
                });
            return e ? i : i.pop();
          })();
        }
        getall(t) {
          var e = this;
          return i(function* () {
            return e.get(t, !0);
          })();
        }
        getSubsections(t) {
          var e = this;
          return i(function* () {
            return e.parsedConfig
              .filter((e) => e.section === t && e.isSection)
              .map((t) => t.subsection);
          })();
        }
        deleteSection(t, e) {
          var r = this;
          return i(function* () {
            r.parsedConfig = r.parsedConfig.filter(
              (r) => !(r.section === t && r.subsection === e)
            );
          })();
        }
        append(t, e) {
          var r = this;
          return i(function* () {
            return r.set(t, e, !0);
          })();
        }
        set(t, e, r = !1) {
          var n = this;
          return i(function* () {
            const {
                section: i,
                subsection: o,
                name: a,
                path: s,
                sectionPath: u,
              } = v(t),
              l =
                ((d = n.parsedConfig),
                (h = (t) => t.path === s),
                d.reduce((t, e, r) => (h(e) ? r : t), -1));
            var d, h;
            if (null == e) -1 !== l && n.parsedConfig.splice(l, 1);
            else if (-1 !== l) {
              const t = n.parsedConfig[l],
                i = Object.assign({}, t, { name: a, value: e, modified: !0 });
              r ? n.parsedConfig.splice(l + 1, 0, i) : (n.parsedConfig[l] = i);
            } else {
              const t = n.parsedConfig.findIndex((t) => t.path === u),
                r = {
                  section: i,
                  subsection: o,
                  name: a,
                  value: e,
                  modified: !0,
                  path: s,
                };
              if (c.test(i) && f.test(a))
                if (t >= 0) n.parsedConfig.splice(t + 1, 0, r);
                else {
                  const t = {
                    section: i,
                    subsection: o,
                    modified: !0,
                    path: u,
                  };
                  n.parsedConfig.push(t, r);
                }
            }
          })();
        }
        toString() {
          return this.parsedConfig
            .map(
              ({
                line: t,
                section: e,
                subsection: r,
                name: n,
                value: i,
                modified: o = !1,
              }) =>
                o
                  ? null != n && null != i
                    ? "string" == typeof i && /[#;]/.test(i)
                      ? `\t${n} = "${i}"`
                      : `\t${n} = ${i}`
                    : null != r
                    ? `[${e} "${r}"]`
                    : `[${e}]`
                  : t
            )
            .join("\n");
        }
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(73);
      class i {
        constructor(t = []) {
          this.rules = t;
        }
        static from(t) {
          const e = [];
          for (const r of t) e.push(n.a.from(r));
          return new i(e);
        }
        add(t) {
          const e = n.a.from(t);
          this.rules.push(e);
        }
        translate(t) {
          const e = [];
          for (const r of this.rules)
            for (const n of t) {
              const t = r.translate(n);
              t && e.push([n, t]);
            }
          return e;
        }
        translateOne(t) {
          let e = null;
          for (const r of this.rules) {
            const n = r.translate(t);
            n && (e = n);
          }
          return e;
        }
        localNamespaces() {
          return this.rules
            .filter((t) => t.matchPrefix)
            .map((t) => t.localPath.replace(/\/$/, ""));
        }
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(128),
        i = r.n(n);
      const o = /^.*(\r?\n|$)/gm;
      function a({ branches: t, contents: e }) {
        const r = t[1],
          n = t[2],
          a = e[0],
          s = e[1],
          c = e[2],
          u = s.match(o),
          f = a.match(o),
          l = c.match(o),
          d = i()(u, f, l);
        let h = "",
          p = !0;
        for (const t of d)
          t.ok && (h += t.ok.join("")),
            t.conflict &&
              ((p = !1),
              (h += `${"<".repeat(7)} ${r}\n`),
              (h += t.conflict.a.join("")),
              (h += `${"=".repeat(7)}\n`),
              (h += t.conflict.b.join("")),
              (h += `${">".repeat(7)} ${n}\n`));
        return { cleanMerge: p, mergedText: h };
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return d;
        });
        var n = r(71),
          i = r.n(n),
          o = r(129),
          a = r(7),
          s = r(77),
          c = r(1),
          u = r(43);
        function f(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function l(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                f(o, n, i, a, s, "next", t);
              }
              function s(t) {
                f(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function d(t) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = l(function* ({
            fs: e,
            cache: r,
            dir: n,
            gitdir: f = Object(c.a)(n, ".git"),
            oids: d,
          }) {
            const h = new i.a(),
              p = [];
            function y(e, r) {
              const n = t.from(e, r);
              p.push(n), h.update(n);
            }
            function g(t) {
              return v.apply(this, arguments);
            }
            function v() {
              return (v = l(function* ({ stype: e, object: r }) {
                const n = o.a[e];
                let i = r.length,
                  a = i > 15 ? 128 : 0;
                const c = 15 & i;
                i >>>= 4;
                let f = (a | n | c).toString(16);
                for (y(f, "hex"); a; )
                  (a = i > 127 ? 128 : 0),
                    (f = a | (127 & i)),
                    y(Object(u.a)(2, f), "hex"),
                    (i >>>= 7);
                y(t.from(yield Object(s.a)(r)));
              })).apply(this, arguments);
            }
            y("PACK"), y("00000002", "hex"), y(Object(u.a)(8, d.length), "hex");
            for (const t of d) {
              const { type: n, object: i } = yield Object(a.a)({
                fs: e,
                cache: r,
                gitdir: f,
                oid: t,
              });
              yield g({ write: y, object: i, stype: n });
            }
            const m = h.digest();
            return p.push(m), p;
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      const n =
        void 0 === Array.prototype.flat
          ? (t) => t.reduce((t, e) => t.concat(e), [])
          : (t) => t.flat();
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return f;
      });
      var n = r(15),
        i = r(12),
        o = r(11),
        a = r(7),
        s = r(1);
      function c(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function u(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              c(o, n, i, a, s, "next", t);
            }
            function s(t) {
              c(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function f(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = u(function* ({
          fs: t,
          cache: e,
          dir: r,
          gitdir: c = Object(s.a)(r, ".git"),
          oids: f,
        }) {
          const l = new Set();
          function d(t) {
            return h.apply(this, arguments);
          }
          function h() {
            return (h = u(function* (r) {
              if (l.has(r)) return;
              l.add(r);
              const { type: s, object: u } = yield Object(a.a)({
                fs: t,
                cache: e,
                gitdir: c,
                oid: r,
              });
              if ("tag" === s) {
                const t = n.a.from(u).headers().object;
                yield d(t);
              } else if ("commit" === s) {
                const t = i.a.from(u).headers().tree;
                yield d(t);
              } else if ("tree" === s) {
                const t = o.a.from(u);
                for (const e of t)
                  "blob" === e.type && l.add(e.oid),
                    "tree" === e.type && (yield d(e.oid));
              }
            })).apply(this, arguments);
          }
          for (const t of f) yield d(t);
          return l;
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(1);
      function i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function s(t) {
              i(a, n, o, s, c, "next", t);
            }
            function c(t) {
              i(a, n, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function a(t, e) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = o(function* (t, e) {
          const r = yield t.readdir(e);
          null == r
            ? yield t.rm(e)
            : r.length
            ? yield Promise.all(
                r.map((r) => {
                  const i = Object(n.a)(e, r);
                  return t.lstat(i).then((e) => {
                    if (e) return e.isDirectory() ? a(t, i) : t.rm(i);
                  });
                })
              ).then(() => t.rmdir(e))
            : yield t.rmdir(e);
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        let e = t.match(/^https?:\/\/([^/]+)@/);
        if (null == e) return { url: t, auth: {} };
        e = e[1];
        const [r, n] = e.split(":");
        return {
          url: (t = t.replace(`${e}@`, "")),
          auth: { username: r, password: n },
        };
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e) {
      var r,
        n,
        i = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(t, 0);
        try {
          return r(t, 0);
        } catch (e) {
          try {
            return r.call(null, t, 0);
          } catch (e) {
            return r.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          r = o;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          n = a;
        }
      })();
      var c,
        u = [],
        f = !1,
        l = -1;
      function d() {
        f &&
          c &&
          ((f = !1), c.length ? (u = c.concat(u)) : (l = -1), u.length && h());
      }
      function h() {
        if (!f) {
          var t = s(d);
          f = !0;
          for (var e = u.length; e; ) {
            for (c = u, u = []; ++l < e; ) c && c[l].run();
            (l = -1), (e = u.length);
          }
          (c = null),
            (f = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function y() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        u.push(new p(t, e)), 1 !== u.length || f || s(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = y),
        (i.addListener = y),
        (i.once = y),
        (i.off = y),
        (i.removeListener = y),
        (i.removeAllListeners = y),
        (i.emit = y),
        (i.prependListener = y),
        (i.prependOnceListener = y),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var n = r(11),
        i = r(16);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function s(t) {
              o(a, n, i, s, c, "next", t);
            }
            function c(t) {
              o(a, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function s(t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = a(function* ({ fs: t, gitdir: e, tree: r }) {
          const o = n.a.from(r).toObject();
          return yield Object(i.a)({
            fs: t,
            gitdir: e,
            type: "tree",
            object: o,
            format: "content",
          });
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return k;
        });
        var n = r(48),
          i = r(24),
          o = r(60),
          a = r(13),
          s = r(4),
          c = r(56),
          u = r(37),
          f = r(12),
          l = r(54),
          d = r(151),
          h = r(7),
          p = r(82),
          y = r(46),
          g = r(153),
          v = r(130),
          m = r(33),
          w = r(1),
          b = r(41),
          _ = r(131),
          O = r(114),
          j = r(113);
        function x(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function P(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                x(o, n, i, a, s, "next", t);
              }
              function s(t) {
                x(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function k(t) {
          return E.apply(this, arguments);
        }
        function E() {
          return (E = P(function* ({
            fs: e,
            cache: r,
            http: x,
            onProgress: k,
            onMessage: E,
            onAuth: A,
            onAuthSuccess: S,
            onAuthFailure: $,
            gitdir: R,
            ref: B,
            remoteRef: I,
            remote: T,
            url: U,
            corsProxy: C,
            depth: z = null,
            since: D = null,
            exclude: N = [],
            relative: M = !1,
            tags: F = !1,
            singleBranch: H = !1,
            headers: L = {},
            prune: G = !1,
            pruneTags: Y = !1,
          }) {
            const Z = B || (yield Object(n.a)({ fs: e, gitdir: R, test: !0 })),
              W = yield a.a.get({ fs: e, gitdir: R }),
              q = T || (Z && (yield W.get(`branch.${Z}.remote`))) || "origin",
              K = U || (yield W.get(`remote.${q}.url`));
            if (void 0 === K) throw new i.a("remote OR url");
            const V =
              I || (Z && (yield W.get(`branch.${Z}.merge`))) || B || "HEAD";
            void 0 === C && (C = yield W.get("http.corsProxy"));
            const X = c.a.getRemoteHelperFor({ url: K }),
              J = yield X.discover({
                http: x,
                onAuth: A,
                onAuthSuccess: S,
                onAuthFailure: $,
                corsProxy: C,
                service: "git-upload-pack",
                url: K,
                headers: L,
                protocolVersion: 1,
              }),
              Q = J.auth,
              tt = J.refs;
            if (0 === tt.size)
              return {
                defaultBranch: null,
                fetchHead: null,
                fetchHeadDescription: null,
              };
            if (null !== z && !J.capabilities.has("shallow"))
              throw new o.a("shallow", "depth");
            if (null !== D && !J.capabilities.has("deepen-since"))
              throw new o.a("deepen-since", "since");
            if (N.length > 0 && !J.capabilities.has("deepen-not"))
              throw new o.a("deepen-not", "exclude");
            if (!0 === M && !J.capabilities.has("deepen-relative"))
              throw new o.a("deepen-relative", "relative");
            const { oid: et, fullref: rt } = s.a.resolveAgainstMap({
              ref: V,
              map: tt,
            });
            for (const t of tt.keys())
              t === rt ||
                "HEAD" === t ||
                t.startsWith("refs/heads/") ||
                (F && t.startsWith("refs/tags/")) ||
                tt.delete(t);
            const nt = Object(v.a)(
              [...J.capabilities],
              [
                "multi_ack_detailed",
                "no-done",
                "side-band-64k",
                "ofs-delta",
                `agent=${b.a.agent}`,
              ]
            );
            M && nt.push("deepen-relative");
            const it = H ? [et] : tt.values(),
              ot = H
                ? [Z]
                : yield s.a.listRefs({ fs: e, gitdir: R, filepath: "refs" });
            let at = [];
            for (let t of ot)
              try {
                t = yield s.a.expand({ fs: e, gitdir: R, ref: t });
                const n = yield s.a.resolve({ fs: e, gitdir: R, ref: t });
                (yield Object(d.a)({ fs: e, cache: r, gitdir: R, oid: n })) &&
                  at.push(n);
              } catch (t) {}
            at = [...new Set(at)];
            const st = yield u.a.read({ fs: e, gitdir: R }),
              ct = J.capabilities.has("shallow") ? [...st] : [],
              ut = Object(j.a)({
                capabilities: nt,
                wants: it,
                haves: at,
                shallows: ct,
                depth: z,
                since: D,
                exclude: N,
              }),
              ft = t.from(yield Object(y.a)(ut)),
              lt = yield X.connect({
                http: x,
                onProgress: k,
                corsProxy: C,
                service: "git-upload-pack",
                url: K,
                auth: Q,
                body: [ft],
                headers: L,
              }),
              dt = yield Object(O.a)(lt.body);
            lt.headers && (dt.headers = lt.headers);
            for (const t of dt.shallows)
              if (!st.has(t))
                try {
                  const { object: n } = yield Object(h.a)({
                      fs: e,
                      cache: r,
                      gitdir: R,
                      oid: t,
                    }),
                    i = new f.a(n),
                    o = yield Promise.all(
                      i
                        .headers()
                        .parent.map((t) =>
                          Object(d.a)({ fs: e, cache: r, gitdir: R, oid: t })
                        )
                    );
                  0 === o.length || o.every((t) => t) || st.add(t);
                } catch (e) {
                  st.add(t);
                }
            for (const t of dt.unshallows) st.delete(t);
            if ((yield u.a.write({ fs: e, gitdir: R, oids: st }), H)) {
              const t = new Map([[rt, et]]),
                r = new Map();
              let n = 10,
                i = rt;
              for (; n--; ) {
                const t = J.symrefs.get(i);
                if (void 0 === t) break;
                r.set(i, t), (i = t);
              }
              const o = tt.get(i);
              o && t.set(i, o);
              const { pruned: a } = yield s.a.updateRemoteRefs({
                fs: e,
                gitdir: R,
                remote: q,
                refs: t,
                symrefs: r,
                tags: F,
                prune: G,
              });
              G && (dt.pruned = a);
            } else {
              const { pruned: t } = yield s.a.updateRemoteRefs({
                fs: e,
                gitdir: R,
                remote: q,
                refs: tt,
                symrefs: J.symrefs,
                tags: F,
                prune: G,
                pruneTags: Y,
              });
              G && (dt.pruned = t);
            }
            if (((dt.HEAD = J.symrefs.get("HEAD")), void 0 === dt.HEAD)) {
              const { oid: t } = s.a.resolveAgainstMap({
                ref: "HEAD",
                map: tt,
              });
              for (const [e, r] of tt.entries())
                if ("HEAD" !== e && r === t) {
                  dt.HEAD = e;
                  break;
                }
            }
            const ht = rt.startsWith("refs/tags") ? "tag" : "branch";
            if (
              ((dt.FETCH_HEAD = {
                oid: et,
                description: `${ht} '${Object(p.a)(rt)}' of ${K}`,
              }),
              k || E)
            ) {
              const t = Object(_.a)(dt.progress);
              Object(m.a)(
                t,
                (function () {
                  var t = P(function* (t) {
                    if ((E && (yield E(t)), k)) {
                      const e = t.match(/([^:]*).*\((\d+?)\/(\d+?)\)/);
                      e &&
                        (yield k({
                          phase: e[1].trim(),
                          loaded: parseInt(e[2], 10),
                          total: parseInt(e[3], 10),
                        }));
                    }
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            }
            const pt = t.from(yield Object(y.a)(dt.packfile)),
              yt = pt.slice(-20).toString("hex"),
              gt = {
                defaultBranch: dt.HEAD,
                fetchHead: dt.FETCH_HEAD.oid,
                fetchHeadDescription: dt.FETCH_HEAD.description,
              };
            if (
              (dt.headers && (gt.headers = dt.headers),
              G && (gt.pruned = dt.pruned),
              "" !== yt && !Object(g.a)(pt))
            ) {
              gt.packfile = `objects/pack/pack-${yt}.pack`;
              const t = Object(w.a)(R, gt.packfile);
              yield e.write(t, pt);
              const n = (t) =>
                  Object(h.a)({ fs: e, cache: r, gitdir: R, oid: t }),
                i = yield l.a.fromPack({
                  pack: pt,
                  getExternalRefDelta: n,
                  onProgress: k,
                });
              yield e.write(t.replace(/\.pack$/, ".idx"), yield i.toBuffer());
            }
            return gt;
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      var n = r(10),
        i = n.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function a(t, e, r) {
        return i(t, e, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = a)),
        o(i, a),
        (a.from = function (t, e, r) {
          if ("number" == typeof t)
            throw new TypeError("Argument must not be a number");
          return i(t, e, r);
        }),
        (a.alloc = function (t, e, r) {
          if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
          var n = i(t);
          return (
            void 0 !== e
              ? "string" == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (a.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
          return i(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
          return n.SlowBuffer(t);
        });
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t, e, r, n) {
        for (
          var i = (65535 & t) | 0, o = ((t >>> 16) & 65535) | 0, a = 0;
          0 !== r;

        ) {
          r -= a = r > 2e3 ? 2e3 : r;
          do {
            o = (o + (i = (i + e[n++]) | 0)) | 0;
          } while (--a);
          (i %= 65521), (o %= 65521);
        }
        return i | (o << 16) | 0;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = (function () {
        for (var t, e = [], r = 0; r < 256; r++) {
          t = r;
          for (var n = 0; n < 8; n++)
            t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
          e[r] = t;
        }
        return e;
      })();
      t.exports = function (t, e, r, i) {
        var o = n,
          a = i + r;
        t ^= -1;
        for (var s = i; s < a; s++) t = (t >>> 8) ^ o[255 & (t ^ e[s])];
        return -1 ^ t;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(27),
        i = !0,
        o = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (t) {
        i = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (t) {
        o = !1;
      }
      for (var a = new n.Buf8(256), s = 0; s < 256; s++)
        a[s] =
          s >= 252
            ? 6
            : s >= 248
            ? 5
            : s >= 240
            ? 4
            : s >= 224
            ? 3
            : s >= 192
            ? 2
            : 1;
      function c(t, e) {
        if (e < 65534 && ((t.subarray && o) || (!t.subarray && i)))
          return String.fromCharCode.apply(null, n.shrinkBuf(t, e));
        for (var r = "", a = 0; a < e; a++) r += String.fromCharCode(t[a]);
        return r;
      }
      (a[254] = a[254] = 1),
        (e.string2buf = function (t) {
          var e,
            r,
            i,
            o,
            a,
            s = t.length,
            c = 0;
          for (o = 0; o < s; o++)
            55296 == (64512 & (r = t.charCodeAt(o))) &&
              o + 1 < s &&
              56320 == (64512 & (i = t.charCodeAt(o + 1))) &&
              ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++),
              (c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
          for (e = new n.Buf8(c), a = 0, o = 0; a < c; o++)
            55296 == (64512 & (r = t.charCodeAt(o))) &&
              o + 1 < s &&
              56320 == (64512 & (i = t.charCodeAt(o + 1))) &&
              ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++),
              r < 128
                ? (e[a++] = r)
                : r < 2048
                ? ((e[a++] = 192 | (r >>> 6)), (e[a++] = 128 | (63 & r)))
                : r < 65536
                ? ((e[a++] = 224 | (r >>> 12)),
                  (e[a++] = 128 | ((r >>> 6) & 63)),
                  (e[a++] = 128 | (63 & r)))
                : ((e[a++] = 240 | (r >>> 18)),
                  (e[a++] = 128 | ((r >>> 12) & 63)),
                  (e[a++] = 128 | ((r >>> 6) & 63)),
                  (e[a++] = 128 | (63 & r)));
          return e;
        }),
        (e.buf2binstring = function (t) {
          return c(t, t.length);
        }),
        (e.binstring2buf = function (t) {
          for (var e = new n.Buf8(t.length), r = 0, i = e.length; r < i; r++)
            e[r] = t.charCodeAt(r);
          return e;
        }),
        (e.buf2string = function (t, e) {
          var r,
            n,
            i,
            o,
            s = e || t.length,
            u = new Array(2 * s);
          for (n = 0, r = 0; r < s; )
            if ((i = t[r++]) < 128) u[n++] = i;
            else if ((o = a[i]) > 4) (u[n++] = 65533), (r += o - 1);
            else {
              for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < s; )
                (i = (i << 6) | (63 & t[r++])), o--;
              o > 1
                ? (u[n++] = 65533)
                : i < 65536
                ? (u[n++] = i)
                : ((i -= 65536),
                  (u[n++] = 55296 | ((i >> 10) & 1023)),
                  (u[n++] = 56320 | (1023 & i)));
            }
          return c(u, n);
        }),
        (e.utf8border = function (t, e) {
          var r;
          for (
            (e = e || t.length) > t.length && (e = t.length), r = e - 1;
            r >= 0 && 128 == (192 & t[r]);

          )
            r--;
          return r < 0 ? e : 0 === r ? e : r + a[t[r]] > e ? r : e;
        });
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {
        (this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0);
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(8);
      function i({
        capabilities: t = [],
        wants: e = [],
        haves: r = [],
        shallows: i = [],
        depth: o = null,
        since: a = null,
        exclude: s = [],
      }) {
        const c = [];
        e = [...new Set(e)];
        let u = ` ${t.join(" ")}`;
        for (const t of e) c.push(n.a.encode(`want ${t}${u}\n`)), (u = "");
        for (const t of i) c.push(n.a.encode(`shallow ${t}\n`));
        null !== o && c.push(n.a.encode(`deepen ${o}\n`)),
          null !== a &&
            c.push(
              n.a.encode(`deepen-since ${Math.floor(a.valueOf() / 1e3)}\n`)
            );
        for (const t of s) c.push(n.a.encode(`deepen-not ${t}\n`));
        c.push(n.a.flush());
        for (const t of r) c.push(n.a.encode(`have ${t}\n`));
        return c.push(n.a.encode("done\n")), c;
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return c;
      });
      var n = r(28),
        i = r(70),
        o = r(33);
      function a(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function s(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function s(t) {
              a(o, n, i, s, c, "next", t);
            }
            function c(t) {
              a(o, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function c(t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = s(function* (t) {
          const { packetlines: e, packfile: r, progress: a } = i.a.demux(t),
            s = [],
            c = [],
            u = [];
          let f = !1,
            l = !1;
          return new Promise((t, i) => {
            Object(o.a)(e, (e) => {
              const o = e.toString("utf8").trim();
              if (o.startsWith("shallow")) {
                const t = o.slice(-41).trim();
                40 !== t.length && i(new n.a(t)), s.push(t);
              } else if (o.startsWith("unshallow")) {
                const t = o.slice(-41).trim();
                40 !== t.length && i(new n.a(t)), c.push(t);
              } else if (o.startsWith("ACK")) {
                const [, t, e] = o.split(" ");
                u.push({ oid: t, status: e }), e || (l = !0);
              } else o.startsWith("NAK") && ((f = !0), (l = !0));
              l &&
                t({
                  shallows: s,
                  unshallows: c,
                  acks: u,
                  nak: f,
                  packfile: r,
                  progress: a,
                });
            });
          });
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return p;
        });
        var n = r(35),
          i = r(44),
          o = r(64),
          a = r(50),
          s = r(11),
          c = r(16),
          u = r(34),
          f = r(1),
          l = r(98);
        function d(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function h(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                d(o, n, i, a, s, "next", t);
              }
              function s(t) {
                d(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function p(t) {
          return y.apply(this, arguments);
        }
        function y() {
          return (y = h(function* ({
            fs: t,
            cache: e,
            dir: r,
            gitdir: l = Object(f.a)(r, ".git"),
            ourOid: d,
            baseOid: p,
            theirOid: y,
            ourName: v = "ours",
            baseName: w = "base",
            theirName: b = "theirs",
            dryRun: _ = !1,
            abortOnConflict: O = !0,
            mergeDriver: j,
          }) {
            const x = Object(n.a)({ ref: d }),
              P = Object(n.a)({ ref: p }),
              k = Object(n.a)({ ref: y }),
              E = [];
            let A = !0;
            const S = yield Object(i.a)({
              fs: t,
              cache: e,
              dir: r,
              gitdir: l,
              trees: [x, P, k],
              map:
                ((R = h(function* (e, [r, n, i]) {
                  const o = Object(u.a)(e);
                  switch (`${yield g(r, n)}-${yield g(i, n)}`) {
                    case "false-false":
                      return {
                        mode: yield n.mode(),
                        path: o,
                        oid: yield n.oid(),
                        type: yield n.type(),
                      };
                    case "false-true":
                      return i
                        ? {
                            mode: yield i.mode(),
                            path: o,
                            oid: yield i.oid(),
                            type: yield i.type(),
                          }
                        : void 0;
                    case "true-false":
                      return r
                        ? {
                            mode: yield r.mode(),
                            path: o,
                            oid: yield r.oid(),
                            type: yield r.type(),
                          }
                        : void 0;
                    case "true-true":
                      if (
                        r &&
                        n &&
                        i &&
                        "blob" === (yield r.type()) &&
                        "blob" === (yield n.type()) &&
                        "blob" === (yield i.type())
                      )
                        return m({
                          fs: t,
                          gitdir: l,
                          path: o,
                          ours: r,
                          base: n,
                          theirs: i,
                          ourName: v,
                          baseName: w,
                          theirName: b,
                          mergeDriver: j,
                        }).then(
                          (t) => (
                            (A = A && t.cleanMerge), E.push(e), t.mergeResult
                          )
                        );
                      throw new a.a();
                  }
                })),
                function (t, e) {
                  return R.apply(this, arguments);
                }),
              reduce:
                (($ = h(function* (e, r) {
                  const n = r.filter(Boolean);
                  if (e && (!e || "tree" !== e.type || 0 !== n.length)) {
                    if (n.length > 0) {
                      const r = new s.a(n).toObject(),
                        i = yield Object(c.a)({
                          fs: t,
                          gitdir: l,
                          type: "tree",
                          object: r,
                          dryRun: _,
                        });
                      e.oid = i;
                    }
                    return e;
                  }
                })),
                function (t, e) {
                  return $.apply(this, arguments);
                }),
            });
            var $, R, B;
            if (!A)
              throw (
                (r &&
                  !O &&
                  (yield Object(i.a)({
                    fs: t,
                    cache: e,
                    dir: r,
                    gitdir: l,
                    trees: [Object(n.a)({ ref: S.oid })],
                    map:
                      ((B = h(function* (e, [n]) {
                        const i = `${r}/${e}`;
                        if ("blob" === (yield n.type())) {
                          const e = yield n.mode(),
                            r = new TextDecoder().decode(yield n.content());
                          yield t.write(i, r, { mode: e });
                        }
                        return !0;
                      })),
                      function (t, e) {
                        return B.apply(this, arguments);
                      }),
                  })),
                new o.a(E))
              );
            return S.oid;
          })).apply(this, arguments);
        }
        function g(t, e) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = h(function* (t, e) {
            return (
              !(!t && !e) &&
              (!(!t || e) ||
                !(t || !e) ||
                (("tree" !== (yield t.type()) || "tree" !== (yield e.type())) &&
                  ((yield t.type()) !== (yield e.type()) ||
                    (yield t.mode()) !== (yield e.mode()) ||
                    (yield t.oid()) !== (yield e.oid()))))
            );
          })).apply(this, arguments);
        }
        function m(t) {
          return w.apply(this, arguments);
        }
        function w() {
          return (w = h(function* ({
            fs: e,
            gitdir: r,
            path: n,
            ours: i,
            base: o,
            theirs: a,
            ourName: s,
            theirName: u,
            baseName: f,
            dryRun: d,
            mergeDriver: h = l.a,
          }) {
            const p =
              (yield o.mode()) === (yield i.mode())
                ? yield a.mode()
                : yield i.mode();
            if ((yield i.oid()) === (yield a.oid()))
              return {
                cleanMerge: !0,
                mergeResult: {
                  mode: p,
                  path: n,
                  oid: yield i.oid(),
                  type: "blob",
                },
              };
            if ((yield i.oid()) === (yield o.oid()))
              return {
                cleanMerge: !0,
                mergeResult: {
                  mode: p,
                  path: n,
                  oid: yield a.oid(),
                  type: "blob",
                },
              };
            if ((yield a.oid()) === (yield o.oid()))
              return {
                cleanMerge: !0,
                mergeResult: {
                  mode: p,
                  path: n,
                  oid: yield i.oid(),
                  type: "blob",
                },
              };
            const y = t.from(yield i.content()).toString("utf8"),
              g = t.from(yield o.content()).toString("utf8"),
              v = t.from(yield a.content()).toString("utf8"),
              { mergedText: m, cleanMerge: w } = yield h({
                branches: [f, s, u],
                contents: [g, y, v],
                path: n,
              });
            return {
              cleanMerge: w,
              mergeResult: {
                mode: p,
                path: n,
                oid: yield Object(c.a)({
                  fs: e,
                  gitdir: r,
                  type: "blob",
                  object: t.from(m, "utf8"),
                  dryRun: d,
                }),
                type: "blob",
              },
            };
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return d;
      });
      var n = r(14),
        i = r(4),
        o = r(37),
        a = r(15),
        s = r(12),
        c = r(7),
        u = r(1);
      function f(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function l(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              f(o, n, i, a, s, "next", t);
            }
            function s(t) {
              f(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function d(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = l(function* ({
          fs: t,
          cache: e,
          dir: r,
          gitdir: f = Object(u.a)(r, ".git"),
          start: d,
          finish: h,
        }) {
          const p = yield o.a.read({ fs: t, gitdir: f }),
            y = new Set(),
            g = new Set();
          for (const e of d)
            y.add(yield i.a.resolve({ fs: t, gitdir: f, ref: e }));
          for (const e of h)
            try {
              const r = yield i.a.resolve({ fs: t, gitdir: f, ref: e });
              g.add(r);
            } catch (t) {}
          const v = new Set();
          function m(t) {
            return w.apply(this, arguments);
          }
          function w() {
            return (w = l(function* (r) {
              v.add(r);
              const { type: i, object: o } = yield Object(c.a)({
                fs: t,
                cache: e,
                gitdir: f,
                oid: r,
              });
              if ("tag" === i) {
                return m(a.a.from(o).headers().object);
              }
              if ("commit" !== i) throw new n.a(r, i, "commit");
              if (!p.has(r)) {
                const t = s.a.from(o).headers().parent;
                for (r of t) g.has(r) || v.has(r) || (yield m(r));
              }
            })).apply(this, arguments);
          }
          for (const t of y) yield m(t);
          return v;
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(8);
      function i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function s(t) {
              i(a, n, o, s, c, "next", t);
            }
            function c(t) {
              i(a, n, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function a(t) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = o(function* ({ capabilities: t = [], triplets: e = [] }) {
          const r = [];
          let i = `\0 ${t.join(" ")}`;
          for (const t of e)
            r.push(n.a.encode(`${t.oldoid} ${t.oid} ${t.fullRef}${i}\n`)),
              (i = "");
          return r.push(n.a.flush()), r;
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var n = r(30),
        i = r(8);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function s(t) {
              o(a, n, i, s, c, "next", t);
            }
            function c(t) {
              o(a, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function s(t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = a(function* (t) {
          const e = {};
          let r = "";
          const o = i.a.streamReader(t);
          let a = yield o();
          for (; !0 !== a; )
            null !== a && (r += a.toString("utf8") + "\n"), (a = yield o());
          const s = r.toString("utf8").split("\n");
          if (((a = s.shift()), !a.startsWith("unpack ")))
            throw new n.a('unpack ok" or "unpack [error message]', a);
          (e.ok = "unpack ok" === a),
            e.ok || (e.error = a.slice("unpack ".length)),
            (e.refs = {});
          for (const t of s) {
            if ("" === t.trim()) continue;
            const r = t.slice(0, 2),
              n = t.slice(3);
            let i = n.indexOf(" ");
            -1 === i && (i = n.length);
            const o = n.slice(0, i),
              a = n.slice(i + 1);
            e.refs[o] = { ok: "ok" === r, error: a };
          }
          return e;
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return i;
      });
      var n = r(32);
      function i(t, e) {
        return Object(n.a)(o(t), o(e));
      }
      function o(t) {
        return "040000" === t.mode ? t.path + "/" : t.path;
      }
    },
    function (t, e, r) {
      "use strict";
      function n(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function i(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = t.apply(e, r);
            function s(t) {
              n(a, i, o, s, c, "next", t);
            }
            function c(t) {
              n(a, i, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function o(t) {
        return a.apply(this, arguments);
      }
      function a() {
        return (a = i(function* ({ fs: t, gitdir: e, oid: r }) {
          const n = `objects/${r.slice(0, 2)}/${r.slice(2)}`,
            i = yield t.read(`${e}/${n}`);
          return i ? { object: i, format: "deflated", source: n } : null;
        })).apply(this, arguments);
      }
      r.d(e, "a", function () {
        return o;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return c;
      });
      var n = r(5),
        i = r(74),
        o = r(1);
      function a(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function s(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function s(t) {
              a(o, n, i, s, c, "next", t);
            }
            function c(t) {
              a(o, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function c(t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = s(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: a,
          format: s = "content",
          getExternalRefDelta: c,
        }) {
          let u = yield t.readdir(Object(o.a)(r, "objects/pack"));
          u = u.filter((t) => t.endsWith(".idx"));
          for (const o of u) {
            const s = `${r}/objects/pack/${o}`,
              u = yield Object(i.a)({
                fs: t,
                cache: e,
                filename: s,
                getExternalRefDelta: c,
              });
            if (u.error) throw new n.a(u.error);
            if (u.offsets.has(a)) {
              if (!u.pack) {
                const e = s.replace(/idx$/, "pack");
                u.pack = t.read(e);
              }
              const e = yield u.read({ oid: a, getExternalRefDelta: c });
              return (
                (e.format = "content"),
                (e.source = `objects/pack/${o.replace(/idx$/, "pack")}`),
                e
              );
            }
          }
          return null;
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      var n;
      (n = function (t) {
        t.version = "1.2.0";
        var e = (function () {
          for (var t = 0, e = new Array(256), r = 0; 256 != r; ++r)
            (t =
              1 &
              (t =
                1 &
                (t =
                  1 &
                  (t =
                    1 &
                    (t =
                      1 &
                      (t =
                        1 &
                        (t =
                          1 &
                          (t = 1 & (t = r) ? -306674912 ^ (t >>> 1) : t >>> 1)
                            ? -306674912 ^ (t >>> 1)
                            : t >>> 1)
                          ? -306674912 ^ (t >>> 1)
                          : t >>> 1)
                        ? -306674912 ^ (t >>> 1)
                        : t >>> 1)
                      ? -306674912 ^ (t >>> 1)
                      : t >>> 1)
                    ? -306674912 ^ (t >>> 1)
                    : t >>> 1)
                  ? -306674912 ^ (t >>> 1)
                  : t >>> 1)
                ? -306674912 ^ (t >>> 1)
                : t >>> 1),
              (e[r] = t);
          return "undefined" != typeof Int32Array ? new Int32Array(e) : e;
        })();
        (t.table = e),
          (t.bstr = function (t, r) {
            for (var n = -1 ^ r, i = t.length - 1, o = 0; o < i; )
              n =
                ((n = (n >>> 8) ^ e[255 & (n ^ t.charCodeAt(o++))]) >>> 8) ^
                e[255 & (n ^ t.charCodeAt(o++))];
            return (
              o === i && (n = (n >>> 8) ^ e[255 & (n ^ t.charCodeAt(o))]),
              -1 ^ n
            );
          }),
          (t.buf = function (t, r) {
            if (t.length > 1e4)
              return (function (t, r) {
                for (var n = -1 ^ r, i = t.length - 7, o = 0; o < i; )
                  n =
                    ((n =
                      ((n =
                        ((n =
                          ((n =
                            ((n =
                              ((n =
                                ((n = (n >>> 8) ^ e[255 & (n ^ t[o++])]) >>>
                                  8) ^
                                e[255 & (n ^ t[o++])]) >>>
                                8) ^
                              e[255 & (n ^ t[o++])]) >>>
                              8) ^
                            e[255 & (n ^ t[o++])]) >>>
                            8) ^
                          e[255 & (n ^ t[o++])]) >>>
                          8) ^
                        e[255 & (n ^ t[o++])]) >>>
                        8) ^
                      e[255 & (n ^ t[o++])]) >>>
                      8) ^
                    e[255 & (n ^ t[o++])];
                for (; o < i + 7; ) n = (n >>> 8) ^ e[255 & (n ^ t[o++])];
                return -1 ^ n;
              })(t, r);
            for (var n = -1 ^ r, i = t.length - 3, o = 0; o < i; )
              n =
                ((n =
                  ((n =
                    ((n = (n >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^
                    e[255 & (n ^ t[o++])]) >>>
                    8) ^
                  e[255 & (n ^ t[o++])]) >>>
                  8) ^
                e[255 & (n ^ t[o++])];
            for (; o < i + 3; ) n = (n >>> 8) ^ e[255 & (n ^ t[o++])];
            return -1 ^ n;
          }),
          (t.str = function (t, r) {
            for (var n, i, o = -1 ^ r, a = 0, s = t.length; a < s; )
              (n = t.charCodeAt(a++)) < 128
                ? (o = (o >>> 8) ^ e[255 & (o ^ n)])
                : n < 2048
                ? (o =
                    ((o =
                      (o >>> 8) ^ e[255 & (o ^ (192 | ((n >> 6) & 31)))]) >>>
                      8) ^
                    e[255 & (o ^ (128 | (63 & n)))])
                : n >= 55296 && n < 57344
                ? ((n = 64 + (1023 & n)),
                  (i = 1023 & t.charCodeAt(a++)),
                  (o =
                    ((o =
                      ((o =
                        ((o =
                          (o >>> 8) ^ e[255 & (o ^ (240 | ((n >> 8) & 7)))]) >>>
                          8) ^
                        e[255 & (o ^ (128 | ((n >> 2) & 63)))]) >>>
                        8) ^
                      e[
                        255 & (o ^ (128 | ((i >> 6) & 15) | ((3 & n) << 4)))
                      ]) >>>
                      8) ^
                    e[255 & (o ^ (128 | (63 & i)))]))
                : (o =
                    ((o =
                      ((o =
                        (o >>> 8) ^ e[255 & (o ^ (224 | ((n >> 12) & 15)))]) >>>
                        8) ^
                      e[255 & (o ^ (128 | ((n >> 6) & 63)))]) >>>
                      8) ^
                    e[255 & (o ^ (128 | (63 & n)))]);
            return -1 ^ o;
          });
      }),
        "undefined" == typeof DO_NOT_EXPORT_CRC ? n(e) : n({});
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return u;
        });
        var n = r(42),
          i = r.n(n),
          o = r(5),
          a = r(75);
        function s(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function c(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                s(o, n, i, a, c, "next", t);
              }
              function c(t) {
                s(o, n, i, a, c, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function u(t, e) {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = c(function* (t, e) {
            const r = new a.a(t);
            let n = yield r.read(4);
            if (((n = n.toString("utf8")), "PACK" !== n))
              throw new o.a(`Invalid PACK header '${n}'`);
            let s = yield r.read(4);
            if (((s = s.readUInt32BE(0)), 2 !== s))
              throw new o.a(`Invalid packfile version: ${s}`);
            let c = yield r.read(4);
            if (((c = c.readUInt32BE(0)), !(c < 1)))
              for (; !r.eof() && c--; ) {
                const t = r.tell(),
                  { type: n, length: a, ofs: s, reference: u } = yield l(r),
                  f = new i.a.Inflate();
                for (; !f.result; ) {
                  const i = yield r.chunk();
                  if (!i) break;
                  if ((f.push(i, !1), f.err))
                    throw new o.a(`Pako error: ${f.msg}`);
                  if (f.result) {
                    if (f.result.length !== a)
                      throw new o.a(
                        "Inflated object size is different from that stated in packfile."
                      );
                    yield r.undo(), yield r.read(i.length - f.strm.avail_in);
                    const l = r.tell();
                    yield e({
                      data: f.result,
                      type: n,
                      num: c,
                      offset: t,
                      end: l,
                      reference: u,
                      ofs: s,
                    });
                  }
                }
              }
          })).apply(this, arguments);
        }
        function l(t) {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = c(function* (e) {
            let r = yield e.byte();
            const n = (r >> 4) & 7;
            let i,
              o,
              a = 15 & r;
            if (128 & r) {
              let t = 4;
              do {
                (r = yield e.byte()), (a |= (127 & r) << t), (t += 7);
              } while (128 & r);
            }
            if (6 === n) {
              let n = 0;
              i = 0;
              const a = [];
              do {
                (r = yield e.byte()),
                  (i |= (127 & r) << n),
                  (n += 7),
                  a.push(r);
              } while (128 & r);
              o = t.from(a);
            }
            if (7 === n) {
              o = yield e.read(20);
            }
            return { type: n, length: a, ofs: i, reference: o };
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return o;
        });
        var n = r(5),
          i = r(19);
        function o(e, r) {
          const o = new i.a(e),
            s = a(o);
          if (s !== r.byteLength)
            throw new n.a(
              `applyDelta expected source buffer to be ${s} bytes but the provided buffer was ${r.length} bytes`
            );
          const u = a(o);
          let f;
          const l = c(o, r);
          if (l.byteLength === u) f = l;
          else {
            f = t.alloc(u);
            const e = new i.a(f);
            for (e.copy(l); !o.eof(); ) e.copy(c(o, r));
            const a = e.tell();
            if (u !== a)
              throw new n.a(
                `applyDelta expected target buffer to be ${u} bytes but the resulting buffer was ${a} bytes`
              );
          }
          return f;
        }
        function a(t) {
          let e = 0,
            r = 0,
            n = null;
          do {
            (n = t.readUInt8()), (e |= (127 & n) << r), (r += 7);
          } while (128 & n);
          return e;
        }
        function s(t, e, r) {
          let n = 0,
            i = 0;
          for (; r--; ) 1 & e && (n |= t.readUInt8() << i), (e >>= 1), (i += 8);
          return n;
        }
        function c(t, e) {
          const r = t.readUInt8();
          if (128 & r) {
            const n = s(t, 15 & r, 4);
            let i = s(t, (112 & r) >> 4, 3);
            return 0 === i && (i = 65536), e.slice(n, n + i);
          }
          return t.slice(r);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return t
          .split("\n")
          .map((t) => t.replace(/^ /, ""))
          .join("\n");
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      (function (e) {
        function r(t) {
          return Array.isArray(t) ? t : [t];
        }
        const n = /^\s+$/,
          i = /^\\!/,
          o = /^\\#/,
          a = /\r?\n/g,
          s = /^\.*\/|^\.+$/,
          c =
            "undefined" != typeof Symbol
              ? Symbol.for("node-ignore")
              : "node-ignore",
          u = /([0-z])-([0-z])/g,
          f = () => !1,
          l = [
            [/\\?\s+$/, (t) => (0 === t.indexOf("\\") ? " " : "")],
            [/\\\s/g, () => " "],
            [/[\\$.|*+(){^]/g, (t) => `\\${t}`],
            [/(?!\\)\?/g, () => "[^/]"],
            [/^\//, () => "^"],
            [/\//g, () => "\\/"],
            [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
            [
              /^(?=[^^])/,
              function () {
                return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
              },
            ],
            [
              /\\\/\\\*\\\*(?=\\\/|$)/g,
              (t, e, r) => (e + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+"),
            ],
            [/(^|[^\\]+)\\\*(?=.+)/g, (t, e) => `${e}[^\\/]*`],
            [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"],
            [/\\\\/g, () => "\\"],
            [
              /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
              (t, e, r, n, i) =>
                "\\" === e
                  ? `\\[${r}${((t) => {
                      const { length: e } = t;
                      return t.slice(0, e - (e % 2));
                    })(n)}${i}`
                  : "]" === i && n.length % 2 == 0
                  ? `[${((t) =>
                      t.replace(u, (t, e, r) =>
                        e.charCodeAt(0) <= r.charCodeAt(0) ? t : ""
                      ))(r)}${n}]`
                  : "[]",
            ],
            [/(?:[^*])$/, (t) => (/\/$/.test(t) ? `${t}$` : `${t}(?=$|\\/$)`)],
            [
              /(\^|\\\/)?\\\*$/,
              (t, e) => `${e ? `${e}[^/]+` : "[^/]*"}(?=$|\\/$)`,
            ],
          ],
          d = Object.create(null),
          h = (t) => "string" == typeof t;
        class p {
          constructor(t, e, r, n) {
            (this.origin = t),
              (this.pattern = e),
              (this.negative = r),
              (this.regex = n);
          }
        }
        const y = (t, e) => {
            const r = t;
            let n = !1;
            0 === t.indexOf("!") && ((n = !0), (t = t.substr(1)));
            const a = ((t, e) => {
              let r = d[t];
              return (
                r ||
                  ((r = l.reduce((e, r) => e.replace(r[0], r[1].bind(t)), t)),
                  (d[t] = r)),
                e ? new RegExp(r, "i") : new RegExp(r)
              );
            })((t = t.replace(i, "!").replace(o, "#")), e);
            return new p(r, t, n, a);
          },
          g = (t, e) => {
            throw new e(t);
          },
          v = (t, e, r) => {
            if (!h(t))
              return r(`path must be a string, but got \`${e}\``, TypeError);
            if (!t) return r("path must not be empty", TypeError);
            if (v.isNotRelative(t)) {
              return r(
                `path should be a ${"`path.relative()`d"} string, but got "${e}"`,
                RangeError
              );
            }
            return !0;
          },
          m = (t) => s.test(t);
        (v.isNotRelative = m), (v.convert = (t) => t);
        class w {
          constructor({
            ignorecase: t = !0,
            ignoreCase: e = t,
            allowRelativePaths: r = !1,
          } = {}) {
            var n, i, o;
            (n = this),
              (i = c),
              (o = !0),
              Object.defineProperty(n, i, { value: o }),
              (this._rules = []),
              (this._ignoreCase = e),
              (this._allowRelativePaths = r),
              this._initCache();
          }
          _initCache() {
            (this._ignoreCache = Object.create(null)),
              (this._testCache = Object.create(null));
          }
          _addPattern(t) {
            if (t && t[c])
              return (
                (this._rules = this._rules.concat(t._rules)),
                void (this._added = !0)
              );
            if (((t) => t && h(t) && !n.test(t) && 0 !== t.indexOf("#"))(t)) {
              const e = y(t, this._ignoreCase);
              (this._added = !0), this._rules.push(e);
            }
          }
          add(t) {
            return (
              (this._added = !1),
              r(h(t) ? ((t) => t.split(a))(t) : t).forEach(
                this._addPattern,
                this
              ),
              this._added && this._initCache(),
              this
            );
          }
          addPattern(t) {
            return this.add(t);
          }
          _testOne(t, e) {
            let r = !1,
              n = !1;
            return (
              this._rules.forEach((i) => {
                const { negative: o } = i;
                (n === o && r !== n) ||
                  (o && !r && !n && !e) ||
                  (i.regex.test(t) && ((r = !o), (n = o)));
              }),
              { ignored: r, unignored: n }
            );
          }
          _test(t, e, r, n) {
            const i = t && v.convert(t);
            return (
              v(i, t, this._allowRelativePaths ? f : g), this._t(i, e, r, n)
            );
          }
          _t(t, e, r, n) {
            if (t in e) return e[t];
            if ((n || (n = t.split("/")), n.pop(), !n.length))
              return (e[t] = this._testOne(t, r));
            const i = this._t(n.join("/") + "/", e, r, n);
            return (e[t] = i.ignored ? i : this._testOne(t, r));
          }
          ignores(t) {
            return this._test(t, this._ignoreCache, !1).ignored;
          }
          createFilter() {
            return (t) => !this.ignores(t);
          }
          filter(t) {
            return r(t).filter(this.createFilter());
          }
          test(t) {
            return this._test(t, this._testCache, !0);
          }
        }
        const b = (t) => new w(t);
        if (
          ((b.isPathValid = (t) => v(t && v.convert(t), t, f)),
          (b.default = b),
          (t.exports = b),
          void 0 !== e &&
            ((e.env && e.env.IGNORE_TEST_WIN32) || "win32" === e.platform))
        ) {
          const t = (t) =>
            /^\\\\\?\\/.test(t) || /["<>|\u0000-\u001F]+/u.test(t)
              ? t
              : t.replace(/\\/g, "/");
          v.convert = t;
          const e = /^[a-z]:\//i;
          v.isNotRelative = (t) => e.test(t) || m(t);
        }
      }.call(this, r(104)));
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      var n = r(5);
      function i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function s(t) {
              i(a, n, o, s, c, "next", t);
            }
            function c(t) {
              i(a, n, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function a(t) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = o(function* ({
          fs: t,
          gitdir: e,
          object: r,
          format: i,
          oid: o,
        }) {
          if ("deflated" !== i)
            throw new n.a(
              "GitObjectStoreLoose expects objects to write to be in deflated format"
            );
          const a = `${e}/${`objects/${o.slice(0, 2)}/${o.slice(2)}`}`;
          (yield t.exists(a)) || (yield t.write(a, r));
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      var n = r(148);
      function i(t, e) {
        for (
          var r = [],
            i = t.length,
            o = e.length,
            a = (function (t, e) {
              var r = new n(t, e);
              r.compose();
              for (
                var i,
                  o,
                  a = r.getses(),
                  s = t.length - 1,
                  c = e.length - 1,
                  u = a.length - 1;
                u >= 0;
                --u
              )
                a[u].t === r.SES_COMMON
                  ? (o
                      ? ((o.chain = {
                          file1index: s,
                          file2index: c,
                          chain: null,
                        }),
                        (o = o.chain))
                      : (o = i = { file1index: s, file2index: c, chain: null }),
                    s--,
                    c--)
                  : a[u].t === r.SES_DELETE
                  ? s--
                  : a[u].t === r.SES_ADD && c--;
              var f = { file1index: -1, file2index: -1, chain: null };
              return o ? ((o.chain = f), i) : f;
            })(t, e);
          null !== a;
          a = a.chain
        ) {
          var s = i - a.file1index - 1,
            c = o - a.file2index - 1;
          (i = a.file1index),
            (o = a.file2index),
            (s || c) && r.push({ file1: [i + 1, s], file2: [o + 1, c] });
        }
        return r.reverse(), r;
      }
      t.exports = function (t, e, r) {
        var n = [],
          o = [t, e, r],
          a = (function (t, e, r) {
            var n,
              o = i(e, t),
              a = i(e, r),
              s = [];
            function c(t, e) {
              s.push([t.file1[0], e, t.file1[1], t.file2[0], t.file2[1]]);
            }
            for (n = 0; n < o.length; n++) c(o[n], 0);
            for (n = 0; n < a.length; n++) c(a[n], 2);
            s.sort(function (t, e) {
              return t[0] - e[0];
            });
            var u = [],
              f = 0;
            function l(t) {
              t > f && (u.push([1, f, t - f]), (f = t));
            }
            for (var d = 0; d < s.length; d++) {
              for (
                var h = d, p = s[d], y = p[0], g = y + p[2];
                d < s.length - 1;

              ) {
                var v = s[d + 1],
                  m = v[0];
                if (m > g) break;
                (g = Math.max(g, m + v[2])), d++;
              }
              if ((l(y), h == d)) p[4] > 0 && u.push([p[1], p[3], p[4]]);
              else {
                var w = {
                  0: [t.length, -1, e.length, -1],
                  2: [r.length, -1, e.length, -1],
                };
                for (n = h; n <= d; n++) {
                  var b = w[(p = s[n])[1]],
                    _ = p[0],
                    O = _ + p[2],
                    j = p[3],
                    x = j + p[4];
                  (b[0] = Math.min(j, b[0])),
                    (b[1] = Math.max(x, b[1])),
                    (b[2] = Math.min(_, b[2])),
                    (b[3] = Math.max(O, b[3]));
                }
                var P = w[0][0] + (y - w[0][2]),
                  k = w[0][1] + (g - w[0][3]),
                  E = w[2][0] + (y - w[2][2]),
                  A = w[2][1] + (g - w[2][3]);
                u.push([-1, P, k - P, y, g - y, E, A - E]);
              }
              f = g;
            }
            return l(e.length), u;
          })(t, e, r),
          s = [];
        function c() {
          s.length && n.push({ ok: s }), (s = []);
        }
        function u(t) {
          for (var e = 0; e < t.length; e++) s.push(t[e]);
        }
        function f(e) {
          if (e[2] != e[6]) return !0;
          for (var n = e[1], i = e[5], o = 0; o < e[2]; o++)
            if (t[o + n] != r[o + i]) return !0;
          return !1;
        }
        for (var l = 0; l < a.length; l++) {
          var d = a[l],
            h = d[0];
          -1 == h
            ? f(d)
              ? (c(),
                n.push({
                  conflict: {
                    a: t.slice(d[1], d[1] + d[2]),
                    aIndex: d[1],
                    o: e.slice(d[3], d[3] + d[4]),
                    oIndex: d[3],
                    b: r.slice(d[5], d[5] + d[6]),
                    bIndex: d[5],
                  },
                }))
              : u(o[0].slice(d[1], d[1] + d[2]))
            : u(o[h].slice(d[1], d[1] + d[2]));
        }
        return c(), n;
      };
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return n;
      });
      const n = {
        commit: 16,
        tree: 32,
        blob: 48,
        tag: 64,
        ofs_delta: 96,
        ref_delta: 112,
      };
    },
    function (t, e, r) {
      "use strict";
      function n(t, e) {
        const r = t.map((t) => t.split("=", 1)[0]);
        return e.filter((t) => {
          const e = t.split("=", 1)[0];
          return r.includes(e);
        });
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var n = r(59),
        i = r(33);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        const e = t.indexOf("\r"),
          r = t.indexOf("\n");
        return -1 === e && -1 === r
          ? -1
          : -1 === e
          ? r + 1
          : -1 === r
          ? e + 1
          : r === e + 1
          ? r + 1
          : Math.min(e, r) + 1;
      }
      function s(t) {
        const e = new n.a();
        let r = "";
        var s;
        return (
          ((s = function* () {
            yield Object(i.a)(t, (t) => {
              for (t = t.toString("utf8"), r += t; ; ) {
                const t = a(r);
                if (-1 === t) break;
                e.write(r.slice(0, t)), (r = r.slice(t));
              }
            }),
              r.length > 0 && e.write(r),
              e.end();
          }),
          function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, n) {
              var i = s.apply(t, e);
              function a(t) {
                o(i, r, n, a, c, "next", t);
              }
              function c(t) {
                o(i, r, n, a, c, "throw", t);
              }
              a(void 0);
            });
          })(),
          e
        );
      }
    },
    ,
    function (t, e, r) {
      "use strict";
      (function (e) {
        var r = function (t) {
          (t = t || {}),
            (this.Promise = t.Promise || Promise),
            (this.queues = {}),
            (this.domains = {}),
            (this.domainReentrant = t.domainReentrant || !1),
            (this.timeout = t.timeout || r.DEFAULT_TIMEOUT),
            (this.maxPending = t.maxPending || r.DEFAULT_MAX_PENDING);
        };
        (r.DEFAULT_TIMEOUT = 0),
          (r.DEFAULT_MAX_PENDING = 1e3),
          (r.prototype.acquire = function (t, r, n, i) {
            if (Array.isArray(t)) return this._acquireBatch(t, r, n, i);
            if ("function" != typeof r)
              throw new Error("You must pass a function to execute");
            var o = null,
              a = null,
              s = null;
            "function" != typeof n &&
              ((i = n),
              (n = null),
              (s = new this.Promise(function (t, e) {
                (o = t), (a = e);
              }))),
              (i = i || {});
            var c = !1,
              u = null,
              f = this,
              l = function (e, r, i) {
                e &&
                  (0 === f.queues[t].length && delete f.queues[t],
                  delete f.domains[t]),
                  c ||
                    (s ? (r ? a(r) : o(i)) : "function" == typeof n && n(r, i),
                    (c = !0)),
                  e &&
                    f.queues[t] &&
                    f.queues[t].length > 0 &&
                    f.queues[t].shift()();
              },
              d = function (n) {
                if (c) return l(n);
                if (
                  (u && (clearTimeout(u), (u = null)),
                  n && (f.domains[t] = e.domain),
                  1 === r.length)
                ) {
                  var i = !1;
                  r(function (t, e) {
                    i || ((i = !0), l(n, t, e));
                  });
                } else
                  f._promiseTry(function () {
                    return r();
                  }).then(
                    function (t) {
                      l(n, void 0, t);
                    },
                    function (t) {
                      l(n, t);
                    }
                  );
              };
            if ((e.domain && (d = e.domain.bind(d)), f.queues[t]))
              if (f.domainReentrant && e.domain && e.domain === f.domains[t])
                d(!1);
              else if (f.queues[t].length >= f.maxPending)
                l(!1, new Error("Too much pending tasks"));
              else {
                var h = function () {
                  d(!0);
                };
                i.skipQueue ? f.queues[t].unshift(h) : f.queues[t].push(h);
                var p = i.timeout || f.timeout;
                p &&
                  (u = setTimeout(function () {
                    (u = null), l(!1, new Error("async-lock timed out"));
                  }, p));
              }
            else (f.queues[t] = []), d(!0);
            return s || void 0;
          }),
          (r.prototype._acquireBatch = function (t, e, r, n) {
            "function" != typeof r && ((n = r), (r = null));
            var i = this,
              o = e;
            if (
              (t.reverse().forEach(function (t) {
                o = (function (t, e) {
                  return function (r) {
                    i.acquire(t, e, r, n);
                  };
                })(t, o);
              }),
              "function" != typeof r)
            )
              return new this.Promise(function (t, e) {
                1 === o.length
                  ? o(function (r, n) {
                      r ? e(r) : t(n);
                    })
                  : t(o());
              });
            o(r);
          }),
          (r.prototype.isBusy = function (t) {
            return t ? !!this.queues[t] : Object.keys(this.queues).length > 0;
          }),
          (r.prototype._promiseTry = function (t) {
            try {
              return this.Promise.resolve(t());
            } catch (t) {
              return this.Promise.reject(t);
            }
          }),
          (t.exports = r);
      }.call(this, r(104)));
    },
    function (t, e) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (r = window);
      }
      t.exports = r;
    },
    function (t, e, r) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          r = e[0],
          n = e[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            n = u(t),
            a = n[0],
            s = n[1],
            c = new o(
              (function (t, e, r) {
                return (3 * (e + r)) / 4 - r;
              })(0, a, s)
            ),
            f = 0,
            l = s > 0 ? a - 4 : a;
          for (r = 0; r < l; r += 4)
            (e =
              (i[t.charCodeAt(r)] << 18) |
              (i[t.charCodeAt(r + 1)] << 12) |
              (i[t.charCodeAt(r + 2)] << 6) |
              i[t.charCodeAt(r + 3)]),
              (c[f++] = (e >> 16) & 255),
              (c[f++] = (e >> 8) & 255),
              (c[f++] = 255 & e);
          2 === s &&
            ((e = (i[t.charCodeAt(r)] << 2) | (i[t.charCodeAt(r + 1)] >> 4)),
            (c[f++] = 255 & e));
          1 === s &&
            ((e =
              (i[t.charCodeAt(r)] << 10) |
              (i[t.charCodeAt(r + 1)] << 4) |
              (i[t.charCodeAt(r + 2)] >> 2)),
            (c[f++] = (e >> 8) & 255),
            (c[f++] = 255 & e));
          return c;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, r = t.length, i = r % 3, o = [], a = 0, s = r - i;
            a < s;
            a += 16383
          )
            o.push(f(t, a, a + 16383 > s ? s : a + 16383));
          1 === i
            ? ((e = t[r - 1]), o.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
            : 2 === i &&
              ((e = (t[r - 2] << 8) + t[r - 1]),
              o.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var n = [],
          i = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          c = a.length;
        s < c;
        ++s
      )
        (n[s] = a[s]), (i[a.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
      }
      function f(t, e, r) {
        for (var i, o, a = [], s = e; s < r; s += 3)
          (i =
            ((t[s] << 16) & 16711680) +
            ((t[s + 1] << 8) & 65280) +
            (255 & t[s + 2])),
            a.push(
              n[((o = i) >> 18) & 63] +
                n[(o >> 12) & 63] +
                n[(o >> 6) & 63] +
                n[63 & o]
            );
        return a.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function (t, e) {
      (e.read = function (t, e, r, n, i) {
        var o,
          a,
          s = 8 * i - n - 1,
          c = (1 << s) - 1,
          u = c >> 1,
          f = -7,
          l = r ? i - 1 : 0,
          d = r ? -1 : 1,
          h = t[e + l];
        for (
          l += d, o = h & ((1 << -f) - 1), h >>= -f, f += s;
          f > 0;
          o = 256 * o + t[e + l], l += d, f -= 8
        );
        for (
          a = o & ((1 << -f) - 1), o >>= -f, f += n;
          f > 0;
          a = 256 * a + t[e + l], l += d, f -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === c) return a ? NaN : (1 / 0) * (h ? -1 : 1);
          (a += Math.pow(2, n)), (o -= u);
        }
        return (h ? -1 : 1) * a * Math.pow(2, o - n);
      }),
        (e.write = function (t, e, r, n, i, o) {
          var a,
            s,
            c,
            u = 8 * o - i - 1,
            f = (1 << u) - 1,
            l = f >> 1,
            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = n ? 0 : o - 1,
            p = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((s = isNaN(e) ? 1 : 0), (a = f))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (c = Math.pow(2, -a)) < 1 && (a--, (c *= 2)),
                  (e += a + l >= 1 ? d / c : d * Math.pow(2, 1 - l)) * c >= 2 &&
                    (a++, (c /= 2)),
                  a + l >= f
                    ? ((s = 0), (a = f))
                    : a + l >= 1
                    ? ((s = (e * c - 1) * Math.pow(2, i)), (a += l))
                    : ((s = e * Math.pow(2, l - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            t[r + h] = 255 & s, h += p, s /= 256, i -= 8
          );
          for (
            a = (a << i) | s, u += i;
            u > 0;
            t[r + h] = 255 & a, h += p, a /= 256, u -= 8
          );
          t[r + h - p] |= 128 * y;
        });
    },
    function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == r.call(t);
        };
    },
    function (t, e) {
      "function" == typeof Object.create
        ? (t.exports = function (t, e) {
            (t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (t.exports = function (t, e) {
            t.super_ = e;
            var r = function () {};
            (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          });
    },
    function (t, e, r) {
      var n = r(107).Buffer;
      function i(t, e) {
        (this._block = n.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0);
      }
      (i.prototype.update = function (t, e) {
        "string" == typeof t && ((e = e || "utf8"), (t = n.from(t, e)));
        for (
          var r = this._block,
            i = this._blockSize,
            o = t.length,
            a = this._len,
            s = 0;
          s < o;

        ) {
          for (var c = a % i, u = Math.min(o - s, i - c), f = 0; f < u; f++)
            r[c + f] = t[s + f];
          (s += u), (a += u) % i == 0 && this._update(r);
        }
        return (this._len += o), this;
      }),
        (i.prototype.digest = function (t) {
          var e = this._len % this._blockSize;
          (this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var n = (4294967295 & r) >>> 0,
              i = (r - n) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(n, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return t ? o.toString(t) : o;
        }),
        (i.prototype._update = function () {
          throw new Error("_update must be implemented by subclass");
        }),
        (t.exports = i);
    },
    function (t, e, r) {
      "use strict";
      var n = r(141),
        i = r(27),
        o = r(110),
        a = r(86),
        s = r(111),
        c = Object.prototype.toString;
      function u(t) {
        if (!(this instanceof u)) return new u(t);
        this.options = i.assign(
          {
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: "",
          },
          t || {}
        );
        var e = this.options;
        e.raw && e.windowBits > 0
          ? (e.windowBits = -e.windowBits)
          : e.gzip &&
            e.windowBits > 0 &&
            e.windowBits < 16 &&
            (e.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new s()),
          (this.strm.avail_out = 0);
        var r = n.deflateInit2(
          this.strm,
          e.level,
          e.method,
          e.windowBits,
          e.memLevel,
          e.strategy
        );
        if (0 !== r) throw new Error(a[r]);
        if (
          (e.header && n.deflateSetHeader(this.strm, e.header), e.dictionary)
        ) {
          var f;
          if (
            ((f =
              "string" == typeof e.dictionary
                ? o.string2buf(e.dictionary)
                : "[object ArrayBuffer]" === c.call(e.dictionary)
                ? new Uint8Array(e.dictionary)
                : e.dictionary),
            0 !== (r = n.deflateSetDictionary(this.strm, f)))
          )
            throw new Error(a[r]);
          this._dict_set = !0;
        }
      }
      function f(t, e) {
        var r = new u(e);
        if ((r.push(t, !0), r.err)) throw r.msg || a[r.err];
        return r.result;
      }
      (u.prototype.push = function (t, e) {
        var r,
          a,
          s = this.strm,
          u = this.options.chunkSize;
        if (this.ended) return !1;
        (a = e === ~~e ? e : !0 === e ? 4 : 0),
          "string" == typeof t
            ? (s.input = o.string2buf(t))
            : "[object ArrayBuffer]" === c.call(t)
            ? (s.input = new Uint8Array(t))
            : (s.input = t),
          (s.next_in = 0),
          (s.avail_in = s.input.length);
        do {
          if (
            (0 === s.avail_out &&
              ((s.output = new i.Buf8(u)), (s.next_out = 0), (s.avail_out = u)),
            1 !== (r = n.deflate(s, a)) && 0 !== r)
          )
            return this.onEnd(r), (this.ended = !0), !1;
          (0 !== s.avail_out && (0 !== s.avail_in || (4 !== a && 2 !== a))) ||
            ("string" === this.options.to
              ? this.onData(o.buf2binstring(i.shrinkBuf(s.output, s.next_out)))
              : this.onData(i.shrinkBuf(s.output, s.next_out)));
        } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== r);
        return 4 === a
          ? ((r = n.deflateEnd(this.strm)),
            this.onEnd(r),
            (this.ended = !0),
            0 === r)
          : 2 !== a || (this.onEnd(0), (s.avail_out = 0), !0);
      }),
        (u.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (u.prototype.onEnd = function (t) {
          0 === t &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = i.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg);
        }),
        (e.Deflate = u),
        (e.deflate = f),
        (e.deflateRaw = function (t, e) {
          return ((e = e || {}).raw = !0), f(t, e);
        }),
        (e.gzip = function (t, e) {
          return ((e = e || {}).gzip = !0), f(t, e);
        });
    },
    function (t, e, r) {
      "use strict";
      var n,
        i = r(27),
        o = r(142),
        a = r(108),
        s = r(109),
        c = r(86);
      function u(t, e) {
        return (t.msg = c[e]), e;
      }
      function f(t) {
        return (t << 1) - (t > 4 ? 9 : 0);
      }
      function l(t) {
        for (var e = t.length; --e >= 0; ) t[e] = 0;
      }
      function d(t) {
        var e = t.state,
          r = e.pending;
        r > t.avail_out && (r = t.avail_out),
          0 !== r &&
            (i.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out),
            (t.next_out += r),
            (e.pending_out += r),
            (t.total_out += r),
            (t.avail_out -= r),
            (e.pending -= r),
            0 === e.pending && (e.pending_out = 0));
      }
      function h(t, e) {
        o._tr_flush_block(
          t,
          t.block_start >= 0 ? t.block_start : -1,
          t.strstart - t.block_start,
          e
        ),
          (t.block_start = t.strstart),
          d(t.strm);
      }
      function p(t, e) {
        t.pending_buf[t.pending++] = e;
      }
      function y(t, e) {
        (t.pending_buf[t.pending++] = (e >>> 8) & 255),
          (t.pending_buf[t.pending++] = 255 & e);
      }
      function g(t, e) {
        var r,
          n,
          i = t.max_chain_length,
          o = t.strstart,
          a = t.prev_length,
          s = t.nice_match,
          c = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0,
          u = t.window,
          f = t.w_mask,
          l = t.prev,
          d = t.strstart + 258,
          h = u[o + a - 1],
          p = u[o + a];
        t.prev_length >= t.good_match && (i >>= 2),
          s > t.lookahead && (s = t.lookahead);
        do {
          if (
            u[(r = e) + a] === p &&
            u[r + a - 1] === h &&
            u[r] === u[o] &&
            u[++r] === u[o + 1]
          ) {
            (o += 2), r++;
            do {} while (
              u[++o] === u[++r] &&
              u[++o] === u[++r] &&
              u[++o] === u[++r] &&
              u[++o] === u[++r] &&
              u[++o] === u[++r] &&
              u[++o] === u[++r] &&
              u[++o] === u[++r] &&
              u[++o] === u[++r] &&
              o < d
            );
            if (((n = 258 - (d - o)), (o = d - 258), n > a)) {
              if (((t.match_start = e), (a = n), n >= s)) break;
              (h = u[o + a - 1]), (p = u[o + a]);
            }
          }
        } while ((e = l[e & f]) > c && 0 != --i);
        return a <= t.lookahead ? a : t.lookahead;
      }
      function v(t) {
        var e,
          r,
          n,
          o,
          c,
          u,
          f,
          l,
          d,
          h,
          p = t.w_size;
        do {
          if (
            ((o = t.window_size - t.lookahead - t.strstart),
            t.strstart >= p + (p - 262))
          ) {
            i.arraySet(t.window, t.window, p, p, 0),
              (t.match_start -= p),
              (t.strstart -= p),
              (t.block_start -= p),
              (e = r = t.hash_size);
            do {
              (n = t.head[--e]), (t.head[e] = n >= p ? n - p : 0);
            } while (--r);
            e = r = p;
            do {
              (n = t.prev[--e]), (t.prev[e] = n >= p ? n - p : 0);
            } while (--r);
            o += p;
          }
          if (0 === t.strm.avail_in) break;
          if (
            ((u = t.strm),
            (f = t.window),
            (l = t.strstart + t.lookahead),
            (d = o),
            (h = void 0),
            (h = u.avail_in) > d && (h = d),
            (r =
              0 === h
                ? 0
                : ((u.avail_in -= h),
                  i.arraySet(f, u.input, u.next_in, h, l),
                  1 === u.state.wrap
                    ? (u.adler = a(u.adler, f, h, l))
                    : 2 === u.state.wrap && (u.adler = s(u.adler, f, h, l)),
                  (u.next_in += h),
                  (u.total_in += h),
                  h)),
            (t.lookahead += r),
            t.lookahead + t.insert >= 3)
          )
            for (
              c = t.strstart - t.insert,
                t.ins_h = t.window[c],
                t.ins_h =
                  ((t.ins_h << t.hash_shift) ^ t.window[c + 1]) & t.hash_mask;
              t.insert &&
              ((t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[c + 3 - 1]) &
                t.hash_mask),
              (t.prev[c & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = c),
              c++,
              t.insert--,
              !(t.lookahead + t.insert < 3));

            );
        } while (t.lookahead < 262 && 0 !== t.strm.avail_in);
      }
      function m(t, e) {
        for (var r, n; ; ) {
          if (t.lookahead < 262) {
            if ((v(t), t.lookahead < 262 && 0 === e)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((r = 0),
            t.lookahead >= 3 &&
              ((t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
                t.hash_mask),
              (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            0 !== r &&
              t.strstart - r <= t.w_size - 262 &&
              (t.match_length = g(t, r)),
            t.match_length >= 3)
          )
            if (
              ((n = o._tr_tally(
                t,
                t.strstart - t.match_start,
                t.match_length - 3
              )),
              (t.lookahead -= t.match_length),
              t.match_length <= t.max_lazy_match && t.lookahead >= 3)
            ) {
              t.match_length--;
              do {
                t.strstart++,
                  (t.ins_h =
                    ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
                    t.hash_mask),
                  (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart);
              } while (0 != --t.match_length);
              t.strstart++;
            } else
              (t.strstart += t.match_length),
                (t.match_length = 0),
                (t.ins_h = t.window[t.strstart]),
                (t.ins_h =
                  ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
                  t.hash_mask);
          else
            (n = o._tr_tally(t, 0, t.window[t.strstart])),
              t.lookahead--,
              t.strstart++;
          if (n && (h(t, !1), 0 === t.strm.avail_out)) return 1;
        }
        return (
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          4 === e
            ? (h(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
            ? 1
            : 2
        );
      }
      function w(t, e) {
        for (var r, n, i; ; ) {
          if (t.lookahead < 262) {
            if ((v(t), t.lookahead < 262 && 0 === e)) return 1;
            if (0 === t.lookahead) break;
          }
          if (
            ((r = 0),
            t.lookahead >= 3 &&
              ((t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
                t.hash_mask),
              (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            (t.prev_length = t.match_length),
            (t.prev_match = t.match_start),
            (t.match_length = 2),
            0 !== r &&
              t.prev_length < t.max_lazy_match &&
              t.strstart - r <= t.w_size - 262 &&
              ((t.match_length = g(t, r)),
              t.match_length <= 5 &&
                (1 === t.strategy ||
                  (3 === t.match_length &&
                    t.strstart - t.match_start > 4096)) &&
                (t.match_length = 2)),
            t.prev_length >= 3 && t.match_length <= t.prev_length)
          ) {
            (i = t.strstart + t.lookahead - 3),
              (n = o._tr_tally(
                t,
                t.strstart - 1 - t.prev_match,
                t.prev_length - 3
              )),
              (t.lookahead -= t.prev_length - 1),
              (t.prev_length -= 2);
            do {
              ++t.strstart <= i &&
                ((t.ins_h =
                  ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) &
                  t.hash_mask),
                (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart));
            } while (0 != --t.prev_length);
            if (
              ((t.match_available = 0),
              (t.match_length = 2),
              t.strstart++,
              n && (h(t, !1), 0 === t.strm.avail_out))
            )
              return 1;
          } else if (t.match_available) {
            if (
              ((n = o._tr_tally(t, 0, t.window[t.strstart - 1])) && h(t, !1),
              t.strstart++,
              t.lookahead--,
              0 === t.strm.avail_out)
            )
              return 1;
          } else (t.match_available = 1), t.strstart++, t.lookahead--;
        }
        return (
          t.match_available &&
            ((n = o._tr_tally(t, 0, t.window[t.strstart - 1])),
            (t.match_available = 0)),
          (t.insert = t.strstart < 2 ? t.strstart : 2),
          4 === e
            ? (h(t, !0), 0 === t.strm.avail_out ? 3 : 4)
            : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
            ? 1
            : 2
        );
      }
      function b(t, e, r, n, i) {
        (this.good_length = t),
          (this.max_lazy = e),
          (this.nice_length = r),
          (this.max_chain = n),
          (this.func = i);
      }
      function _() {
        (this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = 8),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new i.Buf16(1146)),
          (this.dyn_dtree = new i.Buf16(122)),
          (this.bl_tree = new i.Buf16(78)),
          l(this.dyn_ltree),
          l(this.dyn_dtree),
          l(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new i.Buf16(16)),
          (this.heap = new i.Buf16(573)),
          l(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new i.Buf16(573)),
          l(this.depth),
          (this.l_buf = 0),
          (this.lit_bufsize = 0),
          (this.last_lit = 0),
          (this.d_buf = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0);
      }
      function O(t) {
        var e;
        return t && t.state
          ? ((t.total_in = t.total_out = 0),
            (t.data_type = 2),
            ((e = t.state).pending = 0),
            (e.pending_out = 0),
            e.wrap < 0 && (e.wrap = -e.wrap),
            (e.status = e.wrap ? 42 : 113),
            (t.adler = 2 === e.wrap ? 0 : 1),
            (e.last_flush = 0),
            o._tr_init(e),
            0)
          : u(t, -2);
      }
      function j(t) {
        var e,
          r = O(t);
        return (
          0 === r &&
            (((e = t.state).window_size = 2 * e.w_size),
            l(e.head),
            (e.max_lazy_match = n[e.level].max_lazy),
            (e.good_match = n[e.level].good_length),
            (e.nice_match = n[e.level].nice_length),
            (e.max_chain_length = n[e.level].max_chain),
            (e.strstart = 0),
            (e.block_start = 0),
            (e.lookahead = 0),
            (e.insert = 0),
            (e.match_length = e.prev_length = 2),
            (e.match_available = 0),
            (e.ins_h = 0)),
          r
        );
      }
      function x(t, e, r, n, o, a) {
        if (!t) return -2;
        var s = 1;
        if (
          (-1 === e && (e = 6),
          n < 0 ? ((s = 0), (n = -n)) : n > 15 && ((s = 2), (n -= 16)),
          o < 1 ||
            o > 9 ||
            8 !== r ||
            n < 8 ||
            n > 15 ||
            e < 0 ||
            e > 9 ||
            a < 0 ||
            a > 4)
        )
          return u(t, -2);
        8 === n && (n = 9);
        var c = new _();
        return (
          (t.state = c),
          (c.strm = t),
          (c.wrap = s),
          (c.gzhead = null),
          (c.w_bits = n),
          (c.w_size = 1 << c.w_bits),
          (c.w_mask = c.w_size - 1),
          (c.hash_bits = o + 7),
          (c.hash_size = 1 << c.hash_bits),
          (c.hash_mask = c.hash_size - 1),
          (c.hash_shift = ~~((c.hash_bits + 3 - 1) / 3)),
          (c.window = new i.Buf8(2 * c.w_size)),
          (c.head = new i.Buf16(c.hash_size)),
          (c.prev = new i.Buf16(c.w_size)),
          (c.lit_bufsize = 1 << (o + 6)),
          (c.pending_buf_size = 4 * c.lit_bufsize),
          (c.pending_buf = new i.Buf8(c.pending_buf_size)),
          (c.d_buf = 1 * c.lit_bufsize),
          (c.l_buf = 3 * c.lit_bufsize),
          (c.level = e),
          (c.strategy = a),
          (c.method = r),
          j(t)
        );
      }
      (n = [
        new b(0, 0, 0, 0, function (t, e) {
          var r = 65535;
          for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
            if (t.lookahead <= 1) {
              if ((v(t), 0 === t.lookahead && 0 === e)) return 1;
              if (0 === t.lookahead) break;
            }
            (t.strstart += t.lookahead), (t.lookahead = 0);
            var n = t.block_start + r;
            if (
              (0 === t.strstart || t.strstart >= n) &&
              ((t.lookahead = t.strstart - n),
              (t.strstart = n),
              h(t, !1),
              0 === t.strm.avail_out)
            )
              return 1;
            if (
              t.strstart - t.block_start >= t.w_size - 262 &&
              (h(t, !1), 0 === t.strm.avail_out)
            )
              return 1;
          }
          return (
            (t.insert = 0),
            4 === e
              ? (h(t, !0), 0 === t.strm.avail_out ? 3 : 4)
              : (t.strstart > t.block_start && (h(t, !1), t.strm.avail_out), 1)
          );
        }),
        new b(4, 4, 8, 4, m),
        new b(4, 5, 16, 8, m),
        new b(4, 6, 32, 32, m),
        new b(4, 4, 16, 16, w),
        new b(8, 16, 32, 32, w),
        new b(8, 16, 128, 128, w),
        new b(8, 32, 128, 256, w),
        new b(32, 128, 258, 1024, w),
        new b(32, 258, 258, 4096, w),
      ]),
        (e.deflateInit = function (t, e) {
          return x(t, e, 8, 15, 8, 0);
        }),
        (e.deflateInit2 = x),
        (e.deflateReset = j),
        (e.deflateResetKeep = O),
        (e.deflateSetHeader = function (t, e) {
          return t && t.state
            ? 2 !== t.state.wrap
              ? -2
              : ((t.state.gzhead = e), 0)
            : -2;
        }),
        (e.deflate = function (t, e) {
          var r, i, a, c;
          if (!t || !t.state || e > 5 || e < 0) return t ? u(t, -2) : -2;
          if (
            ((i = t.state),
            !t.output ||
              (!t.input && 0 !== t.avail_in) ||
              (666 === i.status && 4 !== e))
          )
            return u(t, 0 === t.avail_out ? -5 : -2);
          if (
            ((i.strm = t),
            (r = i.last_flush),
            (i.last_flush = e),
            42 === i.status)
          )
            if (2 === i.wrap)
              (t.adler = 0),
                p(i, 31),
                p(i, 139),
                p(i, 8),
                i.gzhead
                  ? (p(
                      i,
                      (i.gzhead.text ? 1 : 0) +
                        (i.gzhead.hcrc ? 2 : 0) +
                        (i.gzhead.extra ? 4 : 0) +
                        (i.gzhead.name ? 8 : 0) +
                        (i.gzhead.comment ? 16 : 0)
                    ),
                    p(i, 255 & i.gzhead.time),
                    p(i, (i.gzhead.time >> 8) & 255),
                    p(i, (i.gzhead.time >> 16) & 255),
                    p(i, (i.gzhead.time >> 24) & 255),
                    p(
                      i,
                      9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0
                    ),
                    p(i, 255 & i.gzhead.os),
                    i.gzhead.extra &&
                      i.gzhead.extra.length &&
                      (p(i, 255 & i.gzhead.extra.length),
                      p(i, (i.gzhead.extra.length >> 8) & 255)),
                    i.gzhead.hcrc &&
                      (t.adler = s(t.adler, i.pending_buf, i.pending, 0)),
                    (i.gzindex = 0),
                    (i.status = 69))
                  : (p(i, 0),
                    p(i, 0),
                    p(i, 0),
                    p(i, 0),
                    p(i, 0),
                    p(
                      i,
                      9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0
                    ),
                    p(i, 3),
                    (i.status = 113));
            else {
              var g = (8 + ((i.w_bits - 8) << 4)) << 8;
              (g |=
                (i.strategy >= 2 || i.level < 2
                  ? 0
                  : i.level < 6
                  ? 1
                  : 6 === i.level
                  ? 2
                  : 3) << 6),
                0 !== i.strstart && (g |= 32),
                (g += 31 - (g % 31)),
                (i.status = 113),
                y(i, g),
                0 !== i.strstart &&
                  (y(i, t.adler >>> 16), y(i, 65535 & t.adler)),
                (t.adler = 1);
            }
          if (69 === i.status)
            if (i.gzhead.extra) {
              for (
                a = i.pending;
                i.gzindex < (65535 & i.gzhead.extra.length) &&
                (i.pending !== i.pending_buf_size ||
                  (i.gzhead.hcrc &&
                    i.pending > a &&
                    (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)),
                  d(t),
                  (a = i.pending),
                  i.pending !== i.pending_buf_size));

              )
                p(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
              i.gzhead.hcrc &&
                i.pending > a &&
                (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)),
                i.gzindex === i.gzhead.extra.length &&
                  ((i.gzindex = 0), (i.status = 73));
            } else i.status = 73;
          if (73 === i.status)
            if (i.gzhead.name) {
              a = i.pending;
              do {
                if (
                  i.pending === i.pending_buf_size &&
                  (i.gzhead.hcrc &&
                    i.pending > a &&
                    (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)),
                  d(t),
                  (a = i.pending),
                  i.pending === i.pending_buf_size)
                ) {
                  c = 1;
                  break;
                }
                (c =
                  i.gzindex < i.gzhead.name.length
                    ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                    : 0),
                  p(i, c);
              } while (0 !== c);
              i.gzhead.hcrc &&
                i.pending > a &&
                (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)),
                0 === c && ((i.gzindex = 0), (i.status = 91));
            } else i.status = 91;
          if (91 === i.status)
            if (i.gzhead.comment) {
              a = i.pending;
              do {
                if (
                  i.pending === i.pending_buf_size &&
                  (i.gzhead.hcrc &&
                    i.pending > a &&
                    (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)),
                  d(t),
                  (a = i.pending),
                  i.pending === i.pending_buf_size)
                ) {
                  c = 1;
                  break;
                }
                (c =
                  i.gzindex < i.gzhead.comment.length
                    ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                    : 0),
                  p(i, c);
              } while (0 !== c);
              i.gzhead.hcrc &&
                i.pending > a &&
                (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)),
                0 === c && (i.status = 103);
            } else i.status = 103;
          if (
            (103 === i.status &&
              (i.gzhead.hcrc
                ? (i.pending + 2 > i.pending_buf_size && d(t),
                  i.pending + 2 <= i.pending_buf_size &&
                    (p(i, 255 & t.adler),
                    p(i, (t.adler >> 8) & 255),
                    (t.adler = 0),
                    (i.status = 113)))
                : (i.status = 113)),
            0 !== i.pending)
          ) {
            if ((d(t), 0 === t.avail_out)) return (i.last_flush = -1), 0;
          } else if (0 === t.avail_in && f(e) <= f(r) && 4 !== e)
            return u(t, -5);
          if (666 === i.status && 0 !== t.avail_in) return u(t, -5);
          if (
            0 !== t.avail_in ||
            0 !== i.lookahead ||
            (0 !== e && 666 !== i.status)
          ) {
            var m =
              2 === i.strategy
                ? (function (t, e) {
                    for (var r; ; ) {
                      if (0 === t.lookahead && (v(t), 0 === t.lookahead)) {
                        if (0 === e) return 1;
                        break;
                      }
                      if (
                        ((t.match_length = 0),
                        (r = o._tr_tally(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++,
                        r && (h(t, !1), 0 === t.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (t.insert = 0),
                      4 === e
                        ? (h(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(i, e)
                : 3 === i.strategy
                ? (function (t, e) {
                    for (var r, n, i, a, s = t.window; ; ) {
                      if (t.lookahead <= 258) {
                        if ((v(t), t.lookahead <= 258 && 0 === e)) return 1;
                        if (0 === t.lookahead) break;
                      }
                      if (
                        ((t.match_length = 0),
                        t.lookahead >= 3 &&
                          t.strstart > 0 &&
                          (n = s[(i = t.strstart - 1)]) === s[++i] &&
                          n === s[++i] &&
                          n === s[++i])
                      ) {
                        a = t.strstart + 258;
                        do {} while (
                          n === s[++i] &&
                          n === s[++i] &&
                          n === s[++i] &&
                          n === s[++i] &&
                          n === s[++i] &&
                          n === s[++i] &&
                          n === s[++i] &&
                          n === s[++i] &&
                          i < a
                        );
                        (t.match_length = 258 - (a - i)),
                          t.match_length > t.lookahead &&
                            (t.match_length = t.lookahead);
                      }
                      if (
                        (t.match_length >= 3
                          ? ((r = o._tr_tally(t, 1, t.match_length - 3)),
                            (t.lookahead -= t.match_length),
                            (t.strstart += t.match_length),
                            (t.match_length = 0))
                          : ((r = o._tr_tally(t, 0, t.window[t.strstart])),
                            t.lookahead--,
                            t.strstart++),
                        r && (h(t, !1), 0 === t.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (t.insert = 0),
                      4 === e
                        ? (h(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(i, e)
                : n[i.level].func(i, e);
            if (((3 !== m && 4 !== m) || (i.status = 666), 1 === m || 3 === m))
              return 0 === t.avail_out && (i.last_flush = -1), 0;
            if (
              2 === m &&
              (1 === e
                ? o._tr_align(i)
                : 5 !== e &&
                  (o._tr_stored_block(i, 0, 0, !1),
                  3 === e &&
                    (l(i.head),
                    0 === i.lookahead &&
                      ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
              d(t),
              0 === t.avail_out)
            )
              return (i.last_flush = -1), 0;
          }
          return 4 !== e
            ? 0
            : i.wrap <= 0
            ? 1
            : (2 === i.wrap
                ? (p(i, 255 & t.adler),
                  p(i, (t.adler >> 8) & 255),
                  p(i, (t.adler >> 16) & 255),
                  p(i, (t.adler >> 24) & 255),
                  p(i, 255 & t.total_in),
                  p(i, (t.total_in >> 8) & 255),
                  p(i, (t.total_in >> 16) & 255),
                  p(i, (t.total_in >> 24) & 255))
                : (y(i, t.adler >>> 16), y(i, 65535 & t.adler)),
              d(t),
              i.wrap > 0 && (i.wrap = -i.wrap),
              0 !== i.pending ? 0 : 1);
        }),
        (e.deflateEnd = function (t) {
          var e;
          return t && t.state
            ? 42 !== (e = t.state.status) &&
              69 !== e &&
              73 !== e &&
              91 !== e &&
              103 !== e &&
              113 !== e &&
              666 !== e
              ? u(t, -2)
              : ((t.state = null), 113 === e ? u(t, -3) : 0)
            : -2;
        }),
        (e.deflateSetDictionary = function (t, e) {
          var r,
            n,
            o,
            s,
            c,
            u,
            f,
            d,
            h = e.length;
          if (!t || !t.state) return -2;
          if (
            2 === (s = (r = t.state).wrap) ||
            (1 === s && 42 !== r.status) ||
            r.lookahead
          )
            return -2;
          for (
            1 === s && (t.adler = a(t.adler, e, h, 0)),
              r.wrap = 0,
              h >= r.w_size &&
                (0 === s &&
                  (l(r.head),
                  (r.strstart = 0),
                  (r.block_start = 0),
                  (r.insert = 0)),
                (d = new i.Buf8(r.w_size)),
                i.arraySet(d, e, h - r.w_size, r.w_size, 0),
                (e = d),
                (h = r.w_size)),
              c = t.avail_in,
              u = t.next_in,
              f = t.input,
              t.avail_in = h,
              t.next_in = 0,
              t.input = e,
              v(r);
            r.lookahead >= 3;

          ) {
            (n = r.strstart), (o = r.lookahead - 2);
            do {
              (r.ins_h =
                ((r.ins_h << r.hash_shift) ^ r.window[n + 3 - 1]) &
                r.hash_mask),
                (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                (r.head[r.ins_h] = n),
                n++;
            } while (--o);
            (r.strstart = n), (r.lookahead = 2), v(r);
          }
          return (
            (r.strstart += r.lookahead),
            (r.block_start = r.strstart),
            (r.insert = r.lookahead),
            (r.lookahead = 0),
            (r.match_length = r.prev_length = 2),
            (r.match_available = 0),
            (t.next_in = u),
            (t.input = f),
            (t.avail_in = c),
            (r.wrap = s),
            0
          );
        }),
        (e.deflateInfo = "pako deflate (from Nodeca project)");
    },
    function (t, e, r) {
      "use strict";
      var n = r(27);
      function i(t) {
        for (var e = t.length; --e >= 0; ) t[e] = 0;
      }
      var o = [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0,
        ],
        a = [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ],
        s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        c = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        u = new Array(576);
      i(u);
      var f = new Array(60);
      i(f);
      var l = new Array(512);
      i(l);
      var d = new Array(256);
      i(d);
      var h = new Array(29);
      i(h);
      var p,
        y,
        g,
        v = new Array(30);
      function m(t, e, r, n, i) {
        (this.static_tree = t),
          (this.extra_bits = e),
          (this.extra_base = r),
          (this.elems = n),
          (this.max_length = i),
          (this.has_stree = t && t.length);
      }
      function w(t, e) {
        (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
      }
      function b(t) {
        return t < 256 ? l[t] : l[256 + (t >>> 7)];
      }
      function _(t, e) {
        (t.pending_buf[t.pending++] = 255 & e),
          (t.pending_buf[t.pending++] = (e >>> 8) & 255);
      }
      function O(t, e, r) {
        t.bi_valid > 16 - r
          ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
            _(t, t.bi_buf),
            (t.bi_buf = e >> (16 - t.bi_valid)),
            (t.bi_valid += r - 16))
          : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += r));
      }
      function j(t, e, r) {
        O(t, r[2 * e], r[2 * e + 1]);
      }
      function x(t, e) {
        var r = 0;
        do {
          (r |= 1 & t), (t >>>= 1), (r <<= 1);
        } while (--e > 0);
        return r >>> 1;
      }
      function P(t, e, r) {
        var n,
          i,
          o = new Array(16),
          a = 0;
        for (n = 1; n <= 15; n++) o[n] = a = (a + r[n - 1]) << 1;
        for (i = 0; i <= e; i++) {
          var s = t[2 * i + 1];
          0 !== s && (t[2 * i] = x(o[s]++, s));
        }
      }
      function k(t) {
        var e;
        for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
        (t.dyn_ltree[512] = 1),
          (t.opt_len = t.static_len = 0),
          (t.last_lit = t.matches = 0);
      }
      function E(t) {
        t.bi_valid > 8
          ? _(t, t.bi_buf)
          : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
          (t.bi_buf = 0),
          (t.bi_valid = 0);
      }
      function A(t, e, r, n) {
        var i = 2 * e,
          o = 2 * r;
        return t[i] < t[o] || (t[i] === t[o] && n[e] <= n[r]);
      }
      function S(t, e, r) {
        for (
          var n = t.heap[r], i = r << 1;
          i <= t.heap_len &&
          (i < t.heap_len && A(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
          !A(e, n, t.heap[i], t.depth));

        )
          (t.heap[r] = t.heap[i]), (r = i), (i <<= 1);
        t.heap[r] = n;
      }
      function $(t, e, r) {
        var n,
          i,
          s,
          c,
          u = 0;
        if (0 !== t.last_lit)
          do {
            (n =
              (t.pending_buf[t.d_buf + 2 * u] << 8) |
              t.pending_buf[t.d_buf + 2 * u + 1]),
              (i = t.pending_buf[t.l_buf + u]),
              u++,
              0 === n
                ? j(t, i, e)
                : (j(t, (s = d[i]) + 256 + 1, e),
                  0 !== (c = o[s]) && O(t, (i -= h[s]), c),
                  j(t, (s = b(--n)), r),
                  0 !== (c = a[s]) && O(t, (n -= v[s]), c));
          } while (u < t.last_lit);
        j(t, 256, e);
      }
      function R(t, e) {
        var r,
          n,
          i,
          o = e.dyn_tree,
          a = e.stat_desc.static_tree,
          s = e.stat_desc.has_stree,
          c = e.stat_desc.elems,
          u = -1;
        for (t.heap_len = 0, t.heap_max = 573, r = 0; r < c; r++)
          0 !== o[2 * r]
            ? ((t.heap[++t.heap_len] = u = r), (t.depth[r] = 0))
            : (o[2 * r + 1] = 0);
        for (; t.heap_len < 2; )
          (o[2 * (i = t.heap[++t.heap_len] = u < 2 ? ++u : 0)] = 1),
            (t.depth[i] = 0),
            t.opt_len--,
            s && (t.static_len -= a[2 * i + 1]);
        for (e.max_code = u, r = t.heap_len >> 1; r >= 1; r--) S(t, o, r);
        i = c;
        do {
          (r = t.heap[1]),
            (t.heap[1] = t.heap[t.heap_len--]),
            S(t, o, 1),
            (n = t.heap[1]),
            (t.heap[--t.heap_max] = r),
            (t.heap[--t.heap_max] = n),
            (o[2 * i] = o[2 * r] + o[2 * n]),
            (t.depth[i] =
              (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1),
            (o[2 * r + 1] = o[2 * n + 1] = i),
            (t.heap[1] = i++),
            S(t, o, 1);
        } while (t.heap_len >= 2);
        (t.heap[--t.heap_max] = t.heap[1]),
          (function (t, e) {
            var r,
              n,
              i,
              o,
              a,
              s,
              c = e.dyn_tree,
              u = e.max_code,
              f = e.stat_desc.static_tree,
              l = e.stat_desc.has_stree,
              d = e.stat_desc.extra_bits,
              h = e.stat_desc.extra_base,
              p = e.stat_desc.max_length,
              y = 0;
            for (o = 0; o <= 15; o++) t.bl_count[o] = 0;
            for (
              c[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1;
              r < 573;
              r++
            )
              (o = c[2 * c[2 * (n = t.heap[r]) + 1] + 1] + 1) > p &&
                ((o = p), y++),
                (c[2 * n + 1] = o),
                n > u ||
                  (t.bl_count[o]++,
                  (a = 0),
                  n >= h && (a = d[n - h]),
                  (s = c[2 * n]),
                  (t.opt_len += s * (o + a)),
                  l && (t.static_len += s * (f[2 * n + 1] + a)));
            if (0 !== y) {
              do {
                for (o = p - 1; 0 === t.bl_count[o]; ) o--;
                t.bl_count[o]--,
                  (t.bl_count[o + 1] += 2),
                  t.bl_count[p]--,
                  (y -= 2);
              } while (y > 0);
              for (o = p; 0 !== o; o--)
                for (n = t.bl_count[o]; 0 !== n; )
                  (i = t.heap[--r]) > u ||
                    (c[2 * i + 1] !== o &&
                      ((t.opt_len += (o - c[2 * i + 1]) * c[2 * i]),
                      (c[2 * i + 1] = o)),
                    n--);
            }
          })(t, e),
          P(o, u, t.bl_count);
      }
      function B(t, e, r) {
        var n,
          i,
          o = -1,
          a = e[1],
          s = 0,
          c = 7,
          u = 4;
        for (
          0 === a && ((c = 138), (u = 3)), e[2 * (r + 1) + 1] = 65535, n = 0;
          n <= r;
          n++
        )
          (i = a),
            (a = e[2 * (n + 1) + 1]),
            (++s < c && i === a) ||
              (s < u
                ? (t.bl_tree[2 * i] += s)
                : 0 !== i
                ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[32]++)
                : s <= 10
                ? t.bl_tree[34]++
                : t.bl_tree[36]++,
              (s = 0),
              (o = i),
              0 === a
                ? ((c = 138), (u = 3))
                : i === a
                ? ((c = 6), (u = 3))
                : ((c = 7), (u = 4)));
      }
      function I(t, e, r) {
        var n,
          i,
          o = -1,
          a = e[1],
          s = 0,
          c = 7,
          u = 4;
        for (0 === a && ((c = 138), (u = 3)), n = 0; n <= r; n++)
          if (((i = a), (a = e[2 * (n + 1) + 1]), !(++s < c && i === a))) {
            if (s < u)
              do {
                j(t, i, t.bl_tree);
              } while (0 != --s);
            else
              0 !== i
                ? (i !== o && (j(t, i, t.bl_tree), s--),
                  j(t, 16, t.bl_tree),
                  O(t, s - 3, 2))
                : s <= 10
                ? (j(t, 17, t.bl_tree), O(t, s - 3, 3))
                : (j(t, 18, t.bl_tree), O(t, s - 11, 7));
            (s = 0),
              (o = i),
              0 === a
                ? ((c = 138), (u = 3))
                : i === a
                ? ((c = 6), (u = 3))
                : ((c = 7), (u = 4));
          }
      }
      i(v);
      var T = !1;
      function U(t, e, r, i) {
        O(t, 0 + (i ? 1 : 0), 3),
          (function (t, e, r, i) {
            E(t),
              i && (_(t, r), _(t, ~r)),
              n.arraySet(t.pending_buf, t.window, e, r, t.pending),
              (t.pending += r);
          })(t, e, r, !0);
      }
      (e._tr_init = function (t) {
        T ||
          (!(function () {
            var t,
              e,
              r,
              n,
              i,
              c = new Array(16);
            for (r = 0, n = 0; n < 28; n++)
              for (h[n] = r, t = 0; t < 1 << o[n]; t++) d[r++] = n;
            for (d[r - 1] = n, i = 0, n = 0; n < 16; n++)
              for (v[n] = i, t = 0; t < 1 << a[n]; t++) l[i++] = n;
            for (i >>= 7; n < 30; n++)
              for (v[n] = i << 7, t = 0; t < 1 << (a[n] - 7); t++)
                l[256 + i++] = n;
            for (e = 0; e <= 15; e++) c[e] = 0;
            for (t = 0; t <= 143; ) (u[2 * t + 1] = 8), t++, c[8]++;
            for (; t <= 255; ) (u[2 * t + 1] = 9), t++, c[9]++;
            for (; t <= 279; ) (u[2 * t + 1] = 7), t++, c[7]++;
            for (; t <= 287; ) (u[2 * t + 1] = 8), t++, c[8]++;
            for (P(u, 287, c), t = 0; t < 30; t++)
              (f[2 * t + 1] = 5), (f[2 * t] = x(t, 5));
            (p = new m(u, o, 257, 286, 15)),
              (y = new m(f, a, 0, 30, 15)),
              (g = new m(new Array(0), s, 0, 19, 7));
          })(),
          (T = !0)),
          (t.l_desc = new w(t.dyn_ltree, p)),
          (t.d_desc = new w(t.dyn_dtree, y)),
          (t.bl_desc = new w(t.bl_tree, g)),
          (t.bi_buf = 0),
          (t.bi_valid = 0),
          k(t);
      }),
        (e._tr_stored_block = U),
        (e._tr_flush_block = function (t, e, r, n) {
          var i,
            o,
            a = 0;
          t.level > 0
            ? (2 === t.strm.data_type &&
                (t.strm.data_type = (function (t) {
                  var e,
                    r = 4093624447;
                  for (e = 0; e <= 31; e++, r >>>= 1)
                    if (1 & r && 0 !== t.dyn_ltree[2 * e]) return 0;
                  if (
                    0 !== t.dyn_ltree[18] ||
                    0 !== t.dyn_ltree[20] ||
                    0 !== t.dyn_ltree[26]
                  )
                    return 1;
                  for (e = 32; e < 256; e++)
                    if (0 !== t.dyn_ltree[2 * e]) return 1;
                  return 0;
                })(t)),
              R(t, t.l_desc),
              R(t, t.d_desc),
              (a = (function (t) {
                var e;
                for (
                  B(t, t.dyn_ltree, t.l_desc.max_code),
                    B(t, t.dyn_dtree, t.d_desc.max_code),
                    R(t, t.bl_desc),
                    e = 18;
                  e >= 3 && 0 === t.bl_tree[2 * c[e] + 1];
                  e--
                );
                return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
              })(t)),
              (i = (t.opt_len + 3 + 7) >>> 3),
              (o = (t.static_len + 3 + 7) >>> 3) <= i && (i = o))
            : (i = o = r + 5),
            r + 4 <= i && -1 !== e
              ? U(t, e, r, n)
              : 4 === t.strategy || o === i
              ? (O(t, 2 + (n ? 1 : 0), 3), $(t, u, f))
              : (O(t, 4 + (n ? 1 : 0), 3),
                (function (t, e, r, n) {
                  var i;
                  for (
                    O(t, e - 257, 5), O(t, r - 1, 5), O(t, n - 4, 4), i = 0;
                    i < n;
                    i++
                  )
                    O(t, t.bl_tree[2 * c[i] + 1], 3);
                  I(t, t.dyn_ltree, e - 1), I(t, t.dyn_dtree, r - 1);
                })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
                $(t, t.dyn_ltree, t.dyn_dtree)),
            k(t),
            n && E(t);
        }),
        (e._tr_tally = function (t, e, r) {
          return (
            (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
            (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
            (t.pending_buf[t.l_buf + t.last_lit] = 255 & r),
            t.last_lit++,
            0 === e
              ? t.dyn_ltree[2 * r]++
              : (t.matches++,
                e--,
                t.dyn_ltree[2 * (d[r] + 256 + 1)]++,
                t.dyn_dtree[2 * b(e)]++),
            t.last_lit === t.lit_bufsize - 1
          );
        }),
        (e._tr_align = function (t) {
          O(t, 2, 3),
            j(t, 256, u),
            (function (t) {
              16 === t.bi_valid
                ? (_(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                : t.bi_valid >= 8 &&
                  ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                  (t.bi_buf >>= 8),
                  (t.bi_valid -= 8));
            })(t);
        });
    },
    function (t, e, r) {
      "use strict";
      var n = r(144),
        i = r(27),
        o = r(110),
        a = r(112),
        s = r(86),
        c = r(111),
        u = r(147),
        f = Object.prototype.toString;
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        this.options = i.assign(
          { chunkSize: 16384, windowBits: 0, to: "" },
          t || {}
        );
        var e = this.options;
        e.raw &&
          e.windowBits >= 0 &&
          e.windowBits < 16 &&
          ((e.windowBits = -e.windowBits),
          0 === e.windowBits && (e.windowBits = -15)),
          !(e.windowBits >= 0 && e.windowBits < 16) ||
            (t && t.windowBits) ||
            (e.windowBits += 32),
          e.windowBits > 15 &&
            e.windowBits < 48 &&
            0 == (15 & e.windowBits) &&
            (e.windowBits |= 15),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new c()),
          (this.strm.avail_out = 0);
        var r = n.inflateInit2(this.strm, e.windowBits);
        if (r !== a.Z_OK) throw new Error(s[r]);
        if (
          ((this.header = new u()),
          n.inflateGetHeader(this.strm, this.header),
          e.dictionary &&
            ("string" == typeof e.dictionary
              ? (e.dictionary = o.string2buf(e.dictionary))
              : "[object ArrayBuffer]" === f.call(e.dictionary) &&
                (e.dictionary = new Uint8Array(e.dictionary)),
            e.raw &&
              (r = n.inflateSetDictionary(this.strm, e.dictionary)) !== a.Z_OK))
        )
          throw new Error(s[r]);
      }
      function d(t, e) {
        var r = new l(e);
        if ((r.push(t, !0), r.err)) throw r.msg || s[r.err];
        return r.result;
      }
      (l.prototype.push = function (t, e) {
        var r,
          s,
          c,
          u,
          l,
          d = this.strm,
          h = this.options.chunkSize,
          p = this.options.dictionary,
          y = !1;
        if (this.ended) return !1;
        (s = e === ~~e ? e : !0 === e ? a.Z_FINISH : a.Z_NO_FLUSH),
          "string" == typeof t
            ? (d.input = o.binstring2buf(t))
            : "[object ArrayBuffer]" === f.call(t)
            ? (d.input = new Uint8Array(t))
            : (d.input = t),
          (d.next_in = 0),
          (d.avail_in = d.input.length);
        do {
          if (
            (0 === d.avail_out &&
              ((d.output = new i.Buf8(h)), (d.next_out = 0), (d.avail_out = h)),
            (r = n.inflate(d, a.Z_NO_FLUSH)) === a.Z_NEED_DICT &&
              p &&
              (r = n.inflateSetDictionary(this.strm, p)),
            r === a.Z_BUF_ERROR && !0 === y && ((r = a.Z_OK), (y = !1)),
            r !== a.Z_STREAM_END && r !== a.Z_OK)
          )
            return this.onEnd(r), (this.ended = !0), !1;
          d.next_out &&
            ((0 !== d.avail_out &&
              r !== a.Z_STREAM_END &&
              (0 !== d.avail_in ||
                (s !== a.Z_FINISH && s !== a.Z_SYNC_FLUSH))) ||
              ("string" === this.options.to
                ? ((c = o.utf8border(d.output, d.next_out)),
                  (u = d.next_out - c),
                  (l = o.buf2string(d.output, c)),
                  (d.next_out = u),
                  (d.avail_out = h - u),
                  u && i.arraySet(d.output, d.output, c, u, 0),
                  this.onData(l))
                : this.onData(i.shrinkBuf(d.output, d.next_out)))),
            0 === d.avail_in && 0 === d.avail_out && (y = !0);
        } while ((d.avail_in > 0 || 0 === d.avail_out) && r !== a.Z_STREAM_END);
        return (
          r === a.Z_STREAM_END && (s = a.Z_FINISH),
          s === a.Z_FINISH
            ? ((r = n.inflateEnd(this.strm)),
              this.onEnd(r),
              (this.ended = !0),
              r === a.Z_OK)
            : s !== a.Z_SYNC_FLUSH ||
              (this.onEnd(a.Z_OK), (d.avail_out = 0), !0)
        );
      }),
        (l.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (l.prototype.onEnd = function (t) {
          t === a.Z_OK &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = i.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg);
        }),
        (e.Inflate = l),
        (e.inflate = d),
        (e.inflateRaw = function (t, e) {
          return ((e = e || {}).raw = !0), d(t, e);
        }),
        (e.ungzip = d);
    },
    function (t, e, r) {
      "use strict";
      var n = r(27),
        i = r(108),
        o = r(109),
        a = r(145),
        s = r(146);
      function c(t) {
        return (
          ((t >>> 24) & 255) +
          ((t >>> 8) & 65280) +
          ((65280 & t) << 8) +
          ((255 & t) << 24)
        );
      }
      function u() {
        (this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new n.Buf16(320)),
          (this.work = new n.Buf16(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0);
      }
      function f(t) {
        var e;
        return t && t.state
          ? ((e = t.state),
            (t.total_in = t.total_out = e.total = 0),
            (t.msg = ""),
            e.wrap && (t.adler = 1 & e.wrap),
            (e.mode = 1),
            (e.last = 0),
            (e.havedict = 0),
            (e.dmax = 32768),
            (e.head = null),
            (e.hold = 0),
            (e.bits = 0),
            (e.lencode = e.lendyn = new n.Buf32(852)),
            (e.distcode = e.distdyn = new n.Buf32(592)),
            (e.sane = 1),
            (e.back = -1),
            0)
          : -2;
      }
      function l(t) {
        var e;
        return t && t.state
          ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), f(t))
          : -2;
      }
      function d(t, e) {
        var r, n;
        return t && t.state
          ? ((n = t.state),
            e < 0
              ? ((r = 0), (e = -e))
              : ((r = 1 + (e >> 4)), e < 48 && (e &= 15)),
            e && (e < 8 || e > 15)
              ? -2
              : (null !== n.window && n.wbits !== e && (n.window = null),
                (n.wrap = r),
                (n.wbits = e),
                l(t)))
          : -2;
      }
      function h(t, e) {
        var r, n;
        return t
          ? ((n = new u()),
            (t.state = n),
            (n.window = null),
            0 !== (r = d(t, e)) && (t.state = null),
            r)
          : -2;
      }
      var p,
        y,
        g = !0;
      function v(t) {
        if (g) {
          var e;
          for (p = new n.Buf32(512), y = new n.Buf32(32), e = 0; e < 144; )
            t.lens[e++] = 8;
          for (; e < 256; ) t.lens[e++] = 9;
          for (; e < 280; ) t.lens[e++] = 7;
          for (; e < 288; ) t.lens[e++] = 8;
          for (s(1, t.lens, 0, 288, p, 0, t.work, { bits: 9 }), e = 0; e < 32; )
            t.lens[e++] = 5;
          s(2, t.lens, 0, 32, y, 0, t.work, { bits: 5 }), (g = !1);
        }
        (t.lencode = p), (t.lenbits = 9), (t.distcode = y), (t.distbits = 5);
      }
      function m(t, e, r, i) {
        var o,
          a = t.state;
        return (
          null === a.window &&
            ((a.wsize = 1 << a.wbits),
            (a.wnext = 0),
            (a.whave = 0),
            (a.window = new n.Buf8(a.wsize))),
          i >= a.wsize
            ? (n.arraySet(a.window, e, r - a.wsize, a.wsize, 0),
              (a.wnext = 0),
              (a.whave = a.wsize))
            : ((o = a.wsize - a.wnext) > i && (o = i),
              n.arraySet(a.window, e, r - i, o, a.wnext),
              (i -= o)
                ? (n.arraySet(a.window, e, r - i, i, 0),
                  (a.wnext = i),
                  (a.whave = a.wsize))
                : ((a.wnext += o),
                  a.wnext === a.wsize && (a.wnext = 0),
                  a.whave < a.wsize && (a.whave += o))),
          0
        );
      }
      (e.inflateReset = l),
        (e.inflateReset2 = d),
        (e.inflateResetKeep = f),
        (e.inflateInit = function (t) {
          return h(t, 15);
        }),
        (e.inflateInit2 = h),
        (e.inflate = function (t, e) {
          var r,
            u,
            f,
            l,
            d,
            h,
            p,
            y,
            g,
            w,
            b,
            _,
            O,
            j,
            x,
            P,
            k,
            E,
            A,
            S,
            $,
            R,
            B,
            I,
            T = 0,
            U = new n.Buf8(4),
            C = [
              16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
            ];
          if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
            return -2;
          12 === (r = t.state).mode && (r.mode = 13),
            (d = t.next_out),
            (f = t.output),
            (p = t.avail_out),
            (l = t.next_in),
            (u = t.input),
            (h = t.avail_in),
            (y = r.hold),
            (g = r.bits),
            (w = h),
            (b = p),
            (R = 0);
          t: for (;;)
            switch (r.mode) {
              case 1:
                if (0 === r.wrap) {
                  r.mode = 13;
                  break;
                }
                for (; g < 16; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                if (2 & r.wrap && 35615 === y) {
                  (r.check = 0),
                    (U[0] = 255 & y),
                    (U[1] = (y >>> 8) & 255),
                    (r.check = o(r.check, U, 2, 0)),
                    (y = 0),
                    (g = 0),
                    (r.mode = 2);
                  break;
                }
                if (
                  ((r.flags = 0),
                  r.head && (r.head.done = !1),
                  !(1 & r.wrap) || (((255 & y) << 8) + (y >> 8)) % 31)
                ) {
                  (t.msg = "incorrect header check"), (r.mode = 30);
                  break;
                }
                if (8 != (15 & y)) {
                  (t.msg = "unknown compression method"), (r.mode = 30);
                  break;
                }
                if (((g -= 4), ($ = 8 + (15 & (y >>>= 4))), 0 === r.wbits))
                  r.wbits = $;
                else if ($ > r.wbits) {
                  (t.msg = "invalid window size"), (r.mode = 30);
                  break;
                }
                (r.dmax = 1 << $),
                  (t.adler = r.check = 1),
                  (r.mode = 512 & y ? 10 : 12),
                  (y = 0),
                  (g = 0);
                break;
              case 2:
                for (; g < 16; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                if (((r.flags = y), 8 != (255 & r.flags))) {
                  (t.msg = "unknown compression method"), (r.mode = 30);
                  break;
                }
                if (57344 & r.flags) {
                  (t.msg = "unknown header flags set"), (r.mode = 30);
                  break;
                }
                r.head && (r.head.text = (y >> 8) & 1),
                  512 & r.flags &&
                    ((U[0] = 255 & y),
                    (U[1] = (y >>> 8) & 255),
                    (r.check = o(r.check, U, 2, 0))),
                  (y = 0),
                  (g = 0),
                  (r.mode = 3);
              case 3:
                for (; g < 32; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                r.head && (r.head.time = y),
                  512 & r.flags &&
                    ((U[0] = 255 & y),
                    (U[1] = (y >>> 8) & 255),
                    (U[2] = (y >>> 16) & 255),
                    (U[3] = (y >>> 24) & 255),
                    (r.check = o(r.check, U, 4, 0))),
                  (y = 0),
                  (g = 0),
                  (r.mode = 4);
              case 4:
                for (; g < 16; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                r.head && ((r.head.xflags = 255 & y), (r.head.os = y >> 8)),
                  512 & r.flags &&
                    ((U[0] = 255 & y),
                    (U[1] = (y >>> 8) & 255),
                    (r.check = o(r.check, U, 2, 0))),
                  (y = 0),
                  (g = 0),
                  (r.mode = 5);
              case 5:
                if (1024 & r.flags) {
                  for (; g < 16; ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  (r.length = y),
                    r.head && (r.head.extra_len = y),
                    512 & r.flags &&
                      ((U[0] = 255 & y),
                      (U[1] = (y >>> 8) & 255),
                      (r.check = o(r.check, U, 2, 0))),
                    (y = 0),
                    (g = 0);
                } else r.head && (r.head.extra = null);
                r.mode = 6;
              case 6:
                if (
                  1024 & r.flags &&
                  ((_ = r.length) > h && (_ = h),
                  _ &&
                    (r.head &&
                      (($ = r.head.extra_len - r.length),
                      r.head.extra ||
                        (r.head.extra = new Array(r.head.extra_len)),
                      n.arraySet(r.head.extra, u, l, _, $)),
                    512 & r.flags && (r.check = o(r.check, u, _, l)),
                    (h -= _),
                    (l += _),
                    (r.length -= _)),
                  r.length)
                )
                  break t;
                (r.length = 0), (r.mode = 7);
              case 7:
                if (2048 & r.flags) {
                  if (0 === h) break t;
                  _ = 0;
                  do {
                    ($ = u[l + _++]),
                      r.head &&
                        $ &&
                        r.length < 65536 &&
                        (r.head.name += String.fromCharCode($));
                  } while ($ && _ < h);
                  if (
                    (512 & r.flags && (r.check = o(r.check, u, _, l)),
                    (h -= _),
                    (l += _),
                    $)
                  )
                    break t;
                } else r.head && (r.head.name = null);
                (r.length = 0), (r.mode = 8);
              case 8:
                if (4096 & r.flags) {
                  if (0 === h) break t;
                  _ = 0;
                  do {
                    ($ = u[l + _++]),
                      r.head &&
                        $ &&
                        r.length < 65536 &&
                        (r.head.comment += String.fromCharCode($));
                  } while ($ && _ < h);
                  if (
                    (512 & r.flags && (r.check = o(r.check, u, _, l)),
                    (h -= _),
                    (l += _),
                    $)
                  )
                    break t;
                } else r.head && (r.head.comment = null);
                r.mode = 9;
              case 9:
                if (512 & r.flags) {
                  for (; g < 16; ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  if (y !== (65535 & r.check)) {
                    (t.msg = "header crc mismatch"), (r.mode = 30);
                    break;
                  }
                  (y = 0), (g = 0);
                }
                r.head &&
                  ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                  (t.adler = r.check = 0),
                  (r.mode = 12);
                break;
              case 10:
                for (; g < 32; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                (t.adler = r.check = c(y)), (y = 0), (g = 0), (r.mode = 11);
              case 11:
                if (0 === r.havedict)
                  return (
                    (t.next_out = d),
                    (t.avail_out = p),
                    (t.next_in = l),
                    (t.avail_in = h),
                    (r.hold = y),
                    (r.bits = g),
                    2
                  );
                (t.adler = r.check = 1), (r.mode = 12);
              case 12:
                if (5 === e || 6 === e) break t;
              case 13:
                if (r.last) {
                  (y >>>= 7 & g), (g -= 7 & g), (r.mode = 27);
                  break;
                }
                for (; g < 3; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                switch (((r.last = 1 & y), (g -= 1), 3 & (y >>>= 1))) {
                  case 0:
                    r.mode = 14;
                    break;
                  case 1:
                    if ((v(r), (r.mode = 20), 6 === e)) {
                      (y >>>= 2), (g -= 2);
                      break t;
                    }
                    break;
                  case 2:
                    r.mode = 17;
                    break;
                  case 3:
                    (t.msg = "invalid block type"), (r.mode = 30);
                }
                (y >>>= 2), (g -= 2);
                break;
              case 14:
                for (y >>>= 7 & g, g -= 7 & g; g < 32; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                if ((65535 & y) != ((y >>> 16) ^ 65535)) {
                  (t.msg = "invalid stored block lengths"), (r.mode = 30);
                  break;
                }
                if (
                  ((r.length = 65535 & y),
                  (y = 0),
                  (g = 0),
                  (r.mode = 15),
                  6 === e)
                )
                  break t;
              case 15:
                r.mode = 16;
              case 16:
                if ((_ = r.length)) {
                  if ((_ > h && (_ = h), _ > p && (_ = p), 0 === _)) break t;
                  n.arraySet(f, u, l, _, d),
                    (h -= _),
                    (l += _),
                    (p -= _),
                    (d += _),
                    (r.length -= _);
                  break;
                }
                r.mode = 12;
                break;
              case 17:
                for (; g < 14; ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                if (
                  ((r.nlen = 257 + (31 & y)),
                  (y >>>= 5),
                  (g -= 5),
                  (r.ndist = 1 + (31 & y)),
                  (y >>>= 5),
                  (g -= 5),
                  (r.ncode = 4 + (15 & y)),
                  (y >>>= 4),
                  (g -= 4),
                  r.nlen > 286 || r.ndist > 30)
                ) {
                  (t.msg = "too many length or distance symbols"),
                    (r.mode = 30);
                  break;
                }
                (r.have = 0), (r.mode = 18);
              case 18:
                for (; r.have < r.ncode; ) {
                  for (; g < 3; ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  (r.lens[C[r.have++]] = 7 & y), (y >>>= 3), (g -= 3);
                }
                for (; r.have < 19; ) r.lens[C[r.have++]] = 0;
                if (
                  ((r.lencode = r.lendyn),
                  (r.lenbits = 7),
                  (B = { bits: r.lenbits }),
                  (R = s(0, r.lens, 0, 19, r.lencode, 0, r.work, B)),
                  (r.lenbits = B.bits),
                  R)
                ) {
                  (t.msg = "invalid code lengths set"), (r.mode = 30);
                  break;
                }
                (r.have = 0), (r.mode = 19);
              case 19:
                for (; r.have < r.nlen + r.ndist; ) {
                  for (
                    ;
                    (P =
                      ((T = r.lencode[y & ((1 << r.lenbits) - 1)]) >>> 16) &
                      255),
                      (k = 65535 & T),
                      !((x = T >>> 24) <= g);

                  ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  if (k < 16) (y >>>= x), (g -= x), (r.lens[r.have++] = k);
                  else {
                    if (16 === k) {
                      for (I = x + 2; g < I; ) {
                        if (0 === h) break t;
                        h--, (y += u[l++] << g), (g += 8);
                      }
                      if (((y >>>= x), (g -= x), 0 === r.have)) {
                        (t.msg = "invalid bit length repeat"), (r.mode = 30);
                        break;
                      }
                      ($ = r.lens[r.have - 1]),
                        (_ = 3 + (3 & y)),
                        (y >>>= 2),
                        (g -= 2);
                    } else if (17 === k) {
                      for (I = x + 3; g < I; ) {
                        if (0 === h) break t;
                        h--, (y += u[l++] << g), (g += 8);
                      }
                      (g -= x),
                        ($ = 0),
                        (_ = 3 + (7 & (y >>>= x))),
                        (y >>>= 3),
                        (g -= 3);
                    } else {
                      for (I = x + 7; g < I; ) {
                        if (0 === h) break t;
                        h--, (y += u[l++] << g), (g += 8);
                      }
                      (g -= x),
                        ($ = 0),
                        (_ = 11 + (127 & (y >>>= x))),
                        (y >>>= 7),
                        (g -= 7);
                    }
                    if (r.have + _ > r.nlen + r.ndist) {
                      (t.msg = "invalid bit length repeat"), (r.mode = 30);
                      break;
                    }
                    for (; _--; ) r.lens[r.have++] = $;
                  }
                }
                if (30 === r.mode) break;
                if (0 === r.lens[256]) {
                  (t.msg = "invalid code -- missing end-of-block"),
                    (r.mode = 30);
                  break;
                }
                if (
                  ((r.lenbits = 9),
                  (B = { bits: r.lenbits }),
                  (R = s(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, B)),
                  (r.lenbits = B.bits),
                  R)
                ) {
                  (t.msg = "invalid literal/lengths set"), (r.mode = 30);
                  break;
                }
                if (
                  ((r.distbits = 6),
                  (r.distcode = r.distdyn),
                  (B = { bits: r.distbits }),
                  (R = s(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, B)),
                  (r.distbits = B.bits),
                  R)
                ) {
                  (t.msg = "invalid distances set"), (r.mode = 30);
                  break;
                }
                if (((r.mode = 20), 6 === e)) break t;
              case 20:
                r.mode = 21;
              case 21:
                if (h >= 6 && p >= 258) {
                  (t.next_out = d),
                    (t.avail_out = p),
                    (t.next_in = l),
                    (t.avail_in = h),
                    (r.hold = y),
                    (r.bits = g),
                    a(t, b),
                    (d = t.next_out),
                    (f = t.output),
                    (p = t.avail_out),
                    (l = t.next_in),
                    (u = t.input),
                    (h = t.avail_in),
                    (y = r.hold),
                    (g = r.bits),
                    12 === r.mode && (r.back = -1);
                  break;
                }
                for (
                  r.back = 0;
                  (P =
                    ((T = r.lencode[y & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                    (k = 65535 & T),
                    !((x = T >>> 24) <= g);

                ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                if (P && 0 == (240 & P)) {
                  for (
                    E = x, A = P, S = k;
                    (P =
                      ((T =
                        r.lencode[S + ((y & ((1 << (E + A)) - 1)) >> E)]) >>>
                        16) &
                      255),
                      (k = 65535 & T),
                      !(E + (x = T >>> 24) <= g);

                  ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  (y >>>= E), (g -= E), (r.back += E);
                }
                if (
                  ((y >>>= x), (g -= x), (r.back += x), (r.length = k), 0 === P)
                ) {
                  r.mode = 26;
                  break;
                }
                if (32 & P) {
                  (r.back = -1), (r.mode = 12);
                  break;
                }
                if (64 & P) {
                  (t.msg = "invalid literal/length code"), (r.mode = 30);
                  break;
                }
                (r.extra = 15 & P), (r.mode = 22);
              case 22:
                if (r.extra) {
                  for (I = r.extra; g < I; ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  (r.length += y & ((1 << r.extra) - 1)),
                    (y >>>= r.extra),
                    (g -= r.extra),
                    (r.back += r.extra);
                }
                (r.was = r.length), (r.mode = 23);
              case 23:
                for (
                  ;
                  (P =
                    ((T = r.distcode[y & ((1 << r.distbits) - 1)]) >>> 16) &
                    255),
                    (k = 65535 & T),
                    !((x = T >>> 24) <= g);

                ) {
                  if (0 === h) break t;
                  h--, (y += u[l++] << g), (g += 8);
                }
                if (0 == (240 & P)) {
                  for (
                    E = x, A = P, S = k;
                    (P =
                      ((T =
                        r.distcode[S + ((y & ((1 << (E + A)) - 1)) >> E)]) >>>
                        16) &
                      255),
                      (k = 65535 & T),
                      !(E + (x = T >>> 24) <= g);

                  ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  (y >>>= E), (g -= E), (r.back += E);
                }
                if (((y >>>= x), (g -= x), (r.back += x), 64 & P)) {
                  (t.msg = "invalid distance code"), (r.mode = 30);
                  break;
                }
                (r.offset = k), (r.extra = 15 & P), (r.mode = 24);
              case 24:
                if (r.extra) {
                  for (I = r.extra; g < I; ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  (r.offset += y & ((1 << r.extra) - 1)),
                    (y >>>= r.extra),
                    (g -= r.extra),
                    (r.back += r.extra);
                }
                if (r.offset > r.dmax) {
                  (t.msg = "invalid distance too far back"), (r.mode = 30);
                  break;
                }
                r.mode = 25;
              case 25:
                if (0 === p) break t;
                if (((_ = b - p), r.offset > _)) {
                  if ((_ = r.offset - _) > r.whave && r.sane) {
                    (t.msg = "invalid distance too far back"), (r.mode = 30);
                    break;
                  }
                  _ > r.wnext
                    ? ((_ -= r.wnext), (O = r.wsize - _))
                    : (O = r.wnext - _),
                    _ > r.length && (_ = r.length),
                    (j = r.window);
                } else (j = f), (O = d - r.offset), (_ = r.length);
                _ > p && (_ = p), (p -= _), (r.length -= _);
                do {
                  f[d++] = j[O++];
                } while (--_);
                0 === r.length && (r.mode = 21);
                break;
              case 26:
                if (0 === p) break t;
                (f[d++] = r.length), p--, (r.mode = 21);
                break;
              case 27:
                if (r.wrap) {
                  for (; g < 32; ) {
                    if (0 === h) break t;
                    h--, (y |= u[l++] << g), (g += 8);
                  }
                  if (
                    ((b -= p),
                    (t.total_out += b),
                    (r.total += b),
                    b &&
                      (t.adler = r.check =
                        r.flags
                          ? o(r.check, f, b, d - b)
                          : i(r.check, f, b, d - b)),
                    (b = p),
                    (r.flags ? y : c(y)) !== r.check)
                  ) {
                    (t.msg = "incorrect data check"), (r.mode = 30);
                    break;
                  }
                  (y = 0), (g = 0);
                }
                r.mode = 28;
              case 28:
                if (r.wrap && r.flags) {
                  for (; g < 32; ) {
                    if (0 === h) break t;
                    h--, (y += u[l++] << g), (g += 8);
                  }
                  if (y !== (4294967295 & r.total)) {
                    (t.msg = "incorrect length check"), (r.mode = 30);
                    break;
                  }
                  (y = 0), (g = 0);
                }
                r.mode = 29;
              case 29:
                R = 1;
                break t;
              case 30:
                R = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return -2;
            }
          return (
            (t.next_out = d),
            (t.avail_out = p),
            (t.next_in = l),
            (t.avail_in = h),
            (r.hold = y),
            (r.bits = g),
            (r.wsize ||
              (b !== t.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== e))) &&
            m(t, t.output, t.next_out, b - t.avail_out)
              ? ((r.mode = 31), -4)
              : ((w -= t.avail_in),
                (b -= t.avail_out),
                (t.total_in += w),
                (t.total_out += b),
                (r.total += b),
                r.wrap &&
                  b &&
                  (t.adler = r.check =
                    r.flags
                      ? o(r.check, f, b, t.next_out - b)
                      : i(r.check, f, b, t.next_out - b)),
                (t.data_type =
                  r.bits +
                  (r.last ? 64 : 0) +
                  (12 === r.mode ? 128 : 0) +
                  (20 === r.mode || 15 === r.mode ? 256 : 0)),
                ((0 === w && 0 === b) || 4 === e) && 0 === R && (R = -5),
                R)
          );
        }),
        (e.inflateEnd = function (t) {
          if (!t || !t.state) return -2;
          var e = t.state;
          return e.window && (e.window = null), (t.state = null), 0;
        }),
        (e.inflateGetHeader = function (t, e) {
          var r;
          return t && t.state
            ? 0 == (2 & (r = t.state).wrap)
              ? -2
              : ((r.head = e), (e.done = !1), 0)
            : -2;
        }),
        (e.inflateSetDictionary = function (t, e) {
          var r,
            n = e.length;
          return t && t.state
            ? 0 !== (r = t.state).wrap && 11 !== r.mode
              ? -2
              : 11 === r.mode && i(1, e, n, 0) !== r.check
              ? -3
              : m(t, e, n, n)
              ? ((r.mode = 31), -4)
              : ((r.havedict = 1), 0)
            : -2;
        }),
        (e.inflateInfo = "pako inflate (from Nodeca project)");
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t, e) {
        var r,
          n,
          i,
          o,
          a,
          s,
          c,
          u,
          f,
          l,
          d,
          h,
          p,
          y,
          g,
          v,
          m,
          w,
          b,
          _,
          O,
          j,
          x,
          P,
          k;
        (r = t.state),
          (n = t.next_in),
          (P = t.input),
          (i = n + (t.avail_in - 5)),
          (o = t.next_out),
          (k = t.output),
          (a = o - (e - t.avail_out)),
          (s = o + (t.avail_out - 257)),
          (c = r.dmax),
          (u = r.wsize),
          (f = r.whave),
          (l = r.wnext),
          (d = r.window),
          (h = r.hold),
          (p = r.bits),
          (y = r.lencode),
          (g = r.distcode),
          (v = (1 << r.lenbits) - 1),
          (m = (1 << r.distbits) - 1);
        t: do {
          p < 15 &&
            ((h += P[n++] << p), (p += 8), (h += P[n++] << p), (p += 8)),
            (w = y[h & v]);
          e: for (;;) {
            if (((h >>>= b = w >>> 24), (p -= b), 0 === (b = (w >>> 16) & 255)))
              k[o++] = 65535 & w;
            else {
              if (!(16 & b)) {
                if (0 == (64 & b)) {
                  w = y[(65535 & w) + (h & ((1 << b) - 1))];
                  continue e;
                }
                if (32 & b) {
                  r.mode = 12;
                  break t;
                }
                (t.msg = "invalid literal/length code"), (r.mode = 30);
                break t;
              }
              (_ = 65535 & w),
                (b &= 15) &&
                  (p < b && ((h += P[n++] << p), (p += 8)),
                  (_ += h & ((1 << b) - 1)),
                  (h >>>= b),
                  (p -= b)),
                p < 15 &&
                  ((h += P[n++] << p), (p += 8), (h += P[n++] << p), (p += 8)),
                (w = g[h & m]);
              r: for (;;) {
                if (
                  ((h >>>= b = w >>> 24),
                  (p -= b),
                  !(16 & (b = (w >>> 16) & 255)))
                ) {
                  if (0 == (64 & b)) {
                    w = g[(65535 & w) + (h & ((1 << b) - 1))];
                    continue r;
                  }
                  (t.msg = "invalid distance code"), (r.mode = 30);
                  break t;
                }
                if (
                  ((O = 65535 & w),
                  p < (b &= 15) &&
                    ((h += P[n++] << p),
                    (p += 8) < b && ((h += P[n++] << p), (p += 8))),
                  (O += h & ((1 << b) - 1)) > c)
                ) {
                  (t.msg = "invalid distance too far back"), (r.mode = 30);
                  break t;
                }
                if (((h >>>= b), (p -= b), O > (b = o - a))) {
                  if ((b = O - b) > f && r.sane) {
                    (t.msg = "invalid distance too far back"), (r.mode = 30);
                    break t;
                  }
                  if (((j = 0), (x = d), 0 === l)) {
                    if (((j += u - b), b < _)) {
                      _ -= b;
                      do {
                        k[o++] = d[j++];
                      } while (--b);
                      (j = o - O), (x = k);
                    }
                  } else if (l < b) {
                    if (((j += u + l - b), (b -= l) < _)) {
                      _ -= b;
                      do {
                        k[o++] = d[j++];
                      } while (--b);
                      if (((j = 0), l < _)) {
                        _ -= b = l;
                        do {
                          k[o++] = d[j++];
                        } while (--b);
                        (j = o - O), (x = k);
                      }
                    }
                  } else if (((j += l - b), b < _)) {
                    _ -= b;
                    do {
                      k[o++] = d[j++];
                    } while (--b);
                    (j = o - O), (x = k);
                  }
                  for (; _ > 2; )
                    (k[o++] = x[j++]),
                      (k[o++] = x[j++]),
                      (k[o++] = x[j++]),
                      (_ -= 3);
                  _ && ((k[o++] = x[j++]), _ > 1 && (k[o++] = x[j++]));
                } else {
                  j = o - O;
                  do {
                    (k[o++] = k[j++]),
                      (k[o++] = k[j++]),
                      (k[o++] = k[j++]),
                      (_ -= 3);
                  } while (_ > 2);
                  _ && ((k[o++] = k[j++]), _ > 1 && (k[o++] = k[j++]));
                }
                break;
              }
            }
            break;
          }
        } while (n < i && o < s);
        (n -= _ = p >> 3),
          (h &= (1 << (p -= _ << 3)) - 1),
          (t.next_in = n),
          (t.next_out = o),
          (t.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
          (t.avail_out = o < s ? s - o + 257 : 257 - (o - s)),
          (r.hold = h),
          (r.bits = p);
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(27),
        i = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ],
        o = [
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ],
        a = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ],
        s = [
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ];
      t.exports = function (t, e, r, c, u, f, l, d) {
        var h,
          p,
          y,
          g,
          v,
          m,
          w,
          b,
          _,
          O = d.bits,
          j = 0,
          x = 0,
          P = 0,
          k = 0,
          E = 0,
          A = 0,
          S = 0,
          $ = 0,
          R = 0,
          B = 0,
          I = null,
          T = 0,
          U = new n.Buf16(16),
          C = new n.Buf16(16),
          z = null,
          D = 0;
        for (j = 0; j <= 15; j++) U[j] = 0;
        for (x = 0; x < c; x++) U[e[r + x]]++;
        for (E = O, k = 15; k >= 1 && 0 === U[k]; k--);
        if ((E > k && (E = k), 0 === k))
          return (u[f++] = 20971520), (u[f++] = 20971520), (d.bits = 1), 0;
        for (P = 1; P < k && 0 === U[P]; P++);
        for (E < P && (E = P), $ = 1, j = 1; j <= 15; j++)
          if ((($ <<= 1), ($ -= U[j]) < 0)) return -1;
        if ($ > 0 && (0 === t || 1 !== k)) return -1;
        for (C[1] = 0, j = 1; j < 15; j++) C[j + 1] = C[j] + U[j];
        for (x = 0; x < c; x++) 0 !== e[r + x] && (l[C[e[r + x]]++] = x);
        if (
          (0 === t
            ? ((I = z = l), (m = 19))
            : 1 === t
            ? ((I = i), (T -= 257), (z = o), (D -= 257), (m = 256))
            : ((I = a), (z = s), (m = -1)),
          (B = 0),
          (x = 0),
          (j = P),
          (v = f),
          (A = E),
          (S = 0),
          (y = -1),
          (g = (R = 1 << E) - 1),
          (1 === t && R > 852) || (2 === t && R > 592))
        )
          return 1;
        for (;;) {
          (w = j - S),
            l[x] < m
              ? ((b = 0), (_ = l[x]))
              : l[x] > m
              ? ((b = z[D + l[x]]), (_ = I[T + l[x]]))
              : ((b = 96), (_ = 0)),
            (h = 1 << (j - S)),
            (P = p = 1 << A);
          do {
            u[v + (B >> S) + (p -= h)] = (w << 24) | (b << 16) | _ | 0;
          } while (0 !== p);
          for (h = 1 << (j - 1); B & h; ) h >>= 1;
          if (
            (0 !== h ? ((B &= h - 1), (B += h)) : (B = 0), x++, 0 == --U[j])
          ) {
            if (j === k) break;
            j = e[r + l[x]];
          }
          if (j > E && (B & g) !== y) {
            for (
              0 === S && (S = E), v += P, $ = 1 << (A = j - S);
              A + S < k && !(($ -= U[A + S]) <= 0);

            )
              A++, ($ <<= 1);
            if (((R += 1 << A), (1 === t && R > 852) || (2 === t && R > 592)))
              return 1;
            u[(y = B & g)] = (E << 24) | (A << 16) | (v - f) | 0;
          }
        }
        return (
          0 !== B && (u[v + B] = ((j - S) << 24) | (64 << 16) | 0),
          (d.bits = E),
          0
        );
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {
        (this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        var r,
          n,
          i = t,
          o = e,
          a = i.length,
          s = o.length,
          c = !1,
          u = null,
          f = a + 1,
          l = [],
          d = [],
          h = [],
          p = "",
          y = function (t, e, r) {
            return { x: t, y: e, k: r };
          },
          g = function (t, e) {
            return { elem: t, t: e };
          },
          v = function (t, e, r) {
            var n, c, u;
            for (
              n = e > r ? l[t - 1 + f] : l[t + 1 + f],
                c = (u = Math.max(e, r)) - t;
              c < a && u < s && i[c] === o[u];

            )
              ++c, ++u;
            return (l[t + f] = d.length), (d[d.length] = new y(c, u, n)), u;
          };
        return (
          a >= s &&
            ((r = i),
            (n = a),
            (i = o),
            (o = r),
            (a = s),
            (s = n),
            (c = !0),
            (f = a + 1)),
          {
            SES_DELETE: -1,
            SES_COMMON: 0,
            SES_ADD: 1,
            editdistance: function () {
              return u;
            },
            getlcs: function () {
              return p;
            },
            getses: function () {
              return h;
            },
            compose: function () {
              var t, e, r, n, m, w, b, _;
              for (t = s - a, e = a + s + 3, r = {}, b = 0; b < e; ++b)
                (r[b] = -1), (l[b] = -1);
              n = -1;
              do {
                for (_ = -++n; _ <= t - 1; ++_)
                  r[_ + f] = v(_, r[_ - 1 + f] + 1, r[_ + 1 + f]);
                for (_ = t + n; _ >= t + 1; --_)
                  r[_ + f] = v(_, r[_ - 1 + f] + 1, r[_ + 1 + f]);
                r[t + f] = v(t, r[t - 1 + f] + 1, r[t + 1 + f]);
              } while (r[t + f] !== s);
              for (u = t + 2 * n, m = l[t + f], w = []; -1 !== m; )
                (w[w.length] = new y(d[m].x, d[m].y, null)), (m = d[m].k);
              !(function (t) {
                var e, r, n;
                for (1, e = r = 0, n = t.length - 1; n >= 0; --n)
                  for (; e < t[n].x || r < t[n].y; )
                    t[n].y - t[n].x > r - e
                      ? ((h[h.length] = new g(o[r], c ? -1 : 1)), ++r)
                      : t[n].y - t[n].x < r - e
                      ? ((h[h.length] = new g(i[e], c ? 1 : -1)), ++e)
                      : ((h[h.length] = new g(i[e], 0)), (p += i[e]), ++e, ++r);
              })(w);
            },
          }
        );
      };
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return s;
        });
        var n = r(154),
          i = r(0);
        function o(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function a(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var a = t.apply(e, r);
              function s(t) {
                o(a, n, i, s, c, "next", t);
              }
              function c(t) {
                o(a, n, i, s, c, "throw", t);
              }
              s(void 0);
            });
          };
        }
        function s(t) {
          return c.apply(this, arguments);
        }
        function c() {
          return (c = a(function* ({ object: e }) {
            try {
              Object(i.a)("object", e),
                (e = "string" == typeof e ? t.from(e, "utf8") : t.from(e));
              const r = "blob",
                { oid: o, object: a } = yield Object(n.a)({
                  type: "blob",
                  format: "content",
                  object: e,
                });
              return {
                oid: o,
                type: r,
                object: new Uint8Array(a),
                format: "wrapped",
              };
            } catch (t) {
              throw ((t.caller = "git.hashBlob"), t);
            }
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return d;
        });
        var n = r(14),
          i = r(2),
          o = r(15),
          a = r(12),
          s = r(11),
          c = r(16),
          u = r(1);
        function f(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function l(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                f(o, n, i, a, s, "next", t);
              }
              function s(t) {
                f(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function d(t) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = l(function* ({
            fs: e,
            dir: r,
            gitdir: f = Object(u.a)(r, ".git"),
            type: l,
            object: d,
            format: h = "parsed",
            oid: p,
            encoding: y,
          }) {
            try {
              const r = new i.a(e);
              if ("parsed" === h) {
                switch (l) {
                  case "commit":
                    d = a.a.from(d).toObject();
                    break;
                  case "tree":
                    d = s.a.from(d).toObject();
                    break;
                  case "blob":
                    d = t.from(d, y);
                    break;
                  case "tag":
                    d = o.a.from(d).toObject();
                    break;
                  default:
                    throw new n.a(p || "", l, "blob|commit|tag|tree");
                }
                h = "content";
              }
              return (p = yield Object(c.a)({
                fs: r,
                gitdir: f,
                type: l,
                object: d,
                oid: p,
                format: h,
              }));
            } catch (t) {
              throw ((t.caller = "git.writeObject"), t);
            }
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      function n(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function i(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = t.apply(e, r);
            function s(t) {
              n(a, i, o, s, c, "next", t);
            }
            function c(t) {
              n(a, i, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function o(t) {
        return a.apply(this, arguments);
      }
      function a() {
        return (a = i(function* ({ fs: t, gitdir: e, oid: r }) {
          const n = `objects/${r.slice(0, 2)}/${r.slice(2)}`;
          return t.exists(`${e}/${n}`);
        })).apply(this, arguments);
      }
      var s = r(5),
        c = r(74),
        u = r(1);
      function f(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function l(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              f(o, n, i, a, s, "next", t);
            }
            function s(t) {
              f(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function d(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = l(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: n,
          getExternalRefDelta: i,
        }) {
          let o = yield t.readdir(Object(u.a)(r, "objects/pack"));
          o = o.filter((t) => t.endsWith(".idx"));
          for (const a of o) {
            const o = `${r}/objects/pack/${a}`,
              u = yield Object(c.a)({
                fs: t,
                cache: e,
                filename: o,
                getExternalRefDelta: i,
              });
            if (u.error) throw new s.a(u.error);
            if (u.offsets.has(n)) return !0;
          }
          return !1;
        })).apply(this, arguments);
      }
      var p = r(7);
      function y(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function g(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              y(o, n, i, a, s, "next", t);
            }
            function s(t) {
              y(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function v(t) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = g(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: n,
          format: i = "content",
        }) {
          const a = (n) => Object(p.a)({ fs: t, cache: e, gitdir: r, oid: n });
          let s = yield o({ fs: t, gitdir: r, oid: n });
          return (
            s ||
              (s = yield d({
                fs: t,
                cache: e,
                gitdir: r,
                oid: n,
                getExternalRefDelta: a,
              })),
            s
          );
        })).apply(this, arguments);
      }
      r.d(e, "a", function () {
        return v;
      });
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return d;
        });
        var n = r(85),
          i = r(47),
          o = r(105),
          a = r(25),
          s = r(9),
          c = r(4),
          u = r(16);
        function f(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function l(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function a(t) {
                f(o, n, i, a, s, "next", t);
              }
              function s(t) {
                f(o, n, i, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function d(t) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = l(function* ({
            fs: e,
            cache: r,
            onSign: f,
            gitdir: l,
            ref: d,
            oid: h,
            note: p,
            force: y,
            author: g,
            committer: v,
            signingKey: m,
          }) {
            let w;
            try {
              w = yield c.a.resolve({ gitdir: l, fs: e, ref: d });
            } catch (t) {
              if (!(t instanceof s.a)) throw t;
            }
            let b = (yield Object(i.a)({
              fs: e,
              cache: r,
              gitdir: l,
              oid: w || "4b825dc642cb6eb9a060e54bf8d69288fbee4904",
            })).tree;
            if (y) b = b.filter((t) => t.path !== h);
            else for (const t of b) if (t.path === h) throw new a.a("note", h);
            "string" == typeof p && (p = t.from(p, "utf8"));
            const _ = yield Object(u.a)({
              fs: e,
              gitdir: l,
              type: "blob",
              object: p,
              format: "content",
            });
            b.push({ mode: "100644", path: h, oid: _, type: "blob" });
            const O = yield Object(o.a)({ fs: e, gitdir: l, tree: b });
            return yield Object(n.a)({
              fs: e,
              cache: r,
              onSign: f,
              gitdir: l,
              ref: d,
              tree: O,
              parent: w && [w],
              message: "Note added by 'isomorphic-git addNote'\n",
              author: g,
              committer: v,
              signingKey: m,
            });
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      function n(t) {
        return "5041434b0000000200000000" === t.slice(0, 12).toString("hex");
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return s;
      });
      var n = r(23),
        i = r(17);
      function o(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function s(t) {
              o(a, n, i, s, c, "next", t);
            }
            function c(t) {
              o(a, n, i, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function s(t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = a(function* ({
          type: t,
          object: e,
          format: r = "content",
          oid: o,
        }) {
          return (
            "deflated" !== r &&
              ("wrapped" !== r && (e = n.a.wrap({ type: t, object: e })),
              (o = yield Object(i.a)(e))),
            { oid: o, object: e }
          );
        })).apply(this, arguments);
      }
    },
    function (t, e, r) {
      "use strict";
      (function (t) {
        r.d(e, "a", function () {
          return c;
        });
        var n = r(46),
          i = r(1),
          o = r(99);
        function a(t, e, r, n, i, o, a) {
          try {
            var s = t[o](a),
              c = s.value;
          } catch (t) {
            return void r(t);
          }
          s.done ? e(c) : Promise.resolve(c).then(n, i);
        }
        function s(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, i) {
              var o = t.apply(e, r);
              function s(t) {
                a(o, n, i, s, c, "next", t);
              }
              function c(t) {
                a(o, n, i, s, c, "throw", t);
              }
              s(void 0);
            });
          };
        }
        function c(t) {
          return u.apply(this, arguments);
        }
        function u() {
          return (u = s(function* ({
            fs: e,
            cache: r,
            gitdir: a,
            oids: s,
            write: c,
          }) {
            const u = yield Object(o.a)({
                fs: e,
                cache: r,
                gitdir: a,
                oids: s,
              }),
              f = t.from(yield Object(n.a)(u)),
              l = `pack-${f.slice(-20).toString("hex")}.pack`;
            return c
              ? (yield e.write(Object(i.a)(a, `objects/pack/${l}`), f),
                { filename: l })
              : { filename: l, packfile: new Uint8Array(f) };
          })).apply(this, arguments);
        }
      }.call(this, r(10).Buffer));
    },
    function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(18),
        i = r(32),
        o = r(95),
        a = r(5);
      var s = r(29);
      function c(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function u(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              c(o, n, i, a, s, "next", t);
            }
            function s(t) {
              c(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      class f {
        constructor({ fs: t, gitdir: e, cache: r }) {
          this.treePromise = n.a.acquire(
            { fs: t, gitdir: e, cache: r },
            (function () {
              var t = u(function* (t) {
                return Object(o.a)(t.entries);
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })()
          );
          const i = this;
          this.ConstructEntry = class {
            constructor(t) {
              (this._fullpath = t),
                (this._type = !1),
                (this._mode = !1),
                (this._stat = !1),
                (this._oid = !1);
            }
            type() {
              var t = this;
              return u(function* () {
                return i.type(t);
              })();
            }
            mode() {
              var t = this;
              return u(function* () {
                return i.mode(t);
              })();
            }
            stat() {
              var t = this;
              return u(function* () {
                return i.stat(t);
              })();
            }
            content() {
              var t = this;
              return u(function* () {
                return i.content(t);
              })();
            }
            oid() {
              var t = this;
              return u(function* () {
                return i.oid(t);
              })();
            }
          };
        }
        readdir(t) {
          var e = this;
          return u(function* () {
            const r = t._fullpath,
              n = (yield e.treePromise).get(r);
            if (!n) return null;
            if ("blob" === n.type) return null;
            if ("tree" !== n.type)
              throw new Error(`ENOTDIR: not a directory, scandir '${r}'`);
            const o = n.children.map((t) => t.fullpath);
            return o.sort(i.a), o;
          })();
        }
        type(t) {
          return u(function* () {
            return !1 === t._type && (yield t.stat()), t._type;
          })();
        }
        mode(t) {
          return u(function* () {
            return !1 === t._mode && (yield t.stat()), t._mode;
          })();
        }
        stat(t) {
          var e = this;
          return u(function* () {
            if (!1 === t._stat) {
              const r = (yield e.treePromise).get(t._fullpath);
              if (!r)
                throw new Error(
                  `ENOENT: no such file or directory, lstat '${t._fullpath}'`
                );
              const n = "tree" === r.type ? {} : Object(s.a)(r.metadata);
              (t._type =
                "tree" === r.type
                  ? "tree"
                  : (function (t) {
                      switch (t) {
                        case 16384:
                          return "tree";
                        case 33188:
                        case 33261:
                        case 40960:
                          return "blob";
                        case 57344:
                          return "commit";
                      }
                      throw new a.a(
                        `Unexpected GitTree entry mode: ${t.toString(8)}`
                      );
                    })(n.mode)),
                (t._mode = n.mode),
                "tree" === r.type ? (t._stat = void 0) : (t._stat = n);
            }
            return t._stat;
          })();
        }
        content(t) {
          return u(function* () {})();
        }
        oid(t) {
          var e = this;
          return u(function* () {
            if (!1 === t._oid) {
              const r = (yield e.treePromise).get(t._fullpath);
              t._oid = r.metadata.oid;
            }
            return t._oid;
          })();
        }
      }
      var l = r(31);
      function d() {
        const t = Object.create(null);
        return (
          Object.defineProperty(t, l.a, {
            value: function ({ fs: t, gitdir: e, cache: r }) {
              return new f({ fs: t, gitdir: e, cache: r });
            },
          }),
          Object.freeze(t),
          t
        );
      }
      var h = r(35),
        p = r(61),
        y = r(1),
        g = r(17),
        v = r(23);
      function m(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function w(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              m(o, n, i, a, s, "next", t);
            }
            function s(t) {
              m(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      class b {
        constructor({ fs: t, dir: e, gitdir: r, cache: n }) {
          (this.fs = t), (this.cache = n), (this.dir = e), (this.gitdir = r);
          const i = this;
          this.ConstructEntry = class {
            constructor(t) {
              (this._fullpath = t),
                (this._type = !1),
                (this._mode = !1),
                (this._stat = !1),
                (this._content = !1),
                (this._oid = !1);
            }
            type() {
              var t = this;
              return w(function* () {
                return i.type(t);
              })();
            }
            mode() {
              var t = this;
              return w(function* () {
                return i.mode(t);
              })();
            }
            stat() {
              var t = this;
              return w(function* () {
                return i.stat(t);
              })();
            }
            content() {
              var t = this;
              return w(function* () {
                return i.content(t);
              })();
            }
            oid() {
              var t = this;
              return w(function* () {
                return i.oid(t);
              })();
            }
          };
        }
        readdir(t) {
          var e = this;
          return w(function* () {
            const r = t._fullpath,
              { fs: n, dir: i } = e,
              o = yield n.readdir(Object(y.a)(i, r));
            return null === o ? null : o.map((t) => Object(y.a)(r, t));
          })();
        }
        type(t) {
          return w(function* () {
            return !1 === t._type && (yield t.stat()), t._type;
          })();
        }
        mode(t) {
          return w(function* () {
            return !1 === t._mode && (yield t.stat()), t._mode;
          })();
        }
        stat(t) {
          var e = this;
          return w(function* () {
            if (!1 === t._stat) {
              const { fs: r, dir: n } = e;
              let i = yield r.lstat(`${n}/${t._fullpath}`);
              if (!i)
                throw new Error(
                  `ENOENT: no such file or directory, lstat '${t._fullpath}'`
                );
              let o = i.isDirectory() ? "tree" : "blob";
              "blob" !== o ||
                i.isFile() ||
                i.isSymbolicLink() ||
                (o = "special"),
                (t._type = o),
                (i = Object(s.a)(i)),
                (t._mode = i.mode),
                -1 === i.size && t._actualSize && (i.size = t._actualSize),
                (t._stat = i);
            }
            return t._stat;
          })();
        }
        content(t) {
          var e = this;
          return w(function* () {
            if (!1 === t._content) {
              const { fs: r, dir: n } = e;
              if ("tree" === (yield t.type())) t._content = void 0;
              else {
                const e = yield r.read(`${n}/${t._fullpath}`);
                (t._actualSize = e.length),
                  t._stat &&
                    -1 === t._stat.size &&
                    (t._stat.size = t._actualSize),
                  (t._content = new Uint8Array(e));
              }
            }
            return t._content;
          })();
        }
        oid(t) {
          var e = this;
          return w(function* () {
            if (!1 === t._oid) {
              const { fs: r, gitdir: i, cache: o } = e;
              let a;
              yield n.a.acquire(
                { fs: r, gitdir: i, cache: o },
                (function () {
                  var e = w(function* (e) {
                    const r = e.entriesMap.get(t._fullpath),
                      n = yield t.stat();
                    if (!r || Object(p.a)(n, r)) {
                      void 0 === (yield t.content())
                        ? (a = void 0)
                        : ((a = yield Object(g.a)(
                            v.a.wrap({
                              type: "blob",
                              object: yield t.content(),
                            })
                          )),
                          r &&
                            a === r.oid &&
                            n.mode === r.mode &&
                            Object(p.a)(n, r) &&
                            e.insert({
                              filepath: t._fullpath,
                              stats: n,
                              oid: a,
                            }));
                    } else a = r.oid;
                  });
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
                (t._oid = a);
            }
            return t._oid;
          })();
        }
      }
      function _() {
        const t = Object.create(null);
        return (
          Object.defineProperty(t, l.a, {
            value: function ({ fs: t, dir: e, gitdir: r, cache: n }) {
              return new b({ fs: t, dir: e, gitdir: r, cache: n });
            },
          }),
          Object.freeze(t),
          t
        );
      }
      var O = r(93),
        j = r(9),
        x = r(55),
        P = r(2),
        k = r(16),
        E = r(0);
      function A(t) {
        let e;
        for (; ~(e = t.indexOf(92)); ) t[e] = 47;
        return t;
      }
      function S(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function $(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              S(o, n, i, a, s, "next", t);
            }
            function s(t) {
              S(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function R(t) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = $(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          filepath: i,
          cache: o = {},
          force: a = !1,
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("dir", e),
              Object(E.a)("gitdir", r),
              Object(E.a)("filepath", i);
            const s = new P.a(t);
            yield n.a.acquire(
              { fs: s, gitdir: r, cache: o },
              (function () {
                var t = $(function* (t) {
                  return I({
                    dir: e,
                    gitdir: r,
                    fs: s,
                    filepath: i,
                    index: t,
                    force: a,
                  });
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            );
          } catch (t) {
            throw ((t.caller = "git.add"), t);
          }
        })).apply(this, arguments);
      }
      function I(t) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = $(function* ({
          dir: t,
          gitdir: e,
          fs: r,
          filepath: n,
          index: i,
          force: o,
        }) {
          const a = (n = Array.isArray(n) ? n : [n]).map(
              (function () {
                var n = $(function* (n) {
                  if (!o) {
                    if (
                      yield x.a.isIgnored({
                        fs: r,
                        dir: t,
                        gitdir: e,
                        filepath: n,
                      })
                    )
                      return;
                  }
                  const a = yield r.lstat(Object(y.a)(t, n));
                  if (!a) throw new j.a(n);
                  if (a.isDirectory()) {
                    const a = (yield r.readdir(Object(y.a)(t, n))).map((a) =>
                      I({
                        dir: t,
                        gitdir: e,
                        fs: r,
                        filepath: [Object(y.a)(n, a)],
                        index: i,
                        force: o,
                      })
                    );
                    yield Promise.all(a);
                  } else {
                    const o = a.isSymbolicLink()
                      ? yield r.readlink(Object(y.a)(t, n)).then(A)
                      : yield r.read(Object(y.a)(t, n));
                    if (null === o) throw new j.a(n);
                    const s = yield Object(k.a)({
                      fs: r,
                      gitdir: e,
                      type: "blob",
                      object: o,
                    });
                    i.insert({ filepath: n, stats: a, oid: s });
                  }
                });
                return function (t) {
                  return n.apply(this, arguments);
                };
              })()
            ),
            s = yield Promise.allSettled(a),
            c = s.filter((t) => "rejected" === t.status).map((t) => t.reason);
          if (c.length > 1) throw new O.a(c);
          if (1 === c.length) throw c[0];
          return s
            .filter((t) => "fulfilled" === t.status && t.value)
            .map((t) => t.value);
        })).apply(this, arguments);
      }
      var U = r(152),
        C = r(22),
        z = r(13);
      function D(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function N(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              D(o, n, i, a, s, "next", t);
            }
            function s(t) {
              D(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function M(t) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = N(function* ({ fs: t, gitdir: e, path: r }) {
          return (yield z.a.get({ fs: t, gitdir: e })).get(r);
        })).apply(this, arguments);
      }
      function H(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function L(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              H(o, n, i, a, s, "next", t);
            }
            function s(t) {
              H(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function G(t) {
        return Y.apply(this, arguments);
      }
      function Y() {
        return (Y = L(function* ({ fs: t, gitdir: e, author: r = {} }) {
          let { name: n, email: i, timestamp: o, timezoneOffset: a } = r;
          if (
            ((n = n || (yield M({ fs: t, gitdir: e, path: "user.name" }))),
            (i =
              i || (yield M({ fs: t, gitdir: e, path: "user.email" })) || ""),
            void 0 !== n)
          )
            return (
              (o = null != o ? o : Math.floor(Date.now() / 1e3)),
              (a = null != a ? a : new Date(1e3 * o).getTimezoneOffset()),
              { name: n, email: i, timestamp: o, timezoneOffset: a }
            );
        })).apply(this, arguments);
      }
      function Z(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function W(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Z(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Z(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function q(t) {
        return K.apply(this, arguments);
      }
      function K() {
        return (K = W(function* ({
          fs: t,
          gitdir: e,
          author: r,
          committer: n,
        }) {
          return (
            (n = Object.assign({}, n || r)),
            r &&
              ((n.timestamp = n.timestamp || r.timestamp),
              (n.timezoneOffset = n.timezoneOffset || r.timezoneOffset)),
            (n = yield G({ fs: t, gitdir: e, author: n }))
          );
        })).apply(this, arguments);
      }
      function V(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function X(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              V(o, n, i, a, s, "next", t);
            }
            function s(t) {
              V(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function J(t) {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = X(function* ({
          fs: t,
          onSign: e,
          dir: r,
          gitdir: n = Object(y.a)(r, ".git"),
          ref: i = "refs/notes/commits",
          oid: o,
          note: a,
          force: s,
          author: c,
          committer: u,
          signingKey: f,
          cache: l = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", n),
              Object(E.a)("oid", o),
              Object(E.a)("note", a),
              f && Object(E.a)("onSign", e);
            const r = new P.a(t),
              d = yield G({ fs: r, gitdir: n, author: c });
            if (!d) throw new C.a("author");
            const h = yield q({ fs: r, gitdir: n, author: d, committer: u });
            if (!h) throw new C.a("committer");
            return yield Object(U.a)({
              fs: new P.a(r),
              cache: l,
              onSign: e,
              gitdir: n,
              ref: i,
              oid: o,
              note: a,
              force: s,
              author: d,
              committer: h,
              signingKey: f,
            });
          } catch (t) {
            throw ((t.caller = "git.addNote"), t);
          }
        })).apply(this, arguments);
      }
      var tt = r(38),
        et = r.n(tt),
        rt = r(25),
        nt = r(36);
      function it(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ot(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              it(o, n, i, a, s, "next", t);
            }
            function s(t) {
              it(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function at(t) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = ot(function* ({
          fs: t,
          gitdir: e,
          remote: r,
          url: n,
          force: i,
        }) {
          if (r !== et.a.clean(r)) throw new nt.a(r, et.a.clean(r));
          const o = yield z.a.get({ fs: t, gitdir: e });
          if (!i) {
            if (
              (yield o.getSubsections("remote")).includes(r) &&
              n !== (yield o.get(`remote.${r}.url`))
            )
              throw new rt.a("remote", r);
          }
          yield o.set(`remote.${r}.url`, n),
            yield o.set(
              `remote.${r}.fetch`,
              `+refs/heads/*:refs/remotes/${r}/*`
            ),
            yield z.a.save({ fs: t, gitdir: e, config: o });
        })).apply(this, arguments);
      }
      function ct(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ut(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ct(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ct(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ft(t) {
        return lt.apply(this, arguments);
      }
      function lt() {
        return (lt = ut(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          remote: n,
          url: i,
          force: o = !1,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("remote", n),
              Object(E.a)("url", i),
              yield at({
                fs: new P.a(t),
                gitdir: r,
                remote: n,
                url: i,
                force: o,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.addRemote"), t);
          }
        })).apply(this, arguments);
      }
      var dt = r(4),
        ht = r(15),
        pt = r(7);
      function yt(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function gt(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              yt(o, n, i, a, s, "next", t);
            }
            function s(t) {
              yt(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function vt(t) {
        return mt.apply(this, arguments);
      }
      function mt() {
        return (mt = gt(function* ({
          fs: t,
          cache: e,
          onSign: r,
          gitdir: n,
          ref: i,
          tagger: o,
          message: a = i,
          gpgsig: s,
          object: c,
          signingKey: u,
          force: f = !1,
        }) {
          if (
            ((i = i.startsWith("refs/tags/") ? i : `refs/tags/${i}`),
            !f && (yield dt.a.exists({ fs: t, gitdir: n, ref: i })))
          )
            throw new rt.a("tag", i);
          const l = yield dt.a.resolve({ fs: t, gitdir: n, ref: c || "HEAD" }),
            { type: d } = yield Object(pt.a)({
              fs: t,
              cache: e,
              gitdir: n,
              oid: l,
            });
          let h = ht.a.from({
            object: l,
            type: d,
            tag: i.replace("refs/tags/", ""),
            tagger: o,
            message: a,
            gpgsig: s,
          });
          u && (h = yield ht.a.sign(h, r, u));
          const p = yield Object(k.a)({
            fs: t,
            gitdir: n,
            type: "tag",
            object: h.toObject(),
          });
          yield dt.a.writeRef({ fs: t, gitdir: n, ref: i, value: p });
        })).apply(this, arguments);
      }
      function wt(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function bt(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              wt(o, n, i, a, s, "next", t);
            }
            function s(t) {
              wt(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function _t(t) {
        return Ot.apply(this, arguments);
      }
      function Ot() {
        return (Ot = bt(function* ({
          fs: t,
          onSign: e,
          dir: r,
          gitdir: n = Object(y.a)(r, ".git"),
          ref: i,
          tagger: o,
          message: a = i,
          gpgsig: s,
          object: c,
          signingKey: u,
          force: f = !1,
          cache: l = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", n),
              Object(E.a)("ref", i),
              u && Object(E.a)("onSign", e);
            const r = new P.a(t),
              d = yield G({ fs: r, gitdir: n, author: o });
            if (!d) throw new C.a("tagger");
            return yield vt({
              fs: r,
              cache: l,
              onSign: e,
              gitdir: n,
              ref: i,
              tagger: d,
              message: a,
              gpgsig: s,
              object: c,
              signingKey: u,
              force: f,
            });
          } catch (t) {
            throw ((t.caller = "git.annotatedTag"), t);
          }
        })).apply(this, arguments);
      }
      function jt(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function xt(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              jt(o, n, i, a, s, "next", t);
            }
            function s(t) {
              jt(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Pt(t) {
        return kt.apply(this, arguments);
      }
      function kt() {
        return (kt = xt(function* ({
          fs: t,
          gitdir: e,
          ref: r,
          object: n,
          checkout: i = !1,
          force: o = !1,
        }) {
          if (r !== et.a.clean(r)) throw new nt.a(r, et.a.clean(r));
          const a = `refs/heads/${r}`;
          if (!o) {
            if (yield dt.a.exists({ fs: t, gitdir: e, ref: a }))
              throw new rt.a("branch", r, !1);
          }
          let s;
          try {
            s = yield dt.a.resolve({ fs: t, gitdir: e, ref: n || "HEAD" });
          } catch (t) {}
          s && (yield dt.a.writeRef({ fs: t, gitdir: e, ref: a, value: s })),
            i &&
              (yield dt.a.writeSymbolicRef({
                fs: t,
                gitdir: e,
                ref: "HEAD",
                value: a,
              }));
        })).apply(this, arguments);
      }
      function Et(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function At(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Et(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Et(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function St(t) {
        return $t.apply(this, arguments);
      }
      function $t() {
        return ($t = At(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
          object: i,
          checkout: o = !1,
          force: a = !1,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n),
              yield Pt({
                fs: new P.a(t),
                gitdir: r,
                ref: n,
                object: i,
                checkout: o,
                force: a,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.branch"), t);
          }
        })).apply(this, arguments);
      }
      var Rt = r(44),
        Bt = r(88),
        It = r(89),
        Tt = r(100);
      const Ut = (t, e) =>
        "." === t ||
        null == e ||
        0 === e.length ||
        "." === e ||
        (e.length >= t.length ? e.startsWith(t) : t.startsWith(e));
      function Ct(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function zt(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ct(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ct(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Dt(t) {
        return Nt.apply(this, arguments);
      }
      function Nt() {
        return (Nt = zt(function* ({
          fs: t,
          cache: e,
          onProgress: r,
          dir: i,
          gitdir: o,
          remote: s,
          ref: c,
          filepaths: u,
          noCheckout: f,
          noUpdateHead: l,
          dryRun: d,
          force: h,
          track: p = !0,
        }) {
          let y;
          try {
            y = yield dt.a.resolve({ fs: t, gitdir: o, ref: c });
          } catch (e) {
            if ("HEAD" === c) throw e;
            const r = `${s}/${c}`;
            if (((y = yield dt.a.resolve({ fs: t, gitdir: o, ref: r })), p)) {
              const e = yield z.a.get({ fs: t, gitdir: o });
              yield e.set(`branch.${c}.remote`, s),
                yield e.set(`branch.${c}.merge`, `refs/heads/${c}`),
                yield z.a.save({ fs: t, gitdir: o, config: e });
            }
            yield dt.a.writeRef({
              fs: t,
              gitdir: o,
              ref: `refs/heads/${c}`,
              value: y,
            });
          }
          if (!f) {
            let s;
            try {
              s = yield Mt({
                fs: t,
                cache: e,
                onProgress: r,
                dir: i,
                gitdir: o,
                ref: c,
                force: h,
                filepaths: u,
              });
            } catch (t) {
              throw t instanceof j.a && t.data.what === y ? new It.a(c, y) : t;
            }
            const f = s.filter(([t]) => "conflict" === t).map(([t, e]) => e);
            if (f.length > 0) throw new Bt.a(f);
            const l = s.filter(([t]) => "error" === t).map(([t, e]) => e);
            if (l.length > 0) throw new a.a(l.join(", "));
            if (d) return;
            let p = 0;
            const g = s.length;
            yield n.a.acquire(
              { fs: t, gitdir: o, cache: e },
              (function () {
                var e = zt(function* (e) {
                  yield Promise.all(
                    s
                      .filter(([t]) => "delete" === t || "delete-index" === t)
                      .map(
                        (function () {
                          var n = zt(function* ([n, o]) {
                            const a = `${i}/${o}`;
                            "delete" === n && (yield t.rm(a)),
                              e.delete({ filepath: o }),
                              r &&
                                (yield r({
                                  phase: "Updating workdir",
                                  loaded: ++p,
                                  total: g,
                                }));
                          });
                          return function (t) {
                            return n.apply(this, arguments);
                          };
                        })()
                      )
                  );
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
              yield n.a.acquire(
                { fs: t, gitdir: o, cache: e },
                (function () {
                  var e = zt(function* (e) {
                    for (const [n, o] of s)
                      if ("rmdir" === n || "rmdir-index" === n) {
                        const a = `${i}/${o}`;
                        try {
                          "rmdir-index" === n && e.delete({ filepath: o }),
                            yield t.rmdir(a),
                            r &&
                              (yield r({
                                phase: "Updating workdir",
                                loaded: ++p,
                                total: g,
                              }));
                        } catch (t) {
                          if ("ENOTEMPTY" !== t.code) throw t;
                          console.log(
                            `Did not delete ${o} because directory is not empty`
                          );
                        }
                      }
                  });
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              yield Promise.all(
                s
                  .filter(([t]) => "mkdir" === t || "mkdir-index" === t)
                  .map(
                    (function () {
                      var e = zt(function* ([e, n]) {
                        const o = `${i}/${n}`;
                        yield t.mkdir(o),
                          r &&
                            (yield r({
                              phase: "Updating workdir",
                              loaded: ++p,
                              total: g,
                            }));
                      });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
              ),
              yield n.a.acquire(
                { fs: t, gitdir: o, cache: e },
                (function () {
                  var n = zt(function* (n) {
                    yield Promise.all(
                      s
                        .filter(
                          ([t]) =>
                            "create" === t ||
                            "create-index" === t ||
                            "update" === t ||
                            "mkdir-index" === t
                        )
                        .map(
                          (function () {
                            var s = zt(function* ([s, c, u, f, l]) {
                              const d = `${i}/${c}`;
                              try {
                                if (
                                  "create-index" !== s &&
                                  "mkdir-index" !== s
                                ) {
                                  const { object: r } = yield Object(pt.a)({
                                    fs: t,
                                    cache: e,
                                    gitdir: o,
                                    oid: u,
                                  });
                                  if ((l && (yield t.rm(d)), 33188 === f))
                                    yield t.write(d, r);
                                  else if (33261 === f)
                                    yield t.write(d, r, { mode: 511 });
                                  else {
                                    if (40960 !== f)
                                      throw new a.a(
                                        `Invalid mode 0o${f.toString(
                                          8
                                        )} detected in blob ${u}`
                                      );
                                    yield t.writelink(d, r);
                                  }
                                }
                                const i = yield t.lstat(d);
                                33261 === f && (i.mode = 493),
                                  "mkdir-index" === s && (i.mode = 57344),
                                  n.insert({ filepath: c, stats: i, oid: u }),
                                  r &&
                                    (yield r({
                                      phase: "Updating workdir",
                                      loaded: ++p,
                                      total: g,
                                    }));
                              } catch (t) {
                                console.log(t);
                              }
                            });
                            return function (t) {
                              return s.apply(this, arguments);
                            };
                          })()
                        )
                    );
                  });
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })()
              );
          }
          if (!l) {
            const e = yield dt.a.expand({ fs: t, gitdir: o, ref: c });
            e.startsWith("refs/heads")
              ? yield dt.a.writeSymbolicRef({
                  fs: t,
                  gitdir: o,
                  ref: "HEAD",
                  value: e,
                })
              : yield dt.a.writeRef({
                  fs: t,
                  gitdir: o,
                  ref: "HEAD",
                  value: y,
                });
          }
        })).apply(this, arguments);
      }
      function Mt(t) {
        return Ft.apply(this, arguments);
      }
      function Ft() {
        return (Ft = zt(function* ({
          fs: t,
          cache: e,
          onProgress: r,
          dir: n,
          gitdir: i,
          ref: o,
          force: a,
          filepaths: s,
        }) {
          let c = 0;
          return Object(Rt.a)({
            fs: t,
            cache: e,
            dir: n,
            gitdir: i,
            trees: [Object(h.a)({ ref: o }), _(), d()],
            map:
              ((f = zt(function* (t, [e, n, i]) {
                if ("." !== t) {
                  if (s && !s.some((e) => Ut(t, e))) return null;
                  switch (
                    (r &&
                      (yield r({ phase: "Analyzing workdir", loaded: ++c })),
                    [!!i, !!e, !!n].map(Number).join(""))
                  ) {
                    case "000":
                      return;
                    case "001":
                      return a && s && s.includes(t) ? ["delete", t] : void 0;
                    case "010":
                      switch (yield e.type()) {
                        case "tree":
                          return ["mkdir", t];
                        case "blob":
                          return ["create", t, yield e.oid(), yield e.mode()];
                        case "commit":
                          return [
                            "mkdir-index",
                            t,
                            yield e.oid(),
                            yield e.mode(),
                          ];
                        default:
                          return [
                            "error",
                            `new entry Unhandled type ${yield e.type()}`,
                          ];
                      }
                    case "011":
                      switch (`${yield e.type()}-${yield n.type()}`) {
                        case "tree-tree":
                          return;
                        case "tree-blob":
                        case "blob-tree":
                          return ["conflict", t];
                        case "blob-blob":
                          return (yield e.oid()) !== (yield n.oid())
                            ? a
                              ? [
                                  "update",
                                  t,
                                  yield e.oid(),
                                  yield e.mode(),
                                  (yield e.mode()) !== (yield n.mode()),
                                ]
                              : ["conflict", t]
                            : (yield e.mode()) !== (yield n.mode())
                            ? a
                              ? ["update", t, yield e.oid(), yield e.mode(), !0]
                              : ["conflict", t]
                            : [
                                "create-index",
                                t,
                                yield e.oid(),
                                yield e.mode(),
                              ];
                        case "commit-tree":
                          return;
                        case "commit-blob":
                          return ["conflict", t];
                        default:
                          return [
                            "error",
                            `new entry Unhandled type ${e.type}`,
                          ];
                      }
                    case "100":
                      return ["delete-index", t];
                    case "101":
                      switch (yield i.type()) {
                        case "tree":
                          return ["rmdir", t];
                        case "blob":
                          return (yield i.oid()) !== (yield n.oid())
                            ? a
                              ? ["delete", t]
                              : ["conflict", t]
                            : ["delete", t];
                        case "commit":
                          return ["rmdir-index", t];
                        default:
                          return [
                            "error",
                            `delete entry Unhandled type ${yield i.type()}`,
                          ];
                      }
                    case "110":
                    case "111":
                      switch (`${yield i.type()}-${yield e.type()}`) {
                        case "tree-tree":
                          return;
                        case "blob-blob":
                          if (
                            (yield i.oid()) === (yield e.oid()) &&
                            (yield i.mode()) === (yield e.mode()) &&
                            !a
                          )
                            return;
                          if (n) {
                            if (
                              (yield n.oid()) !== (yield i.oid()) &&
                              (yield n.oid()) !== (yield e.oid())
                            )
                              return a
                                ? [
                                    "update",
                                    t,
                                    yield e.oid(),
                                    yield e.mode(),
                                    (yield e.mode()) !== (yield n.mode()),
                                  ]
                                : ["conflict", t];
                          } else if (a)
                            return [
                              "update",
                              t,
                              yield e.oid(),
                              yield e.mode(),
                              (yield e.mode()) !== (yield i.mode()),
                            ];
                          return (yield e.mode()) !== (yield i.mode())
                            ? ["update", t, yield e.oid(), yield e.mode(), !0]
                            : (yield e.oid()) !== (yield i.oid())
                            ? ["update", t, yield e.oid(), yield e.mode(), !1]
                            : void 0;
                        case "tree-blob":
                          return ["update-dir-to-blob", t, yield e.oid()];
                        case "blob-tree":
                          return ["update-blob-to-tree", t];
                        case "commit-commit":
                          return [
                            "mkdir-index",
                            t,
                            yield e.oid(),
                            yield e.mode(),
                          ];
                        default:
                          return [
                            "error",
                            `update entry Unhandled type ${yield i.type()}-${yield e.type()}`,
                          ];
                      }
                  }
                }
              })),
              function (t, e) {
                return f.apply(this, arguments);
              }),
            reduce:
              ((u = zt(function* (t, e) {
                return (
                  (e = Object(Tt.a)(e)),
                  t
                    ? t && "rmdir" === t[0]
                      ? (e.push(t), e)
                      : (e.unshift(t), e)
                    : e
                );
              })),
              function (t, e) {
                return u.apply(this, arguments);
              }),
          });
          var u, f;
        })).apply(this, arguments);
      }
      function Ht(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Lt(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ht(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ht(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Gt(t) {
        return Yt.apply(this, arguments);
      }
      function Yt() {
        return (Yt = Lt(function* ({
          fs: t,
          onProgress: e,
          dir: r,
          gitdir: n = Object(y.a)(r, ".git"),
          remote: i = "origin",
          ref: o,
          filepaths: a,
          noCheckout: s = !1,
          noUpdateHead: c = void 0 === o,
          dryRun: u = !1,
          force: f = !1,
          track: l = !0,
          cache: d = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("dir", r),
              Object(E.a)("gitdir", n);
            const h = o || "HEAD";
            return yield Dt({
              fs: new P.a(t),
              cache: d,
              onProgress: e,
              dir: r,
              gitdir: n,
              remote: i,
              ref: h,
              filepaths: a,
              noCheckout: s,
              noUpdateHead: c,
              dryRun: u,
              force: f,
              track: l,
            });
          } catch (t) {
            throw ((t.caller = "git.checkout"), t);
          }
        })).apply(this, arguments);
      }
      var Zt = r(106);
      function Wt(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function qt(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Wt(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Wt(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Kt(t) {
        return Vt.apply(this, arguments);
      }
      function Vt() {
        return (Vt = qt(function* ({
          fs: t,
          bare: e = !1,
          dir: r,
          gitdir: n = e ? r : Object(y.a)(r, ".git"),
          defaultBranch: i = "master",
        }) {
          if (yield t.exists(n + "/config")) return;
          let o = [
            "hooks",
            "info",
            "objects/info",
            "objects/pack",
            "refs/heads",
            "refs/tags",
          ];
          o = o.map((t) => n + "/" + t);
          for (const e of o) yield t.mkdir(e);
          yield t.write(
            n + "/config",
            "[core]\n\trepositoryformatversion = 0\n\tfilemode = false\n" +
              `\tbare = ${e}\n` +
              (e ? "" : "\tlogallrefupdates = true\n") +
              "\tsymlinks = false\n\tignorecase = true\n"
          ),
            yield t.write(n + "/HEAD", `ref: refs/heads/${i}\n`);
        })).apply(this, arguments);
      }
      function Xt(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Jt(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Xt(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Xt(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Qt(t) {
        return te.apply(this, arguments);
      }
      function te() {
        return (te = Jt(function* ({
          fs: t,
          cache: e,
          http: r,
          onProgress: n,
          onMessage: i,
          onAuth: o,
          onAuthSuccess: a,
          onAuthFailure: s,
          dir: c,
          gitdir: u,
          url: f,
          corsProxy: l,
          ref: d,
          remote: h,
          depth: p,
          since: y,
          exclude: g,
          relative: v,
          singleBranch: m,
          noCheckout: w,
          noTags: b,
          headers: _,
        }) {
          try {
            if (
              (yield Kt({ fs: t, gitdir: u }),
              yield at({ fs: t, gitdir: u, remote: h, url: f, force: !1 }),
              l)
            ) {
              const e = yield z.a.get({ fs: t, gitdir: u });
              yield e.set("http.corsProxy", l),
                yield z.a.save({ fs: t, gitdir: u, config: e });
            }
            const { defaultBranch: O, fetchHead: j } = yield Object(Zt.a)({
              fs: t,
              cache: e,
              http: r,
              onProgress: n,
              onMessage: i,
              onAuth: o,
              onAuthSuccess: a,
              onAuthFailure: s,
              gitdir: u,
              ref: d,
              remote: h,
              corsProxy: l,
              depth: p,
              since: y,
              exclude: g,
              relative: v,
              singleBranch: m,
              headers: _,
              tags: !b,
            });
            if (null === j) return;
            (d = (d = d || O).replace("refs/heads/", "")),
              yield Dt({
                fs: t,
                cache: e,
                onProgress: n,
                dir: c,
                gitdir: u,
                ref: d,
                remote: h,
                noCheckout: w,
              });
          } catch (e) {
            throw (
              (yield t
                .rmdir(u, { recursive: !0, maxRetries: 10 })
                .catch(() => {}),
              e)
            );
          }
        })).apply(this, arguments);
      }
      function ee(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function re(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ee(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ee(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ne(t) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = re(function* ({
          fs: t,
          http: e,
          onProgress: r,
          onMessage: n,
          onAuth: i,
          onAuthSuccess: o,
          onAuthFailure: a,
          dir: s,
          gitdir: c = Object(y.a)(s, ".git"),
          url: u,
          corsProxy: f,
          ref: l,
          remote: d = "origin",
          depth: h,
          since: p,
          exclude: g = [],
          relative: v = !1,
          singleBranch: m = !1,
          noCheckout: w = !1,
          noTags: b = !1,
          headers: _ = {},
          cache: O = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("http", e),
              Object(E.a)("gitdir", c),
              w || Object(E.a)("dir", s),
              Object(E.a)("url", u),
              yield Qt({
                fs: new P.a(t),
                cache: O,
                http: e,
                onProgress: r,
                onMessage: n,
                onAuth: i,
                onAuthSuccess: o,
                onAuthFailure: a,
                dir: s,
                gitdir: c,
                url: u,
                corsProxy: f,
                ref: l,
                remote: d,
                depth: h,
                since: p,
                exclude: g,
                relative: v,
                singleBranch: m,
                noCheckout: w,
                noTags: b,
                headers: _,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.clone"), t);
          }
        })).apply(this, arguments);
      }
      var oe = r(85);
      function ae(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function se(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ae(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ae(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ce(t) {
        return ue.apply(this, arguments);
      }
      function ue() {
        return (ue = se(function* ({
          fs: t,
          onSign: e,
          dir: r,
          gitdir: n = Object(y.a)(r, ".git"),
          message: i,
          author: o,
          committer: a,
          signingKey: s,
          dryRun: c = !1,
          noUpdateBranch: u = !1,
          ref: f,
          parent: l,
          tree: d,
          cache: h = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("message", i),
              s && Object(E.a)("onSign", e);
            const r = new P.a(t),
              p = yield G({ fs: r, gitdir: n, author: o });
            if (!p) throw new C.a("author");
            const y = yield q({ fs: r, gitdir: n, author: p, committer: a });
            if (!y) throw new C.a("committer");
            return yield Object(oe.a)({
              fs: r,
              cache: h,
              onSign: e,
              gitdir: n,
              message: i,
              author: p,
              committer: y,
              signingKey: s,
              dryRun: c,
              noUpdateBranch: u,
              ref: f,
              parent: l,
              tree: d,
            });
          } catch (t) {
            throw ((t.caller = "git.commit"), t);
          }
        })).apply(this, arguments);
      }
      var fe = r(48);
      function le(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function de(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              le(o, n, i, a, s, "next", t);
            }
            function s(t) {
              le(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function he(t) {
        return pe.apply(this, arguments);
      }
      function pe() {
        return (pe = de(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          fullname: n = !1,
          test: i = !1,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              yield Object(fe.a)({
                fs: new P.a(t),
                gitdir: r,
                fullname: n,
                test: i,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.currentBranch"), t);
          }
        })).apply(this, arguments);
      }
      function ye(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ge(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ye(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ye(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ve(t) {
        return me.apply(this, arguments);
      }
      function me() {
        return (me = ge(function* ({ fs: t, gitdir: e, ref: r }) {
          if (!(yield dt.a.exists({ fs: t, gitdir: e, ref: r })))
            throw new j.a(r);
          const n = yield dt.a.expand({ fs: t, gitdir: e, ref: r });
          if (n === (yield Object(fe.a)({ fs: t, gitdir: e, fullname: !0 }))) {
            const r = yield dt.a.resolve({ fs: t, gitdir: e, ref: n });
            yield dt.a.writeRef({ fs: t, gitdir: e, ref: "HEAD", value: r });
          }
          yield dt.a.deleteRef({ fs: t, gitdir: e, ref: n });
        })).apply(this, arguments);
      }
      function we(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function be(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              we(o, n, i, a, s, "next", t);
            }
            function s(t) {
              we(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function _e(t) {
        return Oe.apply(this, arguments);
      }
      function Oe() {
        return (Oe = be(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("ref", n),
              yield ve({ fs: new P.a(t), gitdir: r, ref: n })
            );
          } catch (t) {
            throw ((t.caller = "git.deleteBranch"), t);
          }
        })).apply(this, arguments);
      }
      function je(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function xe(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              je(o, n, i, a, s, "next", t);
            }
            function s(t) {
              je(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Pe(t) {
        return ke.apply(this, arguments);
      }
      function ke() {
        return (ke = xe(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("ref", n),
              yield dt.a.deleteRef({ fs: new P.a(t), gitdir: r, ref: n });
          } catch (t) {
            throw ((t.caller = "git.deleteRef"), t);
          }
        })).apply(this, arguments);
      }
      function Ee(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ae(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ee(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ee(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Se(t) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = Ae(function* ({ fs: t, gitdir: e, remote: r }) {
          const n = yield z.a.get({ fs: t, gitdir: e });
          yield n.deleteSection("remote", r),
            yield z.a.save({ fs: t, gitdir: e, config: n });
        })).apply(this, arguments);
      }
      function Re(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Be(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Re(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Re(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ie(t) {
        return Te.apply(this, arguments);
      }
      function Te() {
        return (Te = Be(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          remote: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("remote", n),
              yield Se({ fs: new P.a(t), gitdir: r, remote: n })
            );
          } catch (t) {
            throw ((t.caller = "git.deleteRemote"), t);
          }
        })).apply(this, arguments);
      }
      function Ue(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ce(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ue(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ue(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ze(t) {
        return De.apply(this, arguments);
      }
      function De() {
        return (De = Ce(function* ({ fs: t, gitdir: e, ref: r }) {
          (r = r.startsWith("refs/tags/") ? r : `refs/tags/${r}`),
            yield dt.a.deleteRef({ fs: t, gitdir: e, ref: r });
        })).apply(this, arguments);
      }
      function Ne(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Me(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ne(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ne(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Fe(t) {
        return He.apply(this, arguments);
      }
      function He() {
        return (He = Me(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("ref", n),
              yield ze({ fs: new P.a(t), gitdir: r, ref: n })
            );
          } catch (t) {
            throw ((t.caller = "git.deleteTag"), t);
          }
        })).apply(this, arguments);
      }
      var Le = r(87);
      function Ge(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ye(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ge(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ge(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ze(t) {
        return We.apply(this, arguments);
      }
      function We() {
        return (We = Ye(function* ({ fs: t, gitdir: e, oid: r }) {
          const n = r.slice(0, 2);
          return (yield t.readdir(`${e}/objects/${n}`))
            .map((t) => `${n}${t}`)
            .filter((t) => t.startsWith(r));
        })).apply(this, arguments);
      }
      var qe = r(74);
      function Ke(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ve(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ke(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ke(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Xe(t) {
        return Je.apply(this, arguments);
      }
      function Je() {
        return (Je = Ve(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: n,
          getExternalRefDelta: i,
        }) {
          const o = [];
          let s = yield t.readdir(Object(y.a)(r, "objects/pack"));
          s = s.filter((t) => t.endsWith(".idx"));
          for (const c of s) {
            const s = `${r}/objects/pack/${c}`,
              u = yield Object(qe.a)({
                fs: t,
                cache: e,
                filename: s,
                getExternalRefDelta: i,
              });
            if (u.error) throw new a.a(u.error);
            for (const t of u.offsets.keys()) t.startsWith(n) && o.push(t);
          }
          return o;
        })).apply(this, arguments);
      }
      function Qe(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function tr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Qe(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Qe(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function er(t) {
        return rr.apply(this, arguments);
      }
      function rr() {
        return (rr = tr(function* ({ fs: t, cache: e, gitdir: r, oid: n }) {
          const i = yield Ze({ fs: t, gitdir: r, oid: n }),
            o = yield Xe({
              fs: t,
              cache: e,
              gitdir: r,
              oid: n,
              getExternalRefDelta: (n) =>
                Object(pt.a)({ fs: t, cache: e, gitdir: r, oid: n }),
            }),
            a = i.concat(o);
          if (1 === a.length) return a[0];
          if (a.length > 1) throw new Le.a("oids", n, a);
          throw new j.a(`an object matching "${n}"`);
        })).apply(this, arguments);
      }
      function nr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ir(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              nr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              nr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function or(t) {
        return ar.apply(this, arguments);
      }
      function ar() {
        return (ar = ir(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oid: n,
          cache: i = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oid", n),
              yield er({ fs: new P.a(t), cache: i, gitdir: r, oid: n })
            );
          } catch (t) {
            throw ((t.caller = "git.expandOid"), t);
          }
        })).apply(this, arguments);
      }
      function sr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function cr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              sr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              sr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ur(t) {
        return fr.apply(this, arguments);
      }
      function fr() {
        return (fr = cr(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n),
              yield dt.a.expand({ fs: new P.a(t), gitdir: r, ref: n })
            );
          } catch (t) {
            throw ((t.caller = "git.expandRef"), t);
          }
        })).apply(this, arguments);
      }
      var lr = r(12);
      function dr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function hr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              dr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              dr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function pr(t) {
        return yr.apply(this, arguments);
      }
      function yr() {
        return (yr = hr(function* ({ fs: t, cache: e, gitdir: r, oids: n }) {
          const i = {},
            o = n.length;
          let a = n.map((t, e) => ({ index: e, oid: t }));
          for (; a.length; ) {
            const n = new Set();
            for (const t of a) {
              const { oid: e, index: r } = t;
              i[e] || (i[e] = new Set()),
                i[e].add(r),
                i[e].size === o && n.add(e);
            }
            if (n.size > 0) return [...n];
            const s = new Map();
            for (const n of a) {
              const { oid: o, index: a } = n;
              try {
                const { object: n } = yield Object(pt.a)({
                    fs: t,
                    cache: e,
                    gitdir: r,
                    oid: o,
                  }),
                  c = lr.a.from(n),
                  { parent: u } = c.parseHeaders();
                for (const t of u)
                  (i[t] && i[t].has(a)) ||
                    s.set(t + ":" + a, { oid: t, index: a });
              } catch (t) {}
            }
            a = Array.from(s.values());
          }
          return [];
        })).apply(this, arguments);
      }
      var gr = r(90),
        vr = r(50),
        mr = r(82),
        wr = r(115);
      function br(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function _r(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              br(o, n, i, a, s, "next", t);
            }
            function s(t) {
              br(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Or(t) {
        return jr.apply(this, arguments);
      }
      function jr() {
        return (jr = _r(function* ({
          fs: t,
          cache: e,
          dir: r,
          gitdir: n,
          ours: i,
          theirs: o,
          fastForward: a = !0,
          fastForwardOnly: s = !1,
          dryRun: c = !1,
          noUpdateBranch: u = !1,
          abortOnConflict: f = !0,
          message: l,
          author: d,
          committer: h,
          signingKey: p,
          onSign: y,
          mergeDriver: g,
        }) {
          void 0 === i &&
            (i = yield Object(fe.a)({ fs: t, gitdir: n, fullname: !0 })),
            (i = yield dt.a.expand({ fs: t, gitdir: n, ref: i })),
            (o = yield dt.a.expand({ fs: t, gitdir: n, ref: o }));
          const v = yield dt.a.resolve({ fs: t, gitdir: n, ref: i }),
            m = yield dt.a.resolve({ fs: t, gitdir: n, ref: o }),
            w = yield pr({ fs: t, cache: e, gitdir: n, oids: [v, m] });
          if (1 !== w.length) throw new vr.a();
          const b = w[0];
          if (b === m) return { oid: v, alreadyMerged: !0 };
          if (a && b === v)
            return (
              c ||
                u ||
                (yield dt.a.writeRef({ fs: t, gitdir: n, ref: i, value: m })),
              { oid: m, fastForward: !0 }
            );
          {
            if (s) throw new gr.a();
            const a = yield Object(wr.a)({
              fs: t,
              cache: e,
              dir: r,
              gitdir: n,
              ourOid: v,
              theirOid: m,
              baseOid: b,
              ourName: Object(mr.a)(i),
              baseName: "base",
              theirName: Object(mr.a)(o),
              dryRun: c,
              abortOnConflict: f,
              mergeDriver: g,
            });
            return (
              l ||
                (l = `Merge branch '${Object(mr.a)(o)}' into ${Object(mr.a)(
                  i
                )}`),
              {
                oid: yield Object(oe.a)({
                  fs: t,
                  cache: e,
                  gitdir: n,
                  message: l,
                  ref: i,
                  tree: a,
                  parent: [v, m],
                  author: d,
                  committer: h,
                  signingKey: p,
                  onSign: y,
                  dryRun: c,
                  noUpdateBranch: u,
                }),
                tree: a,
                mergeCommit: !0,
              }
            );
          }
        })).apply(this, arguments);
      }
      var xr = r(24);
      function Pr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function kr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Pr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Pr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Er(t) {
        return Ar.apply(this, arguments);
      }
      function Ar() {
        return (Ar = kr(function* ({
          fs: t,
          cache: e,
          http: r,
          onProgress: n,
          onMessage: i,
          onAuth: o,
          onAuthSuccess: a,
          onAuthFailure: s,
          dir: c,
          gitdir: u,
          ref: f,
          url: l,
          remote: d,
          remoteRef: h,
          prune: p,
          pruneTags: y,
          fastForward: g,
          fastForwardOnly: v,
          corsProxy: m,
          singleBranch: w,
          headers: b,
          author: _,
          committer: O,
          signingKey: j,
        }) {
          try {
            if (!f) {
              const e = yield Object(fe.a)({ fs: t, gitdir: u });
              if (!e) throw new xr.a("ref");
              f = e;
            }
            const { fetchHead: x, fetchHeadDescription: P } = yield Object(
              Zt.a
            )({
              fs: t,
              cache: e,
              http: r,
              onProgress: n,
              onMessage: i,
              onAuth: o,
              onAuthSuccess: a,
              onAuthFailure: s,
              gitdir: u,
              corsProxy: m,
              ref: f,
              url: l,
              remote: d,
              remoteRef: h,
              singleBranch: w,
              headers: b,
              prune: p,
              pruneTags: y,
            });
            yield Or({
              fs: t,
              cache: e,
              gitdir: u,
              ours: f,
              theirs: x,
              fastForward: g,
              fastForwardOnly: v,
              message: `Merge ${P}`,
              author: _,
              committer: O,
              signingKey: j,
              dryRun: !1,
              noUpdateBranch: !1,
            }),
              yield Dt({
                fs: t,
                cache: e,
                onProgress: n,
                dir: c,
                gitdir: u,
                ref: f,
                remote: d,
                noCheckout: !1,
              });
          } catch (t) {
            throw ((t.caller = "git.pull"), t);
          }
        })).apply(this, arguments);
      }
      function Sr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function $r(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Sr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Sr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Rr(t) {
        return Br.apply(this, arguments);
      }
      function Br() {
        return (Br = $r(function* ({
          fs: t,
          http: e,
          onProgress: r,
          onMessage: n,
          onAuth: i,
          onAuthSuccess: o,
          onAuthFailure: a,
          dir: s,
          gitdir: c = Object(y.a)(s, ".git"),
          ref: u,
          url: f,
          remote: l,
          remoteRef: d,
          corsProxy: h,
          singleBranch: p,
          headers: g = {},
          cache: v = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("http", e),
              Object(E.a)("gitdir", c);
            const y = {
              name: "",
              email: "",
              timestamp: Date.now(),
              timezoneOffset: 0,
            };
            return yield Er({
              fs: new P.a(t),
              cache: v,
              http: e,
              onProgress: r,
              onMessage: n,
              onAuth: i,
              onAuthSuccess: o,
              onAuthFailure: a,
              dir: s,
              gitdir: c,
              ref: u,
              url: f,
              remote: l,
              remoteRef: d,
              fastForwardOnly: !0,
              corsProxy: h,
              singleBranch: p,
              headers: g,
              author: y,
              committer: y,
            });
          } catch (t) {
            throw ((t.caller = "git.fastForward"), t);
          }
        })).apply(this, arguments);
      }
      function Ir(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Tr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ir(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ir(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ur(t) {
        return Cr.apply(this, arguments);
      }
      function Cr() {
        return (Cr = Tr(function* ({
          fs: t,
          http: e,
          onProgress: r,
          onMessage: n,
          onAuth: i,
          onAuthSuccess: o,
          onAuthFailure: a,
          dir: s,
          gitdir: c = Object(y.a)(s, ".git"),
          ref: u,
          remote: f,
          remoteRef: l,
          url: d,
          corsProxy: h,
          depth: p = null,
          since: g = null,
          exclude: v = [],
          relative: m = !1,
          tags: w = !1,
          singleBranch: b = !1,
          headers: _ = {},
          prune: O = !1,
          pruneTags: j = !1,
          cache: x = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("http", e),
              Object(E.a)("gitdir", c),
              yield Object(Zt.a)({
                fs: new P.a(t),
                cache: x,
                http: e,
                onProgress: r,
                onMessage: n,
                onAuth: i,
                onAuthSuccess: o,
                onAuthFailure: a,
                gitdir: c,
                ref: u,
                remote: f,
                remoteRef: l,
                url: d,
                corsProxy: h,
                depth: p,
                since: g,
                exclude: v,
                relative: m,
                tags: w,
                singleBranch: b,
                headers: _,
                prune: O,
                pruneTags: j,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.fetch"), t);
          }
        })).apply(this, arguments);
      }
      function zr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Dr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              zr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              zr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Nr(t) {
        return Mr.apply(this, arguments);
      }
      function Mr() {
        return (Mr = Dr(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oids: n,
          cache: i = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oids", n),
              yield pr({ fs: new P.a(t), cache: i, gitdir: r, oids: n })
            );
          } catch (t) {
            throw ((t.caller = "git.findMergeBase"), t);
          }
        })).apply(this, arguments);
      }
      var Fr = r(26);
      function Hr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Lr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Hr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Hr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Gr(t) {
        return Yr.apply(this, arguments);
      }
      function Yr() {
        return (Yr = Lr(function* ({ fs: t, filepath: e }) {
          if (yield t.exists(Object(y.a)(e, ".git"))) return e;
          {
            const r = Object(Fr.a)(e);
            if (r === e) throw new j.a(`git root for ${e}`);
            return Gr({ fs: t, filepath: r });
          }
        })).apply(this, arguments);
      }
      function Zr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Wr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Zr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Zr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function qr(t) {
        return Kr.apply(this, arguments);
      }
      function Kr() {
        return (Kr = Wr(function* ({ fs: t, filepath: e }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("filepath", e),
              yield Gr({ fs: new P.a(t), filepath: e })
            );
          } catch (t) {
            throw ((t.caller = "git.findRoot"), t);
          }
        })).apply(this, arguments);
      }
      function Vr(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Xr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Vr(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Vr(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Jr(t) {
        return Qr.apply(this, arguments);
      }
      function Qr() {
        return (Qr = Xr(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          path: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("path", n),
              yield M({ fs: new P.a(t), gitdir: r, path: n })
            );
          } catch (t) {
            throw ((t.caller = "git.getConfig"), t);
          }
        })).apply(this, arguments);
      }
      function tn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function en(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              tn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              tn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function rn(t) {
        return nn.apply(this, arguments);
      }
      function nn() {
        return (nn = en(function* ({ fs: t, gitdir: e, path: r }) {
          return (yield z.a.get({ fs: t, gitdir: e })).getall(r);
        })).apply(this, arguments);
      }
      function on(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function an(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              on(o, n, i, a, s, "next", t);
            }
            function s(t) {
              on(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function sn(t) {
        return cn.apply(this, arguments);
      }
      function cn() {
        return (cn = an(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          path: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("path", n),
              yield rn({ fs: new P.a(t), gitdir: r, path: n })
            );
          } catch (t) {
            throw ((t.caller = "git.getConfigAll"), t);
          }
        })).apply(this, arguments);
      }
      var un = r(56);
      function fn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ln(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              fn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              fn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function dn(t) {
        return hn.apply(this, arguments);
      }
      function hn() {
        return (hn = ln(function* ({
          http: t,
          onAuth: e,
          onAuthSuccess: r,
          onAuthFailure: n,
          corsProxy: i,
          url: o,
          headers: a = {},
          forPush: s = !1,
        }) {
          try {
            Object(E.a)("http", t), Object(E.a)("url", o);
            const c = un.a.getRemoteHelperFor({ url: o }),
              u = yield c.discover({
                http: t,
                onAuth: e,
                onAuthSuccess: r,
                onAuthFailure: n,
                corsProxy: i,
                service: s ? "git-receive-pack" : "git-upload-pack",
                url: o,
                headers: a,
                protocolVersion: 1,
              }),
              f = { capabilities: [...u.capabilities] };
            for (const [t, e] of u.refs) {
              const r = t.split("/"),
                n = r.pop();
              let i = f;
              for (const t of r) (i[t] = i[t] || {}), (i = i[t]);
              i[n] = e;
            }
            for (const [t, e] of u.symrefs) {
              const r = t.split("/"),
                n = r.pop();
              let i = f;
              for (const t of r) (i[t] = i[t] || {}), (i = i[t]);
              i[n] = e;
            }
            return f;
          } catch (t) {
            throw ((t.caller = "git.getRemoteInfo"), t);
          }
        })).apply(this, arguments);
      }
      function pn(t, e, r, n) {
        const i = [];
        for (const [o, a] of t.refs) {
          if (e && !o.startsWith(e)) continue;
          if (o.endsWith("^{}")) {
            if (n) {
              const t = o.replace("^{}", ""),
                e = i[i.length - 1],
                r = e.ref === t ? e : i.find((e) => e.ref === t);
              if (void 0 === r)
                throw new Error("I did not expect this to happen");
              r.peeled = a;
            }
            continue;
          }
          const s = { ref: o, oid: a };
          r && t.symrefs.has(o) && (s.target = t.symrefs.get(o)), i.push(s);
        }
        return i;
      }
      function yn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function gn(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              yn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              yn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function vn(t) {
        return mn.apply(this, arguments);
      }
      function mn() {
        return (mn = gn(function* ({
          http: t,
          onAuth: e,
          onAuthSuccess: r,
          onAuthFailure: n,
          corsProxy: i,
          url: o,
          headers: a = {},
          forPush: s = !1,
          protocolVersion: c = 2,
        }) {
          try {
            Object(E.a)("http", t), Object(E.a)("url", o);
            const u = un.a.getRemoteHelperFor({ url: o }),
              f = yield u.discover({
                http: t,
                onAuth: e,
                onAuthSuccess: r,
                onAuthFailure: n,
                corsProxy: i,
                service: s ? "git-receive-pack" : "git-upload-pack",
                url: o,
                headers: a,
                protocolVersion: c,
              });
            if (2 === f.protocolVersion)
              return {
                protocolVersion: f.protocolVersion,
                capabilities: f.capabilities2,
              };
            const l = {};
            for (const t of f.capabilities) {
              const [e, r] = t.split("=");
              l[e] = r || !0;
            }
            return {
              protocolVersion: 1,
              capabilities: l,
              refs: pn(f, void 0, !0, !0),
            };
          } catch (t) {
            throw ((t.caller = "git.getRemoteInfo2"), t);
          }
        })).apply(this, arguments);
      }
      var wn = r(149),
        bn = r(54);
      function _n(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function On(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              _n(o, n, i, a, s, "next", t);
            }
            function s(t) {
              _n(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function jn(t) {
        return xn.apply(this, arguments);
      }
      function xn() {
        return (xn = On(function* ({
          fs: t,
          cache: e,
          onProgress: r,
          dir: n,
          gitdir: i,
          filepath: o,
        }) {
          try {
            o = Object(y.a)(n, o);
            const a = yield t.read(o),
              s = (r) => Object(pt.a)({ fs: t, cache: e, gitdir: i, oid: r }),
              c = yield bn.a.fromPack({
                pack: a,
                getExternalRefDelta: s,
                onProgress: r,
              });
            return (
              yield t.write(o.replace(/\.pack$/, ".idx"), yield c.toBuffer()),
              { oids: [...c.hashes] }
            );
          } catch (t) {
            throw ((t.caller = "git.indexPack"), t);
          }
        })).apply(this, arguments);
      }
      function Pn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function kn(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Pn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Pn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function En(t) {
        return An.apply(this, arguments);
      }
      function An() {
        return (An = kn(function* ({
          fs: t,
          onProgress: e,
          dir: r,
          gitdir: n = Object(y.a)(r, ".git"),
          filepath: i,
          cache: o = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("dir", r),
              Object(E.a)("gitdir", r),
              Object(E.a)("filepath", i),
              yield jn({
                fs: new P.a(t),
                cache: o,
                onProgress: e,
                dir: r,
                gitdir: n,
                filepath: i,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.indexPack"), t);
          }
        })).apply(this, arguments);
      }
      function Sn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function $n(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Sn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Sn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Rn(t) {
        return Bn.apply(this, arguments);
      }
      function Bn() {
        return (Bn = $n(function* ({
          fs: t,
          bare: e = !1,
          dir: r,
          gitdir: n = e ? r : Object(y.a)(r, ".git"),
          defaultBranch: i = "master",
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", n),
              e || Object(E.a)("dir", r),
              yield Kt({
                fs: new P.a(t),
                bare: e,
                dir: r,
                gitdir: n,
                defaultBranch: i,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.init"), t);
          }
        })).apply(this, arguments);
      }
      var In = r(92),
        Tn = r(14),
        Un = r(37);
      function Cn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function zn(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Cn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Cn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Dn(t) {
        return Nn.apply(this, arguments);
      }
      function Nn() {
        return (Nn = zn(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: n,
          ancestor: i,
          depth: o,
        }) {
          const a = yield Un.a.read({ fs: t, gitdir: r });
          if (!n) throw new xr.a("oid");
          if (!i) throw new xr.a("ancestor");
          if (n === i) return !1;
          const s = [n],
            c = new Set();
          let u = 0;
          for (; s.length; ) {
            if (u++ === o) throw new In.a(o);
            const n = s.shift(),
              { type: f, object: l } = yield Object(pt.a)({
                fs: t,
                cache: e,
                gitdir: r,
                oid: n,
              });
            if ("commit" !== f) throw new Tn.a(n, f, "commit");
            const d = lr.a.from(l).parse();
            for (const t of d.parent) if (t === i) return !0;
            if (!a.has(n))
              for (const t of d.parent) c.has(t) || (s.push(t), c.add(t));
          }
          return !1;
        })).apply(this, arguments);
      }
      function Mn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Fn(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Mn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Mn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Hn(t) {
        return Ln.apply(this, arguments);
      }
      function Ln() {
        return (Ln = Fn(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oid: n,
          ancestor: i,
          depth: o = -1,
          cache: a = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oid", n),
              Object(E.a)("ancestor", i),
              yield Dn({
                fs: new P.a(t),
                cache: a,
                gitdir: r,
                oid: n,
                ancestor: i,
                depth: o,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.isDescendent"), t);
          }
        })).apply(this, arguments);
      }
      function Gn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Yn(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Gn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Gn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Zn(t) {
        return Wn.apply(this, arguments);
      }
      function Wn() {
        return (Wn = Yn(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          filepath: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("dir", e),
              Object(E.a)("gitdir", r),
              Object(E.a)("filepath", n),
              x.a.isIgnored({ fs: new P.a(t), dir: e, gitdir: r, filepath: n })
            );
          } catch (t) {
            throw ((t.caller = "git.isIgnored"), t);
          }
        })).apply(this, arguments);
      }
      function qn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Kn(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              qn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              qn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Vn(t) {
        return Xn.apply(this, arguments);
      }
      function Xn() {
        return (Xn = Kn(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          remote: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              dt.a.listBranches({ fs: new P.a(t), gitdir: r, remote: n })
            );
          } catch (t) {
            throw ((t.caller = "git.listBranches"), t);
          }
        })).apply(this, arguments);
      }
      var Jn = r(47);
      function Qn(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ti(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Qn(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Qn(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ei(t) {
        return ri.apply(this, arguments);
      }
      function ri() {
        return (ri = ti(function* ({ fs: t, gitdir: e, ref: r, cache: i }) {
          if (r) {
            const n = yield dt.a.resolve({ gitdir: e, fs: t, ref: r }),
              o = [];
            return (
              yield ni({
                fs: t,
                cache: i,
                gitdir: e,
                oid: n,
                filenames: o,
                prefix: "",
              }),
              o
            );
          }
          return n.a.acquire(
            { fs: t, gitdir: e, cache: i },
            (function () {
              var t = ti(function* (t) {
                return t.entries.map((t) => t.path);
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })()
          );
        })).apply(this, arguments);
      }
      function ni(t) {
        return ii.apply(this, arguments);
      }
      function ii() {
        return (ii = ti(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: n,
          filenames: i,
          prefix: o,
        }) {
          const { tree: a } = yield Object(Jn.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: n,
          });
          for (const n of a)
            "tree" === n.type
              ? yield ni({
                  fs: t,
                  cache: e,
                  gitdir: r,
                  oid: n.oid,
                  filenames: i,
                  prefix: Object(y.a)(o, n.path),
                })
              : i.push(Object(y.a)(o, n.path));
        })).apply(this, arguments);
      }
      function oi(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ai(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              oi(o, n, i, a, s, "next", t);
            }
            function s(t) {
              oi(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function si(t) {
        return ci.apply(this, arguments);
      }
      function ci() {
        return (ci = ai(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
          cache: i = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              yield ei({ fs: new P.a(t), cache: i, gitdir: r, ref: n })
            );
          } catch (t) {
            throw ((t.caller = "git.listFiles"), t);
          }
        })).apply(this, arguments);
      }
      function ui(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function fi(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ui(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ui(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function li(t) {
        return di.apply(this, arguments);
      }
      function di() {
        return (di = fi(function* ({ fs: t, cache: e, gitdir: r, ref: n }) {
          let i;
          try {
            i = yield dt.a.resolve({ gitdir: r, fs: t, ref: n });
          } catch (t) {
            if (t instanceof j.a) return [];
          }
          return (yield Object(Jn.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: i,
          })).tree.map((t) => ({ target: t.path, note: t.oid }));
        })).apply(this, arguments);
      }
      function hi(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function pi(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              hi(o, n, i, a, s, "next", t);
            }
            function s(t) {
              hi(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function yi(t) {
        return gi.apply(this, arguments);
      }
      function gi() {
        return (gi = pi(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n = "refs/notes/commits",
          cache: i = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n),
              yield li({ fs: new P.a(t), cache: i, gitdir: r, ref: n })
            );
          } catch (t) {
            throw ((t.caller = "git.listNotes"), t);
          }
        })).apply(this, arguments);
      }
      function vi(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function mi(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              vi(o, n, i, a, s, "next", t);
            }
            function s(t) {
              vi(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function wi(t) {
        return bi.apply(this, arguments);
      }
      function bi() {
        return (bi = mi(function* ({ fs: t, gitdir: e }) {
          const r = yield z.a.get({ fs: t, gitdir: e }),
            n = yield r.getSubsections("remote");
          return Promise.all(
            n.map(
              (function () {
                var t = mi(function* (t) {
                  return { remote: t, url: yield r.get(`remote.${t}.url`) };
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            )
          );
        })).apply(this, arguments);
      }
      function _i(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Oi(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              _i(o, n, i, a, s, "next", t);
            }
            function s(t) {
              _i(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ji(t) {
        return xi.apply(this, arguments);
      }
      function xi() {
        return (xi = Oi(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              yield wi({ fs: new P.a(t), gitdir: r })
            );
          } catch (t) {
            throw ((t.caller = "git.listRemotes"), t);
          }
        })).apply(this, arguments);
      }
      var Pi = r(49),
        ki = r(8);
      function Ei(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ai(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ei(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ei(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Si(t) {
        return $i.apply(this, arguments);
      }
      function $i() {
        return ($i = Ai(function* (t) {
          const e = ki.a.streamReader(t),
            r = [];
          let n;
          for (; (n = yield e()), !0 !== n; ) {
            if (null === n) continue;
            n = n.toString("utf8").replace(/\n$/, "");
            const [t, e, ...i] = n.split(" "),
              o = { ref: e, oid: t };
            for (const t of i) {
              const [e, r] = t.split(":");
              "symref-target" === e
                ? (o.target = r)
                : "peeled" === e && (o.peeled = r);
            }
            r.push(o);
          }
          return r;
        })).apply(this, arguments);
      }
      var Ri = r(41);
      function Bi(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ii(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Bi(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Bi(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ti(t) {
        return Ui.apply(this, arguments);
      }
      function Ui() {
        return (Ui = Ii(function* ({ prefix: t, symrefs: e, peelTags: r }) {
          const n = [];
          return (
            n.push(ki.a.encode("command=ls-refs\n")),
            n.push(ki.a.encode(`agent=${Ri.a.agent}\n`)),
            (r || e || t) && n.push(ki.a.delim()),
            r && n.push(ki.a.encode("peel")),
            e && n.push(ki.a.encode("symrefs")),
            t && n.push(ki.a.encode(`ref-prefix ${t}`)),
            n.push(ki.a.flush()),
            n
          );
        })).apply(this, arguments);
      }
      function Ci(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function zi(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ci(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ci(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Di(t) {
        return Ni.apply(this, arguments);
      }
      function Ni() {
        return (Ni = zi(function* ({
          http: t,
          onAuth: e,
          onAuthSuccess: r,
          onAuthFailure: n,
          corsProxy: i,
          url: o,
          headers: a = {},
          forPush: s = !1,
          protocolVersion: c = 2,
          prefix: u,
          symrefs: f,
          peelTags: l,
        }) {
          try {
            Object(E.a)("http", t), Object(E.a)("url", o);
            const d = yield Pi.a.discover({
              http: t,
              onAuth: e,
              onAuthSuccess: r,
              onAuthFailure: n,
              corsProxy: i,
              service: s ? "git-receive-pack" : "git-upload-pack",
              url: o,
              headers: a,
              protocolVersion: c,
            });
            if (1 === d.protocolVersion) return pn(d, u, f, l);
            const h = yield Ti({ prefix: u, symrefs: f, peelTags: l });
            return Si(
              (yield Pi.a.connect({
                http: t,
                auth: d.auth,
                headers: a,
                corsProxy: i,
                service: s ? "git-receive-pack" : "git-upload-pack",
                url: o,
                body: h,
              })).body
            );
          } catch (t) {
            throw ((t.caller = "git.listServerRefs"), t);
          }
        })).apply(this, arguments);
      }
      function Mi(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Fi(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Mi(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Mi(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Hi(t) {
        return Li.apply(this, arguments);
      }
      function Li() {
        return (Li = Fi(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              dt.a.listTags({ fs: new P.a(t), gitdir: r })
            );
          } catch (t) {
            throw ((t.caller = "git.listTags"), t);
          }
        })).apply(this, arguments);
      }
      function Gi(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Yi(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Gi(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Gi(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Zi(t) {
        return Wi.apply(this, arguments);
      }
      function Wi() {
        return (Wi = Yi(function* ({ fs: t, cache: e, gitdir: r, oid: n }) {
          const { type: i, object: o } = yield Object(pt.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: n,
          });
          if ("tag" === i)
            return Zi({
              fs: t,
              cache: e,
              gitdir: r,
              oid: (n = ht.a.from(o).parse().object),
            });
          if ("commit" !== i) throw new Tn.a(n, i, "commit");
          return { commit: lr.a.from(o), oid: n };
        })).apply(this, arguments);
      }
      function qi(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ki(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              qi(o, n, i, a, s, "next", t);
            }
            function s(t) {
              qi(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Vi(t) {
        return Xi.apply(this, arguments);
      }
      function Xi() {
        return (Xi = Ki(function* ({ fs: t, cache: e, gitdir: r, oid: n }) {
          const { commit: i, oid: o } = yield Zi({
            fs: t,
            cache: e,
            gitdir: r,
            oid: n,
          });
          return { oid: o, commit: i.parse(), payload: i.withoutSignature() };
        })).apply(this, arguments);
      }
      function Ji(t, e) {
        return t.committer.timestamp - e.committer.timestamp;
      }
      var Qi = r(11),
        to = r(40);
      function eo(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ro(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              eo(o, n, i, a, s, "next", t);
            }
            function s(t) {
              eo(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      const no = "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391";
      function io(t) {
        return oo.apply(this, arguments);
      }
      function oo() {
        return (oo = ro(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: n,
          fileId: i,
        }) {
          if (i === no) return;
          const o = n;
          let a;
          const s = yield Object(to.a)({ fs: t, cache: e, gitdir: r, oid: n }),
            c = s.tree;
          return (
            i === s.oid
              ? (a = s.path)
              : ((a = yield ao({
                  fs: t,
                  cache: e,
                  gitdir: r,
                  tree: c,
                  fileId: i,
                  oid: o,
                })),
                Array.isArray(a) &&
                  (0 === a.length
                    ? (a = void 0)
                    : 1 === a.length && (a = a[0]))),
            a
          );
        })).apply(this, arguments);
      }
      function ao(t) {
        return so.apply(this, arguments);
      }
      function so() {
        return (so = ro(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          tree: n,
          fileId: i,
          oid: o,
          filepaths: a = [],
          parentPath: s = "",
        }) {
          const c = n.entries().map(function (n) {
            let c;
            return (
              n.oid === i
                ? ((c = Object(y.a)(s, n.path)), a.push(c))
                : "tree" === n.type &&
                  (c = Object(pt.a)({
                    fs: t,
                    cache: e,
                    gitdir: r,
                    oid: n.oid,
                  }).then(function ({ object: c }) {
                    return ao({
                      fs: t,
                      cache: e,
                      gitdir: r,
                      tree: Qi.a.from(c),
                      fileId: i,
                      oid: o,
                      filepaths: a,
                      parentPath: Object(y.a)(s, n.path),
                    });
                  })),
              c
            );
          });
          return yield Promise.all(c), a;
        })).apply(this, arguments);
      }
      var co = r(62);
      function uo(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function fo(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              uo(o, n, i, a, s, "next", t);
            }
            function s(t) {
              uo(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function lo(t) {
        return ho.apply(this, arguments);
      }
      function ho() {
        return (ho = fo(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          filepath: n,
          ref: i,
          depth: o,
          since: a,
          force: s,
          follow: c,
        }) {
          const u = void 0 === a ? void 0 : Math.floor(a.valueOf() / 1e3),
            f = [],
            l = yield Un.a.read({ fs: t, gitdir: r }),
            d = yield dt.a.resolve({ fs: t, gitdir: r, ref: i }),
            h = [yield Vi({ fs: t, cache: e, gitdir: r, oid: d })];
          let p, y, g;
          function v(t) {
            g && n && f.push(t);
          }
          for (; h.length > 0; ) {
            const i = h.pop();
            if (void 0 !== u && i.commit.committer.timestamp <= u) break;
            if (n) {
              let o;
              try {
                (o = yield Object(co.a)({
                  fs: t,
                  cache: e,
                  gitdir: r,
                  oid: i.commit.tree,
                  filepath: n,
                })),
                  y && p !== o && f.push(y),
                  (p = o),
                  (y = i),
                  (g = !0);
              } catch (o) {
                if (!(o instanceof j.a)) throw o;
                {
                  let a = c && p;
                  if (
                    a &&
                    ((a = yield io({
                      fs: t,
                      cache: e,
                      gitdir: r,
                      oid: i.commit.tree,
                      fileId: p,
                    })),
                    a)
                  )
                    if (Array.isArray(a)) {
                      if (y) {
                        const i = yield io({
                          fs: t,
                          cache: e,
                          gitdir: r,
                          oid: y.commit.tree,
                          fileId: p,
                        });
                        if (Array.isArray(i)) {
                          if (
                            ((a = a.filter((t) => -1 === i.indexOf(t))),
                            1 !== a.length)
                          ) {
                            (a = !1), y && f.push(y);
                            break;
                          }
                          (a = a[0]), (n = a), y && f.push(y);
                        }
                      }
                    } else (n = a), y && f.push(y);
                  if (!a) {
                    if (g && p && (f.push(y), !s)) break;
                    if (!s && !c) throw o;
                  }
                  (y = i), (g = !1);
                }
              }
            } else f.push(i);
            if (void 0 !== o && f.length === o) {
              v(i);
              break;
            }
            if (!l.has(i.oid))
              for (const n of i.commit.parent) {
                const i = yield Vi({ fs: t, cache: e, gitdir: r, oid: n });
                h.map((t) => t.oid).includes(i.oid) || h.push(i);
              }
            0 === h.length && v(i), h.sort((t, e) => Ji(t.commit, e.commit));
          }
          return f;
        })).apply(this, arguments);
      }
      function po(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function yo(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              po(o, n, i, a, s, "next", t);
            }
            function s(t) {
              po(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function go(t) {
        return vo.apply(this, arguments);
      }
      function vo() {
        return (vo = yo(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          filepath: n,
          ref: i = "HEAD",
          depth: o,
          since: a,
          force: s,
          follow: c,
          cache: u = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", i),
              yield lo({
                fs: new P.a(t),
                cache: u,
                gitdir: r,
                filepath: n,
                ref: i,
                depth: o,
                since: a,
                force: s,
                follow: c,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.log"), t);
          }
        })).apply(this, arguments);
      }
      function mo(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function wo(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              mo(o, n, i, a, s, "next", t);
            }
            function s(t) {
              mo(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function bo(t) {
        return _o.apply(this, arguments);
      }
      function _o() {
        return (_o = wo(function* ({
          fs: t,
          onSign: e,
          dir: r,
          gitdir: n = Object(y.a)(r, ".git"),
          ours: i,
          theirs: o,
          fastForward: a = !0,
          fastForwardOnly: s = !1,
          dryRun: c = !1,
          noUpdateBranch: u = !1,
          abortOnConflict: f = !0,
          message: l,
          author: d,
          committer: h,
          signingKey: p,
          cache: g = {},
          mergeDriver: v,
        }) {
          try {
            Object(E.a)("fs", t), p && Object(E.a)("onSign", e);
            const y = new P.a(t),
              m = yield G({ fs: y, gitdir: n, author: d });
            if (!(m || (s && a))) throw new C.a("author");
            const w = yield q({ fs: y, gitdir: n, author: m, committer: h });
            if (!(w || (s && a))) throw new C.a("committer");
            return yield Or({
              fs: y,
              cache: g,
              dir: r,
              gitdir: n,
              ours: i,
              theirs: o,
              fastForward: a,
              fastForwardOnly: s,
              dryRun: c,
              noUpdateBranch: u,
              abortOnConflict: f,
              message: l,
              author: m,
              committer: w,
              signingKey: p,
              onSign: e,
              mergeDriver: v,
            });
          } catch (t) {
            throw ((t.caller = "git.merge"), t);
          }
        })).apply(this, arguments);
      }
      var Oo = r(155);
      function jo(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function xo(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              jo(o, n, i, a, s, "next", t);
            }
            function s(t) {
              jo(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Po(t) {
        return ko.apply(this, arguments);
      }
      function ko() {
        return (ko = xo(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oids: n,
          write: i = !1,
          cache: o = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oids", n),
              yield Object(Oo.a)({
                fs: new P.a(t),
                cache: o,
                gitdir: r,
                oids: n,
                write: i,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.packObjects"), t);
          }
        })).apply(this, arguments);
      }
      function Eo(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ao(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Eo(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Eo(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function So(t) {
        return $o.apply(this, arguments);
      }
      function $o() {
        return ($o = Ao(function* ({
          fs: t,
          http: e,
          onProgress: r,
          onMessage: n,
          onAuth: i,
          onAuthSuccess: o,
          onAuthFailure: a,
          dir: s,
          gitdir: c = Object(y.a)(s, ".git"),
          ref: u,
          url: f,
          remote: l,
          remoteRef: d,
          prune: h = !1,
          pruneTags: p = !1,
          fastForward: g = !0,
          fastForwardOnly: v = !1,
          corsProxy: m,
          singleBranch: w,
          headers: b = {},
          author: _,
          committer: O,
          signingKey: j,
          cache: x = {},
        }) {
          try {
            Object(E.a)("fs", t), Object(E.a)("gitdir", c);
            const y = new P.a(t),
              k = yield G({ fs: y, gitdir: c, author: _ });
            if (!k) throw new C.a("author");
            const A = yield q({ fs: y, gitdir: c, author: k, committer: O });
            if (!A) throw new C.a("committer");
            return yield Er({
              fs: y,
              cache: x,
              http: e,
              onProgress: r,
              onMessage: n,
              onAuth: i,
              onAuthSuccess: o,
              onAuthFailure: a,
              dir: s,
              gitdir: c,
              ref: u,
              url: f,
              remote: l,
              remoteRef: d,
              fastForward: g,
              fastForwardOnly: v,
              corsProxy: m,
              singleBranch: w,
              headers: b,
              author: k,
              committer: A,
              signingKey: j,
              prune: h,
              pruneTags: p,
            });
          } catch (t) {
            throw ((t.caller = "git.pull"), t);
          }
        })).apply(this, arguments);
      }
      var Ro = r(116),
        Bo = r(101),
        Io = r(99),
        To = r(91),
        Uo = r(84),
        Co = r(70),
        zo = r(130),
        Do = r(33),
        No = r(131),
        Mo = r(118),
        Fo = r(117);
      function Ho(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Lo(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ho(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ho(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Go(t) {
        return Yo.apply(this, arguments);
      }
      function Yo() {
        return (Yo = Lo(function* ({
          fs: t,
          cache: e,
          http: r,
          onProgress: n,
          onMessage: i,
          onAuth: o,
          onAuthSuccess: a,
          onAuthFailure: s,
          gitdir: c,
          ref: u,
          remoteRef: f,
          remote: l,
          url: d,
          force: h = !1,
          delete: p = !1,
          corsProxy: y,
          headers: g = {},
        }) {
          const v = u || (yield Object(fe.a)({ fs: t, gitdir: c }));
          if (void 0 === v) throw new xr.a("ref");
          const m = yield z.a.get({ fs: t, gitdir: c });
          l =
            l ||
            (yield m.get(`branch.${v}.pushRemote`)) ||
            (yield m.get("remote.pushDefault")) ||
            (yield m.get(`branch.${v}.remote`)) ||
            "origin";
          const w =
            d ||
            (yield m.get(`remote.${l}.pushurl`)) ||
            (yield m.get(`remote.${l}.url`));
          if (void 0 === w) throw new xr.a("remote OR url");
          const b = f || (yield m.get(`branch.${v}.merge`));
          if (void 0 === w) throw new xr.a("remoteRef");
          void 0 === y && (y = yield m.get("http.corsProxy"));
          const _ = yield dt.a.expand({ fs: t, gitdir: c, ref: v }),
            O = p
              ? "0000000000000000000000000000000000000000"
              : yield dt.a.resolve({ fs: t, gitdir: c, ref: _ }),
            x = un.a.getRemoteHelperFor({ url: w }),
            P = yield x.discover({
              http: r,
              onAuth: o,
              onAuthSuccess: a,
              onAuthFailure: s,
              corsProxy: y,
              service: "git-receive-pack",
              url: w,
              headers: g,
              protocolVersion: 1,
            }),
            k = P.auth;
          let E;
          if (b)
            try {
              E = yield dt.a.expandAgainstMap({ ref: b, map: P.refs });
            } catch (t) {
              if (!(t instanceof j.a)) throw t;
              E = b.startsWith("refs/") ? b : `refs/heads/${b}`;
            }
          else E = _;
          const A = P.refs.get(E) || "0000000000000000000000000000000000000000",
            S = !P.capabilities.has("no-thin");
          let $ = new Set();
          if (!p) {
            const r = [...P.refs.values()];
            let n = new Set();
            if ("0000000000000000000000000000000000000000" !== A) {
              const i = yield pr({ fs: t, cache: e, gitdir: c, oids: [O, A] });
              for (const t of i) r.push(t);
              S &&
                (n = yield Object(Bo.a)({
                  fs: t,
                  cache: e,
                  gitdir: c,
                  oids: i,
                }));
            }
            if (!r.includes(O)) {
              const n = yield Object(Ro.a)({
                fs: t,
                cache: e,
                gitdir: c,
                start: [O],
                finish: r,
              });
              $ = yield Object(Bo.a)({ fs: t, cache: e, gitdir: c, oids: n });
            }
            if (S) {
              try {
                const r = yield dt.a.resolve({
                    fs: t,
                    gitdir: c,
                    ref: `refs/remotes/${l}/HEAD`,
                    depth: 2,
                  }),
                  { oid: i } = yield dt.a.resolveAgainstMap({
                    ref: r.replace(`refs/remotes/${l}/`, ""),
                    fullref: r,
                    map: P.refs,
                  }),
                  o = [i];
                for (const r of yield Object(Bo.a)({
                  fs: t,
                  cache: e,
                  gitdir: c,
                  oids: o,
                }))
                  n.add(r);
              } catch (t) {}
              for (const t of n) $.delete(t);
            }
            if ((O === A && (h = !0), !h)) {
              if (
                _.startsWith("refs/tags") &&
                "0000000000000000000000000000000000000000" !== A
              )
                throw new Uo.a("tag-exists");
              if (
                "0000000000000000000000000000000000000000" !== O &&
                "0000000000000000000000000000000000000000" !== A &&
                !(yield Dn({
                  fs: t,
                  cache: e,
                  gitdir: c,
                  oid: O,
                  ancestor: A,
                  depth: -1,
                }))
              )
                throw new Uo.a("not-fast-forward");
            }
          }
          const R = Object(zo.a)(
              [...P.capabilities],
              ["report-status", "side-band-64k", `agent=${Ri.a.agent}`]
            ),
            B = yield Object(Fo.a)({
              capabilities: R,
              triplets: [{ oldoid: A, oid: O, fullRef: E }],
            }),
            I = p
              ? []
              : yield Object(Io.a)({
                  fs: t,
                  cache: e,
                  gitdir: c,
                  oids: [...$],
                }),
            T = yield x.connect({
              http: r,
              onProgress: n,
              corsProxy: y,
              service: "git-receive-pack",
              url: w,
              auth: k,
              headers: g,
              body: [...B, ...I],
            }),
            { packfile: U, progress: C } = yield Co.a.demux(T.body);
          if (i) {
            const t = Object(No.a)(C);
            Object(Do.a)(
              t,
              (function () {
                var t = Lo(function* (t) {
                  yield i(t);
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          const D = yield Object(Mo.a)(U);
          if (
            (T.headers && (D.headers = T.headers), l && D.ok && D.refs[E].ok)
          ) {
            const e = `refs/remotes/${l}/${E.replace("refs/heads", "")}`;
            p
              ? yield dt.a.deleteRef({ fs: t, gitdir: c, ref: e })
              : yield dt.a.writeRef({ fs: t, gitdir: c, ref: e, value: O });
          }
          if (D.ok && Object.values(D.refs).every((t) => t.ok)) return D;
          {
            const t = Object.entries(D.refs)
              .filter(([t, e]) => !e.ok)
              .map(([t, e]) => `\n  - ${t}: ${e.error}`)
              .join("");
            throw new To.a(t, D);
          }
        })).apply(this, arguments);
      }
      function Zo(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Wo(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Zo(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Zo(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function qo(t) {
        return Ko.apply(this, arguments);
      }
      function Ko() {
        return (Ko = Wo(function* ({
          fs: t,
          http: e,
          onProgress: r,
          onMessage: n,
          onAuth: i,
          onAuthSuccess: o,
          onAuthFailure: a,
          dir: s,
          gitdir: c = Object(y.a)(s, ".git"),
          ref: u,
          remoteRef: f,
          remote: l = "origin",
          url: d,
          force: h = !1,
          delete: p = !1,
          corsProxy: g,
          headers: v = {},
          cache: m = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("http", e),
              Object(E.a)("gitdir", c),
              yield Go({
                fs: new P.a(t),
                cache: m,
                http: e,
                onProgress: r,
                onMessage: n,
                onAuth: i,
                onAuthSuccess: o,
                onAuthFailure: a,
                gitdir: c,
                ref: u,
                remoteRef: f,
                remote: l,
                url: d,
                force: h,
                delete: p,
                corsProxy: g,
                headers: v,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.push"), t);
          }
        })).apply(this, arguments);
      }
      function Vo(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Xo(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Vo(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Vo(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Jo(t) {
        return Qo.apply(this, arguments);
      }
      function Qo() {
        return (Qo = Xo(function* ({ fs: t, cache: e, gitdir: r, oid: n }) {
          const { type: i, object: o } = yield Object(pt.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: n,
          });
          if ("tag" === i)
            return Jo({
              fs: t,
              cache: e,
              gitdir: r,
              oid: (n = ht.a.from(o).parse().object),
            });
          if ("blob" !== i) throw new Tn.a(n, i, "blob");
          return { oid: n, blob: new Uint8Array(o) };
        })).apply(this, arguments);
      }
      function ta(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ea(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ta(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ta(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ra(t) {
        return na.apply(this, arguments);
      }
      function na() {
        return (na = ea(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          oid: n,
          filepath: i,
        }) {
          return (
            void 0 !== i &&
              (n = yield Object(co.a)({
                fs: t,
                cache: e,
                gitdir: r,
                oid: n,
                filepath: i,
              })),
            yield Jo({ fs: t, cache: e, gitdir: r, oid: n })
          );
        })).apply(this, arguments);
      }
      function ia(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function oa(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ia(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ia(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function aa(t) {
        return sa.apply(this, arguments);
      }
      function sa() {
        return (sa = oa(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oid: n,
          filepath: i,
          cache: o = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oid", n),
              yield ra({
                fs: new P.a(t),
                cache: o,
                gitdir: r,
                oid: n,
                filepath: i,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.readBlob"), t);
          }
        })).apply(this, arguments);
      }
      function ca(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ua(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ca(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ca(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function fa(t) {
        return la.apply(this, arguments);
      }
      function la() {
        return (la = ua(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oid: n,
          cache: i = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oid", n),
              yield Vi({ fs: new P.a(t), cache: i, gitdir: r, oid: n })
            );
          } catch (t) {
            throw ((t.caller = "git.readCommit"), t);
          }
        })).apply(this, arguments);
      }
      function da(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ha(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              da(o, n, i, a, s, "next", t);
            }
            function s(t) {
              da(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function pa(t) {
        return ya.apply(this, arguments);
      }
      function ya() {
        return (ya = ha(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          ref: n = "refs/notes/commits",
          oid: i,
        }) {
          const o = yield dt.a.resolve({ gitdir: r, fs: t, ref: n }),
            { blob: a } = yield ra({
              fs: t,
              cache: e,
              gitdir: r,
              oid: o,
              filepath: i,
            });
          return a;
        })).apply(this, arguments);
      }
      function ga(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function va(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ga(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ga(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ma(t) {
        return wa.apply(this, arguments);
      }
      function wa() {
        return (wa = va(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n = "refs/notes/commits",
          oid: i,
          cache: o = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n),
              Object(E.a)("oid", i),
              yield pa({ fs: new P.a(t), cache: o, gitdir: r, ref: n, oid: i })
            );
          } catch (t) {
            throw ((t.caller = "git.readNote"), t);
          }
        })).apply(this, arguments);
      }
      function ba(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function _a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ba(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ba(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Oa(t) {
        return ja.apply(this, arguments);
      }
      function ja() {
        return (ja = _a(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oid: n,
          format: i = "parsed",
          filepath: o,
          encoding: a,
          cache: s = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oid", n);
            const e = new P.a(t);
            void 0 !== o &&
              (n = yield Object(co.a)({
                fs: e,
                cache: s,
                gitdir: r,
                oid: n,
                filepath: o,
              }));
            const c = "parsed" === i ? "content" : i,
              u = yield Object(pt.a)({
                fs: e,
                cache: s,
                gitdir: r,
                oid: n,
                format: c,
              });
            if (((u.oid = n), "parsed" === i))
              switch (((u.format = "parsed"), u.type)) {
                case "commit":
                  u.object = lr.a.from(u.object).parse();
                  break;
                case "tree":
                  u.object = Qi.a.from(u.object).entries();
                  break;
                case "blob":
                  a
                    ? (u.object = u.object.toString(a))
                    : ((u.object = new Uint8Array(u.object)),
                      (u.format = "content"));
                  break;
                case "tag":
                  u.object = ht.a.from(u.object).parse();
                  break;
                default:
                  throw new Tn.a(u.oid, u.type, "blob|commit|tag|tree");
              }
            else
              ("deflated" !== u.format && "wrapped" !== u.format) ||
                (u.type = u.format);
            return u;
          } catch (t) {
            throw ((t.caller = "git.readObject"), t);
          }
        })).apply(this, arguments);
      }
      function xa(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Pa(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              xa(o, n, i, a, s, "next", t);
            }
            function s(t) {
              xa(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ka(t) {
        return Ea.apply(this, arguments);
      }
      function Ea() {
        return (Ea = Pa(function* ({ fs: t, cache: e, gitdir: r, oid: n }) {
          const { type: i, object: o } = yield Object(pt.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: n,
            format: "content",
          });
          if ("tag" !== i) throw new Tn.a(n, i, "tag");
          const a = ht.a.from(o);
          return { oid: n, tag: a.parse(), payload: a.payload() };
        })).apply(this, arguments);
      }
      function Aa(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Sa(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Aa(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Aa(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function $a(t) {
        return Ra.apply(this, arguments);
      }
      function Ra() {
        return (Ra = Sa(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oid: n,
          cache: i = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oid", n),
              yield ka({ fs: new P.a(t), cache: i, gitdir: r, oid: n })
            );
          } catch (t) {
            throw ((t.caller = "git.readTag"), t);
          }
        })).apply(this, arguments);
      }
      function Ba(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ia(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ba(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ba(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ta(t) {
        return Ua.apply(this, arguments);
      }
      function Ua() {
        return (Ua = Ia(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          oid: n,
          filepath: i,
          cache: o = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("oid", n),
              yield Object(Jn.a)({
                fs: new P.a(t),
                cache: o,
                gitdir: r,
                oid: n,
                filepath: i,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.readTree"), t);
          }
        })).apply(this, arguments);
      }
      function Ca(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function za(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ca(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ca(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Da(t) {
        return Na.apply(this, arguments);
      }
      function Na() {
        return (Na = za(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          filepath: i,
          cache: o = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("filepath", i),
              yield n.a.acquire(
                { fs: new P.a(t), gitdir: r, cache: o },
                (function () {
                  var t = za(function* (t) {
                    t.delete({ filepath: i });
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              );
          } catch (t) {
            throw ((t.caller = "git.remove"), t);
          }
        })).apply(this, arguments);
      }
      var Ma = r(105);
      function Fa(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Ha(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Fa(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Fa(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function La(t) {
        return Ga.apply(this, arguments);
      }
      function Ga() {
        return (Ga = Ha(function* ({
          fs: t,
          cache: e,
          onSign: r,
          gitdir: n,
          ref: i = "refs/notes/commits",
          oid: o,
          author: a,
          committer: s,
          signingKey: c,
        }) {
          let u;
          try {
            u = yield dt.a.resolve({ gitdir: n, fs: t, ref: i });
          } catch (t) {
            if (!(t instanceof j.a)) throw t;
          }
          let f = (yield Object(Jn.a)({
            fs: t,
            gitdir: n,
            oid: u || "4b825dc642cb6eb9a060e54bf8d69288fbee4904",
          })).tree;
          f = f.filter((t) => t.path !== o);
          const l = yield Object(Ma.a)({ fs: t, gitdir: n, tree: f });
          return yield Object(oe.a)({
            fs: t,
            cache: e,
            onSign: r,
            gitdir: n,
            ref: i,
            tree: l,
            parent: u && [u],
            message: "Note removed by 'isomorphic-git removeNote'\n",
            author: a,
            committer: s,
            signingKey: c,
          });
        })).apply(this, arguments);
      }
      function Ya(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Za(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ya(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ya(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Wa(t) {
        return qa.apply(this, arguments);
      }
      function qa() {
        return (qa = Za(function* ({
          fs: t,
          onSign: e,
          dir: r,
          gitdir: n = Object(y.a)(r, ".git"),
          ref: i = "refs/notes/commits",
          oid: o,
          author: a,
          committer: s,
          signingKey: c,
          cache: u = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", n),
              Object(E.a)("oid", o);
            const r = new P.a(t),
              f = yield G({ fs: r, gitdir: n, author: a });
            if (!f) throw new C.a("author");
            const l = yield q({ fs: r, gitdir: n, author: f, committer: s });
            if (!l) throw new C.a("committer");
            return yield La({
              fs: r,
              cache: u,
              onSign: e,
              gitdir: n,
              ref: i,
              oid: o,
              author: f,
              committer: l,
              signingKey: c,
            });
          } catch (t) {
            throw ((t.caller = "git.removeNote"), t);
          }
        })).apply(this, arguments);
      }
      function Ka(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Va(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ka(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ka(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Xa(t) {
        return Ja.apply(this, arguments);
      }
      function Ja() {
        return (Ja = Va(function* ({
          fs: t,
          gitdir: e,
          oldref: r,
          ref: n,
          checkout: i = !1,
        }) {
          if (n !== et.a.clean(n)) throw new nt.a(n, et.a.clean(n));
          if (r !== et.a.clean(r)) throw new nt.a(r, et.a.clean(r));
          const o = `refs/heads/${r}`,
            a = `refs/heads/${n}`;
          if (yield dt.a.exists({ fs: t, gitdir: e, ref: a }))
            throw new rt.a("branch", n, !1);
          const s = yield dt.a.resolve({ fs: t, gitdir: e, ref: o, depth: 1 });
          yield dt.a.writeRef({ fs: t, gitdir: e, ref: a, value: s }),
            yield dt.a.deleteRef({ fs: t, gitdir: e, ref: o }),
            i &&
              (yield dt.a.writeSymbolicRef({
                fs: t,
                gitdir: e,
                ref: "HEAD",
                value: a,
              }));
        })).apply(this, arguments);
      }
      function Qa(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ts(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Qa(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Qa(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function es(t) {
        return rs.apply(this, arguments);
      }
      function rs() {
        return (rs = ts(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
          oldref: i,
          checkout: o = !1,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n),
              Object(E.a)("oldref", i),
              yield Xa({
                fs: new P.a(t),
                gitdir: r,
                ref: n,
                oldref: i,
                checkout: o,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.renameBranch"), t);
          }
        })).apply(this, arguments);
      }
      function ns(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function is(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ns(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ns(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function os(t) {
        return as.apply(this, arguments);
      }
      function as() {
        return (as = is(function* ({ gitdir: t, type: e, object: r }) {
          return Object(g.a)(v.a.wrap({ type: e, object: r }));
        })).apply(this, arguments);
      }
      function ss(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function cs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ss(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ss(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function us(t) {
        return fs.apply(this, arguments);
      }
      function fs() {
        return (fs = cs(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          filepath: i,
          ref: o,
          cache: a = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("filepath", i);
            const s = new P.a(t);
            let c, u;
            try {
              c = yield dt.a.resolve({ fs: s, gitdir: r, ref: o || "HEAD" });
            } catch (t) {
              if (o) throw t;
            }
            if (c)
              try {
                c = yield Object(co.a)({
                  fs: s,
                  cache: a,
                  gitdir: r,
                  oid: c,
                  filepath: i,
                });
              } catch (t) {
                c = null;
              }
            let f = {
              ctime: new Date(0),
              mtime: new Date(0),
              dev: 0,
              ino: 0,
              mode: 0,
              uid: 0,
              gid: 0,
              size: 0,
            };
            const l = e && (yield s.read(Object(y.a)(e, i)));
            l &&
              ((u = yield os({ gitdir: r, type: "blob", object: l })),
              c === u && (f = yield s.lstat(Object(y.a)(e, i)))),
              yield n.a.acquire(
                { fs: s, gitdir: r, cache: a },
                (function () {
                  var t = cs(function* (t) {
                    t.delete({ filepath: i }),
                      c && t.insert({ filepath: i, stats: f, oid: c });
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              );
          } catch (t) {
            throw ((t.caller = "git.reset"), t);
          }
        })).apply(this, arguments);
      }
      function ls(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function ds(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ls(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ls(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function hs(t) {
        return ps.apply(this, arguments);
      }
      function ps() {
        return (ps = ds(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
          depth: i,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n),
              yield dt.a.resolve({
                fs: new P.a(t),
                gitdir: r,
                ref: n,
                depth: i,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.resolveRef"), t);
          }
        })).apply(this, arguments);
      }
      function ys(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function gs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ys(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ys(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function vs(t) {
        return ms.apply(this, arguments);
      }
      function ms() {
        return (ms = gs(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          path: n,
          value: i,
          append: o = !1,
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("path", n);
            const e = new P.a(t),
              a = yield z.a.get({ fs: e, gitdir: r });
            o ? yield a.append(n, i) : yield a.set(n, i),
              yield z.a.save({ fs: e, gitdir: r, config: a });
          } catch (t) {
            throw ((t.caller = "git.setConfig"), t);
          }
        })).apply(this, arguments);
      }
      function ws(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function bs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ws(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ws(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function _s(t) {
        return Os.apply(this, arguments);
      }
      function Os() {
        return (Os = bs(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          filepath: i,
          cache: o = {},
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("filepath", i);
            const a = new P.a(t);
            if (yield x.a.isIgnored({ fs: a, gitdir: r, dir: e, filepath: i }))
              return "ignored";
            const s = yield Ps({ fs: a, cache: o, gitdir: r }),
              c = yield js({ fs: a, cache: o, gitdir: r, tree: s, path: i }),
              u = yield n.a.acquire(
                { fs: a, gitdir: r, cache: o },
                (function () {
                  var t = bs(function* (t) {
                    for (const e of t) if (e.path === i) return e;
                    return null;
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              ),
              f = yield a.lstat(Object(y.a)(e, i)),
              l = null !== c,
              d = null !== u,
              h = null !== f,
              g = (function () {
                var t = bs(function* () {
                  if (d && !Object(p.a)(u, f)) return u.oid;
                  {
                    const t = yield a.read(Object(y.a)(e, i)),
                      s = yield os({ gitdir: r, type: "blob", object: t });
                    return (
                      d &&
                        u.oid === s &&
                        -1 !== f.size &&
                        n.a.acquire(
                          { fs: a, gitdir: r, cache: o },
                          (function () {
                            var t = bs(function* (t) {
                              t.insert({ filepath: i, stats: f, oid: s });
                            });
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        ),
                      s
                    );
                  }
                });
                return function () {
                  return t.apply(this, arguments);
                };
              })();
            if (!l && !h && !d) return "absent";
            if (!l && !h && d) return "*absent";
            if (!l && h && !d) return "*added";
            if (!l && h && d) {
              return (yield g()) === u.oid ? "added" : "*added";
            }
            if (l && !h && !d) return "deleted";
            if (l && !h && d) return u.oid, "*deleted";
            if (l && h && !d) {
              return (yield g()) === c ? "*undeleted" : "*undeletemodified";
            }
            if (l && h && d) {
              const t = yield g();
              return t === c
                ? t === u.oid
                  ? "unmodified"
                  : "*unmodified"
                : t === u.oid
                ? "modified"
                : "*modified";
            }
          } catch (t) {
            throw ((t.caller = "git.status"), t);
          }
        })).apply(this, arguments);
      }
      function js(t) {
        return xs.apply(this, arguments);
      }
      function xs() {
        return (xs = bs(function* ({
          fs: t,
          cache: e,
          gitdir: r,
          tree: n,
          path: i,
        }) {
          "string" == typeof i && (i = i.split("/"));
          const o = i.shift();
          for (const a of n)
            if (a.path === o) {
              if (0 === i.length) return a.oid;
              const { type: n, object: o } = yield Object(pt.a)({
                fs: t,
                cache: e,
                gitdir: r,
                oid: a.oid,
              });
              if ("tree" === n) {
                return js({
                  fs: t,
                  cache: e,
                  gitdir: r,
                  tree: Qi.a.from(o),
                  path: i,
                });
              }
              if ("blob" === n) throw new Tn.a(a.oid, n, "blob", i.join("/"));
            }
          return null;
        })).apply(this, arguments);
      }
      function Ps(t) {
        return ks.apply(this, arguments);
      }
      function ks() {
        return (ks = bs(function* ({ fs: t, cache: e, gitdir: r }) {
          let n;
          try {
            n = yield dt.a.resolve({ fs: t, gitdir: r, ref: "HEAD" });
          } catch (t) {
            if (t instanceof j.a) return [];
          }
          const { tree: i } = yield Object(Jn.a)({
            fs: t,
            cache: e,
            gitdir: r,
            oid: n,
          });
          return i;
        })).apply(this, arguments);
      }
      function Es(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function As(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Es(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Es(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ss(t) {
        return $s.apply(this, arguments);
      }
      function $s() {
        return ($s = As(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n = "HEAD",
          filepaths: i = ["."],
          filter: o,
          cache: a = {},
          ignored: s = !1,
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n);
            const u = new P.a(t);
            return yield Object(Rt.a)({
              fs: u,
              cache: a,
              dir: e,
              gitdir: r,
              trees: [Object(h.a)({ ref: n }), _(), d()],
              map:
                ((c = As(function* (t, [r, n, a]) {
                  if (
                    !r &&
                    !a &&
                    n &&
                    !s &&
                    (yield x.a.isIgnored({ fs: u, dir: e, filepath: t }))
                  )
                    return null;
                  if (!i.some((e) => Ut(t, e))) return null;
                  if (o && !o(t)) return;
                  const [c, f, l] = yield Promise.all([
                      r && r.type(),
                      n && n.type(),
                      a && a.type(),
                    ]),
                    d = [c, f, l].includes("blob");
                  if (("tree" === c || "special" === c) && !d) return;
                  if ("commit" === c) return null;
                  if (("tree" === f || "special" === f) && !d) return;
                  if ("commit" === l) return null;
                  if (("tree" === l || "special" === l) && !d) return;
                  const h = "blob" === c ? yield r.oid() : void 0,
                    p = "blob" === l ? yield a.oid() : void 0;
                  let y;
                  "blob" !== c && "blob" === f && "blob" !== l
                    ? (y = "42")
                    : "blob" === f && (y = yield n.oid());
                  const g = [void 0, h, y, p],
                    v = g.map((t) => g.indexOf(t));
                  return v.shift(), [t, ...v];
                })),
                function (t, e) {
                  return c.apply(this, arguments);
                }),
            });
          } catch (t) {
            throw ((t.caller = "git.statusMatrix"), t);
          }
          var c;
        })).apply(this, arguments);
      }
      function Rs(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Bs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Rs(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Rs(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Is(t) {
        return Ts.apply(this, arguments);
      }
      function Ts() {
        return (Ts = Bs(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
          object: i,
          force: o = !1,
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n);
            const e = new P.a(t);
            if (void 0 === n) throw new xr.a("ref");
            n = n.startsWith("refs/tags/") ? n : `refs/tags/${n}`;
            const a = yield dt.a.resolve({
              fs: e,
              gitdir: r,
              ref: i || "HEAD",
            });
            if (!o && (yield dt.a.exists({ fs: e, gitdir: r, ref: n })))
              throw new rt.a("tag", n);
            yield dt.a.writeRef({ fs: e, gitdir: r, ref: n, value: a });
          } catch (t) {
            throw ((t.caller = "git.tag"), t);
          }
        })).apply(this, arguments);
      }
      var Us = r(52);
      function Cs(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function zs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Cs(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Cs(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ds(t) {
        return Ns.apply(this, arguments);
      }
      function Ns() {
        return (Ns = zs(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          cache: i = {},
          filepath: o,
          oid: a,
          mode: s,
          add: c,
          remove: u,
          force: f,
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("filepath", o);
            const l = new P.a(t);
            if (u)
              return yield n.a.acquire(
                { fs: l, gitdir: r, cache: i },
                (function () {
                  var t = zs(function* (t) {
                    let r;
                    if (f || ((r = yield l.lstat(Object(y.a)(e, o))), !r))
                      t.has({ filepath: o }) && t.delete({ filepath: o });
                    else if (r.isDirectory()) throw new Us.a("directory");
                  });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            let d;
            if (!a) {
              if (((d = yield l.lstat(Object(y.a)(e, o))), !d))
                throw new j.a(`file at "${o}" on disk and "remove" not set`);
              if (d.isDirectory()) throw new Us.a("directory");
            }
            return yield n.a.acquire(
              { fs: l, gitdir: r, cache: i },
              (function () {
                var t = zs(function* (t) {
                  if (!c && !t.has({ filepath: o }))
                    throw new j.a(`file at "${o}" in index and "add" not set`);
                  let n = {
                    ctime: new Date(0),
                    mtime: new Date(0),
                    dev: 0,
                    ino: 0,
                    mode: s,
                    uid: 0,
                    gid: 0,
                    size: 0,
                  };
                  if (!a) {
                    n = d;
                    const t = n.isSymbolicLink()
                      ? yield l.readlink(Object(y.a)(e, o))
                      : yield l.read(Object(y.a)(e, o));
                    a = yield Object(k.a)({
                      fs: l,
                      gitdir: r,
                      type: "blob",
                      format: "content",
                      object: t,
                    });
                  }
                  return t.insert({ filepath: o, oid: a, stats: n }), a;
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            );
          } catch (t) {
            throw ((t.caller = "git.updateIndex"), t);
          }
        })).apply(this, arguments);
      }
      function Ms() {
        try {
          return Ri.a.version;
        } catch (t) {
          throw ((t.caller = "git.version"), t);
        }
      }
      function Fs(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Hs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Fs(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Fs(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ls(t) {
        return Gs.apply(this, arguments);
      }
      function Gs() {
        return (Gs = Hs(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          trees: n,
          map: i,
          reduce: o,
          iterate: a,
          cache: s = {},
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("trees", n),
              yield Object(Rt.a)({
                fs: new P.a(t),
                cache: s,
                dir: e,
                gitdir: r,
                trees: n,
                map: i,
                reduce: o,
                iterate: a,
              })
            );
          } catch (t) {
            throw ((t.caller = "git.walk"), t);
          }
        })).apply(this, arguments);
      }
      function Ys(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Zs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ys(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ys(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ws(t) {
        return qs.apply(this, arguments);
      }
      function qs() {
        return (qs = Zs(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          blob: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("blob", n),
              yield Object(k.a)({
                fs: new P.a(t),
                gitdir: r,
                type: "blob",
                object: n,
                format: "content",
              })
            );
          } catch (t) {
            throw ((t.caller = "git.writeBlob"), t);
          }
        })).apply(this, arguments);
      }
      function Ks(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function Vs(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Ks(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Ks(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Xs(t) {
        return Js.apply(this, arguments);
      }
      function Js() {
        return (Js = Vs(function* ({ fs: t, gitdir: e, commit: r }) {
          const n = lr.a.from(r).toObject();
          return yield Object(k.a)({
            fs: t,
            gitdir: e,
            type: "commit",
            object: n,
            format: "content",
          });
        })).apply(this, arguments);
      }
      function Qs(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function tc(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              Qs(o, n, i, a, s, "next", t);
            }
            function s(t) {
              Qs(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ec(t) {
        return rc.apply(this, arguments);
      }
      function rc() {
        return (rc = tc(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          commit: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("commit", n),
              yield Xs({ fs: new P.a(t), gitdir: r, commit: n })
            );
          } catch (t) {
            throw ((t.caller = "git.writeCommit"), t);
          }
        })).apply(this, arguments);
      }
      var nc = r(150);
      function ic(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function oc(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              ic(o, n, i, a, s, "next", t);
            }
            function s(t) {
              ic(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ac(t) {
        return sc.apply(this, arguments);
      }
      function sc() {
        return (sc = oc(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          ref: n,
          value: i,
          force: o = !1,
          symbolic: a = !1,
        }) {
          try {
            Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("ref", n),
              Object(E.a)("value", i);
            const e = new P.a(t);
            if (n !== et.a.clean(n)) throw new nt.a(n, et.a.clean(n));
            if (!o && (yield dt.a.exists({ fs: e, gitdir: r, ref: n })))
              throw new rt.a("ref", n);
            a
              ? yield dt.a.writeSymbolicRef({
                  fs: e,
                  gitdir: r,
                  ref: n,
                  value: i,
                })
              : ((i = yield dt.a.resolve({ fs: e, gitdir: r, ref: i })),
                yield dt.a.writeRef({ fs: e, gitdir: r, ref: n, value: i }));
          } catch (t) {
            throw ((t.caller = "git.writeRef"), t);
          }
        })).apply(this, arguments);
      }
      function cc(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function uc(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              cc(o, n, i, a, s, "next", t);
            }
            function s(t) {
              cc(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function fc(t) {
        return lc.apply(this, arguments);
      }
      function lc() {
        return (lc = uc(function* ({ fs: t, gitdir: e, tag: r }) {
          const n = ht.a.from(r).toObject();
          return yield Object(k.a)({
            fs: t,
            gitdir: e,
            type: "tag",
            object: n,
            format: "content",
          });
        })).apply(this, arguments);
      }
      function dc(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function hc(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              dc(o, n, i, a, s, "next", t);
            }
            function s(t) {
              dc(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function pc(t) {
        return yc.apply(this, arguments);
      }
      function yc() {
        return (yc = hc(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          tag: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("tag", n),
              yield fc({ fs: new P.a(t), gitdir: r, tag: n })
            );
          } catch (t) {
            throw ((t.caller = "git.writeTag"), t);
          }
        })).apply(this, arguments);
      }
      function gc(t, e, r, n, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, i);
      }
      function vc(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = t.apply(e, r);
            function a(t) {
              gc(o, n, i, a, s, "next", t);
            }
            function s(t) {
              gc(o, n, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function mc(t) {
        return wc.apply(this, arguments);
      }
      function wc() {
        return (wc = vc(function* ({
          fs: t,
          dir: e,
          gitdir: r = Object(y.a)(e, ".git"),
          tree: n,
        }) {
          try {
            return (
              Object(E.a)("fs", t),
              Object(E.a)("gitdir", r),
              Object(E.a)("tree", n),
              yield Object(Ma.a)({ fs: new P.a(t), gitdir: r, tree: n })
            );
          } catch (t) {
            throw ((t.caller = "git.writeTree"), t);
          }
        })).apply(this, arguments);
      }
      var bc = r(83);
      r.d(e, "Errors", function () {
        return bc;
      }),
        r.d(e, "STAGE", function () {
          return d;
        }),
        r.d(e, "TREE", function () {
          return h.a;
        }),
        r.d(e, "WORKDIR", function () {
          return _;
        }),
        r.d(e, "add", function () {
          return R;
        }),
        r.d(e, "addNote", function () {
          return J;
        }),
        r.d(e, "addRemote", function () {
          return ft;
        }),
        r.d(e, "annotatedTag", function () {
          return _t;
        }),
        r.d(e, "branch", function () {
          return St;
        }),
        r.d(e, "checkout", function () {
          return Gt;
        }),
        r.d(e, "clone", function () {
          return ne;
        }),
        r.d(e, "commit", function () {
          return ce;
        }),
        r.d(e, "getConfig", function () {
          return Jr;
        }),
        r.d(e, "getConfigAll", function () {
          return sn;
        }),
        r.d(e, "setConfig", function () {
          return vs;
        }),
        r.d(e, "currentBranch", function () {
          return he;
        }),
        r.d(e, "deleteBranch", function () {
          return _e;
        }),
        r.d(e, "deleteRef", function () {
          return Pe;
        }),
        r.d(e, "deleteRemote", function () {
          return Ie;
        }),
        r.d(e, "deleteTag", function () {
          return Fe;
        }),
        r.d(e, "expandOid", function () {
          return or;
        }),
        r.d(e, "expandRef", function () {
          return ur;
        }),
        r.d(e, "fastForward", function () {
          return Rr;
        }),
        r.d(e, "fetch", function () {
          return Ur;
        }),
        r.d(e, "findMergeBase", function () {
          return Nr;
        }),
        r.d(e, "findRoot", function () {
          return qr;
        }),
        r.d(e, "getRemoteInfo", function () {
          return dn;
        }),
        r.d(e, "getRemoteInfo2", function () {
          return vn;
        }),
        r.d(e, "hashBlob", function () {
          return wn.a;
        }),
        r.d(e, "indexPack", function () {
          return En;
        }),
        r.d(e, "init", function () {
          return Rn;
        }),
        r.d(e, "isDescendent", function () {
          return Hn;
        }),
        r.d(e, "isIgnored", function () {
          return Zn;
        }),
        r.d(e, "listBranches", function () {
          return Vn;
        }),
        r.d(e, "listFiles", function () {
          return si;
        }),
        r.d(e, "listNotes", function () {
          return yi;
        }),
        r.d(e, "listRemotes", function () {
          return ji;
        }),
        r.d(e, "listServerRefs", function () {
          return Di;
        }),
        r.d(e, "listTags", function () {
          return Hi;
        }),
        r.d(e, "log", function () {
          return go;
        }),
        r.d(e, "merge", function () {
          return bo;
        }),
        r.d(e, "packObjects", function () {
          return Po;
        }),
        r.d(e, "pull", function () {
          return So;
        }),
        r.d(e, "push", function () {
          return qo;
        }),
        r.d(e, "readBlob", function () {
          return aa;
        }),
        r.d(e, "readCommit", function () {
          return fa;
        }),
        r.d(e, "readNote", function () {
          return ma;
        }),
        r.d(e, "readObject", function () {
          return Oa;
        }),
        r.d(e, "readTag", function () {
          return $a;
        }),
        r.d(e, "readTree", function () {
          return Ta;
        }),
        r.d(e, "remove", function () {
          return Da;
        }),
        r.d(e, "removeNote", function () {
          return Wa;
        }),
        r.d(e, "renameBranch", function () {
          return es;
        }),
        r.d(e, "resetIndex", function () {
          return us;
        }),
        r.d(e, "updateIndex", function () {
          return Ds;
        }),
        r.d(e, "resolveRef", function () {
          return hs;
        }),
        r.d(e, "status", function () {
          return _s;
        }),
        r.d(e, "statusMatrix", function () {
          return Ss;
        }),
        r.d(e, "tag", function () {
          return Is;
        }),
        r.d(e, "version", function () {
          return Ms;
        }),
        r.d(e, "walk", function () {
          return Ls;
        }),
        r.d(e, "writeBlob", function () {
          return Ws;
        }),
        r.d(e, "writeCommit", function () {
          return ec;
        }),
        r.d(e, "writeObject", function () {
          return nc.a;
        }),
        r.d(e, "writeRef", function () {
          return ac;
        }),
        r.d(e, "writeTag", function () {
          return pc;
        }),
        r.d(e, "writeTree", function () {
          return mc;
        });
      e.default = {
        Errors: bc,
        STAGE: d,
        TREE: h.a,
        WORKDIR: _,
        add: R,
        addNote: J,
        addRemote: ft,
        annotatedTag: _t,
        branch: St,
        checkout: Gt,
        clone: ne,
        commit: ce,
        getConfig: Jr,
        getConfigAll: sn,
        setConfig: vs,
        currentBranch: he,
        deleteBranch: _e,
        deleteRef: Pe,
        deleteRemote: Ie,
        deleteTag: Fe,
        expandOid: or,
        expandRef: ur,
        fastForward: Rr,
        fetch: Ur,
        findMergeBase: Nr,
        findRoot: qr,
        getRemoteInfo: dn,
        getRemoteInfo2: vn,
        hashBlob: wn.a,
        indexPack: En,
        init: Rn,
        isDescendent: Hn,
        isIgnored: Zn,
        listBranches: Vn,
        listFiles: si,
        listNotes: yi,
        listRemotes: ji,
        listServerRefs: Di,
        listTags: Hi,
        log: go,
        merge: bo,
        packObjects: Po,
        pull: So,
        push: qo,
        readBlob: aa,
        readCommit: fa,
        readNote: ma,
        readObject: Oa,
        readTag: $a,
        readTree: Ta,
        remove: Da,
        removeNote: Wa,
        renameBranch: es,
        resetIndex: us,
        updateIndex: Ds,
        resolveRef: hs,
        status: _s,
        statusMatrix: Ss,
        tag: Is,
        version: Ms,
        walk: Ls,
        writeBlob: Ws,
        writeCommit: ec,
        writeObject: nc.a,
        writeRef: ac,
        writeTag: pc,
        writeTree: mc,
      };
    },
  ]);
});
//# sourceMappingURL=index.umd.min.js.map
