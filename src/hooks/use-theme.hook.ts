import { useState } from "react";

export type Theme = "dark" | "";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const { matches: isDarkThemePrefered } = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const theme = window.localStorage.getItem("theme") as Theme | null;

    if (theme !== null) {
      return theme;
    }

    if (isDarkThemePrefered) {
      return "dark";
    }

    return "";
  });

  return { theme, setTheme };
}
