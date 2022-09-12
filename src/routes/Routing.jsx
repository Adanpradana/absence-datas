import { Routes, Route, useParams } from "react-router-dom";
import App from "../App";
import Absence from "../components/Absence";
import Home from "../components/Home";
import SidebarData from "../data/SidebarData";

const Routing = () => {
  let element = useParams(SidebarData);
  return element;
};
export default Routing;
