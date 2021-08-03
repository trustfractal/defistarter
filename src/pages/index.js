import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../containers/Header"
import Hero from "../containers/Hero"
import About from "../containers/About"
import Socials from "../containers/Socials"
import News from "../containers/News"
import CallToAction from "../containers/CallToAction"
import Footer from "../containers/Footer"

const HeroContainer = styled.section`
  background: linear-gradient(
    0deg,
    rgba(209, 151, 255, 0.13),
    rgba(209, 151, 255, 0.13)
  );

  border-radius: 0% 100% 100% 0% / 100% 0% 100% 0%;
`

export default function IndexPage() {
  return (
    <Layout>
      <HeroContainer>
        <Header />
        <Hero />
      </HeroContainer>
      <About />
      <Socials />
      <News />
      <CallToAction />
      <Footer />
    </Layout>
  )
}
