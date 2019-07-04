module.exports = {
    plugins: [
        {
            resolve: "theme",
            options: {
                postsPath: "/blog",
            },
        },
    ],
    siteMetadata: {
        // Used for the site title and SEO
        title: `My Blog Title`,
        // Used to provide alt text for your avatar
        author: `Michael Crook`,
        // Used for SEO
        description: `My site description...`,
        // Used for social links in the root footer
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/falconmick`,
            },
            {
                name: `github`,
                url: `https://github.com/falconmick`,
            },
        ],
    },
};