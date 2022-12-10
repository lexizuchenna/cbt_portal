import { useState } from "react";
import {
  Container,
  Divider,
  Segment,
  Item,
  Button,
  Dropdown,
  Message,
  Form,
  Input,
  Card,
} from "semantic-ui-react";

import { COUNTDOWN_TIME } from "../constants";

function CreateQuestions() {
  const [error, setError] = useState(null);
  const [point, setPoint] = useState(0)
  // const [offline, setOffline] = useState(false);
  const [form, setForm] = useState([]);
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // const [data, setData] = useState({time: countdownTime, questions2: form, point});


  const handleSetPoint = (e) => {
    setPoint(e.target.value)
    // setData({...data}, point)
  }

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
    // setData({...data}, {time: countdownTime})

  };

  const handleAddData = (e) => {
    e.preventDefault();
    const inputState = {
      question: "",
      A: "",
      B: "",
      C: "",
      D: "",
      correct: "",
      id: 0,
    };
    setForm((prev) => [...prev, inputState]);
  };

  const handleRemove = (index, e) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };

  const onChange = (index, e) => {
    e.preventDefault();
    e.persist();

    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) return item;
        console.log(item);
        return {
          ...item,
          id: i + 1,
          [e.target.name]: e.target.value,
        };
      });
    });

    // setData({...data}, {questions2: form})
  };

  const fetchData = () => {
   let data = {}
   data = {
     time: countdownTime,
     question2: form,
     point
   }
    console.log(data);
  };

  return (
    <Container>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>
                <h1>Create Questions</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <Item.Meta>
                <Form>
                  <Form.Field required>
                    <label>Point</label>
                    <input placeholder="Enter Point Per Question" onChange={handleSetPoint} type='number' />
                  </Form.Field>
                </Form>
                <br />
                <label htmlFor="">Hours</label>
                <Dropdown
                  search
                  selection
                  name="hours"
                  placeholder="Select Hours"
                  header="Select Hours"
                  options={COUNTDOWN_TIME.hours}
                  value={countdownTime.hours}
                  onChange={handleTimeChange}
                  labeled
                  // disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="minutes"
                  placeholder="Select Minutes"
                  header="Select Minutes"
                  options={COUNTDOWN_TIME.minutes}
                  value={countdownTime.minutes}
                  onChange={handleTimeChange}
                  // disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="seconds"
                  placeholder="Select Seconds"
                  header="Select Seconds"
                  options={COUNTDOWN_TIME.seconds}
                  value={countdownTime.seconds}
                  onChange={handleTimeChange}
                  // disabled={processing}
                />
              </Item.Meta>
              <Divider />
              <Form>
                {JSON.stringify(form)}
                {form.map((item, index) => (
                  <>
                    <Card.Group key={index}>
                      <Card fluid color="red" className="p1">
                        <Form.TextArea
                          label="Question"
                          placeholder="Enter Question"
                          name="question"
                          value={item.question}
                          onChange={(e) => onChange(index, e)}
                        />
                        <Form.Group widths="equal">
                          <Form.Field>
                            <Input
                              label="Option A"
                              placeholder="Enter Option A"
                              key={index}
                              fluid
                              name="A"
                              onChange={(e) => onChange(index, e)}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Input
                              label="Option B"
                              placeholder="Enter Option B"
                              key={index}
                              fluid
                              name="B"
                              onChange={(e) => onChange(index, e)}
                            />
                          </Form.Field>
                        </Form.Group>

                        <Form.Group widths="equal">
                          <Form.Field>
                            <Input
                              label="Option C"
                              placeholder="Enter Option C"
                              key={index}
                              fluid
                              name="C"
                              onChange={(e) => onChange(index, e)}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Input
                              label="Option D"
                              placeholder="Enter Option D"
                              key={index}
                              fluid
                              name="D"
                              onChange={(e) => onChange(index, e)}
                            />
                          </Form.Field>
                        </Form.Group>
                        <Form.Field>
                          <Input
                            label="Correct Answer"
                            placeholder="Enter Correct Answer"
                            key={index}
                            fluid
                            name="correct"
                            onChange={(e) => onChange(index, e)}
                          />
                        </Form.Field>
                      </Card>
                    </Card.Group>
                    <Button
                      size="small"
                      icon="minus"
                      labelPosition="right"
                      content="Remove"
                      className="mt-2"
                      color="red"
                      onClick={(e) => handleRemove(index, e)}
                    />
                    <Divider />
                  </>
                ))}
                <Button
                  primary
                  size="small"
                  icon="plus"
                  labelPosition="right"
                  content="Add"
                  className="mt-2"
                  onClick={handleAddData}
                />
              </Form>
              <Divider />
              <Item.Extra>
                <Button
                  primary
                  size="big"
                  icon="cloud"
                  labelPosition="left"
                  // content={processing ? 'Processing...' : 'Play Now'}
                  content={"Submit"}
                  onClick={fetchData}
                  fluid
                  // disabled={!allFieldsSelected || processing}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
}

export default CreateQuestions;
