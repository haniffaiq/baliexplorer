
// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppProvider";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import ThemeProvider from "./context/ThemeProvider";
import Login from "./pages/Login";

function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
