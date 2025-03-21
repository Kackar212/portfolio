import { useTranslation } from "react-i18next";
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/card";
import MailIcon from "@/assets/mail.svg?react";
import GithubIcon from "@/assets/github.svg?react";
import CvIcon from "@/assets/cv.svg?react";

export function HeaderCard() {
  const { t } = useTranslation(["headerCard", "translation"]);

  return (
    <Card className="items-center bg-white relative w-full md:max-w-72 lg:max-w-80 p-4 md:p-8 rounded-2xl overflow-hidden h-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="194"
        height="100"
        fill="none"
        className="absolute -top-1 left-0 z-0"
      >
        <path
          d="M 0 34.544 L 3.22 33.201 C 4.186 35.732 5.256 38.221 6.429 40.663 L 3.329 42.293 C 2.113 39.757 1.002 37.172 0 34.544 Z M 7.294 49.71 L 10.246 47.806 C 11.613 50.127 13.073 52.392 14.622 54.596 L 11.828 56.748 C 10.223 54.464 8.711 52.116 7.294 49.71 Z M 16.894 63.37 L 19.509 60.989 C 21.22 63.047 23.012 65.037 24.881 66.953 L 22.454 69.543 C 20.522 67.557 18.667 65.498 16.894 63.369 Z M 28.47 75.232 L 30.69 72.449 C 32.693 74.197 34.764 75.864 36.9 77.447 L 34.895 80.41 C 32.688 78.767 30.544 77.04 28.47 75.232 Z M 41.7 85.029 L 43.471 81.912 C 45.712 83.304 48.011 84.603 50.36 85.804 L 48.836 89.061 C 46.403 87.816 44.022 86.471 41.7 85.029 Z M 56.27 92.473 L 57.53 89.093 C 59.958 90.083 62.428 90.966 64.934 91.737 L 63.955 95.216 C 61.354 94.415 58.79 93.5 56.27 92.473 Z M 71.836 97.256 L 72.519 93.701 C 73.429 93.891 74.342 94.067 75.251 94.225 C 76.906 94.514 78.569 94.754 80.238 94.947 L 79.861 98.552 C 77.167 98.245 74.489 97.813 71.836 97.256 Z M 87.974 99.1 L 88.046 95.474 C 90.656 95.532 93.266 95.474 95.871 95.301 L 96.088 98.921 C 93.387 99.099 90.68 99.159 87.974 99.101 Z M 103.652 94.44 C 106.238 94.042 108.805 93.535 111.348 92.92 L 112.127 96.454 C 109.493 97.088 106.834 97.613 104.157 98.027 L 103.652 94.439 Z M 118.899 90.762 C 121.391 89.934 123.848 89.006 126.265 87.979 L 127.572 91.337 C 125.07 92.402 122.526 93.364 119.946 94.22 Z M 133.4 84.59 C 135.738 83.362 138.023 82.036 140.251 80.618 L 142.053 83.717 C 139.745 85.184 137.379 86.556 134.959 87.829 L 133.4 84.589 Z M 146.773 76.083 C 148.89 74.477 150.937 72.782 152.91 71.002 L 155.175 73.749 C 153.128 75.594 151.004 77.351 148.808 79.016 Z M 158.611 65.4 C 160.436 63.446 162.174 61.412 163.821 59.306 L 166.505 61.601 C 164.795 63.791 162.988 65.904 161.092 67.935 Z M 168.516 52.75 C 170.003 50.493 171.409 48.184 172.731 45.826 L 175.721 47.665 C 174.354 50.096 172.904 52.479 171.372 54.81 Z M 176.507 38.612 C 177.694 36.166 178.817 33.682 179.881 31.164 L 183.049 32.633 C 181.963 35.204 180.81 37.745 179.592 40.256 Z M 182.922 23.537 C 183.887 20.966 184.809 18.379 185.688 15.777 L 188.956 16.991 C 188.056 19.634 187.126 22.262 186.148 24.862 Z M 188.238 7.924 C 189.062 5.288 189.858 2.645 190.641 -0.001 L 193.953 1.073 C 193.168 3.738 192.361 6.396 191.533 9.048 Z"
          fill="rgb(255,122,0)"
        ></path>
      </svg>
      <CardHeader className="z-10 p-0">
        <h1 className="text-black font-bold leading-[1.1] text-3xl min-[448]:text-5xl lg:text-4xl flex flex-col-reverse whitespace-nowrap">
          <span className="[letter-spacing:-0.04em]">Kacper Karpień</span>
          <span className="text-xs font-bold text-dark-gray">
            Front-end {t("translation:developer")}
          </span>
        </h1>
      </CardHeader>
      <CardDescription className="text-lg font-medium text-dark-gray leading-[1.1] max-w-64">
        <p className="mb-2 text-center md:text-left">{t("description")}</p>
        <h2 className="text-xl text-neutral-900 mt-4">{t("Where?")}</h2>
        <p className="text-base font-normal text-neutral-900">
          {t("Cities that interest me are")}:
        </p>
        <ul className="list-disc pl-7 text-base text-neutral-900">
          <li>{t("translation:Cracow")}</li>
          <li>Bochnia</li>
          <li>Tarnów</li>
          <li>{t("Or other city near Brzesko, my home city.")}</li>
        </ul>
      </CardDescription>
      <CardFooter className="relative z-10 p-0">
        <ul className="flex gap-1 text-background">
          <li>
            <a
              href="https://github.com/Kackar212"
              className="hover:bg-gray-400/25 p-1 text-orange w-7 flex rounded-sm"
              target="_blank"
            >
              <GithubIcon aria-hidden className="size-5" />
              <span className="sr-only">{t("github")}</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:kackar212@gmail.com"
              className="hover:bg-gray-400/25 p-1 text-orange w-7 flex rounded-sm"
            >
              <MailIcon aria-hidden className="size-5" />
              <span className="sr-only">{t("mail")}</span>
            </a>
          </li>
          <li>
            <a
              href="/kacper-karpien-cv.pdf"
              className="hover:bg-gray-400/25 p-1 text-orange w-7 flex rounded-sm"
              target="_blank"
            >
              <CvIcon aria-hidden className="size-5" />
              <span className="sr-only">CV</span>
            </a>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
