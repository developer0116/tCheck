## tCheck File Structure and Need to Knows

This site is built using Gatsby.js, an application generating tool built ontop of webpack and GraphQL, using React.  The original documentation that Gatsby provides is below. 

There are few things that need to be pointed out about the repo that will help you get up to speed with how things work, and where things are.

### Pages

Gatsby creates pages three different ways.  The way that made the most sense in this case was to create pages using the `pages` directory.  Each `.js` file is a `page` with `index.js` being the landing page, `processors.js` being the processors customer segment page, etc.  A good place to start tracing things in through the `pages` folder.

Each page uses the`SEO` component to allow custom meta information for each page.  They also all import their own images and components to be used.  

:rotating_light: The customer segment pages all use the same components.  If you modify one of them, you will modify the other two customer segment pages as well. :rotating_light:

### Layout Component and `gatsby-plugin-layout`

The `Layout` component is a component that is on every page.  You can think of it like a shell, that has the `Header` and `Footer` components.  All other pages render in the `Layout` component.  

Because of an earlier requirement to load the product information from shopify at any time, on any page, this website uses `gatsby-plugin-layout`.  From [the docs](https://www.gatsbyjs.org/packages/gatsby-plugin-layout/)

> This plugin enables adding components which live above the page components and persist across page changes.

This makes it so that no matter what page the user hits, the shopify client with initialize, and fetch the product information.  It's important to know this subtle different, because the `Layout` component sort of acts like a global state in this way.

### Components

All the components, even the `SEO` and `Layout` components, live in the `components` directory :neutral_face:.  Some are prefixed with a reference to what page the belong too.  For example, `CustomerSegmentCarousel.js` is the carousel used on all three customer segment pages.  `ProductDetails.js` is used exclusively on the product page, etc. 

#### Special Components :star:

1. `GlobalStyles.js` - This is a global styles component from `styled-components`. It's used as you would expect from the name.  It is used only in the `Layout` component.

2. `Typography.js` - This is just a collection of commonly used typography tags that were originlly created as part of the **stems** design system.

3. `Context.js` - This component is used to provide a React Context for:

   1. The Shopify Client
   2. All product information from the client
   3. A massaged data output with all relevant product information, including color, to be used on the product page.
   4. A checkout to be used to… checkout.

   If anything goes wrong with the Shopify integration, I'd start here. 

### Styles

This app uses styled components exclusively.  There are no inline styles.  Each component file has a number of styled-components above the actual component.  It should be easy enough to understand what is going on from just looking at the code, but the overall concept is that a sytled component is just a styled `div` or other tag, that is locally scoped, and gaurunteed not to have any collisions.  Further, there are a number of handy tools styled-components provide you, to extend styles.

See there doc [here](https://www.styled-components.com/)

### Configuration and MetaData

Gatsby lives off of a `gatsby-config.js` folder a the root of your directory.  That file lists all the plugins this project needs.  Some useful ones to point out are:

1. Google analytics
2. Google fonts
3. Styled components

In that same config file lives the `siteMetadata`.  This is a convenient way gatsby provides information to all pages.  Typically, you can put meta data here that can be used in your SEO, to title your tabs, etc.

## Getting Started

Make sure you have node@8, nom, and gatsby installed globally.  To install these items, google it.

First, fork the repo by clicking on the `fork` button on the upper right hand corner.  This will create a "copy" of this repo under your github account.

Second, clone **your** newly forked repo.  You clone a repo by clicking on the green button which says "Clone or Download", copying the link, and:

1. Opening up you terminal.

2. Navigate to a directory where you want your repo to live, on your local machine, and cloning the repo

   ```bash
   cd Documents
   mkdir forks
   cd forks
   git clone https://url.that.github.gives.you.com/account/repo
   cd into newly created folder (tCheck)
   ```

Third, npm install your dependencies in your new git repo on your local machine

```bash
npm install
```

Fourth, run `gatsby build` to start the development server, which will automatically update your browser while you edit your code.

Fifth, hack :computer:

### Assets

Gatsby generates static assets that make up your entire web app.  When you are ready to build your app, type

```bash
gatsby build
```

which will trigger gatsby to build production ready assets that you will host.  Those assets end up in the public folder, in the root of your directory. 

To test those assets before deploying, you can run 

```bash
gatsby serve
```

which will locally host your assets on localhost:9000.


<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
