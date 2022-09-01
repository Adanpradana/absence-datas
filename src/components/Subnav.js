const Subnav = ({ subNav }) => {
  return (
    <div>
      <span>
        {subNav.icon && <i className={subNav.icon}></i>}
        {subNav.title}
      </span>
    </div>
  );
};
export default Subnav;
