import * as React from "react"

import Layout from "../components/Layout"

import Header from "../containers/Header"
import Hero from "../containers/Hero"
import About from "../containers/About"
import Socials from "../containers/Socials"
import News from "../containers/News"
import CallToAction from "../containers/CallToAction"
import Footer from "../containers/Footer"

export default function IndexPage() {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Socials />
      <News />
      <CallToAction />
      <Footer />
    </Layout>
  )
}
