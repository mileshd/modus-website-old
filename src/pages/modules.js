import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './modules.css'

const ModulesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Modules" />
      <div className="modules">
        <div className="intro row">
          <div className="col-xs-12 col-sm-3 logo">
            <Image
             className="logo-img"
             fixed={data.modusGray.childImageSharp.fixed}
            />
            <h2>Modus Planning</h2>
          </div>
          <div className="col-xs-12 col-sm-9">
            <h3>Achieve Your Brand's Ambitious Goals with Modus Planning</h3>
            <h3>Allocate precious resources effectively</h3>
            <h3>Always delight the customer with superior execution</h3>
          </div>
        </div>
        <div className="demand">
          <h2>Demand</h2>
        </div>
        <div className="trade">
          <h2>Trade</h2>
        </div>
        <div className="order">
          <h2>Order Execution</h2>
        </div>
      </div>
    </Layout>
  )
}

export default ModulesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    modusGray: file(absolutePath: {
      regex: "/logo.png/"
    }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
