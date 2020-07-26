import React from "react"

import './footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <h3>Modus Planning</h3>
              <ul>
                <li>
                  <a href="/modules" className="link">Modules</a>
                </li>
                <li>
                  <a href="/caseStudies" className="link">Case Studies</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h3>Company</h3>
              <ul>
                <li>
                  <a className="link" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="link" href="/privacyPolicy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="link" href="/termsOfService">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a
                    href="mailto:hello@modusplanning.com"
                    className="link"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/onepagesoftware/"
                    target="_blank"
                    className="link"
                  >
                    Linked In
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h4 className="copyright">
                © 2020 Modus Planning
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
