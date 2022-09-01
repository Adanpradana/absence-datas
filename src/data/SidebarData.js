import "bootstrap-icons/font/bootstrap-icons.css";
const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: "bi-house-fill",
  },
  {
    title: "Employee",
    path: "#",
    icon: "bi-person-bounding-box",
    dropdown: "chevron-down toogle-btn",
    SubNav: [
      {
        title: "Employee Details",
        path: "employee/details",
        icon: "bi-person-lines-fill",
      },
      {
        title: "Division",
        path: "employee/division",
        icon: "bi-diagram-3-fill",
      },
      {
        title: "Job Position",
        path: "/employee/Job-position",
        icon: "bi-briefcase-fill",
      },
      {
        title: "Work Schedule",
        path: "/employee/work-schedule",
        icon: "bi-calendar2-check-fill",
      },
    ],
  },
  {
    title: "Absence",
    path: "/abesence",
    icon: "bi-clock-history",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: "bi-power",
  },
];

export default SidebarData;
