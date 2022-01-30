import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="spiral galaxy"
        src="../images/galaxy.jpg"/></Layout>
    </main>
  )
}

export default IndexPage
