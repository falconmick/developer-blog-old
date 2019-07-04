// import React from 'react'
// import { Link, graphql } from 'gatsby'
// import MDXRenderer from "gatsby-mdx/mdx-renderer";
//
// import Bio from '../components/Bio'
// import Layout from '../components/layout'
// import ThemeMDXProvider from "./ThemeMDXProvider";
//
// class BlogPostTemplate extends React.Component {
//     render() {
//         const { children, data, ...props } = this.props;
//         const post = data.mdx;
//         const {code: {body}, frontmatter: {title, date}, excerpt} = post;
//         const { pageContext: {nextPage, previousPage} } = this.props;
//         // const { previous, next } = this.props.pageContext
//
//         return (
//             <ThemeMDXProvider>
//                 <Layout location={this.props.location}>
//                     <h1>{title}</h1>
//                     <p>{date}</p>
//                     <div>{children}</div>
//                     <MDXRenderer {...props}>{body}</MDXRenderer>
//                     <hr />
//                     <Bio />
//
//                     <ul>
//                         <li>
//                             {
//                                 previousPage && (<Link to={previousPage.fields.slug} rel="prev">
//                                               ← {previousPage.frontmatter.title}
//                                 </Link>)
//                             }
//                         </li>
//                         <li>
//                             {
//                                 nextPage && (<Link to={nextPage.fields.slug} rel="next">
//                                         {nextPage.frontmatter.title} →
//                                 </Link>)
//                             }
//                         </li>
//                     </ul>
//                 </Layout>
//             </ThemeMDXProvider>
//         );
//     }
// }
//
// export default BlogPostTemplate
//
// export const pageQuery = graphql`
//   query($id: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     mdx(id: { eq: $id }) {
//         id
//         excerpt
//         code {
//             body
//         }
//
//         frontmatter {
//             title
//             date(formatString: "MMM DD, YYYY")
//         }
//
//     }
//   }
// `;
