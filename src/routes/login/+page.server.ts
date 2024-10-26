import { fail, redirect, type ServerLoadEvent } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Api, HTTP_METHODS, Route } from '$lib/constants/root';
import { zod } from 'sveltekit-superforms/adapters';
import { message, superValidate } from 'sveltekit-superforms/server';
import { createHeaders, encryptAndFormatForCookie } from '$lib/helpers/utilities/auth';
import { userLoginSchema } from '$lib/types/user';
import { SECRET } from '$env/static/private';

export const load = async ({ parent, url }: ServerLoadEvent) => {
	const { isLoggedIn } = await parent();
	const hasSignedUp = Boolean(url.searchParams.get('signedup'));
	const isRedirect = Boolean(url.searchParams.get('redirected'));

	if (isLoggedIn) {
		throw redirect(307, Route.home);
	}
	const form = await superValidate(zod(userLoginSchema));

	return { form, isLoggedIn, isRedirect, hasSignedUp };
};

export const actions: Actions = {
	login: async ({ cookies, fetch, request }) => {
		const form = await superValidate(request, zod(userLoginSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const { email, password } = form.data;

		try {
			const response = await fetch(Api.auth.login, {
				method: HTTP_METHODS.POST,
				body: JSON.stringify({ email, password }),
				headers: createHeaders()
			});

			if (!response.ok) {
				return message(form, { error: 'invalidCredentials' });
			}
			const res = await response.json();
			if (SECRET) {
				const cookieValue = encryptAndFormatForCookie(res.token, SECRET);

				cookies.set('token', cookieValue, {
					httpOnly: true,
					secure: true,
					sameSite: 'strict',
					path: '/',
					maxAge: 60 * 60 * 2 // 2 hours
				});
				return message(form, { message: res });
			}
			return message(form, { error: 'error logging in' });
		} catch (error) {
			console.error('login error: ', error);
			return message(form, { error: 'error attempting login' });
		}
	},
	logout: async ({ cookies }) => {
		cookies.delete('email', { path: '/' });
		cookies.delete('token', { path: '/' });
	}
};
