import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import '../sass/card.scss'

function Card({
  title,
  link,
  description,
  details,
  children,
  // isLinkLocal = true,
  coverImage,
  imageOnly = false,
}) {
  if (imageOnly) {
    return (
      <Link to={link} className='img-card'>
        <GatsbyImage className='card--img' fluid={coverImage.asset.fluid} />
      </Link>
    )
  }

  const shortDescription = description
    ? description.substring(0, 100) + '...'
    : ''
  return (
    <Link to={link} className='card'>
      {coverImage && (
        <GatsbyImage
          className='card--img'
          image={coverImage.asset.gatsbyImageData}
          alt={title}
        />
      )}
      <div className='card--content'>
        <h2 className='h2 card--title'>{title}</h2>
        <small className='card--date'>{details}</small>
        <ReactMarkdown>{shortDescription}</ReactMarkdown>

        {children}
        {/* {displayResources(resources)} */}
      </div>
    </Link>
  )
}

export default Card
