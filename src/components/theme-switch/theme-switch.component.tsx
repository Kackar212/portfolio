import { Dispatch, SetStateAction, useCallback } from "react";
import { Theme } from "@/hooks/use-theme.hook";
import SunIcon from "@/assets/sun.svg?react";
import MoonIcon from "@/assets/moon.svg?react";
import { useTranslation } from "react-i18next";

interface ThemeSwitchProps {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
}

export function ThemeSwitch({ setTheme, theme }: ThemeSwitchProps) {
  const { t } = useTranslation(["theme"]);

  const isDarkTheme = theme === "dark";

  const onClick = useCallback(() => {
    setTheme((theme) => {
      const newTheme = theme === "dark" ? "" : "dark";

      window.localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  }, [setTheme]);

  return (
    <div className="fixed right-4 bottom-4 md:top-4 md:bottom-[unset]">
      <button
        type="button"
        onClick={onClick}
        aria-pressed={isDarkTheme}
        className="p-3 rounded-2xl bg-navigation-background cursor-pointer transition-colors hover:bg-navigation-background/60 dark:hover:bg-gray-300/15"
      >
        {isDarkTheme ? (
          <SunIcon className="text-primary" />
        ) : (
          <MoonIcon className="text-primary" />
        )}
        <span className="sr-only">{t("dark theme")}: </span>
      </button>
    </div>
  );
}
