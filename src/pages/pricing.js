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
      <div className="pricing">
        <div className="intro">
          <div className="container">
            <h1>Modular Pricing to Suit Brands of Any Size</h1>
            <p>
              Though the Modus Core is a prerequisite, additional capabilities in the other modules can be added a la carte.
            </p>
            <p>
              Modus is a secure, cloud-based service and bills monthly with no long term commitment.
            </p>
            <p>
              <a href="/contact" className="btn btn-primary">Get in Touch</a> to learn more about pricing.
            </p>
          </div>
        </div>
        <div className="demand">
          <div className="container">
            <h2>Demand Planning Module (Core)</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p>
                  The prerequisite tier that comprises everything you need to set a solid foundation for your brand's volume and promotional planning. Ideal for companies in which the demand plan is created from an unwieldy series of spreadsheets.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <ul>
                  <li>All Necessary Bottoms-Up Demand Planning Components</li>
                  <li>Integrated Promotional Calendar</li>
                  <li>Forecast vs Actuals Interactive Graph and Metrics</li>
                  <li>Demand Planning Detail and Performance Reports</li>
                  <li>Daily Snapshots and History Reporting</li>
                  <li>History Uploads and Overlays</li>
                  <li>User Management and Administration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="trade">
          <div className="container">
            <h2>Trade Promotion Management and Optimization Module (Add On)</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p>
                  To compete, every successful brand needs to have a firm grasp on its promotional plans and how to spend most effectively. Modus TPM/TPO provides the infrastructure and analysis to make this a breeze.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <ul>
                  <li>Revenue projections by Product Group</li>
                  <li>Trade Spend per Unit Calculations</li>
                  <li>Advanced Promotion Metrics and Deals</li>
                  <li>Full Trade Spend Details and Financials by Retailer or Total</li>
                  <li>Trade Promotion Scenario Planner</li>
                  <li>Promotion Frequency Optimizer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory">
          <div className="container">
            <h2>Go-To-Market Inventory Management Module (Add On)</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p>
                  Ensuring that your brand is on-shelf with the right quantity is foundational to a brand's success. Modus helps you collaborate with your supply chain partners to call out potential risks in the network.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <ul>
                  <li>Customer DC Inventory Upload</li>
                  <li>Customer DC Inventory Projections</li>
                  <li>Customer DC Days-on-Hand by SKU</li>
                  <li>Calculated Shrink Risk by SKU</li>
                  <li>Outbound Order Scenarios</li>
                  <li>Promotion Frequency Optimizer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="container">
            <h1>The Hardest Part is the Onboarding</h1>
            <h1>Fortunately, We do the Heavy Lifting - For Free</h1>
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
