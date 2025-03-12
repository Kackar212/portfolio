import { Contact } from "../contact/contact.component";
import { Projects } from "../projects/projects.component";
import { Technologies } from "../technologies/technologies.component";

export function Main() {
  return (
    <main className="max-w-7xl p-4 md:px-8 lg:px-12 mx-auto flex flex-col w-full">
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}
