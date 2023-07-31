import routesPath from '../configs/routes';
import { Home, SignIn, SignUp } from '../pages';
import Logged from '../pages/Logged';

type RouteItem = {
  path: string;
  component: () => JSX.Element;
  layout?: () => JSX.Element;
  privateRoute?: boolean;
  children?: Array<RouteItem>;
};

const routes: Array<RouteItem> = [
  { path: routesPath.home, component: Home },
  { path: routesPath.signin, component: SignIn },
  { path: routesPath.signup, component: SignUp },
  { path: routesPath.logged, component: Logged },
];

export default routes;
