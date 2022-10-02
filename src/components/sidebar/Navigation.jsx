import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Subnav from "./Subnav";
import { Link } from "react-router-dom";

const Navigation = ({ props }) => {
  const [open, setOpen] = useState(false);
  const clicked = () => {
    setOpen(!open);
  };
  if (props.children) {
    return (
      <div className={open ? "sidebar-content open" : "sidebar-content"}>
        <div className="sidebar-title">
          <span>
            {props.icon && <i className={props.icon}></i>}
            {props.title}
          </span>

          <i className="bi-chevron-down toogle-btn" onClick={clicked}></i>
        </div>
        <div className="sidebar-subnav ">
          {props.children.map((child, i) => {
            return <Subnav key={i} {...child} child={child} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={open ? "sidebar-content open" : "sidebar-content"}>
        <Link to={props.path}>
          <div className="sidebar-title">
            <span>
              {props.icon && <i className={props.icon}></i>}
              {props.title}
            </span>
          </div>
        </Link>
      </div>
    );
  }
};
export default Navigation;
