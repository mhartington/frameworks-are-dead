const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mhartington/Github/framework-are-dead/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-mdx-deck-src-templates-deck-js": hot(preferDefault(require("/Users/mhartington/Github/framework-are-dead/node_modules/gatsby-theme-mdx-deck/src/templates/deck.js")))
}

