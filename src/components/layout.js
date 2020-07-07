import React from "react"

import Header from './header'
import Footer from './footer'
import "../styles/layout.css"

const Layout = ({ location, title, children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="container page">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
