import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './media.css'

const MediaPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Media" />
      <div className="media">
        <div className="container">
          <div className="col-xs-12 col-sm-6">
            <h3>
              Out of Stocks are a thing of the past. See how Modus puts you in the driver's seat.
            </h3>
            <iframe
              src="https://player.vimeo.com/video/438123064"
              width="100%"
              height="324"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <h3>
              Out of Stocks are a thing of the past. See how Modus puts you in the driver's seat.
            </h3>
            <iframe
              src="https://player.vimeo.com/video/438123064"
              width="100%"
              height="324"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MediaPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
