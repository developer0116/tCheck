const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-growers-js": hot(preferDefault(require("/Users/kevinward/Documents/forks/tCheck/src/pages/growers.js"))),
  "component---src-pages-index-backup-js": hot(preferDefault(require("/Users/kevinward/Documents/forks/tCheck/src/pages/index.backup.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kevinward/Documents/forks/tCheck/src/pages/index.js"))),
  "component---src-pages-makers-js": hot(preferDefault(require("/Users/kevinward/Documents/forks/tCheck/src/pages/makers.js"))),
  "component---src-pages-processors-js": hot(preferDefault(require("/Users/kevinward/Documents/forks/tCheck/src/pages/processors.js"))),
  "component---src-pages-product-backup-js": hot(preferDefault(require("/Users/kevinward/Documents/forks/tCheck/src/pages/product.backup.js")))
}

