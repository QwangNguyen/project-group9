import React, { useState } from 'react';
import { Link} from 'react-router-dom';

export function TriviaCategory() {
    const[category, setCategory] = useState('');

    let chooseCat = (event) => {
        setCategory(event.target.innerText);
    }

    let cat = "Urban Ecology";

    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <div className="row">
                    <div className="col-md-4 d-flex centerElement">
                        <div class="buttonbody">
                            <Link to="/triviaQuestion" onClick={chooseCat} value={cat} className="btn btn-lg triviaCategory">Urban Ecology</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={chooseCat} className="btn btn-lg triviaCategory buttonTan">Geographical Information Systems</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={chooseCat} className="btn btn-lg triviaCategory">Climate Change</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={chooseCat} className="btn btn-lg triviaCategory buttonTan">Wildlife Ecology</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={chooseCat} className="btn btn-lg triviaCategory">Endangered Species</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={chooseCat} className="btn btn-lg triviaCategory buttonTan">Random</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}