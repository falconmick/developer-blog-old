// //const _ = require('lodash')
// const Promise = require('bluebird');
// const path = require("path");
// const { createFilePath } = require('gatsby-source-filesystem');
// const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
//
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//               edges {
//                 node {
//                   id
//                   tableOfContents
//                   parent {
//                     ... on File {
//                       absolutePath
//                       name
//                       sourceInstanceName
//                     }
//                   }
//                   code {
//                     scope
//                   }
//                   frontmatter {
//                     title
//                   }
//                   fields{
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors); // eslint-disable-line no-console
//           reject(result.errors);
//         }
//
//         // Create blog posts pages.
//         result.data.allMdx.edges.forEach(({ node }, index) => {
//           const pagePath = node.fields.slug;
//           const component = componentWithMDXScope(
//             path.resolve("./src/templates/BlogPostTemplate.js"),
//             node.code.scope,
//             __dirname
//           );
//
//           const previousPageNode = result.data.allMdx.edges[index - 1] || {node: null};
//           const { node: previousPage } = previousPageNode;
//
//           const nextPageNode = result.data.allMdx.edges.length > (index + 1) ? result.data.allMdx.edges[index + 1] : {node: null};
//           const { node: nextPage } = nextPageNode;
//           const context = {
//             absPath: node.parent.absolutePath,
//             tableOfContents: node.tableOfContents,
//             id: node.id,
//             previousPage,
//             nextPage
//           };
//
//           createPage({
//             path: pagePath,
//             component,
//             context,
//           });
//         });
//       })
//     );
//   });
// };
//
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//
//   if (node.internal.type === 'Mdx') {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
//
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//     },
//   });
// };
