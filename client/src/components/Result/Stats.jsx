import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';

// import ShareButton from '../ShareButton';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Segment>
      <Header as="h1" textAlign="center" block>
        {remarks}
      </Header>
      <Header as="h2" textAlign="center" block>
        Grade: {grade}
      </Header>
      <Header as="h3" textAlign="center" block>
        Total Questions: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block>
        Correct Answers: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block>
        Your Score: {score}%
      </Header>
      <Header as="h3" textAlign="center" block>
        Passing Score: 60%
      </Header>
      <Header as="h3" textAlign="center" block>
        Time Taken:{' '}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Header>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
};

export default Stats;
