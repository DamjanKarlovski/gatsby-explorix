import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'


const About = () => (
  <Layout>
    <SEO title="About Us" />

    <Testimonials />
    <Stats />

    
  </Layout>
)

export default About
