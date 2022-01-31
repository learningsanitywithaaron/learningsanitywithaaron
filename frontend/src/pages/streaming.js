import React from 'react'
import { graphql } from 'gatsby'
// import ReactLivestream from 'react-livestream'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Card from '../components/Card'

export default function live({ data }) {
  const streams = data.allSanityStream.nodes.map(node => ({
    ...node,
    slug: node.slug.current,
    tags: node.tags.map(tag => tag.title),
  }))

  console.log(streams)
  const currentDate = new Date()
  const previousStreams = streams
    .filter(stream => new Date(stream.publishedAt) < currentDate)
    .reverse()
  const upcomingStreams = streams.filter(
    stream => new Date(stream.publishedAt) >= currentDate
  )
  return (
    <Layout>
      <Seo
        title='Streaming'
        keywords={[`live, live stream, streaming, twitch`]}
      />
      <div className='container'>
        <h1 className='title'>Streaming</h1>
        <hr className='title-underline' />
        <p>
          <a
            href='https://www.twitch.tv/'
            className='twitch social'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faTwitch} size='2x' />
          </a>{' '}
          You can find me on Twitch where I will stream about Web Development
        </p>
        {/* <ReactLivestream */}
        {/*   platform='twitch' */}
        {/*   twitchClientId={process.env.GATSBY_TWITCH_CLIENT_ID} */}
        {/*   twitchUserName='ifiwereawriter' */}
        {/* /> */}
        <h2>Upcoming Streams...</h2>
        <ul>
          {upcomingStreams.map(stream => (
            <Card
              title={stream.title}
              details={stream.publishedAt}
              description={stream.excerpt}
              link={stream.videoLink}
              isLinkLocal={false}
              key={stream._id}
            ></Card>
          ))}
        </ul>

        <h2>Previous Streams...</h2>
        <ul>
          {previousStreams.map(stream => (
            <Card
              title={stream.title}
              details={stream.publishedAt}
              description={stream.excerpt}
              link={stream.videoLink}
              isLinkLocal={false}
              key={stream._id}
            ></Card>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query StreamingPost {
    allSanityStream {
      nodes {
        _id
        title
        slug {
          current
        }
        excerpt
        body
        videoLink
        publishedAt(formatString: "MM/DD/YYYY")
        tags {
          title
        }
      }
    }
  }
`
