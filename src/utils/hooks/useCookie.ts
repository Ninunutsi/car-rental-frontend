import { useState } from "react";
import Cookies from "js-cookie";

const useCookie = (key: string, defaultValue?: string) => {
  const [value, setValue] = useState<string | undefined>(() => {
    return Cookies.get(key) || defaultValue;
  });

  const setCookie = (newValue: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(key, newValue, { expires: 7, ...options }); // Default expiry: 7 days
    setValue(newValue);
  };

  const removeCookie = () => {
    Cookies.remove(key);
    setValue(undefined);
  };

  return { value, setCookie, removeCookie };
};

export default useCookie;
