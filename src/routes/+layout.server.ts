import { SECRET } from '$env/static/private';
import { Api, HTTP_METHODS } from '$lib/constants/root';
import { createHeaders, decryptFromCookieFormat } from '$lib/helpers/utilities/auth';
import { parseError } from '$lib/helpers/utilities/errors';
import type { LayoutServerLoadEvent } from './$types';

export const load = async ({ cookies }: LayoutServerLoadEvent) => {
  const cookieToken = cookies.get('token');
  const decryptedToken =
    cookieToken && SECRET ? decryptFromCookieFormat(cookieToken, SECRET) : undefined;

  if (decryptedToken?.isOk()) {
    const token = decryptedToken.value;
    try {
      const response = await fetch(Api.user.root, {
        method: HTTP_METHODS.GET,
        headers: createHeaders({
          Authorization: token
        })
      });

      if (!response.ok) {
        return { isLoggedIn: false, error: await parseError(response) };
      }
      return { isLoggedIn: true, user: await response.json() };
    } catch (error) {
      return { isLoggedIn: false, error: await parseError(error) };
    }
  }
  return { isLoggedIn: false };
};
