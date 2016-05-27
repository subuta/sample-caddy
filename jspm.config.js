SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "sample-caddy": {
      "main": "app.js",
      "format": "esm",
      "meta": {
        "**/*.js*": {
          "loader": "plugin-babel"
        }
      }
    }
  },
  paths: {
    "sample-caddy/": "src/"
  },
  babelOptions: {
    "plugins": [
      "babel-plugin-transform-class-properties",
      "babel-plugin-transform-react-jsx"
    ],
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.11",
      "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.8",
      "gulp": "npm:gulp@3.9.1",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.9.0",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "babel-preset-stage-0": "npm:babel-preset-stage-0@6.5.0",
      "babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0"
    },
    "packages": {
      "github:capaj/systemjs-hot-reloader@0.5.8": {
        "map": {
          "debug": "npm:debug@2.2.0",
          "weakee": "npm:weakee@1.0.0",
          "socket.io-client": "github:socketio/socket.io-client@1.4.6"
        }
      },
      "npm:gulp@3.9.1": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "archy": "npm:archy@1.0.0",
          "deprecated": "npm:deprecated@0.0.1",
          "interpret": "npm:interpret@1.0.1",
          "orchestrator": "npm:orchestrator@0.3.7",
          "pretty-hrtime": "npm:pretty-hrtime@1.0.2",
          "liftoff": "npm:liftoff@2.2.1",
          "minimist": "npm:minimist@1.2.0",
          "semver": "npm:semver@4.3.6",
          "vinyl-fs": "npm:vinyl-fs@0.3.14",
          "v8flags": "npm:v8flags@2.0.11",
          "tildify": "npm:tildify@1.2.0",
          "gulp-util": "npm:gulp-util@3.0.7"
        }
      },
      "npm:orchestrator@0.3.7": {
        "map": {
          "end-of-stream": "npm:end-of-stream@0.1.5",
          "sequencify": "npm:sequencify@0.0.7",
          "stream-consume": "npm:stream-consume@0.1.0"
        }
      },
      "npm:liftoff@2.2.1": {
        "map": {
          "findup-sync": "npm:findup-sync@0.3.0",
          "extend": "npm:extend@2.0.1",
          "flagged-respawn": "npm:flagged-respawn@0.3.2",
          "rechoir": "npm:rechoir@0.6.2",
          "resolve": "npm:resolve@1.1.7"
        }
      },
      "npm:vinyl-fs@0.3.14": {
        "map": {
          "glob-watcher": "npm:glob-watcher@0.0.6",
          "strip-bom": "npm:strip-bom@1.0.0",
          "graceful-fs": "npm:graceful-fs@3.0.8",
          "vinyl": "npm:vinyl@0.4.6",
          "defaults": "npm:defaults@1.0.3",
          "mkdirp": "npm:mkdirp@0.5.1",
          "through2": "npm:through2@0.6.5",
          "glob-stream": "npm:glob-stream@3.1.18"
        }
      },
      "npm:v8flags@2.0.11": {
        "map": {
          "user-home": "npm:user-home@1.1.1"
        }
      },
      "npm:gulp-util@3.0.7": {
        "map": {
          "object-assign": "npm:object-assign@3.0.0",
          "vinyl": "npm:vinyl@0.5.3",
          "chalk": "npm:chalk@1.1.3",
          "minimist": "npm:minimist@1.2.0",
          "through2": "npm:through2@2.0.1",
          "fancy-log": "npm:fancy-log@1.2.0",
          "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
          "array-uniq": "npm:array-uniq@1.0.2",
          "dateformat": "npm:dateformat@1.0.12",
          "gulplog": "npm:gulplog@1.0.0",
          "array-differ": "npm:array-differ@1.0.0",
          "has-gulplog": "npm:has-gulplog@0.1.0",
          "multipipe": "npm:multipipe@0.1.2",
          "replace-ext": "npm:replace-ext@0.0.1",
          "lodash._reescape": "npm:lodash._reescape@3.0.0",
          "beeper": "npm:beeper@1.1.0",
          "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
          "lodash.template": "npm:lodash.template@3.6.2"
        }
      },
      "npm:tildify@1.2.0": {
        "map": {
          "os-homedir": "npm:os-homedir@1.0.1"
        }
      },
      "npm:rechoir@0.6.2": {
        "map": {
          "resolve": "npm:resolve@1.1.7"
        }
      },
      "npm:vinyl@0.5.3": {
        "map": {
          "replace-ext": "npm:replace-ext@0.0.1",
          "clone-stats": "npm:clone-stats@0.0.1",
          "clone": "npm:clone@1.0.2"
        }
      },
      "npm:end-of-stream@0.1.5": {
        "map": {
          "once": "npm:once@1.3.3"
        }
      },
      "npm:strip-bom@1.0.0": {
        "map": {
          "is-utf8": "npm:is-utf8@0.2.1",
          "first-chunk-stream": "npm:first-chunk-stream@1.0.0"
        }
      },
      "npm:vinyl@0.4.6": {
        "map": {
          "clone-stats": "npm:clone-stats@0.0.1",
          "clone": "npm:clone@0.2.0"
        }
      },
      "npm:glob-watcher@0.0.6": {
        "map": {
          "gaze": "npm:gaze@0.5.2"
        }
      },
      "npm:fancy-log@1.2.0": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "time-stamp": "npm:time-stamp@1.0.1"
        }
      },
      "npm:glob-stream@3.1.18": {
        "map": {
          "through2": "npm:through2@0.6.5",
          "minimatch": "npm:minimatch@2.0.10",
          "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
          "unique-stream": "npm:unique-stream@1.0.0",
          "glob2base": "npm:glob2base@0.0.12",
          "glob": "npm:glob@4.5.3"
        }
      },
      "npm:through2@2.0.1": {
        "map": {
          "readable-stream": "npm:readable-stream@2.0.6",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:through2@0.6.5": {
        "map": {
          "readable-stream": "npm:readable-stream@1.0.34",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:dateformat@1.0.12": {
        "map": {
          "meow": "npm:meow@3.7.0",
          "get-stdin": "npm:get-stdin@4.0.1"
        }
      },
      "npm:has-gulplog@0.1.0": {
        "map": {
          "sparkles": "npm:sparkles@1.0.0"
        }
      },
      "npm:gulplog@1.0.0": {
        "map": {
          "glogg": "npm:glogg@1.0.0"
        }
      },
      "npm:defaults@1.0.3": {
        "map": {
          "clone": "npm:clone@1.0.2"
        }
      },
      "npm:lodash.template@3.6.2": {
        "map": {
          "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
          "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
          "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
          "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
          "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
          "lodash.restparam": "npm:lodash.restparam@3.6.1",
          "lodash.escape": "npm:lodash.escape@3.2.0",
          "lodash.keys": "npm:lodash.keys@3.1.2",
          "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1"
        }
      },
      "npm:findup-sync@0.3.0": {
        "map": {
          "glob": "npm:glob@5.0.15"
        }
      },
      "npm:multipipe@0.1.2": {
        "map": {
          "duplexer2": "npm:duplexer2@0.0.2"
        }
      },
      "npm:gaze@0.5.2": {
        "map": {
          "globule": "npm:globule@0.1.0"
        }
      },
      "npm:meow@3.7.0": {
        "map": {
          "minimist": "npm:minimist@1.2.0",
          "object-assign": "npm:object-assign@4.1.0",
          "decamelize": "npm:decamelize@1.2.0",
          "loud-rejection": "npm:loud-rejection@1.3.0",
          "camelcase-keys": "npm:camelcase-keys@2.1.0",
          "map-obj": "npm:map-obj@1.0.1",
          "redent": "npm:redent@1.0.0",
          "normalize-package-data": "npm:normalize-package-data@2.3.5",
          "read-pkg-up": "npm:read-pkg-up@1.0.1",
          "trim-newlines": "npm:trim-newlines@1.0.0"
        }
      },
      "npm:glogg@1.0.0": {
        "map": {
          "sparkles": "npm:sparkles@1.0.0"
        }
      },
      "npm:readable-stream@2.0.6": {
        "map": {
          "core-util-is": "npm:core-util-is@1.0.2",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "isarray": "npm:isarray@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:readable-stream@1.0.34": {
        "map": {
          "core-util-is": "npm:core-util-is@1.0.2",
          "isarray": "npm:isarray@0.0.1",
          "string_decoder": "npm:string_decoder@0.10.31",
          "inherits": "npm:inherits@2.0.1",
          "stream-browserify": "npm:stream-browserify@1.0.0"
        }
      },
      "npm:minimatch@2.0.10": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.4"
        }
      },
      "npm:glob@4.5.3": {
        "map": {
          "minimatch": "npm:minimatch@2.0.10",
          "once": "npm:once@1.3.3",
          "inherits": "npm:inherits@2.0.1",
          "inflight": "npm:inflight@1.0.5"
        }
      },
      "npm:duplexer2@0.0.2": {
        "map": {
          "readable-stream": "npm:readable-stream@1.1.14"
        }
      },
      "npm:glob2base@0.0.12": {
        "map": {
          "find-index": "npm:find-index@0.1.1"
        }
      },
      "npm:globule@0.1.0": {
        "map": {
          "lodash": "npm:lodash@1.0.2",
          "glob": "npm:glob@3.1.21",
          "minimatch": "npm:minimatch@0.2.14"
        }
      },
      "npm:lodash.templatesettings@3.1.1": {
        "map": {
          "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
          "lodash.escape": "npm:lodash.escape@3.2.0"
        }
      },
      "npm:readable-stream@1.1.14": {
        "map": {
          "isarray": "npm:isarray@0.0.1",
          "string_decoder": "npm:string_decoder@0.10.31",
          "core-util-is": "npm:core-util-is@1.0.2",
          "inherits": "npm:inherits@2.0.1",
          "stream-browserify": "npm:stream-browserify@1.0.0"
        }
      },
      "npm:lodash.keys@3.1.2": {
        "map": {
          "lodash.isarray": "npm:lodash.isarray@3.0.4",
          "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
          "lodash._getnative": "npm:lodash._getnative@3.9.1"
        }
      },
      "npm:normalize-package-data@2.3.5": {
        "map": {
          "semver": "npm:semver@5.1.0",
          "is-builtin-module": "npm:is-builtin-module@1.0.0",
          "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
          "hosted-git-info": "npm:hosted-git-info@2.1.5"
        }
      },
      "npm:camelcase-keys@2.1.0": {
        "map": {
          "map-obj": "npm:map-obj@1.0.1",
          "camelcase": "npm:camelcase@2.1.1"
        }
      },
      "npm:glob@3.1.21": {
        "map": {
          "graceful-fs": "npm:graceful-fs@1.2.3",
          "inherits": "npm:inherits@1.0.2",
          "minimatch": "npm:minimatch@0.2.14"
        }
      },
      "npm:stream-browserify@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@1.1.14"
        }
      },
      "npm:loud-rejection@1.3.0": {
        "map": {
          "array-find-index": "npm:array-find-index@1.0.1",
          "signal-exit": "npm:signal-exit@2.1.2"
        }
      },
      "npm:redent@1.0.0": {
        "map": {
          "strip-indent": "npm:strip-indent@1.0.1",
          "indent-string": "npm:indent-string@2.1.0"
        }
      },
      "npm:read-pkg-up@1.0.1": {
        "map": {
          "find-up": "npm:find-up@1.1.2",
          "read-pkg": "npm:read-pkg@1.1.0"
        }
      },
      "npm:minimatch@0.2.14": {
        "map": {
          "sigmund": "npm:sigmund@1.0.1",
          "lru-cache": "npm:lru-cache@2.7.3"
        }
      },
      "npm:lodash.escape@3.2.0": {
        "map": {
          "lodash._root": "npm:lodash._root@3.0.1"
        }
      },
      "npm:strip-indent@1.0.1": {
        "map": {
          "get-stdin": "npm:get-stdin@4.0.1"
        }
      },
      "npm:read-pkg@1.1.0": {
        "map": {
          "normalize-package-data": "npm:normalize-package-data@2.3.5",
          "path-type": "npm:path-type@1.1.0",
          "load-json-file": "npm:load-json-file@1.1.0"
        }
      },
      "npm:indent-string@2.1.0": {
        "map": {
          "repeating": "npm:repeating@2.0.1"
        }
      },
      "npm:is-builtin-module@1.0.0": {
        "map": {
          "builtin-modules": "npm:builtin-modules@1.1.1"
        }
      },
      "npm:validate-npm-package-license@3.0.1": {
        "map": {
          "spdx-correct": "npm:spdx-correct@1.0.2",
          "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
        }
      },
      "npm:find-up@1.1.2": {
        "map": {
          "path-exists": "npm:path-exists@2.1.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:path-exists@2.1.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:path-type@1.1.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "pify": "npm:pify@2.3.0"
        }
      },
      "npm:load-json-file@1.1.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "strip-bom": "npm:strip-bom@2.0.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "pify": "npm:pify@2.3.0",
          "parse-json": "npm:parse-json@2.2.0"
        }
      },
      "npm:spdx-expression-parse@1.0.2": {
        "map": {
          "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
          "spdx-license-ids": "npm:spdx-license-ids@1.2.1"
        }
      },
      "npm:repeating@2.0.1": {
        "map": {
          "is-finite": "npm:is-finite@1.0.1"
        }
      },
      "npm:spdx-correct@1.0.2": {
        "map": {
          "spdx-license-ids": "npm:spdx-license-ids@1.2.1"
        }
      },
      "npm:strip-bom@2.0.0": {
        "map": {
          "is-utf8": "npm:is-utf8@0.2.1"
        }
      },
      "npm:pinkie-promise@2.0.1": {
        "map": {
          "pinkie": "npm:pinkie@2.0.4"
        }
      },
      "npm:is-finite@1.0.1": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.0"
        }
      },
      "npm:parse-json@2.2.0": {
        "map": {
          "error-ex": "npm:error-ex@1.3.0"
        }
      },
      "npm:error-ex@1.3.0": {
        "map": {
          "is-arrayish": "npm:is-arrayish@0.2.1"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "supports-color": "npm:supports-color@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "esutils": "npm:esutils@2.0.2",
          "babel-types": "npm:babel-types@6.9.0",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-plugin-syntax-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-types@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "lodash": "npm:lodash@4.13.1",
          "esutils": "npm:esutils@2.0.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babel-traverse@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-types": "npm:babel-types@6.9.0",
          "lodash": "npm:lodash@4.13.1",
          "babylon": "npm:babylon@6.8.0",
          "globals": "npm:globals@8.18.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "invariant": "npm:invariant@2.2.1",
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "debug": "npm:debug@2.2.0"
        }
      },
      "npm:babylon@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-code-frame@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@1.1.3",
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:babel-preset-stage-1@6.5.0": {
        "map": {
          "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
          "babel-preset-stage-2": "npm:babel-preset-stage-2@6.5.0",
          "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.8.0",
          "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.9.0"
        }
      },
      "npm:babel-plugin-transform-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.8.0"
        }
      },
      "npm:babel-plugin-transform-class-constructor-call@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.8.0",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babel-plugin-transform-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.0"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0"
        }
      },
      "npm:babel-preset-stage-2@6.5.0": {
        "map": {
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0",
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.5.0",
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-trailing-function-commas@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-types": "npm:babel-types@6.9.0",
          "lodash": "npm:lodash@4.13.1",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-helper-explode-class@6.8.0": {
        "map": {
          "babel-types": "npm:babel-types@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0"
        }
      },
      "npm:babel-template@6.9.0": {
        "map": {
          "babel-types": "npm:babel-types@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "lodash": "npm:lodash@4.13.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babylon": "npm:babylon@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-class-constructor-call@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-class-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-preset-stage-3@6.5.0": {
        "map": {
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-types": "npm:babel-types@6.9.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.8.0",
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.8.0",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0"
        }
      },
      "npm:babel-helper-bindify-decorators@6.8.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-types": "npm:babel-types@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-types": "npm:babel-types@6.9.0",
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-types": "npm:babel-types@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-helper-get-function-arity@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-types": "npm:babel-types@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.8.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-preset-stage-0@6.5.0": {
        "map": {
          "babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0",
          "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.8.0",
          "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.8.0"
        }
      },
      "npm:babel-plugin-transform-do-expressions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.8.0"
        }
      },
      "npm:babel-plugin-transform-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-do-expressions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "autoprefixer": "npm:autoprefixer@6.3.6",
    "babel-polyfill": "npm:babel-polyfill@6.9.0",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "change-case": "npm:change-case@2.3.1",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "co": "npm:co@4.6.0",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.22",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "free-style": "npm:free-style@1.2.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "icepick": "npm:icepick@1.2.0",
    "jsx": "github:floatdrop/plugin-jsx@1.2.1",
    "keycode": "npm:keycode@2.1.1",
    "lodash": "npm:lodash@4.13.1",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "normalizr": "npm:normalizr@2.1.0",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "postcss-js": "npm:postcss-js@0.1.3",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.1.0",
    "react-dom": "npm:react-dom@15.1.0",
    "react-redux": "npm:react-redux@4.4.5",
    "react-router": "npm:react-router@2.4.1",
    "react-router-redux": "npm:react-router-redux@4.0.4",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@1.0.0",
    "redux": "npm:redux@3.5.2",
    "redux-batched-actions": "npm:redux-batched-actions@0.1.2",
    "redux-thunk": "npm:redux-thunk@2.1.0",
    "redux-undo": "github:omnidan/redux-undo@master",
    "reselect": "npm:reselect@2.5.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "npm:normalizr@2.1.0": {
      "map": {
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:redux@3.5.2": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "symbol-observable": "npm:symbol-observable@0.2.4",
        "lodash-es": "npm:lodash-es@4.13.1"
      }
    },
    "npm:postcss-js@0.1.3": {
      "map": {
        "camelcase-css": "npm:camelcase-css@1.0.1",
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:react@15.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.3"
      }
    },
    "npm:autoprefixer@6.3.6": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "num2fraction": "npm:num2fraction@1.2.2",
        "normalize-range": "npm:normalize-range@0.1.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "browserslist": "npm:browserslist@1.3.1",
        "caniuse-db": "npm:caniuse-db@1.0.30000469"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:fbjs@0.8.3": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "core-js": "npm:core-js@1.2.6",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "immutable": "npm:immutable@3.8.1"
      }
    },
    "npm:postcss@5.0.21": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
        "node-fetch": "npm:node-fetch@1.5.3"
      }
    },
    "npm:browserslist@1.3.1": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000469"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:node-fetch@1.5.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "github:jspm/nodelibs-timers@0.2.0-alpha": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.3"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.2.7",
        "bn.js": "npm:bn.js@4.11.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.3"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.2.7",
        "bn.js": "npm:bn.js@4.11.3"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.6.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:elliptic@6.2.7": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.6.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "pako": "npm:pako@0.2.8"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.6"
      }
    },
    "npm:react-router@2.4.1": {
      "map": {
        "invariant": "npm:invariant@2.2.1",
        "warning": "npm:warning@2.1.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.6",
        "history": "npm:history@2.1.1"
      }
    },
    "npm:history@2.1.1": {
      "map": {
        "invariant": "npm:invariant@2.2.1",
        "warning": "npm:warning@2.1.0",
        "query-string": "npm:query-string@3.0.3",
        "deep-equal": "npm:deep-equal@1.0.1"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:query-string@3.0.3": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:react-tap-event-plugin@1.0.0": {
      "map": {
        "fbjs": "npm:fbjs@0.2.1"
      }
    },
    "npm:fbjs@0.2.1": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0",
        "promise": "npm:promise@7.1.1"
      }
    },
    "npm:babel-runtime@6.9.0": {
      "map": {
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-polyfill@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.0",
        "core-js": "npm:core-js@2.4.0",
        "babel-regenerator-runtime": "npm:babel-regenerator-runtime@6.5.0"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "inherits": "npm:inherits@2.0.1",
        "inflight": "npm:inflight@1.0.5",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.4"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:brace-expansion@1.1.4": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.1"
      }
    },
    "github:floatdrop/plugin-jsx@1.2.1": {
      "map": {
        "react-tools": "npm:react-tools@0.13.3"
      }
    },
    "npm:react-tools@0.13.3": {
      "map": {
        "jstransform": "npm:jstransform@10.1.0",
        "commoner": "npm:commoner@0.10.4"
      }
    },
    "npm:jstransform@10.1.0": {
      "map": {
        "source-map": "npm:source-map@0.1.31",
        "base62": "npm:base62@0.1.1",
        "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb"
      }
    },
    "npm:commoner@0.10.4": {
      "map": {
        "recast": "npm:recast@0.10.43",
        "private": "npm:private@0.1.6",
        "glob": "npm:glob@5.0.15",
        "mkdirp": "npm:mkdirp@0.5.1",
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "detective": "npm:detective@4.3.1",
        "iconv-lite": "npm:iconv-lite@0.4.13",
        "commander": "npm:commander@2.9.0",
        "q": "npm:q@1.4.1"
      }
    },
    "npm:recast@0.10.43": {
      "map": {
        "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
        "source-map": "npm:source-map@0.5.6",
        "private": "npm:private@0.1.6",
        "ast-types": "npm:ast-types@0.8.15"
      }
    },
    "npm:source-map@0.1.31": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:detective@4.3.1": {
      "map": {
        "defined": "npm:defined@1.0.0",
        "acorn": "npm:acorn@1.2.2"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:change-case@2.3.1": {
      "map": {
        "camel-case": "npm:camel-case@1.2.2",
        "pascal-case": "npm:pascal-case@1.1.2",
        "constant-case": "npm:constant-case@1.1.2",
        "lower-case-first": "npm:lower-case-first@1.0.2",
        "is-upper-case": "npm:is-upper-case@1.1.2",
        "is-lower-case": "npm:is-lower-case@1.1.3",
        "dot-case": "npm:dot-case@1.1.2",
        "snake-case": "npm:snake-case@1.1.2",
        "sentence-case": "npm:sentence-case@1.1.3",
        "upper-case": "npm:upper-case@1.1.3",
        "path-case": "npm:path-case@1.1.2",
        "swap-case": "npm:swap-case@1.1.2",
        "param-case": "npm:param-case@1.1.2",
        "upper-case-first": "npm:upper-case-first@1.1.2",
        "title-case": "npm:title-case@1.1.2",
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "npm:constant-case@1.1.2": {
      "map": {
        "snake-case": "npm:snake-case@1.1.2",
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:pascal-case@1.1.2": {
      "map": {
        "camel-case": "npm:camel-case@1.2.2",
        "upper-case-first": "npm:upper-case-first@1.1.2"
      }
    },
    "npm:camel-case@1.2.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3",
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:lower-case-first@1.0.2": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "npm:is-upper-case@1.1.2": {
      "map": {
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:snake-case@1.1.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3"
      }
    },
    "npm:dot-case@1.1.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3"
      }
    },
    "npm:sentence-case@1.1.3": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "npm:is-lower-case@1.1.3": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "npm:swap-case@1.1.2": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3",
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:upper-case-first@1.1.2": {
      "map": {
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:path-case@1.1.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3"
      }
    },
    "npm:title-case@1.1.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3",
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:param-case@1.1.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3"
      }
    }
  }
});
