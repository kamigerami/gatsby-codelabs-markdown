exports.createPages = async function ({actions, graphql}) {
  const {data} = await graphql(`
    query MyQuery {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              date
              slug
              title
              tags
              description
            }
            id
          }
        }
      }
    }
  `);

  // Create pagination
  const postPerPage = 15;

  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blogs` : `blogs/${i + 1}`,
      component: require.resolve("./src/templates/AllPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create single blog post

  data.allMdx.edges.forEach(edge => {
    const slug = `blogs/${edge.node.frontmatter.slug}`
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/SinglePost.js"),
      context: {id}
    });
  });
};