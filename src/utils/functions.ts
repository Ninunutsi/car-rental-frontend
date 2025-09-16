export const saveToCookies = (key: string, value: string, days: number = 7) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // expiration time in days
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${key}=${value}; ${expires}; path=/`;
};

export const removeFromCookies = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

export function getItemFromSessionStorage(key: string) {
  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1); // Trim leading spaces
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length); // Return the value
    }
  }
  return null;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
  };
  return date.toLocaleDateString(undefined, options);
}

export function calculateDaysBetween(start_date: string, end_date: string) {
  const start: any = new Date(start_date);
  const end: any = new Date(end_date);
  const timeDifference = end.getTime() - start.getTime();
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
  return dayDifference ? Math.ceil(dayDifference) : 1;
}

export const convertDateFormat = (date: string) => {
  const parsedDate = new Date(date);
  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export function formatDateYear(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return formattedDate;
}
