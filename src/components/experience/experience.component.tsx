import { useTranslation } from "react-i18next";
import { ScrollArea } from "../ui/scroll-area";
import { Employer, EmployerProps } from "./employer.component";

const employers: Array<EmployerProps> = [
  {
    date: {
      start: new Date(2021, 0, 1),
      end: new Date(2023, 0, 1),
    },
    name: "Self-employed",
    position: "Freelancer",
    technologiesUsed: [
      { name: "Javascript", color: "oklch(0.97 0.2 109.57)" },
      { name: "HTML", color: "oklch(0.69 0.2 41.92)" },
      { name: "CSS", color: "oklch(0.55 0.2 295.3)" },
      { name: "Sass", color: "oklch(0.69 0.23 355.08)" },
      { name: "Jquery", color: "oklch(0.56 0.24 261.03)" },
      { name: "Wordpress", color: "oklch(0.63 0.2 253.9)" },
      { name: "Woocommerce", color: "oklch(0.61 0.29 310.64)" },
      { name: "PHP", color: "oklch(0.51 0.22 270.34)" },
      { name: "Bootstrap", color: "oklch(0.61 0.3 312.9)" },
    ],
  },
] as const;

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
