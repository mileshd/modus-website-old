import React from "react"

import Header from './header'
import Footer from './footer'
import "./layout.css"

const Layout = ({ location, title, children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
