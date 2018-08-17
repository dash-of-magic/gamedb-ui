import React from 'react'
import {
  Segment,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react'

const Footer = () => (
<Segment inverted vertical style={{ padding: '5em 0em' }}>
  <Container>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='About' />
          <List link inverted>
            <List.Item as='a'>Privacy Policy</List.Item>
            <List.Item as='a'>Terms & Conditions</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Services' />
          <List link inverted>
            <List.Item as='a'>Search</List.Item>
            <List.Item as='a'>FAQ</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header as='h4' inverted>
            Socials
          </Header>
          <p>
            Social Icons here..
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
</Segment>
)

export default Footer