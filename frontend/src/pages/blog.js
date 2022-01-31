import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Card from '../components/Card'

function BlogPage({ data }) {
  let posts = data.allSanityPost.nodes.map(post => ({
    ...post,
    slug: post.slug.current,
    resources: post.resources.map(resource => resource.title),
    tags: post.tags.map(tag => tag.title),
  }))

  const displayTags = tags => {
    return (
      <small>
        Tags:{' '}
        {tags.map((tag, i) => (
          <small key={i} className='post--tag'>
            {tag}
          </small>
        ))}
      </small>
    )
  }

  return (
    <Layout>
      <Seo title='Blog' keywords={['blog']} type='blog' />
      <div className='container'>
        <h1 className='title'>Blog</h1>
        <hr className='title-underline' />
        <ul>
          {posts.map(post => (
            <Card
              key={post._id}
              title={post.title}
              details={post.publishedAt}
              description={post.excerpt}
              link={post.slug}
              resources={post.resources}
            >
              {displayTags(post.tags)}
            </Card>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPost {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
        excerpt
        resources {
          title
          resourceLink
        }
        _id
        publishedAt(formatString: "MM/DD/YYYY")
        tags {
          title
        }
      }
    }
  }
`
