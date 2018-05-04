import React from 'react'
import Img from 'gatsby-image'

import { Container, JsonLd } from '../components/common'
import { Details, Socials } from '../components/AboutPage'

const About = ({ data }) => (
  <div>
    <Container>
      <JsonLd
        type="Organization"
      >
        Smakosh | About
      </JsonLd>
      <h2>About me</h2>
      <div className="about">
        <Details />
        <div className="me">
          <a href={data.AboutImage.sizes.src}>
            <Img sizes={data.AboutImage.sizes} alt="just me chilling" />
          </a>
        </div>
      </div>
      <Socials />
    </Container>
  </div>
)

export const pageQuery = graphql`
  query AboutImageQuery {
    AboutImage: imageSharp(id: { regex: "/me.jpg/" }) {
      sizes(maxWidth: 630 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default About
