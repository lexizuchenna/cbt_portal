import { Container, Card, Divider, Header, Icon } from "semantic-ui-react";

function Home() {
  return (
    <Container>
      <Header as="h2" icon textAlign="center">
        <Icon name="book" circular />
        <Header.Content>Tests</Header.Content>
      </Header>
      <Divider />
      <Card.Group itemsPerRow={3}>
        <Card
          href="/cbt/test/43522"
          header="Test Title"
          meta="Subject"
          description="This is test on Phonics for Grade 3 and Grade 4"
        />
        <Card
          href="https://www.sabishare.com/file/uSorxsJWf68-no-image-icon-lexixtech-jpg"
          download
          target='_blank'
          header="Test Title"
          meta="Subject"
          description="This is test on Phonics for Grade 3 and Grade 4"
        />
        <Card
          href="#card-example-link-card"
          header="Test Title"
          meta="Subject"
          description="This is test on Phonics for Grade 3 and Grade 4"
        />
        <Card
          href="#card-example-link-card"
          header="Test Title"
          meta="Subject"
          description="This is test on Phonics for Grade 3 and Grade 4"
        />
        <Card
          href="#card-example-link-card"
          header="Test Title"
          meta="Subject"
          description="This is test on Phonics for Grade 3 and Grade 4"
        />
      </Card.Group>
    </Container>
  );
}

export default Home;
