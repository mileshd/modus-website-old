import React from "react"

import './footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <h3>Modules</h3>
              <ul>
                <li>
                  <a className="link" href="/modules#demand-planning">
                    Demand Planning
                  </a>
                </li>
                <li>
                  <a className="link" href="/modules#trade-management">
                    Trade & Promotion Management
                  </a>
                </li>
                <li>
                  <a className="link" href="/modules#inventory-management">
                    Go-to-Market Inventory Management
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/pricing" className="link">Pricing</a>
                </li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h3>Contact Us</h3>
              <ul>
                <li>Email</li>
                <li>Linked In</li>
                <li>Facebook</li>
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
