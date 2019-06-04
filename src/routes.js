// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Admin/Dashboard/Dashboard.jsx";
import Transactions from "views/Admin/Transactions/Transactions.jsx";
import TransactionsUser from "views/User/Transactions/Transactions.jsx";
import UserProfile from "views/Admin/UserProfile/UserProfile.jsx";
import TableList from "views/Admin/TableList/TableList.jsx";
import Typography from "views/Admin/Typography/Typography.jsx";
import Icons from "views/Admin/Icons/Icons.jsx";
import Maps from "views/Admin/Maps/Maps.jsx";
import NotificationsPage from "views/Admin/Notifications/Notifications.jsx";
import UpgradeToPro from "views/Admin/UpgradeToPro/UpgradeToPro.jsx";
import HomePage from "views/User/Home/Home.jsx";
import TransactionsCompanyAdd from "views/Admin/Transactions/Transactions_add_company.jsx";
import TransactionsUserAdd from "views/Admin/Transactions/Transactions_add_user.jsx";
import ReservationsPage from "views/User/Home/Home.jsx";
import TransactionsPage from "views/User/Home/Home.jsx";

import Allies from "./views/Admin/Allies/Allies";
import Excursions from "./views/Admin/Excursions/Excursions";

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/home",
    name: "Excursiones",
    rtlName: "Excursions",
    icon: Dashboard,
    component: HomePage,
    layout: "/user"
  },
  {
    path: "/reservations",
    name: "Reservaciones",
    rtlName: "Reservations",
    icon: Dashboard,
    component: ReservationsPage,
    layout: "/user"
  },
  // Admin
  {
    path: "/transactions",
    name: "Transactions",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Transactions,
    layout: "/admin"
  },
  {
    path: "/transaction-company-add",
    name: "Companies Transactions",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: TransactionsCompanyAdd,
    layout: "/admin",
    nShow: true
  },
  {
    path: "/transaction-user-add",
    name: "Users Transactions",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: TransactionsUserAdd,
    layout: "/user",
    nShow: true
  },
  {
    path: "/transactions",
    name: "Transactions",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: TransactionsUser,
    layout: "/user",
  },
  {
    path: "/excursions",
    name: "Excursions",
    icon: Dashboard,
    component: Excursions,
    layout: "/admin"
  },
  {
    path: "/allies",
    name: "Allies",
    icon: Dashboard,
    component: Allies,
    layout: "/admin"
  }
];

export default dashboardRoutes;
