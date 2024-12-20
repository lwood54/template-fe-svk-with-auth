import { SECRET } from '$env/static/private';
import { AUTH_ROUTES, Route } from '$lib/constants/root';
import { isLoggedInWithCookies } from '$lib/helpers/utilities/auth';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const authenticate: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get('token');
  const routeId = event.route.id;
  const isAuthRoute = AUTH_ROUTES.some((route) => routeId === route);
  const isPublicRoute = routeId?.includes('/public');
  const isLoggedIn = isLoggedInWithCookies(token, SECRET);

  if (!isLoggedIn && !isAuthRoute && routeId !== Route.home && !isPublicRoute) {
    throw redirect(307, `${Route.login}?redirected=true`);
  }

  if (isLoggedIn && routeId === Route.logout) {
    event.cookies.delete('token', { path: '/' });
    throw redirect(307, Route.login);
  }
  if (isLoggedIn && isAuthRoute) {
    throw redirect(307, Route.home);
  }
  return await resolve(event);
};

export const otherStuff: Handle = async ({ event, resolve }) => {
  // CAN DO OTHER STUFF...delete if nothing needed
  const result = await resolve(event);
  return result;
};

export const handle = sequence(authenticate, otherStuff);
