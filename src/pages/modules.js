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
        <div className="intro">
          <div className="container">
            <h1>Modus works for Brands of Any Size</h1>
          </div>
        </div>
        <div className="demand">
          <div className="container">
            <h1>Demand Planning</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Modus is seamless, granular, bottoms-up planning.
                </h2>
                <p>
                  The prerequisite tier comprising everything your brand needs to set a solid foundation for volume and promotional planning.  Data can be viewed at a variety of abstractions throughout the supply chain, including Inbound and Outbound Distribution Centers, Retailers and Distributors. Modus provides transformations and disaggregations that would not be possible in a spreadsheet.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="screenshot-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="trade">
          <div className="container">
            <h1>Trade Promotion Management</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="screenshot-placeholder"></div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Maximizing trade spend is the key to outperforming the competition.
                </h2>
                <p>
                  Trade Promotion Management allows brands to have a firm grasp of their promotion plans and to maximize trade spend. Modus trade variables helps protect retailer margins so both the brand and retailer benefit in tandem. Included is a scenario planner which maximizes lift percentages across user-define constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory">
          <div className="container">
            <h1>Go-To-Market Inventory Management</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Ensure success on shelf by proactively managing customer orders.
                </h2>
                <p>
                  Modus Inventory Management gives your brand the tools to determine if customers are ordering appropriately to ensure your brand is on-shelf with the right quantity. Optimize your shelf presence among the competition by avoiding costly stockouts and spoils. 
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="screenshot-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="outro">
          <div className="container">
            <h1>We do the Onboarding - For Free</h1>
            <h3>
              We understand that a growing brand has minimal time to work through a software implementation. We have lived it, we get it. To that end, we'll take your current files and our experienced team will do their best to build out your Modus World.
            </h3>
            <a href="/contact" className="btn btn-primary call-to-action-button">
              Get in Touch
            </a>
          </div>
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
    tradeModuleScreenshot: file(absolutePath: {
      regex: "/trade-module-screenshot.png/"
    }) {
      childImageSharp {
        fixed(width: 400, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
