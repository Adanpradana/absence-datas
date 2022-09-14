import { Routes, Route, useParams } from "react-router-dom";
import App from "../App";
import Absence from "../components/Absence";
import Division from "../components/Division";
import Employee from "../components/Employee";
import Home from "../components/Home";
import Details from "../components/Sidebar-component/Details";
import SidebarData from "../data/SidebarData";

const Routing = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="#">
      <Route path="employee" element={<Employee />}>
        <Route path="details" element={<Details />} />
      </Route>
      <Route path="division" element={<Division />} />
      <Route path="job-position" />
      <Route path="schedule" />
    </Route>
    <Route path="absence" element={<Absence />} />
    <Route path="logout" />
  </Routes>;
};
export default Routing;
