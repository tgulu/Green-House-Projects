import "./App.css";
import Header from "./components/header/Header.jsx";
import { Home } from "./router.js";
// import { BroswerRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
