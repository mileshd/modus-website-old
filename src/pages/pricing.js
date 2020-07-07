import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './pricing.css'

const PricingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Pricing" />
      <div className="pricing-page">
        <h2>Modular Pricing to Suit Brands of Any Size</h2>
        <p>
          Though the Modus Core is a prerequisite, additional capabilities in the other modules can be added a la carte.
        </p>
        <p>
          Modus is a secure, cloud-based service and bills monthly with no long term commitment.
        </p>
        <p>
          <button className="btn btn-primary">Schedule a Demo</button> to learn more about pricing.
        </p>
      </div>
    </Layout>
  )
}

export default PricingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
