import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Form from "./components/Form";
import Home from "./components/Home";
import Update from "./components/Update";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
