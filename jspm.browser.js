SystemJS.config({
  baseURL: "/",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "sample-caddy/": "src/"
  }
});
