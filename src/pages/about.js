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
            <h1>Philosophy</h1>
            <h4>
              We believe that entrepreneurs and innovators have a right to the best systems. Our mission is to provide the tools they need to plan and execute their business with excellence.
            </h4>
            <h4>
              Our applications are created by CPG people for CPG people. We strive to develop products that are massively impactful while being easy to afford and even easier to learn.
            </h4>
            <h4>
              This philosophy guides our approach to every client relationship. We desire to create long-lasting, robust partnerships where constant feedback allows us to optimize and refine our products to drive the most value possible.
            </h4>
          </div>
        </div>
        <div className="team">
          <div className="container">
            <h1>The Team</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                 <Image
                   fixed={data.ryanPicture.childImageSharp.fixed}
                 />
                <h3>
                  Ryan Moore, CEO
                </h3>
                <p>
                  Ryan led the S&OP/Demand Planning process for Ben & Jerry's at Unilever, before creating the continuous S&OP collaborative way-of-working at Icelandic Provisions.
                </p>
                <p>
                  This experience led to realizing the dire need for a bottoms-up planning system like Modus, and Ryan has spent the past 4 years working closely with customers to refine Modus to be the best-in-class system it is today.
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
                  Miles has been developing applications for over 12 years.
                </p>
                <p>
                  He completed GE's Information Technology Leadership program before starting work on Modus Planning full-time in 2016.
                </p>
                <p>
                  After 4 years of work, Miles is excited to see the power brands achieve when using Modus Planning.
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
                  Brian has eight years of financial services experience and is a CFA charterholder.
                </p>
                <p>
                  He began his career with Fannie Mae in their financial rotational program before moving to Goldman Sachs where he valued complex fixed income investments within GSAM.
                </p>
                <p>
                  Brian joined OnePage Software in the spring of 2017 as the Director of Outreach before being promoted to CFO in the summer of 2020.
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
