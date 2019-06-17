// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Language from "@material-ui/icons/Language";
import CardTravel from "@material-ui/icons/CardTravel";
import Home from "@material-ui/icons/Home";
import People from "@material-ui/icons/People";
import Map from "@material-ui/icons/Map";
import Payment from "@material-ui/icons/Payment";
import HomePage from "views/User/Home/Home.jsx";
import Reservations from "views/User/Reservations/Reservations.jsx";
import AdminHome from "views/Admin/Home/AdminHome.jsx";
import RTLPage from "views/RTLPage/RTLPage.jsx";
import TransactionsUser from "views/User/Transactions/Transactions.jsx";
import TransactionsCompanyAdd from "views/Admin/Transactions/Transactions_add_company.jsx";
import TransactionsUserAdd from "views/Admin/Transactions/Transactions_add_user.jsx";
import Transactions from "views/Admin/Transactions/Transactions.jsx";
import Allies from "./views/Admin/Allies/Allies";
import Excursions from "./views/Admin/Excursions/Excursions";
import UserProfile from "./views/Admin/UserProfile/UserProfile.jsx";
import Login from "./views/public/Login.jsx";
import NotFound from "./views/public/NotFound.jsx";

const dashboardRoutes = [
  // Public routes
  {
    path: "/login",
    name: "Login | Excursiones",
    rtlName: "Login | Excursiones",
    component: Login,
    icon: Dashboard,
    layout: "/public"
  },
  {
    path: "/404.html",
    name: "Página no encontrada",
    rtlName: "Página no encontrada",
    component: NotFound,
    icon: Dashboard,
    layout: "/public"
  },
  // User routes
  {
    path: "/home",
    name: "Excursiones",
    rtlName: "Excursions",
    icon: Map,
    component: HomePage,
    layout: "/user"
  },
  {
    path: "/transactions",
    name: "Transacciones",
    rtlName: "Transactions",
    icon: Payment,
    component: TransactionsUser,
    layout: "/user"
  },
  // Admin
  {
    path: "/home",
    name: "User View!",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/adminhome",
    name: "AdminHome",
    rtlName: "لوحة القيادة",
    icon: Home,
    component: AdminHome,
    layout: "/admin"
  },
  {
    path: "/transactions",
    name: "Transactions",
    rtlName: "لوحة القيادة",
    icon: Payment,
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
    path: "/allies",
    name: "Allies",
    icon: People,
    component: Allies,
    layout: "/admin"
  },
  {
    path: "/excursions",
    name: "Excursions",
    icon: Map,
    component: Excursions,
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
    path: "/reservations",
    name: "Reservations",
    rtlName: "لوحة القيادة",
    icon: CardTravel,
    component: Reservations,
    layout: "/user"
  }
];

export default dashboardRoutes;
