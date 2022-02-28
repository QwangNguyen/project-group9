import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import triviaQuestions from '../data/climateChange.json';

export function TriviaQuestion(props) {
    let questionList = triviaQuestions.clues.sort(() => Math.random() - 0.5);
    
    let question = questionList[0].question;
    let answer = questionList[0].answer;
    let incorrect1 = questionList[1].answer;
    let incorrect2 = questionList[2].answer;
    let incorrect3 = questionList[3].answer;

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