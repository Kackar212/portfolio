import { HeaderCard } from "../header-card/header-card.component";
import { Nav } from "../nav/nav.component";
import { AboutMe } from "../about-me/about-me.component";
import { Experience } from "../experience/experience.component";

export function Header() {
  return (
    <header className="flex flex-col w-full px-4 justify-center md:px-8 lg:px-12 pt-20 pb-16 leading-none max-w-6xl m-auto">
      <Nav />
      <div className="flex flex-col items-center mt-8 gap-4 md:items-stretch md:flex-row lg:gap-12 xl:gap-36">
        <HeaderCard />
        <div className="flex flex-col">
          <AboutMe />
          <Experience />
        </div>
      </div>
    </header>
  );
}
