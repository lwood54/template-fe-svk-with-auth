import { SECRET } from '$env/static/private';
import { decryptFromCookieFormat } from '$lib/helpers/utilities/auth';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ cookies }: ServerLoadEvent): Promise<{ isLoggedIn: boolean }> => {
	const cookieToken = cookies.get('token');
	const decryptedToken =
		cookieToken && SECRET ? decryptFromCookieFormat(cookieToken, SECRET) : undefined;
	const isLoggedIn = Boolean(decryptedToken?.isOk());
	return { isLoggedIn };
};