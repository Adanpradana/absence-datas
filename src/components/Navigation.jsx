import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Subnav from "./Subnav";

const Navigation = ({ props }) => {
  const [open, setOpen] = useState(false);
  const clicked = () => {
    setOpen(!open);
  };
  if (props.SubNav) {
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
          {props.SubNav.map((subNav, i) => {
            return <Subnav key={i} {...subNav} subNav={subNav} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={open ? "sidebar-content open" : "sidebar-content"}>
        <div className="sidebar-title">
          <span>
            {props.icon && <i className={props.icon}></i>}
            {props.title}
          </span>
        </div>
      </div>
    );
  }
};
export default Navigation;
