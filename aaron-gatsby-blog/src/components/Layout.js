import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Footer from './Footer'

import '../sass/index.scss'
import '../sass/layout.scss'
// import PromotionalBanner from "./PromotionalBanner";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='layout'>
      {/* <PromotionalBanner /> */}
      <div className='container'>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
