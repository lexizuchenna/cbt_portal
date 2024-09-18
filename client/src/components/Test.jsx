import { useState } from "react";
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message,
  Menu,
  Header,
} from "semantic-ui-react";

import Countdown from "./Countdown";
import data from "../data/index";

function Test({ endQuiz }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    data.questionData.questions2.at(questionIndex)
  );
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);
  const time =
    data.questionData.time.hours * 3600 +
    data.questionData.time.minutes * 60 +
    data.questionData.time.seconds;

  const handleItemClick = (e, { name }) => {
    console.log(name);
    setUserSlectedAns(name);

    let point = 0;
    let correctAnswer = currentQuestion.correct;
    if (correctAnswer === name) point = data.questionData.point;

    const qna = questionsAndAnswers;
    const index = questionsAndAnswers.findIndex(
      (q) => q.id === currentQuestion.id
    );

    if (index === -1) {
      setUserSlectedAns(name);
      qna.push({
        question: currentQuestion.q,
        user_answer: name,
        correct_answer: correctAnswer,
        id: currentQuestion.id,
        point,
      });
    } else {
      const current = questionsAndAnswers.find(
        (q) => q.id === currentQuestion.id
      );

      current.user_answer = name;

      if (correctAnswer === name) {
        current.point = data.questionData.point;
      } else {
        current.point = 0;
      }
    }

    setQuestionsAndAnswers(qna);
  };

  const handlePrev = () => {
    setQuestionIndex(questionIndex - 1);
    setCurrentQuestion(data.questionData.questions2.at(questionIndex - 1));

    const current = questionsAndAnswers.find(
      (q) => q.id === currentQuestion.id - 1
    );

    if (current) setUserSlectedAns(current.user_answer);
  };

  const handleNext = (e, { name }) => {
    name = name ? name : "unanswered";
    setUserSlectedAns(name);
    const next = questionsAndAnswers.find(
      (q) => q.id === currentQuestion.id + 1
    );
    if (next) setUserSlectedAns(next.user_answer);

    setQuestionIndex(questionIndex + 1);
    setCurrentQuestion(data.questionData.questions2.at(questionIndex + 1));
    if (!next) setUserSlectedAns(null);
  };

  const handleSubmit = () => {
    let points = questionsAndAnswers.map((q) => {
      return q.point;
    });

    let correctAnswers;

    if (points.length > 1) {
      correctAnswers = points.reduce((acc, value) => {
        return acc + value;
      });
    } else if (points.length === 1) {
      correctAnswers = data.questionData.point;
    } else {
      correctAnswers = 0;
    }

    const shit = data.questionData.questions2.map((q) => {
      
    })
    console.log()

    endQuiz({
      totalQuestions: data.questionData.questions2.length,
      correctAnswers: correctAnswers / data.questionData.point,
      timeTaken,
      questionsAndAnswers,
    });
  };

  const timeOver = (timeTaken) => {
    let points = questionsAndAnswers.map((q) => {
      return q.point;
    });
    let correctAnswers;

    if (points.length > 1) {
      correctAnswers = points.reduce((acc, value) => {
        return acc + value;
      });
    } else if (points.length === 1) {
      correctAnswers = data.questionData.point;
    } else {
      correctAnswers = 0;
    }

    return endQuiz({
      totalQuestions: data.questionData.questions2.length,
      correctAnswers: correctAnswers / data.questionData.point,
      timeTaken,
      questionsAndAnswers,
    });
  };
  return (
    <Item.Header>
      <Container>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Extra>
                  <Header as="h1" block floated="left">
                    <Icon name="info circle" />
                    <Header.Content>
                      {`Question No.${questionIndex + 1} of ${
                        data.questionData.questions2.length
                      }`}
                    </Header.Content>
                  </Header>
                  <Countdown
                    countdownTime={time}
                    timeOver={timeOver}
                    setTimeTaken={setTimeTaken}
                  />
                </Item.Extra>
                <br />
                <Item.Meta>
                  <Message size="huge" floating>
                    <b>{`Q. ${currentQuestion.q}`}</b>
                  </Message>
                  <br />
                  <Item.Description>
                    <h3>Please choose one of the following answers:</h3>
                  </Item.Description>
                  <Divider />
                  <Menu vertical fluid size="massive">
                    <Menu.Item
                      name={currentQuestion.A}
                      active={userSlectedAns === currentQuestion.A}
                      onClick={handleItemClick}
                    >
                      <b style={{ marginRight: "8px" }}>A</b>
                      {currentQuestion.A}
                    </Menu.Item>
                    <Menu.Item
                      name={currentQuestion.B}
                      active={userSlectedAns === currentQuestion.B}
                      onClick={handleItemClick}
                    >
                      <b style={{ marginRight: "8px" }}>B</b>
                      {currentQuestion.B}
                    </Menu.Item>
                    <Menu.Item
                      name={currentQuestion.C}
                      active={userSlectedAns === currentQuestion.C}
                      onClick={handleItemClick}
                    >
                      <b style={{ marginRight: "8px" }}>C</b>
                      {currentQuestion.C}
                    </Menu.Item>
                    <Menu.Item
                      name={currentQuestion.D}
                      active={userSlectedAns === currentQuestion.D}
                      onClick={handleItemClick}
                    >
                      <b style={{ marginRight: "8px" }}>D</b>
                      {currentQuestion.D}
                    </Menu.Item>
                  </Menu>
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button
                    secondary
                    icon="left chevron"
                    content="Previous"
                    onClick={handlePrev}
                    floated="left"
                    size="big"
                    labelPosition="left"
                    disabled={questionIndex === 0}
                  />

                  <Button
                    primary
                    content="Next"
                    onClick={handleNext}
                    floated="right"
                    size="big"
                    icon="right chevron"
                    labelPosition="right"
                    disabled={
                      questionIndex === data.questionData.questions2.length - 1
                    }
                  />
                </Item.Extra>
                <Divider />
                <Item.Extra className="mt-4">
                  <Button
                    primary
                    content="Submit"
                    onClick={handleSubmit}
                    floated="right"
                    size="big"
                    icon="paper plane"
                    labelPosition="right"
                    fluid
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container>
    </Item.Header>
  );
}

export default Test;
