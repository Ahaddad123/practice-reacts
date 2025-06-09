import { useState, useEffect } from 'react';

export const useCache = (key, initialValue) => {
  // Initialize state with value from localStorage or initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log('Error writing to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};