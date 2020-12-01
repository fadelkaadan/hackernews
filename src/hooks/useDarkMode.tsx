import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<string>("dark");

  const setMode = (mode: string): void => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = (): void => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect((): void => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
};
