import React from 'react';

export function Trivia4() {
    return (
        <main className="triviaBody centerMain">
            <div className="container containerTrivia">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="content">
                            <img src="img/coin.png" alt="a coin" aria-label="coin when your get the ansers for the trivia game" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="content">
                            <p className="message">You got it!</p>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="content">
                            <p className="explanation">Greenhouse gases may be a result of natural occurrence or human activity.
                                These gases include carbon dioxide (CO2), methane (CH4), water vapor, nitrous oxide (N2O)
                                and ozone (O3). Fluorinated gases are also considered to be greenhouse gases. Greenhouse
                                gases act like a heat-trapping blanket, making the Earth habitable for humans. However,
                                human activities have increased emissions of greenhouse gases into the atmosphere beyond
                                what the Earth can support, resulting in climate change.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button type="button" className="btn btn-lg start centerElement">Next</button>
            </div>
        </main>
    )
}