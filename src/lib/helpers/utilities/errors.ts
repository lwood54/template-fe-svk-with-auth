import {
  isErrorWithKey,
  isErrorWithMessage,
  isErrorWithStatusText,
  isJsonContent,
  isResponse
} from './guards';

export const parseError = async (error: unknown) => {
  if (isResponse(error)) {
    const errorMessage = isJsonContent(error) ? await error.json() : error;
    return extractError(errorMessage);
  }
  return extractError(error);
};

export const extractError = (error: unknown) => {
  if (isErrorWithKey(error)) {
    // TODO: add error key to error message
    // could eventually seutp keys that display translated or constant messages
    return error.key;
  }
  if (isErrorWithMessage(error)) {
    return error.message;
  }
  if (isErrorWithStatusText(error)) {
    return error.statusText;
  }
  return 'An unknown error occurred';
};
