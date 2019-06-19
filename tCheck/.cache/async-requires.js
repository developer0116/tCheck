// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-growers-js": () => import("/Users/kevinward/Documents/forks/tCheck/src/pages/growers.js" /* webpackChunkName: "component---src-pages-growers-js" */),
  "component---src-pages-index-backup-js": () => import("/Users/kevinward/Documents/forks/tCheck/src/pages/index.backup.js" /* webpackChunkName: "component---src-pages-index-backup-js" */),
  "component---src-pages-index-js": () => import("/Users/kevinward/Documents/forks/tCheck/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-makers-js": () => import("/Users/kevinward/Documents/forks/tCheck/src/pages/makers.js" /* webpackChunkName: "component---src-pages-makers-js" */),
  "component---src-pages-processors-js": () => import("/Users/kevinward/Documents/forks/tCheck/src/pages/processors.js" /* webpackChunkName: "component---src-pages-processors-js" */),
  "component---src-pages-product-backup-js": () => import("/Users/kevinward/Documents/forks/tCheck/src/pages/product.backup.js" /* webpackChunkName: "component---src-pages-product-backup-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/kevinward/Documents/forks/tCheck/.cache/data.json")

