import { Trans, useTranslation } from "react-i18next";
import { Badge } from "../ui/badge";

export function AboutMe() {
  const { t } = useTranslation(["aboutMe"]);

  return (
    <section className="flex flex-col grow">
      <h2 className="mb-2 mt-4 md:mt-0">
        <span className="text-sm font-bold text-orange ml-[0.12rem] min-[390px]:ml-1">
          {t("heading")}
        </span>
      </h2>
      <p className="dark:text-gray text-lg leading-[1.4] text-dark-gray whitespace-pre-wrap font-bold">
        <Trans t={t} i18nKey="firstParagraph">
          <span className="text-primary inline-block w-full text-sm text-left relative ml-[0.12rem] min-[390px]:ml-1 top-1 font-medium">
            I am{" "}
          </span>
          <span className="heading">
            front-end{"\n"}
            <span className="text-orange">
              developer<span aria-hidden>*</span>
            </span>
          </span>
          <span className="lowercase text-sm font-bold text-orange ml-1 mb-4 w-full">
            <span aria-hidden>{"\n"}*</span> in the making.
          </span>
        </Trans>
      </p>
      <p className="max-w-[480px] dark:text-gray text-lg leading-[1.4] text-dark-gray whitespace-pre-line mt-4">
        <Trans t={t} i18nKey="secondParagraph">
          I am interested in creating <strong>accessible</strong>,&nbsp;
          <strong>fast</strong>, <strong>functional</strong> and{" "}
          <strong>responsive</strong> web applications. I specialize in&nbsp;
          <Badge variant="secondary" className="text-sm">
            HTML
          </Badge>
          ,&nbsp;
          <Badge variant="secondary" className="text-sm">
            CSS
          </Badge>
          ,&nbsp;
          <Badge variant="secondary" className="text-sm">
            Javascript
          </Badge>
          ,&nbsp;
          <Badge variant="secondary" className="text-sm">
            Typescript
          </Badge>
          ,&nbsp;
          <Badge variant="secondary" className="text-sm">
            React.js
          </Badge>
          ,&nbsp;
          <Badge variant="secondary" className="text-sm">
            Next.js
          </Badge>
          &nbsp;and&nbsp;
          <Badge variant="secondary" className="text-sm">
            Node.js
          </Badge>
          . While I'm always learning, I think I am already proficient enough
          with these technologies to begin my professional journey. I am eager
          to grow further this is why I want to find my first job as a front-end
          developer.
        </Trans>
      </p>
    </section>
  );
}
