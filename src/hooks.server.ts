import { SECRET } from '$env/static/private';
import { AUTH_ROUTES, PUBLIC_ROUTES, Route } from '$lib/constants/root';
import { isLoggedInWithCookies } from '$lib/helpers/utilities/auth';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const authenticate: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');
	const hasToken = Boolean(token);
	const routeId = event.route.id;
	const isAuthRoute = AUTH_ROUTES.some((route) => routeId === route);
	const isPublicRoute = PUBLIC_ROUTES.some((route) => routeId === route);
	// console.count("AUTH MIDDEWARE RUNNING!!!!")
	console.info('auth hook check 1', {hasToken, isAuthRoute, routeId, isPublicRoute});
	if (!token && !isAuthRoute && routeId !== Route.home && !isPublicRoute) {
		console.info('auth hook check 2', {hasToken, isAuthRoute, routeId, isPublicRoute});
		throw redirect(307, `${Route.login}?redirected=true`);
	}

	const isLoggedIn = isLoggedInWithCookies(token, SECRET);
	// console.info('auth hook check 3', {isLoggedIn, hasToken});
	if (isLoggedIn && isAuthRoute) {
		console.info('auth hook check 4', {isLoggedIn, isAuthRoute});
		throw redirect(307, Route.home);
	}
	console.info('auth hook check 5', {isLoggedIn, isAuthRoute, isPublicRoute, routeId, hasToken});
	return await resolve(event);
};

export const otherStuff: Handle = async ({ event, resolve }) => {
	// CAN DO OTHER STUFF...delete if nothing needed
	const result = await resolve(event);
	return result;
};

export const handle = sequence(authenticate, otherStuff);
