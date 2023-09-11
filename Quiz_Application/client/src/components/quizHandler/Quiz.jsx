import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = ({ questions, score, setScore, setQuestions, userId, exam_id }) => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);
  const [correct, setCorrect] = useState("");

  useEffect(() => {
    startFunction();
  }, [currQues, questions]);

  const startFunction = () => {
    if (questions && questions.length > 0 && questions[currQues]) {
      const data = questions[currQues].options;
      console.log(data);
      setOptions(data);

      const correctOption = data.find((option) => option.isCorrect === true);
      if (correctOption) {
        setCorrect(correctOption.option);
        console.log(correctOption.option);
      }
    }
  };

  console.log(exam_id);

  return (
    <div className="quiz">
      {questions && questions.length > 0 ? (
        <>
          <div className="quizInfo">
            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={correct}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            userId={userId}
            exam_id={exam_id}
          />
        </>
      ) : (
        <div>Sorry, we couldn't find any questions</div>
      )}
    </div>
  );
};

export default Quiz;
