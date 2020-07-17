import React from "react"
import './header.css'

export default class Header extends React.Component {
  render() {
    return (
      <nav className="header navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="brand-container active">
              <a className="navbar-brand" href="/">Modus Planning</a>
            </span>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="/modules">Modules</a></li>
              <li><a href="/caseStudies">Case Studies</a></li>
              <li><a href="/about">About</a></li>
            </ul> 
            <ul className="nav navbar-nav navbar-right">
              <li><a href="https://app.modusplanning.com" target="_blank">Sign In</a></li>
              <li>
                <a
                  href="/contact"
                  className="btn btn-primary header-demo-button"
                >
                  Schedule A Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
