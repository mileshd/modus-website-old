// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="home-page row">
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
