import React from 'react';
import { Link} from 'react-router-dom';

export function TriviaCategory() {
    return (
        <main className="centerMain">
            <div className="container containerTrivia">
                <div className="row">
                    <div className="col-md-4 d-flex centerElement">
                        <div class="buttonbody">
                            <button type="button" className="btn btn-lg triviaCategory">Urban Ecology</button>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <button type="button" className="btn btn-lg triviaCategory buttonTan">Geographical Information Systems</button>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <Link to="/trivia3" className="btn btn-lg triviaCategory">Climate Change</Link>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <button type="button" className="btn btn-lg triviaCategory buttonTan">Wildlife Ecology</button>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <button type="button" className="btn btn-lg triviaCategory">Endangered Species</button>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex centerElement">
                        <div className="buttonbody">
                            <button type="button" className="btn btn-lg triviaCategory buttonTan">Random</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}