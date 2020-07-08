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
          <h2>Demand Planning</h2>
          <div className="demand-section one">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h3>
                  Modus is Granular, Bottoms-Up Demand Planning Made Seamless
                </h3>
                <p>
                  With Modus Planning, the data can be viewed at a number of levels of abstraction throughout the supply chain. You can view the weekly SKU-level forecast:
                </p>
                <ul>
                  <li>By Outbound DC</li>
                  <li>By Retailer</li>
                  <li>By Distributor</li>
                  <li>By Inbound DC</li>
                </ul>
                <p>
                  For most companies managing this in a spreadsheet, the transformations and disaggregation that Modus provides would not be possible.  
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <iframe
                  width="100%"
                  height="315"
                  src="https://player.vimeo.com/video/366639724"
                  frameBorder="0"
                  allowFullScreen
                >
                </iframe>
              </div>
            </div>
          </div>
          <div className="demand-section two">
          </div>
        </div>
        <div className="trade">
          <h2>Trade and Promotion Management</h2>
        </div>
        <div className="order">
          <h2>Order Execution</h2>

          <h3>Ensure Success at the Shelf by Proactively Managing Customer Orders</h3>
          <p>
            Take control of your destiny! Retailer procurement teams work very hard, but with dozens of brands to order and maintain, it is all too possible for costly mistakes to slip through the cracks and impact your brand
          </p>
          <p>
            Modus Inventory Management gives your brand a chance to identify, call out, and rectify these mistakes ahead of time to optimize shelf-presence among competition.
          </p>

          <h3>Model Customer DC Days-on-Hand</h3>
          <p>
            Using the demand-plan at the customer DC level, coupled with customer orders, Modus can project consignees' stock positions. If available, add in your customers' actual inventory positions to gut-check the forecast.
          </p>

          <h3>Always Be In Stock</h3>
          <p>
            Using the demand-plan at the customer DC level, coupled with customer orders, Modus can project consignees' stock positions. If available, add in your customers' actual inventory positions to gut-check the forecast.
          </p>

          <h3>Avoid Spoiling Product</h3>
          <p>
            With a few variables, Modus can project whether or not product will spoil, either in the DC or on shelf. This vital intelligence can help ensure that you do not incur unnecessary reclamation charges. This is incredibly useful for shorter shelf-life, perishable items.
          </p>
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
