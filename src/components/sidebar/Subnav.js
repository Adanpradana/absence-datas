import { Link } from "react-router-dom";

const Subnav = ({ child }) => {
  return (
    <>
      <div className="children-open">
        <Link to={child.path}>
          <span>
            {child.icon && <i className={child.icon}></i>}
            {child.title}
          </span>
        </Link>
      </div>
    </>
  );
};
export default Subnav;
