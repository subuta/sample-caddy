SystemJS.config({
  paths: {
    "sample-caddy/": "src/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.11"
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
  map: {
    "caddy-hot-loader": "github:jhkennedy4/caddy-hot-loader@0.4.4"
  },
  packages: {
    "github:jhkennedy4/caddy-hot-loader@0.4.4": {
      "map": {
        "lodash": "npm:lodash@3.10.1"
      }
    }
  }
});
