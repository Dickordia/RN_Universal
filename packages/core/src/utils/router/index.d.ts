import { FunctionComponent } from 'react'

import { RouteConfig } from '../../models/router'

interface RouteConfigsMap {
  login: {
    navigator: RouteConfig;
    root: RouteConfig;
  };
  landscape: {
    navigator: RouteConfig;
    root: RouteConfig;
  };
}

const routesMap: RouteConfigsMap;

export { routesMap };
