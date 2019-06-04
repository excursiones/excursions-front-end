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
<<<<<<< HEAD
import TransactionsCompanyAdd from "views/Admin/Transactions/Transactions_add_company.jsx";
import TransactionsUserAdd from "views/Admin/Transactions/Transactions_add_user.jsx";
=======

import Allies from "./views/Admin/Allies/Allies";
import Excursions from "./views/Admin/Excursions/Excursions";

>>>>>>> origin/front_by_jeffer
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/home",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: HomePage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
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
    path: "/allies",
    name: "Allies",
    icon: "",
    component: Allies,
    layout: "/admin"
  },
  {
    path: "/excursions",
    name: "Excursions",
    icon: "",
    component: Excursions,
    layout: "/admin"
  }
];

export default dashboardRoutes;
