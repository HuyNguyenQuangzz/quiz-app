import { Col, Container, Row } from "react-bootstrap";
import questions from "../questions.json";
import { useState } from "react";

function Review(props) {
  const [questIndex, setQuestIndex] = useState(0);

  const answers = questions[questIndex].answers;

  const qLength = questions.length;

  const selected = props.userSelected[questIndex];

  console.log(selected);

  const handleReview = (id) => {
    let style = "";
    if (selected === -1) {
      answers[id].correct ? style = "reviewBox reviewCorrect" : style = "reviewBox";
    } else {
      if (answers[selected].correct === true) {
        selected === id ? style = "reviewBox reviewCorrect" : style = "reviewBox";
      } else {
        if(id === selected) {
            style = "reviewBox reviewIncorrect";
        }
        else if (answers[id].correct === true) {
            style = "reviewBox reviewCorrect";
        }
        else {
            style = "reviewBox";
        }
      }
    }
    return style;
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
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="btnSubRes"
                >
                  Restart
                </button>
              </div>
            </Col>
          </Row>

          <div>
            <div className="questionBox">
              <div className="countdownReview">
                <p style={{ marginTop: "35%", fontWeight: "bold" }}>End!</p>
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
                  className={
                    // props.userSelected[questIndex] === id
                    //   ? "reviewBox reviewCorrect"
                    //   : "reviewBox"
                    handleReview(id)
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

export default Review;
