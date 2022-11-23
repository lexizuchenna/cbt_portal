import {
  Button,
  Divider,
  Card,
  Icon,
  Image,
  Grid,
  Segment,
  Container,
} from "semantic-ui-react";

function PreTest({ setIsQuizStarted }) {
  const handleStart = () => {
    setIsQuizStarted(true);
  };
  return (
    <Container>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Card centered>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>
                  <b>Grade:</b> 4
                </Card.Meta>
                {/* <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description> */}
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  10 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid className="mb-4">
              <Card.Content header="MTH 122 CB EXAM" />
              <Card.Content description="This is your exam on MTH 122 which will last for two hours or more and so on" />
              <Card.Content extra>
                <Icon name="user" />4 Friends
              </Card.Content>
            </Card>
            <Button
              primary
              fluid
              content="Start"
              onClick={handleStart}
              size="massive"
              icon="play"
              labelPosition="right"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default PreTest;
