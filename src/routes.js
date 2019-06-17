// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import TransactionsUser from "views/User/Transactions/Transactions.jsx";
import HomePage from "views/User/Home/Home.jsx";

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
    icon: Dashboard,
    component: HomePage,
    layout: "/user"
  },
  {
    path: "/transactions",
    name: "Transacciones",
    rtlName: "Transactions",
    icon: Dashboard,
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
