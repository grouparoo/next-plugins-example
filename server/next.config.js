const glob = require("glob");
const path = require("path");
const pluginNames = glob
  .sync(path.join(__dirname, "..", "plugins", "*"))
  .map((plugin) => plugin.replace(path.join(__dirname, "..", "plugins"), ""))
  .map((plugin) => plugin.replace(/\//g, ""));

require("./plugins"); // prepare plugins

module.exports = {
  webpack: (config, options) => {
    // allow compilation of our plugins when we load them from NPM
    const rule = config.module.rules[0];
    const originalExcludeMethod = rule.exclude;
    config.module.rules[0].exclude = (moduleName, ...otherArgs) => {
      // we want to explicitly allow our plugins
      for (const i in pluginNames) {
        if (moduleName.indexOf(`node_modules/${pluginNames[i]}`) >= 0) {
          return false;
        }
      }

      // otherwise, use the original rule
      return originalExcludeMethod(moduleName, ...otherArgs);
    };

    // add a rule to compile our plugins from within the monorepo
    config.module.rules.push({
      test: /plugins\/.*\/pages\/.*\.ts?|plugins\/.*\/pages\/.*\.tsx?/,
      use: [options.defaultLoaders.babel],
    });

    return config;
  },
};
