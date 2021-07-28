require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path:
          process.env.NODE_ENV === `development`
            ? `${__dirname}/src/content/2021`
            : `${__dirname}/src/content`
      }
    },
    `gatsby-transformer-remark`
  ]
};
