import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <Layout pageTitle="About Me">
               <p>Hi there! I'm the proud creator of this site, which I built</p>
            </Layout>
        </main>
    )
}

export default AboutPage