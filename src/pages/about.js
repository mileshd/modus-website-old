import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './about.css'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Us" />
      <div className="about-page">
        <div className="about-section">
          We believe that entrepreneurs and innovators have a right to the best systems. At OnePage, our mission is to provide the tools they need to plan and execute their business with excellence.
        </div>
        <div className="about-section">
          OnePage Software's applications are created by CPG people For CPG people. We strive to develop products that are massively impactful while being easy to afford and even easier to learn.
        </div>
        <div className="about-section">
          Our philosophy guides our approach to every client relationship. We desire to create long-lasting, robust partnerships where constant feedback allows us to optimize and refine our products to drive the most value possible.
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
