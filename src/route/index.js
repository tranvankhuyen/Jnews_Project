import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Detail from "../pages/Detail";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/culture", component: Culture },
  { path: "/detail/:id", component: Detail },
];

export default publicRoutes;
