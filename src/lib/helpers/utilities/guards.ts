export const isJsonContent = (response: Response) => {
  return response.headers.get('content-type')?.includes('application/json');
};

export const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
};
