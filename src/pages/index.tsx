// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import deepLogo from '../../content/assets/deep-logo.svg'
import './index.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="home-page">
        <div className="new-pitch">
          <div className="pitch-overlay"></div>
          <div className="container">
            <div className="row pitch-content">
              <div className="col-xs-12 col-sm-6 new-pitch__text">
                <h1>
                  It takes a lot to get a product into the customer's hand
                </h1>
                <h2 className="pitch-list">
                  <ul>
                    <li className="pitch-demand-planning">
                      Demand Planning 
                    </li>
                    <li className="trade-promotion-management">
                      Trade Promotion Management
                    </li>
                    <li className="pitch-order-management">
                      Order Management
                    </li>
                  </ul>
                </h2>
                <h2>
                  Modus Planning is your Brand's Operating System to make that happen.
                </h2>
                <a href="/contact" className="btn btn-primary">
                  Schedule a Demo
                </a>
              </div>
              <div className="col-xs-12 col-sm-6 new-pitch__picture">
                <div className="pitch-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="clients">
          <div className="container">
            <h1>Brands Growing with Us</h1>
            <div className="row clients__logos">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="logo-picture" src="https://media-exp1.licdn.com/dms/image/C4D0BAQE9ykVEomLipg/company-logo_200_200/0?e=2159024400&v=beta&t=Xg5k3btpp82qdsturaBcNTF1AiCECQoaGXjAok_iSbk"/>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="logo-picture" src="https://s3-media0.fl.yelpcdn.com/bphoto/mO14VxIohwkp_aoj2AG_HQ/348s.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="logo-picture" src={deepLogo}/>
              </div>
            </div>
          </div>
        </div>
        <div className="client__quote">
          <div className="container">
            <div className="quote-text">
              Modus is is best thing to happen to our brand. We have never been more confident and powerful!
            </div>
            <div className="quote-attribution">
              Clark Daniels, The Food Company 
            </div>
          </div>
        </div>
        <div className="problem">
          <div className="problem-text">
            <div className="picture-overlay"></div>
            <h1>Problem</h1>
            <h2>
              For most growing companies, the current bottoms-up planning methodology is controlled chaos in a series of spreadsheets.
            </h2>
          </div>
          <div className="problem-picture"></div>
        </div>
        <div className="solution">
          <div className="solution-picture"></div>
          <div className="solution-text">
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

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
