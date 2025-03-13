import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";
import { cn } from "@/utils";
import { CSSProperties } from "react";

export interface EmployerProps {
  logo?: string;
  name: string;
  technologiesUsed: Array<{ name: string; color: string }>;
  position: string;
  date: {
    start: Date;
    end?: Date;
  };
  url?: string;
  duration?: { count: number; unit: "year" | "month" | "day" };
}

export function Employer({
  position,
  logo,
  name,
  date: { start, end = new Date() },
  technologiesUsed,
  url,
  duration,
}: EmployerProps) {
  const { t } = useTranslation(["experience"]);

  if (name === "") {
    return null;
  }

  const formatDate = Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format;

  const startDate = formatDate(start).replace(/\./g, "/");

  const endDate =
    end.getTime() === Date.now()
      ? "current"
      : formatDate(end).replace(/\./g, "/");

  const avatarFallback = name
    .replace(/'s /g, " ")
    .replace(/\w+/g, (match) => match[0])
    .replace(/\s/g, "");

  return (
    <div className="flex flex-col text-primary my-4 w-full dark:bg-navigation-background p-2 px-4 rounded-md text-sm sm:text-base focus-within:outline-2 relative border border-gray-800/10  mb-auto hover:bg-neutral-600/5 dark:hover:bg-gray-300/5">
      <h3 className="text-lg font-semibold uppercase mb-1 leading-none">
        <span className="sr-only">Position: </span>
        {position}
      </h3>
      {url && (
        <a
          href={url}
          aria-label={t("urlText", { name })}
          className="before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 z-10 focus:outline-none cursor-pointer"
        ></a>
      )}
      <div className="flex gap-1.5 sm:gap-3 items-center">
        <Avatar className="size-9">
          <AvatarImage src={logo} alt="" />
          <AvatarFallback className="bg-neutral-300 dark:bg-neutral-600">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-accent-foreground">
          <p className="z-20">{name}</p>
          <span className="inline-flex flex-col sm:flex-row whitespace-pre text-dark-gray dark:text-gray">
            <span>
              <time dateTime={start.toISOString()}>{startDate}</time> -{" "}
              <time dateTime={end.toISOString()}>{endDate}</time>{" "}
            </span>
            {duration && (
              <span className="text-dark-gray dark:text-gray text-sm inline-flex items-center">
                <span className="hidden sm:inline-block size-1 rounded-[50%] bg-gray-400 mx-2"></span>
                <span className="sr-only">duration: </span>
                {t(`${duration.unit}`, { count: duration.count })}
              </span>
            )}
          </span>
        </div>
      </div>
      {technologiesUsed.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {technologiesUsed.map(({ name, color }) => (
            <Badge
              key={name}
              className={cn(
                "flex bg-white text-black border border-gray-600/15 items-center p-1 text-xs leading-none before:size-2 before:inline-block before:rounded-[50%] before:bg-[var(--background)]"
              )}
              style={
                {
                  "--background": color,
                } as CSSProperties
              }
            >
              {name}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
