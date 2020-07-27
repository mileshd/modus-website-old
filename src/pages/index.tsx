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
          <div className="pitch-overlay"></div>
          <div className="container">
            <div className="row pitch-content">
              <div className="col-xs-12">
                <h1>
                  Modus Planning is your Brand's Operating System.
                </h1>
                <h3>
                  With Modus <i>uniquely</i> at the intersection of Planning and Execution, 
                </h3>
                <h3>
                  your brand's potential can be unleashed.
                </h3>
                <a href="/contact" className="btn btn-primary">
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clients">
          <div className="container">
            <div className="row clients__logos">
              <div className="col-xs-12 col-sm-4">
              <img className="logo-picture" src="https://media-exp1.licdn.com/dms/image/C4D0BAQE9ykVEomLipg/company-logo_200_200/0?e=2159024400&v=beta&t=Xg5k3btpp82qdsturaBcNTF1AiCECQoaGXjAok_iSbk"/>
                <h3>Enlightened</h3>
              </div>
              <div className="col-xs-12 col-sm-4">
                <img className="logo-picture" src="https://i.pinimg.com/originals/39/6d/74/396d74d91507e5f2d3f5b2418407e0a6.jpg"/>
                <h3>Banza</h3>
              </div>
              <div className="col-xs-12 col-sm-4">
                <img className="logo-picture" src="https://s3-media0.fl.yelpcdn.com/bphoto/mO14VxIohwkp_aoj2AG_HQ/348s.jpg"/>
                <h3>Hu Kitchen</h3>
              </div>
            </div>
            <div className="clients__quote">
              <div className="quote-text">
                Modus is is best thing to happen to our brand. We have never been more confident and powerful!
              </div>
              <div className="quote-attribution">
                Clark Daniels, The Food Company 
              </div>
            </div>
          </div>
        </div>
        <div className="problem">
          <div className="container">
            <h1>Problem</h1>
            <h2>
              For most growing companies, the current bottoms-up planning methodology is controlled chaos in a series of spreadsheets.
            </h2>
          </div>
        </div>
        <div className="solution">
          <div className="container">
            <h1>Solution</h1>
            <h2>
              Modus Planning offers a growing brand what it needs most: a scalable platform with capabilities that transcend far beyond the spreadsheet.
            </h2>
          </div>
        </div>
        <div className="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>
                  A Better Way is Here
                </h1>
                <h1>
                  Join the New Standard for Growing Brands
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

              /*<div className="col-xs-12 col-sm-6">*/
                 /*<Image*/
                   /*fixed={data.headerImage.childImageSharp.fixed}*/
                 /*/>*/
              /*</div>*/
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

        /*<div className="why">*/
          /*<div className="container">*/
            /*<div className="why-text">*/
              /*<h1>Why</h1>*/
              /*<p className="first-line">*/
                /*Modus Planning is purpose-built for the CPG industry by CPG veterans who saw a major unfilled need – a platform to make planning a small and growing business exponentially more scalable, collaborative, and reliable. */
              /*</p>*/
              /*<p className="second-line">*/
                /*For most growing companies, the current bottoms-up planning methodology is controlled chaos in a series of spreadsheets.*/
              /*</p>*/
              /*<p className="third-line">*/
                /*Modus Planning offers a growing brand what it needs most: a scalable platform with capabilities that transcend far beyond the spreadsheet. */
              /*</p>*/
            /*</div>*/
          /*</div>*/
        /*</div>*/

        /*<div className="features">*/
          /*<div className="container">*/
            /*<h2>*/
              /*Unleash Your Business with Seamless Cross-Functional Planning and Execution*/
            /*</h2>*/
            /*<div className="row">*/
              /*<div className="col-xs-12 col-sm-6 col-md-4">*/
                /*<h3>*/
                  /*<i className="fa fa-truck" />*/
                  /*Supply Chain*/
                /*</h3>*/
                /*<ul>*/
                  /*<li>Optimize Inventories</li>*/
                  /*<li>Capacity Plan with Ease</li>*/
                  /*<li>Understand Transportation Costs</li>*/
                /*</ul>*/
              /*</div>*/
              /*<div className="col-xs-12 col-sm-6 col-md-4">*/
                /*<h3>*/
                  /*<i className="fa fa-users" />*/
                  /*Customer Service*/
                /*</h3>*/
                /*<ul>*/
                  /*<li>Anticipate promotions and other demand drivers.</li>*/
                  /*<li>Eliminate Out-of-Stocks</li>*/
                  /*<li>Manage Spoilage Risk</li>*/
                /*</ul>*/
              /*</div>*/
              /*<div className="col-xs-12 col-sm-6 col-md-4">*/
                /*<h3>*/
                  /*<i className="fa fa-shopping-basket" />*/
                  /*Trade Marketing*/
                /*</h3>*/
                /*<ul>*/
                  /*<li>Monitor progress vs. the budget</li>*/
                  /*<li>Manage Retailer Margins</li>*/
                  /*<li>Understand Trade Rates</li>*/
                  /*<li>Optimize Promotion Plans</li>*/
                /*</ul>*/
              /*</div>*/
            /*</div>*/
          /*</div>*/
        /*</div>*/
