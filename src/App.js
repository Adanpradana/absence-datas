import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Employee from "./components/Employee";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="employee" element={<Employee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
