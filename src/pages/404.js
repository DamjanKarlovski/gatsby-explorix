import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button} from '../components/Button'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Error>
    <h1>404</h1>
    <p>Oh no! Page not found!</p>
    <Button to="/" round="true" big="true">Return Home</Button>
    </Error>
  </Layout>
)

export default NotFoundPage

const Error = styled.div`
background: #f26a2e;
height:80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
  font-size: clamp(4rem, 10vw, 20rem);
  margin-bottom: 1rem;

}
p{
  font-size: clamp(2rem, 3vw, 10rem);
  margin-bottom: 2rem;
}
`