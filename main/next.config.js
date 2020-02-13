module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      // test: /\.plugin\.js|\.plugin\.jsx|\.plugin\.ts|\.plugin\.tsx$/,
      test: /plugin\/pages\/.*\.ts?|plugin\/pages\/.*\.tsx?/,
      use: [options.defaultLoaders.babel]
    });

    return config;
  }
};
