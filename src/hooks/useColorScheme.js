// import { useEffect, useMemo } from "react";
// import { useMediaQuery } from "react-responsive";
// import createPersistedState from "use-persisted-state";


// const useColorSchemeState = createPersistedState("colorScheme");

// export function useColorScheme() {
//   const systemPrefersDark = useMediaQuery(
//     {
//       query: "(prefers-color-scheme: dark)",
//     },
//     undefined
//   );

//   const [isDark, setIsDark] = useColorSchemeState();
//   const value = useMemo(
//     () => (isDark === undefined ? !!systemPrefersDark : isDark),
//     [isDark, systemPrefersDark]
//   );

//   useEffect(() => {
//     if (value) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [value]);

//   return {
//     isDark: value,
//     setIsDark,
//   };
// }

import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

function useColorScheme() {
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const [isDark, setIsDark] = useState(() => {
    // Retrieve the color scheme from localStorage
    const savedScheme = localStorage.getItem("colorScheme");
    return savedScheme !== null ? JSON.parse(savedScheme) : undefined;
  });

  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    // Persist the color scheme to localStorage
    localStorage.setItem("colorScheme", JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    console.log(value);
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}

export default useColorScheme;



