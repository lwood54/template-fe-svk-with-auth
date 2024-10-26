export const toDateDisplay = (date: string) => {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
    return 'invalid date format';
  }
  return dateObj.toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  });
};
