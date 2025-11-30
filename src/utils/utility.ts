export const getHostUrl = (url: string): string => {
  const myURL = new URL(url);
  return myURL.host;
}