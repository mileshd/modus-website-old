import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './caseStudies.css'

const CaseStudiesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Case Studies" />
      <div className="case-studies">
        <div className="container">
          <h2>Case Studies</h2>
        </div>
      </div>
    </Layout>
  )
}

export default CaseStudiesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(absolutePath: {
      regex: "/skew.png/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ryanPicture: file(absolutePath: {
      regex: "/ryan-picture.jpeg/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
