const path = require(`path`);

module.exports = {
    plugins: [
        {
            resolve: `gatsby-mdx`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: path.join(__dirname, `src/pages`),
            },
        },
    ],
};