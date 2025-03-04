import { useTranslation } from "react-i18next";
import { ScrollArea } from "../ui/scroll-area";
import { Employer, EmployerProps } from "./employer.component";

const employers: Array<EmployerProps> = [] as const;

export function Experience() {
  const { t } = useTranslation(["experience"]);

  return (
    <section className="mt-12">
      <h2 className="heading font-bold mb-2 text-left whitespace-pre-line">
        {t("heading")}
      </h2>
      <ScrollArea className="w-full h-96 rounded-xs border border-gray-800/10 dark:border-neutral-200/15 [&>div>div]:h-full">
        <div className="overflow-hidden px-4 pr-7 text-blue shadow-sm h-full">
          {employers.length === 0 && (
            <div className="flex h-full items-center justify-center text-lg mt-1 text-gray max-w-80 m-auto">
              {t("noExperience")} :)
            </div>
          )}
          {employers.map((employer, index) => (
            <Employer {...employer} key={index} />
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}
