import { ThemeSwitch } from "./components/theme-switch/theme-switch.component";
import { twMerge } from "tailwind-merge";
import { useTheme } from "./hooks/use-theme.hook";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={twMerge("size-full bg-background", theme)}>
      <ThemeSwitch setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default App;
