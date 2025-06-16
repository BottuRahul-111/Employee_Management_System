import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";
import RegisterEmployee from "./components/RegisterEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import HomePage from "./components/HomePage";


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/register" element={<RegisterEmployee />} />
        <Route path="/update/:id" element={<UpdateEmployee />} /> {/* Add update route */}
      </Routes>
    </Router>
  );
}

export default App;