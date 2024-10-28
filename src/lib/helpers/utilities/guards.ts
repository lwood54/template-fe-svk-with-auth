import type { ErrorWithKey, ErrorWithMessage, ErrorWithStatusText } from '$lib/types/cusotm/utils';

export const isJsonContent = (response: Response) => {
  return response.headers.get('content-type')?.includes('application/json');
};

export const isResponse = (response: unknown): response is Response => {
  return response instanceof Response;
};

export const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
};

export const isErrorWithKey = (error: unknown): error is ErrorWithKey => {
  return typeof error === 'object' && error !== null && 'key' in error;
};

export const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return typeof error === 'object' && error !== null && 'message' in error;
};

export const isErrorWithStatusText = (error: unknown): error is ErrorWithStatusText => {
  return typeof error === 'object' && error !== null && 'statusText' in error;
};
