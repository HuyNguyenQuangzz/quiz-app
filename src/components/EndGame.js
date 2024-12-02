import { useEffect, useState } from "react";
import questions from "../questions.json"


function EndGame(props) {
    

    return (
        <div className="result">
            <div style={{gridColumn: "span 12 / span 12"}}>
                <h1 className="resultContent">
                    Your score is:
                    <span className="font-bold">{" " + props.userGrade}</span>
                </h1>
            </div>
            <div style={{gridColumn: "span 12 / span 12"}}>
                <div className="btnBox">
                    <button onClick={() => {window.location.reload()}} className="btnStart">
                        Try Again
                    </button>
                    <button onClick={() => {props.setStatus("review")}} className="btnReview">
                        Review
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EndGame;