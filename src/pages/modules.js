import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './modules.css'

const ModulesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Modules" />
      <div className="modules">
        <div className="intro">
          <h2>Achieve Your Brand's Ambitious Goals with Modus Planning</h2>
          <h3>Allocate precious resources effectively and always delight the customer with superior execution</h3>
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
  }
`
