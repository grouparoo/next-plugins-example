require("./plugins"); // prepare plugins

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /plugins\/.*\/pages\/.*\.ts?|plugins\/.*\/pages\/.*\.tsx?/,
      use: [options.defaultLoaders.babel],
    });

    return config;
  },
};
