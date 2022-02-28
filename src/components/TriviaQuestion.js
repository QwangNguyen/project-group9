import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export function TriviaQuestion(props) {
    const [questionList, setQuestionList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("hello");
        fetch(`https://jservice.io/api/category?id=${props.id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("hello2");
            setQuestionList(data.clues.sort(() => Math.random() - 0.5))
          })
    }, [])

    if(questionList.length === 0) {
        return(
            <Spinner animation="border" variant="success" />
        );
    }
    
    let correctAnswer = questionList[0].answer;

    let answerList = [];
    for(let i = 0; i < 4; i ++) {
        answerList.push(questionList[i].answer);
    }
    let question = questionList[0].question;
    answerList = answerList.sort(() => Math.random() - 0.5);

    const handleClick = (event) => {
        if(event.currentTarget.name === correctAnswer) {
            props.questionCallback(true);
            navigate("/correct")
        } else {
            props.questionCallback(false);
            navigate("/incorrect")
        }
    }

    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <p className="question">{question}</p>
            </div>
            <div className="container containerTrivia containerPadding">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button className="btn btn-lg triviaCategory" onClick={handleClick} name={answerList[0]}>
                                {answerList[0]}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button className="btn btn-lg triviaCategory buttonTan" onClick={handleClick} name={answerList[1]}>
                                {answerList[1]}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button className="btn btn-lg triviaCategory buttonTan" onClick={handleClick} name={answerList[2]}>
                                {answerList[2]}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button className="btn btn-lg triviaCategory" onClick={handleClick} name={answerList[3]}>
                                {answerList[3]}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>     
    )
}