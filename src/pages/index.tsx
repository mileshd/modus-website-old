// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="home-page">
        <div className="pitch">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h1>
                  Modus Planning is your Brand's Operating System.
                </h1>
                <h3>
                  With Modus <i>uniquely</i> at the intersection of Planning and Execution, your brand's potential can be unleashed.
                </h3>
                <button className="btn btn-primary">
                  Schedule a Demo
                </button>
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
        </div>
        <div className="about-modus">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Say Goodbye to the Spreadsheet, Modus Makes Bottoms-Up Planning Easier than Ever.
                </h2>
                <p>
                  Modus Planning is purpose-built for the CPG industry by CPG veterans who saw a major unfilled need – a platform to make planning a small and growing business exponentially more scalable, collaborative, and reliable. 
                </p>
                <p>
                  For most growing companies, the current bottoms-up planning methodology is controlled chaos in a series of spreadsheets.
                </p>
                <p>
                  Modus Planning offers a growing brand what it needs most: a scalable platform with capabilities that transcend far beyond the spreadsheet. 
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                 <Image
                   fixed={data.headerImage.childImageSharp.fixed}
                 />
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="container">
            <h2>
              Unleash Your Business with Seamless Cross-Functional Planning and Execution
            </h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <h3>
                  <i className="fa fa-truck" />
                  Supply Chain
                </h3>
                <ul>
                  <li>Optimize Inventories</li>
                  <li>Capacity Plan with Ease</li>
                  <li>Understand Transportation Costs</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <h3>
                  <i className="fa fa-users" />
                  Customer Service
                </h3>
                <ul>
                  <li>Anticipate promotions and other demand drivers.</li>
                  <li>Eliminate Out-of-Stocks</li>
                  <li>Manage Spoilage Risk</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <h3>
                  <i className="fa fa-shopping-basket" />
                  Trade Marketing
                </h3>
                <ul>
                  <li>Monitor progress vs. the budget</li>
                  <li>Manage Retailer Margins</li>
                  <li>Understand Trade Rates</li>
                  <li>Optimize Promotion Plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

              /*<div className="col-xs-12 col-sm-6">*/
                /*<h4>*/
                  /*<i className="fa fa-money" />*/
                  /*Finance*/
                /*</h4>*/
                /*<ul>*/
                  /*<li>Confidently forecast financials and deductions</li>*/
                  /*<li>Vet and validate Retailer Chargebacks</li>*/
                /*</ul>*/
              /*</div>*/
              /*<div className="col-xs-12 col-sm-6">*/
                /*<h4>*/
                  /*<i className="fa fa-flask" />*/
                  /*Innovation*/
                /*</h4>*/
                /*<ul>*/
                  /*<li>Gain cross-functional alignement on new item forecasts</li>*/
                /*</ul>*/
              /*</div>*/

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    headerImage: file(absolutePath: {
      regex: "/skew.png/"
    }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
  }
`
