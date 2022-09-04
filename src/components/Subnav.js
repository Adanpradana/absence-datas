import { Link } from "react-router-dom";

const Subnav = ({ child }) => {
  return (
    <>
      <Link to={child.path}>
        <div className="children-open">
          <span>
            {child.icon && <i className={child.icon}></i>}
            {child.title}
          </span>
        </div>
      </Link>
    </>
  );
};
export default Subnav;
