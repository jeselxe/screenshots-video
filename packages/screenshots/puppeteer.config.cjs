const { join } = require("path");
console.log('OK lets go')
/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  //   cacheDirectory: join(__dirname, ".cache", "puppeteer"),
  defaultViewport: {
    height: 1080,
    width: 1920,
  },
  executablePath:
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
};
