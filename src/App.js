import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/TestPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Userpage from "./pages/Userpage";
import SearchPage from "./pages/SearchPage";
import ReviewPage from "./pages/ReviewPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      
      <main>
        
          {/* <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </> */}

        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            {/* <Route path="/about" element={<About/>} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/userpage" element={<Userpage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/review" element={<ReviewPage />} />
          </Routes>
        </BrowserRouter>

      </main>
    </>
  );
}

export default App;
