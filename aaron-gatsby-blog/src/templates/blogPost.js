import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Share from '../components/Share'
import YouTube from '../components/YouTube'
import PortableText from '../components/portableText.js'
import '../sass/posts.scss'
import '../sass/terminal.scss'

function BlogPost(props) {
  const post = {
    ...props.data.sanityPost,
    slug: props.data.sanityPost.slug.current,
    tags: props.data.sanityPost.tags.map(tag => tag.title),
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        keywords={[``]}
        type='blog'
        description={post.excerpt}
        // image={coverImageUrl}
      />
      <Share url={`/${post.slug.current}`} title={post.title} />
      <div className='container'>
        <article className='post'>
          <header>
            <h1 className='post-title'>{post.title}</h1>
            <p className='post-date'>{post.publishedAt}</p>
          </header>
          <section>
            {post.youTubeVideoId && <YouTube id={post.youTubeVideoId} />}
            {/* <ReactMarkdown linkTarget='_blank'>{post.body}</ReactMarkdown> */}
            {post._rawMainContent && (
              <PortableText blocks={post._rawMainContent} />
            )}
          </section>
          <section>
            <h2>Resources</h2>
            <ul>
              {props.data.sanityPost.resources.map((resource, i) => (
                <li key={i} className='post--tag'>
                  <a href={resource.resourceLink} target='_blank'>
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    sanityPost(_id: { eq: $id }) {
      _id
      title
      slug {
        current
      }
      resources {
        title
        resourceLink
      }
      excerpt
      body
      _rawMainContent
      _rawMyImage
      youTubeVideoId
      publishedAt(formatString: "MM/DD/YYYY")
      tags {
        title
      }
    }
  }
`
