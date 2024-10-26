import { isJsonContent } from './guards';

export const parseError = async (response: Response) => {
  if (isJsonContent(response)) {
    const errors = await response.json();
    return errors?.key ? errors.key : errors?.message;
  }
  return response.text();
};
