const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

// prepare the paths we'll be using and start clean
if (fs.existsSync(path.join(__dirname, "tmp"))) {
  fs.rmdirSync(path.join(__dirname, "tmp"), { recursive: true });
}
fs.mkdirpSync(path.join(__dirname, "tmp"));

// the top-level folder needs to exist for webpack to scan, even if there are no plugins
fs.mkdirpSync(path.join(__dirname, "tmp", "plugin"));

// For every plugin provided, we need to make an file within the core project that has a direct import for it.
// We do not want to use wildcard strings in the import statement to save webpack from scanning all of our directories.
const plugins = glob.sync(path.join(__dirname, "..", "plugins", "*"));
plugins.map((plugin) => {
  const pluginName = plugin
    .replace(path.join(__dirname, "..", "plugins"), "")
    .replace(/\//g, "");
  fs.mkdirpSync(path.join(__dirname, "tmp", "plugin", pluginName));
  const pluginPages = glob.sync(path.join(plugin, "pages", "*"));
  pluginPages.map((page) => {
    const pageName = page
      .replace(path.join(__dirname, "..", "plugins", pluginName, "pages"), "")
      .replace(/\//g, "");
    fs.writeFileSync(
      path.join(__dirname, "tmp", "plugin", pluginName, `${pageName}`),
      `export { default } from "${page.replace(/\.tsx$/, "")}"
console.info("[Plugin] '${pageName}' from ${pluginName}");`
    );
  });
});
