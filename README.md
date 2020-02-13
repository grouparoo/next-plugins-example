# Next Plugins

An example of how to use a dynamic import to load a page from a random plugin outside of the main next "pages" directory

- `main` is the root project
- `plugin` is the plugin outside of the project

1. We dynamically import the file, so it will be slow to load
2. We use a wild-card page in the main project, `[page].tsx` to then load in the component dynamically via the `query`

Notes:

- The plugin needs `react` and `react-dom` in its own dependencies.
- The [webpack test](https://github.com/evantahler/next-plugins/blob/master/main/next.config.js) is specific to a plugin named "plugin". If you have a lot of plugins you may want to build the search programmatically.
