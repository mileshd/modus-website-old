import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './about.css'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Us" />
      <div className="about">
        <div className="philosophy">
          <div className="container">
            <h2>Philosophy</h2>
            <h4>
              We believe that entrepreneurs and innovators have a right to the best systems. At OnePage, our mission is to provide the tools they need to plan and execute their business with excellence.
            </h4>
            <h4>
              OnePage Software's applications are created by CPG people For CPG people. We strive to develop products that are massively impactful while being easy to afford and even easier to learn.
            </h4>
            <h4>
              Our philosophy guides our approach to every client relationship. We desire to create long-lasting, robust partnerships where constant feedback allows us to optimize and refine our products to drive the most value possible.
            </h4>
          </div>
        </div>
        <div className="team">
          <div className="container">
            <h2>The Team</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                 <Image
                   fixed={data.ryanPicture.childImageSharp.fixed}
                 />
                <h3>
                  Ryan Moore, CEO
                </h3>
                <p>
                  Ryan does this.
                </p>
              </div>
              <div className="col-xs-12 col-sm-4">
                 <Image
                   fixed={data.milesPicture.childImageSharp.fixed}
                 />
                <h3>
                  Miles Dickinson, CTO
                </h3>
                <p>
                  Miles does this.
                </p>
              </div>
              <div className="col-xs-12 col-sm-4">
                 <Image
                   fixed={data.brianPicture.childImageSharp.fixed}
                 />
                <h3>
                  Brian Doyle, CFO
                </h3>
                <p>
                  Brian does this.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(absolutePath: {
      regex: "/skew.png/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ryanPicture: file(absolutePath: {
      regex: "/ryan-picture.jpeg/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    milesPicture: file(absolutePath: {
      regex: "/miles-picture.jpeg/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    brianPicture: file(absolutePath: {
      regex: "/brian-picture.jpeg/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
