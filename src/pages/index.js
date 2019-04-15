import React from "react"

import Layout from "../components/layout"
import TopHeader from "../components/main"
import Side from "../components/side"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <TopHeader />
      <Side />
    </Layout>
  </div>
)

export default IndexPage
