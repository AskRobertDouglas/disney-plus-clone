import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import NewDisney from "./components/NewDisney";
import Originals from "./components/Originals";
import Recommends from "./components/Recommends";
import Trending from "./components/Trending";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/new-disney" element={<NewDisney />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/recommends" element={<Recommends />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
