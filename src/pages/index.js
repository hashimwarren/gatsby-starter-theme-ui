/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { Styled, jsx } from "theme-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hashim Warren" />
    <Styled.h1>👋🏾 I'm Hashim Warren</Styled.h1>
    <Styled.p>A Full Stack Marketer is concerned with marketing strategy, creative, and technology.</Styled.p>
    <Styled.p>That best describes my work</Styled.p>
    <div sx={{ maxWidth: 300, marginBottom: [3] }}>
      <Image />
    </div>
    <Styled.p>
      <Link to="/page-2/">page 2</Link>
    </Styled.p>
  </Layout>
)

export default IndexPage
