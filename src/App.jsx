import { useRoutes } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import SidebarData from "./data/SidebarData";

function App() {
  let element = useRoutes(SidebarData);
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        {element}
      </div>
    </div>
  );
}

export default App;
