SystemJS.config({
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
    "npm:*.json"
  ],
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.11"
  },
  packages: {}
});
