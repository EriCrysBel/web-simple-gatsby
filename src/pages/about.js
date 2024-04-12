import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout pageTitle="Acerca de">
    <p>Mini miniso comenzó como un sueño </p>
    <Link to="/">Volver a la página de Inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Acerca de" />

export default About
