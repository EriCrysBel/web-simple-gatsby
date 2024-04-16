
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Link} from  'gatsby'
// import Header from "./header"
import { container, 
  heading, 
  navLinks, 
  navLinkItem,
  navLinkText
} from '../components/layout.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
    <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.description}</h2>
    <StaticImage src='../images/rexybanner.png' alt='logotipo' />
    </header>
    <nav>
    <ul className="nav-links">
        <li className="nav-link-item"><Link className="nav-link-text" to="/">Home</Link></li>
        <li className="nav-link-item"><Link className="nav-link-text" to="/about">Sobre Mi</Link></li>
        <li className="nav-link-item"><Link className="nav-link-text" to="/donde-estamos">Dónde estamos</Link></li>
    </ul>
    </nav>
    <main>
    <h1 className="heading">{pageTitle}</h1>
    {children}
    <footer><p className='footer'>&copy; Erika {new Date().getFullYear()} <a className={navLinkText} href='https://github.com/ericrysbel'>Github</a></p></footer>
    
    </main>
</div>
  )
}

export default Layout
