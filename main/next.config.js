module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /plugin\/pages\/.*\.ts?|plugin\/pages\/.*\.tsx?/,
      use: [options.defaultLoaders.babel]
    });

    return config;
  }
};
