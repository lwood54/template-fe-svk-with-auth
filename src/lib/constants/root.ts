import { PUBLIC_ENV } from '$env/static/public';
const PRODUCTION_URL = 'https://kinectis-be.fly.dev';
const DEV_URL = 'http://127.0.0.1:8080';
export const ROOT_URL = PUBLIC_ENV === 'development' ? DEV_URL : PRODUCTION_URL;
// export const ROOT_URL = PRODUCTION_URL;
// export const ROOT_URL = DEV_URL;

export const Route = {
  home: '/',
  login: '/login',
  logout: '/logout',
  signup: '/signup',
  user: {
    root: '/user',
    edit: '/user/edit'
  },
  ping: {
    root: '/ping',
    auth: '/ping-auth'
  }
} as const;

export const Api = {
  auth: {
    login: `${ROOT_URL}${Route.login}`,
    logout: `${ROOT_URL}${Route.logout}`,
    signup: `${ROOT_URL}${Route.signup}`
  },
  ping: `${ROOT_URL}${Route.ping.root}`,
  authPing: `${ROOT_URL}${Route.ping.auth}`,
  user: {
    root: `${ROOT_URL}${Route.user.root}`
  }
} as const;

// TODO: instead of adding routes to different arrays, just use /public in the route, anything not public will be private
// then, inside the hook, check routeId if it includes /public, if so, skip auth check
// ROUTES FOR AUTHENTICATION
export const AUTH_ROUTES = [Route.login, Route.signup];

// ROUTES FOR PUBLIC ACCESS, no need to be authenticated
export const PUBLIC_ROUTES = [];

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
} as const;

export const BASE_HEADERS = {
  'Content-Type': 'application/json; charset=UTF-8' // NOTE: won't work without charset
};
