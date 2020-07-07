import React from "react"

import './footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-3">
              <h3>Modules</h3>
              <ul>
                <li>Demand Planning</li>
                <li>Trade Management & Optimization</li>
                <li>Go-to-Market Inventory Management</li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3">
              <h3>Company</h3>
              <ul>
                <li>Pricing</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3">
              <h3>Contact Us</h3>
              <ul>
                <li>Email</li>
                <li>Linked In</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3">
              © 2020 Modus Planning
            </div>
          </div>
        </div>
      </div>
    )
  }
}