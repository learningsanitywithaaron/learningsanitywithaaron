const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blogPost.js')

  const postsResult = await graphql(
    `
      query {
        allSanityPost(sort: { order: DESC, fields: publishedAt }) {
          nodes {
            _id
            slug {
              current
            }
          }
        }
      }
    `
  )

  if (postsResult.errors) {
    throw postsResult.errors
  }

  const posts = postsResult.data.allSanityPost.nodes

  posts.forEach((post, index) => {
    createPage({
      path: `blog/${post.slug.current}`,
      component: blogPost,
      context: {
        id: post._id,
      },
    })
  })

  // TALK
  const talkPost = path.resolve('./src/templates/talkPost.js')

  const talksResult = await graphql(
    `
      query {
        allSanityTalk(sort: { order: DESC, fields: publishedAt }) {
          nodes {
            _id
            slug {
              current
            }
          }
        }
      }
    `
  )

  if (talksResult.errors) {
    throw talksResult.errors
  }

  const talks = talksResult.data.allSanityTalk.nodes

  talks.forEach(talk => {
    createPage({
      path: `speaking/${talk.slug.current}`,
      component: talkPost,
      context: {
        id: talk._id,
      },
    })
  })
}
