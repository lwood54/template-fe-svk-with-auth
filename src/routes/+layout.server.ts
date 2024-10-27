import { SECRET, VERCEL_COMMIT_REF } from '$env/static/private';
import { decryptFromCookieFormat } from '$lib/helpers/utilities/auth';
import type { LayoutServerLoadEvent } from './$types';

export const load = async ({ cookies }: LayoutServerLoadEvent) => {
  const cookieToken = cookies.get('token');
  const decryptedToken =
    cookieToken && SECRET ? decryptFromCookieFormat(cookieToken, SECRET) : undefined;
  const isLoggedIn = Boolean(decryptedToken?.isOk());
  return {
    isLoggedIn,
    deploymentGitBranch: VERCEL_COMMIT_REF
  };
};
