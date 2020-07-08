import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './contact.css'

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Modus Planning" />
      <div className="contact">
        <iframe
          src="https://forms.monday.com/forms/embed/33edb923d5241d720656579aca3a3e3e"
          width="100%"
          height="800px"
          >
          </iframe>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
