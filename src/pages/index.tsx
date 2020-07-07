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
                <h2>
                  Modus Planning is your Brand's Operating System.
                </h2>
                <h4>
                  With Modus <i>uniquely</i> at the intersection of Planning and Execution, your brand's potential can be unleashed.
                </h4>
                <button className="btn btn-primary">
                  Schedule a Demo
                </button>
              </div>
              <div className="col-xs-12 col-sm-6">
                 <Image
                   fixed={data.headerImage.childImageSharp.fixed}
                 />
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
      </div>
    </Layout>
  )
}

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
