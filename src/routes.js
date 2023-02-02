import Root from "./pages/root.jsx";
import Rules from "./pages/rules.jsx";
import Auth from "./pages/auth.jsx";
import About from "./pages/about.jsx";
import Welcome from "./pages/welcome.jsx";
import Friends from "./pages/friends.jsx";

const routes = [
  {
    path: "/",
    component: Root,
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
  {
    path: "/welcome",
    component: Welcome,
  },
  {
    path: "/friends",
    component: Friends,
  },
];

export default routes;
