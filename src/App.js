import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import AddEmployee from './pages/AddEmployee';
import Employee from './pages/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavigation from "./layout/MainNavigation"
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
      <Route path="/add-employee/:id" element={<AddEmployee />} />
       
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee-details/:id" element={<EmployeeDetails />} />
       
      </Routes>
    </div>
  );
}
  
    
export default App;
