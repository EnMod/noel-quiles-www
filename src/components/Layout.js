import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

/*
 to get graphQL data into non-pages like layouts,
 you have to use a <StaticQuery /> component as a bit
 of a workaround?

 in the qeury prop, put in your query as normal

 in the render prop, put in a function passing in 
 `data` and returning your JSX
 */

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <h1>Welcome to {data.site.siteMetadata.title}</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        {props.children}
      </>
    )}
  />
)
