/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
var React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
    const attachCode = `
  if (ga) {
    ga('require', 'linker');
    ga('linker:autoLink', ['tcheck.me', 'tcheckshop.com']);
  }`
    setPostBodyComponents([<script dangerouslySetInnerHTML={{
      __html: attachCode
    }}/>])
  }