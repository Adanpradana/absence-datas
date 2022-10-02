import datas from "../../data/SidebarData";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-item-logo">
        <h2>LOGO</h2>
      </div>
      {datas.map((props, i) => {
        return <Navigation key={i} {...props} props={props} />;
      })}
    </aside>
  );
};
export default Sidebar;
