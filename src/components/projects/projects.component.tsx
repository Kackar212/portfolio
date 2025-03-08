import { useTranslation } from "react-i18next";
import { Project } from "../project/project.component";
import { projects } from "./projects";
import GithubIcon from "@/assets/github.svg?react";

export function Projects() {
  const { t } = useTranslation(["projects", "navigation"]);

  return (
    <section
      id={t("projects.href", { ns: "navigation" })}
      className="flex flex-col w-full"
    >
      <h2 className="heading font-bold mb-6">{t("Projects")}</h2>
      <div className="grid grid-cols-1 min-[880px]:grid-cols-2 gap-8 gap-y-12 self-center">
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
      <a
        href="https://github.com/KacKar212"
        className="flex items-center w-fit border border-orange leading-tight p-2.5 py-1.5 gap-1.5 transition-colors my-1 text-primary hover:bg-orange hover:text-neutral-900 rounded-sm mt-10 mx-auto max-w-80"
      >
        <GithubIcon />
        {t("See all my projects on github")}
      </a>
    </section>
  );
}
