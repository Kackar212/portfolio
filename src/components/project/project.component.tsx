import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";
import GithubIcon from "@/assets/github.svg?react";
import ArrowIcon from "@/assets/arrow.svg?react";

export interface ProjectProps {
  name: string;
  url: string;
  backendUrl?: string;
  liveUrl?: string;
  image?: string;
  technologiesUsed: string[];
  isWorkInProgress?: boolean;
  hasRepository?: boolean;
}

export function Project({
  name,
  url,
  backendUrl,
  liveUrl,
  image,
  technologiesUsed,
  isWorkInProgress,
  hasRepository,
}: ProjectProps) {
  const { t } = useTranslation(["projects", "translation"]);

  const features = t(`${name}.features`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  return (
    <section className="flex flex-col-reverse dark:text-gray-400 text-neutral-800 text-lg items-start shadow-[0_0_6px_2px_var(--tw-shadow-color)] shadow-primary/8 max-w-xl rounded-md overflow-hidden">
      <div className="flex flex-col grow p-4">
        <header className="mb-4">
          <h3 className="text-4xl text-primary font-bold whitespace-pre-line leading-7">
            <span className="sr-only">{t("Project name")}: </span>
            <span className="leading-none">{name}</span>
            {" \n"}
            {isWorkInProgress && (
              <span className="text-primary font-medium text-base -mt-2 ">
                ({t("Work in progress")})
              </span>
            )}
          </h3>
        </header>
        <p className="max-w-lg">{t(`${name}.description`)}</p>
        {features.length > 0 && (
          <div className="mt-4">
            <h4 className="text-2xl text-primary font-bold">{t("Features")}</h4>
            <p className="text-primary">{t("Users can")}:</p>
            <ul className="list-decimal pl-8">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="my-4">
          <h4 className="text-2xl text-primary font-bold">
            {t("Technologies used")}
          </h4>
          <ul className="flex flex-wrap gap-1">
            {technologiesUsed.map((technology, index) => (
              <li key={index}>
                <Badge variant="secondary">{technology}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="uppercase flex flex-col text-base mt-3 font-bold text-primary">
          <a
            href={url}
            className="flex items-center w-fit border border-orange leading-tight p-2.5 py-1.5 gap-1.5 transition-colors my-1 hover:bg-orange hover:text-neutral-900 rounded-sm"
          >
            {hasRepository && <GithubIcon />}
            {t(hasRepository ? "Go to repository" : "Go to project")}
            {!hasRepository && <ArrowIcon />}
          </a>
          {backendUrl && (
            <a
              href={backendUrl}
              className="flex items-center w-fit border border-orange leading-tight p-2.5 py-1.5 gap-1.5 transition-colors my-1 hover:bg-orange hover:text-neutral-900 rounded-sm"
            >
              <GithubIcon />
              {t("Go to backend repository")}
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className="flex items-center w-fit border border-orange leading-tight p-2.5 py-1.5 gap-1.5 transition-colors my-1 hover:bg-orange hover:text-neutral-900 rounded-sm"
            >
              {t("Go to project")}
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
      {image && (
        <img
          src={image}
          alt=""
          className="w-full object-cover h-48 min-[480px]:h-96"
        />
      )}
    </section>
  );
}
