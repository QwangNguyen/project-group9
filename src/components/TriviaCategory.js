import React from 'react';
import { Link} from 'react-router-dom';

export function TriviaCategory(props) {
    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <div className="row">
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("Urban Ecology")} className="btn btn-lg triviaCategory">Urban Ecology</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("Geographical Information Systems")} className="btn btn-lg triviaCategory buttonTan">Geographical Information Systems</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("Climate Change")} className="btn btn-lg triviaCategory">Climate Change</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("Wildlife Ecology")} className="btn btn-lg triviaCategory buttonTan">Wildlife Ecology</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("Endangered Species")} className="btn btn-lg triviaCategory">Endangered Species</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/triviaQuestion" onClick={() => props.setCatCallback("Random")} className="btn btn-lg triviaCategory buttonTan">Random</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}