import Welcome from "./pages/welcome.jsx";
import Rules from "./pages/rules.jsx";
import Auth from "./pages/auth.jsx";
import About from "./pages/about.jsx";

const routes = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/rules",
    component: Rules,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
