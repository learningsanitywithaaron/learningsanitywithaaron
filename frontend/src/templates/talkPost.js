import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import '../sass/posts.scss'

function TalkPost(props) {
  const talk = {
    ...props.data.sanityTalk,
    slug: props.data.sanityTalk.slug.current,
    tags: props.data.sanityTalk.tags.map(tag => tag.title),
  }

  // const coverImageUrl = ''
  console.log(talk)
  return (
    <Layout>
      <Seo title={talk.title} keywords={[``]} />
      <div className='container post'>
        <h1 className='post-title'>{talk.title}</h1>
        <p>{talk.publishedAt}</p>
        <ul className='post--links'>
          <li>
            <a target='_blank' rel='noopener noreferrer' href={talk.slidesLink}>
              Slides
            </a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href={talk.videoLink}>
              Video
            </a>
          </li>
        </ul>
        <p>{talk.body}</p>
      </div>
    </Layout>
  )
}

export default TalkPost

export const pageQuery = graphql`
  query TalkById($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    sanityTalk(_id: { eq: $id }) {
      _id
      title
      slug {
        current
      }
      body
      videoLink
      slidesLink
      conference
      conferenceLink
      publishedAt(formatString: "MM/DD/YYYY")
      tags {
        title
      }
    }
  }
`
