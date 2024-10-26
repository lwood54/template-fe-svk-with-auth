import { type ServerLoadEvent } from "@sveltejs/kit";

export const load = async ({ url }: ServerLoadEvent) => {
	const hasSignedUp = Boolean(url.searchParams.get('signedup'));
	const isRedirect = Boolean(url.searchParams.get('redirected'));
	
	return { isRedirect, hasSignedUp };
};