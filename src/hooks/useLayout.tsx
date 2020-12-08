import { useEffect, useState } from "react";

export const useLayout = () => {
  const [layout, setLayout] = useState<string>("col-1");

  const setMode = (mode: string): void => {
    window.localStorage.setItem("layout", mode);
    setLayout(mode);
  };

  const layoutToggler = (): void => {
    layout === "col-2" ? setMode("col-1") : setMode("col-2");
  };

  useEffect((): void => {
    const localLayout = window.localStorage.getItem("layout");
    localLayout && setLayout(localLayout);
  }, []);

  return [layout, layoutToggler];
};
