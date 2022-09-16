import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";

import Home from "./components/Home";
import Employee from "./components/Employee";
import Details from "./components/Sidebar-component/Details";
import Division from "./components/Division";
import Absence from "./components/Absence";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route>
            <Route path="employee" element={<Employee />}></Route>
            <Route path="employee/:dbg_pegawaipegawai_pin" element={<Details />} />
            <Route path="division" element={<Division />} />
            <Route path="job-position" />
            <Route path="schedule" />
          </Route>
          <Route path="absence" element={<Absence />} />
          <Route path="logout" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
