import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Header, Icon } from "semantic-ui-react";

import TestLogin from "../components/TestLogin";
import Loader from "../components/Loader";
import Quiz from "../components/Test";
import Result from "../components/Result/Result";
import PreTest from "../components/PreTest";

function Test() {
  const location = useLocation()

  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);

  const startQuiz = (data, countdownTime) => {
    setLoading(true);
    setCountdownTime(countdownTime);

    setTimeout(() => {
      // setData(data);
      setIsQuizStarted(true);
      setLoading(false);
    }, 1000);
  };

  const endQuiz = (resultData) => {
    setLoading(true);

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };
  
  if(!isQuizStarted && !isLoggedIn) return <TestLogin />;

  if(!isQuizStarted && !isQuizCompleted && isLoggedIn) return <PreTest setIsQuizStarted={setIsQuizStarted} />;

  if (isQuizStarted)
    return (
      <>
        {loading && <Loader />}
        <Quiz endQuiz={endQuiz} countdownTime={countdownTime} />
      </>
    );

  if(!loading && isQuizCompleted) return <Result {...resultData} />

  
  
  
}

export default Test;
