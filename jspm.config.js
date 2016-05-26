SystemJS.config({
  paths: {
    "sample-caddy/": "src/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.11",
      "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.8",
      "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "net": "github:jspm/nodelibs-net@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha"
    },
    "packages": {
      "github:capaj/systemjs-hot-reloader@0.5.8": {
        "map": {
          "debug": "npm:debug@2.2.0",
          "weakee": "npm:weakee@1.0.0",
          "socket.io-client": "github:socketio/socket.io-client@1.4.6"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "sample-caddy": {
      "main": "sample-caddy.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
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
  map: {},
  packages: {}
});
