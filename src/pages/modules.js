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
          <div className="container">
            <h1>Modus works for Brands of Any Size</h1>
          </div>
        </div>
        <div className="demand">
          <div className="container">
            <h1>Demand Planning Module</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p>
                  The prerequisite tier that comprises everything you need to set a solid foundation for your brand's volume and promotional planning. Ideal for companies in which the demand plan is created from an unwieldy series of spreadsheets.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                Screenshot
              </div>
            </div>
          </div>
        </div>
        <div className="trade">
          <div className="container">
            <h1>Trade Promotion Management and Optimization Module</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p>
                  To compete, every successful brand needs to have a firm grasp on its promotional plans and how to spend most effectively. Modus TPM/TPO provides the infrastructure and analysis to make this a breeze.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                Screenshot
              </div>
            </div>
          </div>
        </div>
        <div className="inventory">
          <div className="container">
            <h1>Go-To-Market Inventory Management Module</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p>
                  Ensuring that your brand is on-shelf with the right quantity is foundational to a brand's success. Modus helps you collaborate with your supply chain partners to call out potential risks in the network.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                Screenshot
              </div>
            </div>
          </div>
        </div>
        <div className="outro">
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
