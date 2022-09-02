const Subnav = ({ subNav }) => {




    
  return (
    <div className="subnav-open">
      <span>
        {subNav.icon && <i className={subNav.icon}></i>}
        {subNav.title}
      </span>
    </div>
  );
};
export default Subnav;
