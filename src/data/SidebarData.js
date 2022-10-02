import "bootstrap-icons/font/bootstrap-icons.css";
import Absence from "../components/pages/absence/Absence";
import Division from "../components/pages/employee/division/Division";
import Employee from "../components/pages/employee/employee-details/Employee";
import Home from "../components/pages/home/Home";
import JobPosition from "../components/pages/employee/job-position/JobPosition";
import Details from "../components/pages/employee/employee-details/details/Details";
import WorkSchedule from "../components/pages/employee/work-schedule/WorkSchedule";

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
