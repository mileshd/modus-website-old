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
            <h2>
              Introduction to Modus Planning
            </h2>
            <iframe
              src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1596033587&f=RLYna3VEYcPtkrDUMj22Qg&d=0&m=p&r=360p+480p+720p&volume=100&start_res=480p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options="
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
            <h2>
              Why Bottom-Up is Better
            </h2>
            <iframe
              src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1596033736&f=AqUcvyX0WigTyROwe1MMWA&d=0&m=p&r=360p+480p+720p&volume=100&start_res=480p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options="
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
