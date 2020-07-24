# Next Plugins Example

![Node.js CI](https://github.com/evantahler/next-plugins/workflows/Node.js%20CI/badge.svg)

**Read more about this project @ www.grouparoo.com/blog/nextjs-plugins**

An example of how to use a dynamic import to load a page from a random plugin outside of the main next "pages" directory.  We have a monorepo, which we will be using Lerna to manage. We have a `server` project which is our main application and `plugins` which contain plugins the `server` can use. The plugin, `my-nextjs-plugin` contains a page, `/pages/hello.tsx`, which we want the main application to display.


- `server` is the root project
- `plugins` contains the plugins with additional pages and components we want to display in the main application

To Start:

```
npm install
npm run dev
```
