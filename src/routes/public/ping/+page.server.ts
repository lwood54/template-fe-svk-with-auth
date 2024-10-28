import { Api, HTTP_METHODS } from '$lib/constants/root';
import { createHeaders } from '$lib/helpers/utilities/auth';
import { parseError } from '$lib/helpers/utilities/errors';

export const load = async (): Promise<{ data?: { message: string }; error?: string }> => {
  try {
    const response = await fetch(Api.ping, {
      method: HTTP_METHODS.GET,
      headers: createHeaders()
    });
    if (!response.ok) {
      return { error: await parseError(response) };
    }
    return { data: await response.json() };
  } catch (error) {
    return { error: await parseError(error) };
  }
};
