import { useTranslation } from "react-i18next";
import {
  Technology,
  TechnologyProps,
} from "../technology/technology.component";
import Socketio from "@/assets/logos/socket-io.svg?react";
import Woocommerce from "@/assets/logos/woocommerce.svg?react";
import PHP from "@/assets/logos/php.svg?react";
import Lodash from "@/assets/logos/lodash.svg?react";
import Github from "@/assets/logos/github.svg?react";

const technologies: Array<{
  category: string;
  tools: Array<TechnologyProps>;
}> = [
  {
    category: "Frontend",
    tools: [
      {
        name: "Next.js",
        Logo: "nextjs.svg",
      },
      {
        name: "Javscript",
        Logo: "javascript.png",
        color: "oklch(0.97 0.2 109.57)",
      },
      {
        name: "Typescript",
        Logo: "typescript.svg",
        color: "oklch(0.65 0.19 252.73)",
      },
      {
        name: "React.js",
        Logo: "reactjs.svg",
        color: "oklch(0.91 0.14 194.91)",
      },
      {
        name: "Redux",
        Logo: "redux.svg",
        color: "oklch(0.57 0.27 295.6)",
      },
      {
        name: "HTML",
        Logo: "html.svg",
        color: "oklch(0.69 0.2 41.92)",
      },
      {
        name: "CSS",
        Logo: "css.svg",
        color: "oklch(0.55 0.2 295.3)",
      },
      {
        name: "Styled components",
        Logo: "styled-components.png",
        color: "oklch(0.64 0.22 353.13)",
      },
      {
        name: "Axios",
        Logo: "axios.png",
        color: "oklch(0.69 0.21 307.52)",
      },
      {
        name: "Tailwind CSS",
        Logo: "tailwindcss.svg",
        color: "oklch(0.91 0.15 194.81)",
      },
      {
        name: "Sass",
        Logo: "sass.webp",
        color: "oklch(0.69 0.23 355.08)",
      },
      {
        name: "Bootstrap",
        Logo: "bootstrap.png",
        color: "oklch(0.61 0.3 312.9)",
      },
      {
        name: "jQuery",
        Logo: "jquery.svg",
        color: "oklch(0.56 0.24 261.03)",
      },
    ],
  },
  {
    category: "Backend",
    tools: [
      {
        name: "Node.js",
        Logo: "nodejs.png",
        color: "oklch(0.9 0.22 138.63)",
      },
      {
        name: "PHP",
        Logo: PHP,
        color: "oklch(0.51 0.22 270.34)",
      },
      {
        name: "Nest.js",
        Logo: "nestjs.svg",
        color: "oklch(0.64 0.25 17.85)",
      },
      {
        name: "Express.js",
        Logo: "expressjs.png",
      },
      {
        name: "TypeORM",
        Logo: "typeorm.png",
        color: "oklch(0.63 0.25 29.49)",
      },
      {
        name: "Laravel",
        Logo: "laravel.svg",
        color: "oklch(0.57 0.23 29.11)",
      },
      {
        name: "Prisma",
        Logo: "prisma.svg",
        color: "oklch(0.51 0.27 270.05)",
      },
      {
        name: "MySQL",
        Logo: "mysql.svg",
        color: "oklch(0.71 0.2 46.55)",
      },
      {
        name: "PostgreSQL",
        Logo: "postgresql.png",
        color: "oklch(0.54 0.19 258.85)",
      },
      {
        name: "Passport.js",
        Logo: "passport.svg",
      },
      {
        name: "Pug",
        Logo: "pug.svg",
      },
      {
        name: "Nodemailer",
        Logo: "nodemailer.png",
      },
    ],
  },
  {
    category: "General",
    tools: [
      {
        name: "Rollup.js",
        Logo: "rollup.svg",
        color: "oklch(0.63 0.25 28.48)",
      },
      {
        name: "Webpack",
        Logo: "webpack.svg",
        color: "oklch(0.65 0.19 252.08)",
      },
      {
        name: "Vite",
        Logo: "vite.svg",
        color: "oklch(0.71 0.32 328.32)",
      },
      {
        name: "Eslint",
        Logo: "eslint.svg",
        color: "oklch(0.76 0.13 282.93)",
      },
      {
        name: "Jest",
        Logo: "jest.png",
        color: "oklch(0.63 0.23 18.12)",
      },
      {
        name: "Joi",
        Logo: "joi.png",
        color: "oklch(0.66 0.19 249.51)",
      },
      {
        name: "Testing Library",
        Logo: "testing-library.png",
        color: "oklch(0.63 0.25 28.7)",
      },
      {
        name: "Zod",
        Logo: "zod.svg",
        color: "oklch(0.4 0.19 264.13)",
      },
      {
        name: "Wordpress",
        Logo: "wordpress.svg",
        color: "oklch(0.63 0.2 253.9)",
      },
      {
        name: "Woocommerce",
        Logo: Woocommerce,
        color: "oklch(0.61 0.29 310.64)",
      },
      {
        name: "i18next",
        Logo: "i18n.avif",
        color: "oklch(0.84 0.17 170.68)",
      },
      {
        name: "Socket.io",
        Logo: Socketio,
      },
      {
        name: "Mediasoup",
        Logo: "mediasoup.png",
        color: "oklch(0.82 0.14 214.77)",
      },
      {
        name: "Lodash",
        Logo: Lodash,
      },
      {
        name: "Github",
        Logo: Github,
      },
      {
        name: "Git",
        Logo: "git.svg",
        color: "oklch(0.66 0.23 32.64)",
      },
      {
        name: "RxJS",
        Logo: "rxjs.png",
      },
      {
        name: "Prettier",
        Logo: "prettier.png",
      },
    ],
  },
];

export function Technologies() {
  const { t } = useTranslation(["technologies"]);

  return (
    <section className="flex flex-col gap-y-6 text-primary my-16">
      <header>
        <h2 className="heading font-bold">{t("Technologies")}</h2>
      </header>
      <div className="flex flex-col gap-y-12">
        {technologies.map(({ category, tools }) => (
          <div key={category}>
            <h3 className="text-4xl font-bold my-2">{t(category)}</h3>
            <ul className="grid gap-2 sm:gap-4 grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {tools.map((technology) => (
                <Technology {...technology} key={technology.name} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
