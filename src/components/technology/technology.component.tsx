import { CSSProperties, FunctionComponent, SVGProps } from "react";

export interface TechnologyProps {
  name: string;
  Logo: string | FunctionComponent<SVGProps<SVGSVGElement>>;
  color?: string;
}

export function Technology({
  name,
  Logo,
  color = "var(--primary)",
}: TechnologyProps) {
  const isLogoComponent = typeof Logo !== "string";

  return (
    <li className="inline-flex items-center p-2 font-medium gap-2.5 dark:bg-[#ffffff0a] text-primary shadow-sm dark:shadow-none rounded-md">
      <span
        className="p-2 rounded-md bg-[var(--color)]/10"
        style={{ "--color": color } as CSSProperties}
      >
        {isLogoComponent && (
          <Logo aria-hidden className="fill-primary size-5" />
        )}
        {!isLogoComponent && (
          <img
            src={`/logos/${Logo}`}
            width={20}
            height={20}
            loading="lazy"
            className="aspect-square"
            alt=""
          />
        )}
      </span>
      <span className="leading-none mt-0.5">{name}</span>
    </li>
  );
}
