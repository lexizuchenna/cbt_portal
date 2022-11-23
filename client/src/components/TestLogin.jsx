import { Container, Card, Header, Icon, Form, Button } from "semantic-ui-react";

function TestLogin() {
  return (
    <Container>
      <Header as="h2" icon textAlign="center">
        <Icon name="sign-in" circular />
        <Header.Content>Login to continue</Header.Content>
      </Header>
      <Card centered className="no-shadow">
        <Form>
          <Form.Field required>
            <label>Student Id</label>
            <input placeholder="Enter student ID" />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input placeholder="Enter your password" type='password' />
          </Form.Field>
          <Button type="submit" color='twitter' fluid>Submit</Button>
        </Form>
      </Card>
    </Container>
  )
}

export default TestLogin