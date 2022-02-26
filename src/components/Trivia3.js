import React from 'react';
import { Link } from 'react-router-dom';

export function Trivia3() {
    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <p className="question">Q1: Which of the following is a greenhouse gas?</p>
            </div>
            <div className="container containerTrivia containerPadding">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button type="button" className="btn btn-lg triviaCategory">Carbon Dioxide</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <button type="button" className="btn btn-lg triviaCategory buttonTan">Methane</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/incorrect" className="btn btn-lg triviaCategory buttonTan">Water Vapor</Link>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="buttonbody">
                            <Link to="/trivia4" className="btn btn-lg triviaCategory">All of the above</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}