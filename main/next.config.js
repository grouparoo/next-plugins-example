module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      // test: /\.plugin\.js|\.plugin\.jsx|\.plugin\.ts|\.plugin\.tsx$/,
      test: /plugin\/pages\/.*\.ts?|plugin\/pages\/.*\.tsx?/,
      use: [
        {
          loader: "next-babel-loader",
          options: { cwd: process.cwd() }
        }
      ]
    });

    return config;
  }
};
