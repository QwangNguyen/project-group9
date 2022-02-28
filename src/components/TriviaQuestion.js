import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function TriviaQuestion(props) {
    let triviaQuestions = props.triviaQ[0];
    
    let question = triviaQuestions.question;
    let answer = triviaQuestions.answer;
    let incorrect1 = triviaQuestions.incorrect1;
    let incorrect2 = triviaQuestions.incorrect2;
    let incorrect3 = triviaQuestions.incorrect3;

    const [questionList, setQuestionList] = useState([]);

    {/*}
    useEffect(() => {
        fetch(`https://jservice.io/api/category?id=${category_id}`) //send AJAX request
          .then((res) => res.json())
          .then((data) => {
            setQuestionList(data) 
          })
    }, [])
    */}

    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <p className="question">{question}</p>
            </div>
            <div className="container containerTrivia containerPadding">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/incorrect" className="btn btn-lg triviaCategory">{incorrect1}</Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/incorrect" className="btn btn-lg triviaCategory buttonTan">{incorrect2}</Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/incorrect" className="btn btn-lg triviaCategory buttonTan">{incorrect3}</Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/correct" className="btn btn-lg triviaCategory">{answer}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}