import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import questions from "../questions.json";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function InGame(props) {
  const [questIndex, setQuestIndex] = useState(0);

  const [selectedAns, setSelected] = useState([]);

  const qLength = questions.length;

  const answers = questions[questIndex].answers;

  useEffect(() => {
    const arr = new Array(qLength).fill(-1);
    setSelected(arr);
  }, []);

  const [countdown, setCountdown] = useState(30);

  useEffect(
    function () {
      if (countdown === 0) {
        checkResult();
        props.setStatus("end");
        return;
      }

      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    },
    [countdown]
  );

  const handleSelected = (id) => {
    const arr = selectedAns.map((element, index) => {
      if (index === questIndex) {
        element = id;
      }
      return element;
    });
    setSelected(arr);
  };

  const handleSubmit = () => {
    let confirm = window.confirm("Do you want to submit answer?");
    if (confirm) {
      checkResult();
      props.setStatus("end");
    }
  };

  const checkResult = () => {
    let score = 0;
    selectedAns.map((element, index) => {
      if (element !== -1) {
        if (questions[index].answers[element].correct === true) {
          score++;
        }
      }
    });
    props.setUserGrade(score);
    props.setUserSelected(selectedAns);
  };

  return (
    <div>
      <Container>
        <div className="customContainer">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <div className="btnBox">
                {questIndex > 0 && questIndex <= qLength - 1 ? (
                  <button
                    onClick={() => setQuestIndex(questIndex - 1)}
                    className="btnPrevious"
                  >
                    Previous
                  </button>
                ) : (
                  <button
                    onClick={() => setQuestIndex(questIndex - 1)}
                    className="btnDisabled"
                    disabled
                  >
                    Previous
                  </button>
                )}
                {questIndex >= 0 && questIndex < qLength - 1 ? (
                  <button
                    onClick={() => setQuestIndex(questIndex + 1)}
                    className="btnStart"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => setQuestIndex(questIndex + 1)}
                    className="btnDisabled"
                    disabled
                  >
                    Next
                  </button>
                )}
                {questIndex === qLength - 1 && (
                  <button onClick={handleSubmit} className="btnSubRes">
                    Submit
                  </button>
                )}
              </div>
            </Col>
          </Row>

          <div>
            <div className="questionBox">
              <div className="countdown">
                <h5 style={{ marginTop: "30%" }}>{countdown}</h5>
              </div>
              <p className="questionOrder">
                Question {questions[questIndex].id}/{qLength}
              </p>
              <p className="questionContent">
                {questions[questIndex].question_content}
              </p>
            </div>
          </div>

          <div>
            {answers.map((answer, id) => {
              return (
                <div
                  onClick={() => handleSelected(id)}
                  className={
                    id === selectedAns[questIndex]
                      ? "answerSelected"
                      : "answerBox"
                  }
                >
                  <p className="answerContent">
                    {id + 1 + ")"} {answer.answer_content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default InGame;
