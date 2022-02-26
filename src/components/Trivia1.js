import React from 'react';

export function Trivia1() {
    return(
        <div>
            <main className="centerMain">
                <div className="container containerTrivia">
                    <p><strong>Test your knowledge and get 50 coins for each correct answer!</strong></p>
                </div>
                <div className="container containerTrivia">
                    <Link to="./Trivia2.html" className="btn btn-lg start centerElement">Start!</Link>
                </div>
            </main>
        </div>
    )
}