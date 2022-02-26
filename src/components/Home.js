import React from 'react'; 
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <main>
            <div role="navigation" aria-label="Main Menu" className="menu">
                <div className="containerIndex">
                    <a href="dashboard.html" className="btn footprint roundButton">See Dashboard</a>
                </div>
                <div className="containerIndex">
                    <a href="inputData.html" className="btn footprint roundButton">Input Your Data</a>
                </div>
                <div class="containerIndex">
                    <a href="Trivia1.html" className="btn footprint roundButton">Play TriviaGame</a>
                </div>
            </div>
            <div role="document">
                <div className="missionContainer">
                    <div>
                        <h1 className="missionInfo">Our Mission</h1>
                        <p className="info">We believe that everyone can participate in the action of being more environmental friendly just
                            by noticing and changing a bit of their lifestyles!</p>
                        <p className="info">Come join us by inputting your data, playing the super exciting Trivia Game, and going to store
                            to get your favorite rewards!</p>
                    </div>
                </div>
        </div>
        </main>
    )
}