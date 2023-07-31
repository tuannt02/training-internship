import routesPath from '../configs/routes';
import { Home } from '../pages';

type RouteItem = {
  path: string;
  component: () => JSX.Element;
  layout?: () => JSX.Element;
  privateRoute?: boolean;
  children?: Array<RouteItem>;
};

const routes: Array<RouteItem> = [{ path: routesPath.home, component: Home }];

export default routes;
