import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Card from '../components/Card'

function TalkPage({ data }) {
  let talks = data.allSanityTalk.nodes.map(talk => ({
    ...talk,
    slug: talk.slug.current,
    tags: talk.tags.map(tag => tag.title),
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
      <Seo title='Speaking' keywords={['conference talks']} type='talk' />
      <div className='container'>
        <h1 className='title'>Talk</h1>
        <hr className='title-underline' />
        <ul>
          {talks.map(talk => (
            <>
              <Card
                key={talk._id}
                title={talk.title}
                details={talk.publishedAt}
                description={talk.body}
                link={talk.slug}
              >
                {displayTags(talk.tags)}
              </Card>
              <p>
                <a href={talk.conferenceLink} target='_blank'>
                  Conference - {talk.conference}
                </a>
              </p>
            </>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TalkPage

export const query = graphql`
  query TalkPost {
    allSanityTalk {
      nodes {
        _id
        title
        slug {
          current
        }
        excerpt
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
  }
`
