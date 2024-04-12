import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Mi página de inicio'>
      <StaticImage src='../images/rexy.jpg' alt='rexy' />
      <p>Esta es la página de inicio de Mini Miniso Develop Web</p>
    </Layout>
  )
  }
  // You'll learn about this in the next task, just copy it for now
  export const Head = () => <Seo title="Inicio" />
  // Step 3: Export your component
  export default IndexPage