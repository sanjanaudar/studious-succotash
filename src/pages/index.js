import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

export default IndexPage
