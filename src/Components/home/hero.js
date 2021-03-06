import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Header,
  Button,
  Icon,
} from 'semantic-ui-react'

const Hero = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='GameDB'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Track and stay updated on all the games you love...'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

Hero.propTypes = {
  mobile: PropTypes.bool,
}

export default Hero