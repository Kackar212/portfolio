import { ThemeSwitch } from "./components/theme-switch/theme-switch.component";
import { twMerge } from "tailwind-merge";
import { useTheme } from "./hooks/use-theme.hook";
import { Header } from "./components/header/header.component";
import { Main } from "./components/main/main.component";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={twMerge("bg-background min-h-full", theme)}>
      <ThemeSwitch setTheme={setTheme} theme={theme} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
