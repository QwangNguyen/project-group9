import React from 'react'; 
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

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="inputData" element={<InputData />} />
        <Route path="insertData" element ={<InsertData />}>
          <Route path="insertEnergy" element={<InsertEnergy />} />
          <Route path="insertWaste" element={<InsertWaste />} />
          <Route path="insertVehicle" element={<InsertVehicle />} />
          <Route index element={<InsertVehicle/>} />
        </Route>
        <Route path="sustainabilityScore" element={<SustainabilityScore />}/>
        <Route path="dashboard" element={<Dashboard />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
