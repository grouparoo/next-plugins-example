# Next Plugins

An example of how to use a dynamic import to load a page from a random plugin outside of the main next "pages" directory

- `main` is the root project
- `plugin` is the plugin outside of the project

1. We need a custom extension on the file to help babel know how to use a custom loader
2. We dynamically import the file, so it will be slow to load
3. We use a wild-card page in the main project, `[page].tsx` to then load in the component dynamically
