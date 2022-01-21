import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Jorge Calvo - Mi Página</h1>
      <h2>Esto es una pequeña biografia bajo el titulo principal</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
