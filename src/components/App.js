import React, { useState } from 'react'; 
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
  // set category using callback function passed into TriviaCategory
  const[category, setCategory] = useState('');

  let setCat = (cat) => {
    setCategory(cat);
  }

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
        <Route path="triviaQuestion" element={<TriviaQuestion category={category} triviaQ={triviaQuestions}/>} />
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
