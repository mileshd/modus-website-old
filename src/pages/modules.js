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
            <div className="row">
              <div className="col-xs-12 col-sm-3 logo">
                <Image
                 className="logo-img"
                 fixed={data.modusGray.childImageSharp.fixed}
                />
                <h2>Modus Planning</h2>
              </div>
              <div className="col-xs-12 col-sm-9">
                <h3>Achieve your brand's ambitious goals</h3>
                <h3>Allocate precious resources effectively</h3>
                <h3>Amaze the customer with superior execution</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="demand-planning"></div>
        <div className="demand">
          <h2>Demand Planning</h2>
          <div className="demand-section one">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h3>
                  Modus is Granular, Bottoms-Up Demand Planning Made Seamless
                </h3>
                <p>
                  With Modus Planning, the data can be viewed at a number of levels of abstraction throughout the supply chain. That includes <i>Inbound and Outbound Distribution Centers</i>, <i>Retailers</i>, and <i>Distributors</i>.
                </p>
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
        <div id="trade-management"></div>
        <div className="trade">
          <h2>Trade & Promotion Management</h2>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Trade Spend is a Key to Competing and Often the Second Largest Budget Behind COGS...</h3>
              <h3>Can You Afford Not to Plan With Excellence?</h3>
              <p>
                Fortunately, Modus Planning's Trade Promotion Management and Optimization suite is uniquely suited to both optimize the plan AND its execution on shelf.
              </p>
              <p>
                There are two principle features that comprise the module, Trade Detail and Scenario Planning.
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
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Trade Detail Reporting</h3>
              <p>
                Persistently monitor where your total business stands vs. your goals and what retailers are driving any discrepancies. 
              </p>
              <p>
                To compete, brands must ensure they keep a keen eye on their trade spend rates. With Trade Detail, these are tracked weekly, monthly, quarterly, by retailer or total enterprise.
              </p>
              <p>
                Brands also must ensure that their retail customers are profitable as well. Using the trade variables, retailer margins on your items can be projected and protected, keeping the odds in your favor that you can expand distribution in the next category review. 
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>Scenario Planning and Optimization</h3>
              <p>
                Want to know if you can afford that promotion in the back half of the year? Or if greater ad frequency will help you hit that sales target? Modus Scenario Planning leverages the forecast variables to answer these questions.
              </p>
              <p>
                Modus Trade Optimization develops the optimal plan for a given retailer within user-defined constraints, generating massive potential ROI
              </p>
            </div>
          </div>
        </div>
        <div id="inventory-management"></div>
        <div className="order">
          <h2>Go-to-Market Inventory Management</h2>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Ensure Success at the Shelf by Proactively Managing Customer Orders</h3>
              <p>
                Take control of your destiny! Retailer procurement teams work very hard, but with dozens of brands to order and maintain, it is all too possible for costly mistakes to slip through the cracks and impact your brand
              </p>
              <p>
                Modus Inventory Management gives your brand a chance to identify, call out, and rectify these mistakes ahead of time to optimize shelf-presence among competition.
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
          <div className="row inventory-features">
            <div className="col-xs-12 col-sm-4">
              <h1><i className="fa fa-calendar" /></h1>
              <h3>Model Days-on-Hand</h3>
              <p>
                Using the demand-plan at the customer DC level, coupled with customer orders, Modus can project consignees' stock positions.
              </p>
              <p>
                If available, add in your customers' actual inventory positions to gut-check the forecast.
              </p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <h1><i className="fa fa-building-o" /></h1>
              <h3>Always Be In Stock</h3>
              <p>
                If Modus projects an out-of-stock situation within order lead-time, this can prompt the user to reach out to ensure that the proper volume plans are in the customer's system.
              </p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <h1><i className="fa fa-thermometer-half" /></h1>
              <h3>Avoid Spoiling Product</h3>
              <p>
                With a few variables, Modus can project whether or not product will spoil, either in the DC or on shelf. This vital intelligence can help ensure that you do not incur unnecessary reclamation charges.
              </p>
              <p>
                This is incredibly useful for shorter shelf-life, perishable items.
              </p>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>
                  Modus Has Arrived
                </h1>
                <h1>
                  Start Planning For Success
                </h1>
                <a href="/contact" className="btn btn-primary call-to-action-button">
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

          //<h3>Model Customer DC Days-on-Hand</h3>
          //<p>
            //Using the demand-plan at the customer DC level, coupled with customer orders, Modus can project consignees' stock positions. If available, add in your customers' actual inventory positions to gut-check the forecast.
          //</p>

          //<h3>Always Be In Stock</h3>
          //<p>
            //Using the demand-plan at the customer DC level, coupled with customer orders, Modus can project consignees' stock positions. If available, add in your customers' actual inventory positions to gut-check the forecast.
          //</p>

          //<h3>Avoid Spoiling Product</h3>
          //<p>
            //With a few variables, Modus can project whether or not product will spoil, either in the DC or on shelf. This vital intelligence can help ensure that you do not incur unnecessary reclamation charges. This is incredibly useful for shorter shelf-life, perishable items.
          //</p>

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
