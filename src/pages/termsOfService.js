import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './termsOfService.css'

const TermsOfServicePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Terms of Service" />
      <div className="terms-of-service">
        <div className="container">
          <h1>Modus Planning Website Terms Of Service</h1>

          <h2>License to use Website</h2>
          <p>
            Unless otherwise stated, OnePage Software, LLC. and/or its licensors own the intellectual property rights in the website and material on the website.  Subject to the license below, all these intellectual property rights are reserved.
          </p>
          <p>
            You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.  
          </p>
          <p>
            You must not:
          </p>
          <ul>
            <li>
              republish material from this website (including republication on another website);
            </li>
            <li>
              sell, rent or sub-license material from the website;
            </li>
            <li>
              reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;
            </li>
            <li>
              edit or otherwise modify any material on the website; or
            </li>
            <li>
              redistribute material from this website except for content specifically and expressly made available for redistribution
            </li>
          </ul>

          <h2>Acceptable Use</h2>
          <p>
            You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
          </p>
          <p>
            You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
          </p>
          <p>
            You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without OnePage Software, LLC. express written consent.
          </p>
          <p>
            You must not use this website to transmit or send unsolicited commercial communications.
          </p>
          <p>
            You must not use this website for any purposes related to marketing without OnePage Software, LLC. express written consent.
          </p>

          <h2>Restricted Access</h2>
          <p>
            Access to certain areas of this website is restricted.  OnePage Software, LLC. reserves the right to restrict access to areas of this website, or indeed this entire website, at OnePage Software, LLC. discretion.
          </p>
          <p>
            If OnePage Software, LLC. provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.  
          </p>
          <p>
            OnePage Software, LLC. may disable your user ID and password in OnePage Software, LLC. sole discretion without notice or explanation.
          </p>

          <h2>User Content</h2>
          <p>
            In these terms and conditions, “your user content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.
          </p>
          <p>
            Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or OnePage Software, LLC. or a third party (in each case under any applicable law).  
          </p>
          <p>
            You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.
          </p>
          <p>
            OnePage Software, LLC. reserves the right to edit or remove any material submitted to this website, or stored on OnePage Software, LLC. servers, or hosted or published upon this website.
          </p>
          <p>
            Notwithstanding OnePage Software, LLC. rights under these terms and conditions in relation to user content, OnePage Software, LLC. does not undertake to monitor the submission of such content to, or the publication of such content on, this website.
          </p>

          <h2>No Warranties</h2>
        </div>
      </div>
    </Layout>
  )
}

export default TermsOfServicePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
