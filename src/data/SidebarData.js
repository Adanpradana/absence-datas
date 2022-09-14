import "bootstrap-icons/font/bootstrap-icons.css";
import Absence from "../components/Absence";
import Division from "../components/Division";
import Employee from "../components/Employee";
import Home from "../components/Home";
import JobPosition from "../components/JobPosition";
import Details from "../components/Sidebar-component/Details";
import WorkSchedule from "../components/WorkSchedule";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: "bi-house-fill",
    element: <Home />,
  },
  {
    title: "Employee",
    icon: "bi-person-bounding-box",
    dropdown: "chevron-down toogle-btn",
    children: [
      {
        title: "Employee Details",
        path: "employee",
        icon: "bi-person-lines-fill",
      },
      {
        title: "Division",
        path: "division",
        icon: "bi-diagram-3-fill",
      },
      {
        title: "Job Position",
        path: "job-position",
        icon: "bi-briefcase-fill",
      },
      {
        title: "Work Schedule",
        path: "work-schedule",
        icon: "bi-calendar2-check-fill",
      },
    ],
  },
  {
    title: "Absence",
    path: "/absence",
    icon: "bi-clock-history",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: "bi-power",
  },
];

export default SidebarData;
