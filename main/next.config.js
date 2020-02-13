module.exports = {
  webpack: config => {
    config.module.rules.push({
      // DISCUSS: another place where webpack loading magic needs to be better understood.  (see plugin/[name])
      //   without the custom ".plugin.js" extension, webpack hangs when trying to compile plugin sup-pages
      //   we also need to support compiling of components withing plugins, so we cannot limit our search path to just "pages"

      test: /\.plugin\.js|\.plugin\.jsx|\.plugin\.ts|\.plugin\.tsx$/,
      include: [
        /.*.plugin.js$/,
        /.*.plugin.jsx$/,
        /.*.plugin.ts$/,
        /.*.plugin.tsx$/
      ],
      options: {
        cwd: process.cwd()
      },
      loader: "next-babel-loader"
    });

    return config;
  }
};
