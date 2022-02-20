import React, { useState } from 'react'; 

export function InputData() {
    return (
        <div>
            <header>
                <img className="logo" src="img/EnviteLogo.png" alt="envite company logo"/>
                    <nav>
                        <div role="navigation" aria-label="Navigation Bar">
                            <ul className="links-nav">
                                <li><a href="./index.html" aria-label="Home">Home</a></li>
                                <li><a href="./Trivia1.html" aria-label="Trivia">Trivia</a></li>
                                <li><a href="./dashboard.html" aria-label="Dashboard">Dashboard</a></li>
                                <li><a href="./inputData.html" className="currentNav" aria-label="Input Data">Input
                                        Data</a></li>
                                <li><a href="./about.html" aria-label="About Us">About Us</a></li>
                            </ul>
                        </div>
                    </nav>
            </header>

            <main className="inputMain">
                <h1 className="titleOfPage">See Your Impact On <br/> Our Planet</h1>
                <div className="containerInput container">
                <a href="./insertData.html" className="btn btn-lg buttonCustom roundButton">Find Your Footprint</a>
                </div>
            </main>
            <footer>
                <p>&copy; This webpage was created by INFO 340 Group 9: Vivian, Kaarina, Winni, Quang.</p>
            </footer>
        </div>
    );
}