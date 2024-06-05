import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
        const value = window.localStorage.getItem(keyName);
        return value ? JSON.parse(value) : defaultValue;
      } catch (err) {
        return defaultValue;
      }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error(err);
    }
  };
  
  return [storedValue, setValue];
};