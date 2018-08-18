import React from 'react'
import {
  Segment,
  Grid,
  Header,
  Image,
  Button
} from 'semantic-ui-react'

const AboutUs = () => (
<Segment style={{ padding: '8em 0em' }} vertical>
  <Grid container stackable verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column width={8}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          We help you keep upto date
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We can give you the latest news for all the games you follow.
        </p>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Track all your favorite games
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Add all your favourite games to your collection and keep track of your progress.
        </p>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Keep in contact with all your Friends
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Stay conected with your friends and see their progress
        </p>
      </Grid.Column>
      <Grid.Column floated='right' width={6}>
        <Image rounded size='large' src='/images/game-controller.svg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
)

export default AboutUs;
