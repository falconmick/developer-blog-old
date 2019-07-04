const path = require(`path`);

module.exports = {
    plugins: [
        {
            resolve: `gatsby-mdx`,
            options: {
                extensions: [".mdx"],
                createPages: false
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/assets`,
                name: 'assets',
            },
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: path.join(__dirname, `src/pages`),
            },
        },
    ],
};