import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import FolderIcon from "@/assets/folder.svg?react";
import HomeIcon from "@/assets/home.svg?react";
import MailIcon from "@/assets/mail.svg?react";
import WrenchIcon from "@/assets/wrench.svg?react";

const navItems = [
  {
    translation: "home",
    Icon: HomeIcon,
  },
  {
    translation: "projects",
    Icon: FolderIcon,
  },
  {
    translation: "tools",
    Icon: WrenchIcon,
  },
  {
    translation: "contact",
    Icon: MailIcon,
  },
];

export function Nav() {
  const { t } = useTranslation(["navigation"]);

  return (
    <NavigationMenu className="bg-navigation-background text-primary rounded-ss-none rounded-se-none xs:top-4 rounded-md md:rounded-2xl p-1 md:p-1.5 fixed top-0 left-1/2 -translate-x-1/2 w-full">
      <NavigationMenuList className="gap-0 md:gap-2 flex-wrap w-full justify-start">
        {navItems.map(({ translation, Icon }, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              className="flex-col whitespace-nowrap items-center p-1.5 hover:underline hover:bg-transparent hover:md:bg-gray-300/5 md:hover:no-underline md:flex-row md:p-2"
              href={`#${t(`${translation}.href`)}`}
            >
              {<Icon aria-hidden className="text-primary" />}
              {t(`${translation}.text`)}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
