export const getHostUrl = (url: string): string => {
  const myURL = new URL(url);
  return myURL.host;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-PH", {
    minute: "2-digit",
    hour: "numeric",
    hour12: true, // Ensures it displays as AM/PM
  });
};
