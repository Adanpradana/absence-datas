import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/sidebar/Sidebar";

import Home from "./components/pages/home/Home";
import Employee from "./components/pages/employee/employee-details/Employee";
import Details from "./components/pages/employee/employee-details/details/Details";
import Division from "./components/pages/employee/division/Division";
import Absence from "./components/pages/absence/Absence";
import JobPosition from "./components/pages/employee/job-position/JobPosition";
import WorkSchedule from "./components/pages/employee/work-schedule/WorkSchedule";

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
            <Route path="job-position" element={<JobPosition />} />
            <Route path="work-schedule" element={<WorkSchedule />} />
          </Route>
          <Route path="absence" element={<Absence />} />
          <Route path="logout" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
