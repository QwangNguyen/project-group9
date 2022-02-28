import React, { useState, useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import {InputData} from './InputData';
import {InsertData} from './InsertData';
import NavBar from './NavBar';
import Footer from './Footer';
import { InsertVehicle } from './InsertVehicle';
import { InsertEnergy } from './InsertEnergy';
import { InsertWaste } from './InsertWaste';
import { SustainabilityScore } from './SustainabilityScore';
import { Dashboard } from "./Dashboard";
import { TriviaStartPage }  from './TriviaStartPage';
import { TriviaCategory } from './TriviaCategory';
import { TriviaQuestion } from './TriviaQuestion';
import { CorrectTrivia } from './CorrectTrivia';
import { Home } from './Home';
import { IncorrectAnswer } from './IncorrectTrivia'
import { About } from './About';

function App(props) {
  // set trivia question
  let triviaQuestions = props.triviaData;
  // retrieve category options
  const categoryOptions = ["Urban Ecology", "Geographical Information Systems", "Climate Change", "Wildlife Ecology", "Endangered Species"];
  // set category using callback function passed into TriviaCategory

  const[category, setCategory] = useState('');

  let setCat = (cat) => {
    if (cat === "Random") {
      let index = Math.floor(Math.random() * 5);
      setCategory(categoryOptions[index]);
    } else {
      setCategory(cat);
    }
  }

  // filter trivia questions based on category
  let filteredTrivia = triviaQuestions.filter(question => question.category === category);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="inputData" element={<InputData />} />
        <Route path="insertData" element={<InsertData />}>
          <Route path="insertEnergy" element={<InsertEnergy />} />
          <Route path="insertWaste" element={<InsertWaste />} />
          <Route path="insertVehicle" element={<InsertVehicle />} />
          <Route index element={<InsertVehicle/>} />
        </Route>
        <Route path="triviaStartPage" element={<TriviaStartPage />} />
        <Route path="triviaCategory" element={<TriviaCategory setCatCallback={setCat} />} />
        <Route path="triviaQuestion" element={<TriviaQuestion triviaQ={filteredTrivia}/>} />
        <Route path="correct" element={<CorrectTrivia />} />
        <Route path="incorrect" element={<IncorrectAnswer />} />
        <Route path="sustainabilityScore" element={<SustainabilityScore />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="about" element={<About />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
