// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import CardTravel from "@material-ui/icons/CardTravel";
import Home from "@material-ui/icons/Home";
import People from "@material-ui/icons/People";
import Map from "@material-ui/icons/Map";
import Payment from "@material-ui/icons/Payment";
import HomePage from "views/User/Home/Home.jsx";
import Reservations from "views/User/Reservations/Reservations.jsx";
import AdminHome from "views/Admin/Home/AdminHome.jsx";
import TransactionsUser from "views/User/Transactions/Transactions.jsx";
import TransactionsCompanyAdd from "views/Admin/Transactions/Transactions_add_company.jsx";
import TransactionsUserAdd from "views/Admin/Transactions/Transactions_add_user.jsx";
import Transactions from "views/Admin/Transactions/Transactions.jsx";
import Allies from "./views/Admin/Allies/Allies";
import Excursions from "./views/Admin/Excursions/Excursions";
import Login from "./views/public/Login.jsx";
import NotFound from "./views/public/NotFound.jsx";
import Forbidden from "./views/public/Forbidden.jsx";

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
    path: "/forbidden.html",
    name: "Página prohibida",
    rtlName: "Página no permitida",
    component: Forbidden,
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
  // Admin
  {
    path: "/home",
    name: "Home",
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
    path: "/transactions",
    name: "Transactions",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: TransactionsUser,
    layout: "/user"
  },
  {
    path: "/excursions",
    name: "Excursions",
    icon: Map,
    component: Excursions,
    layout: "/admin"
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
