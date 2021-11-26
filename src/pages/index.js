import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getUser, isLoggedIn } from "../services/auth"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1> Hello { isLoggedIn() ? getUser().name : "world" }! </h1>
    <p>
      {
        isLoggedIn() ? 
          (
            <>
              You are logged in, so check your{" "}
              <Link to="/app/profile"> profile </Link>
            </>
          ) : (
            <>
              You should <Link to="/app/login"> Log In </Link>
              to see restricted content 
            </>
          ) 
      }

    </p>
  
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>

  </Layout>
)

export default IndexPage
