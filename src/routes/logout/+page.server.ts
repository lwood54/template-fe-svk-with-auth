import { redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';

export const load = async ({ cookies }: PageServerLoadEvent) => {
	cookies.delete('email', { path: '/' });
	cookies.delete('token', { path: '/' });
	throw redirect(307, '/login');
};
