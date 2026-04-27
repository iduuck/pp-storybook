import type { HTMLAttributes } from "react";
import { tv } from "../utils/tv";

export type CountryCode = "GER" | "ESP" | "FRA" | "ITA" | "NET" | "GBP";

export interface CountryFlagProps extends HTMLAttributes<HTMLDivElement> {
  country: CountryCode;
}

const countryNames: Record<CountryCode, string> = {
  ESP: "Spain",
  FRA: "France",
  GBP: "United Kingdom",
  GER: "Germany",
  ITA: "Italy",
  NET: "Netherlands",
};

const countryFlagStyles = tv({
  slots: {
    image: "h-full w-full object-cover",
    border:
      "absolute inset-0 inset-ring-black-swap/10 inset-ring-hairline overflow-hidden rounded-[inherit]",
    root: "relative inline-flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-r1",
  },
});

export const CountryFlag = ({
  className,
  country,
  ...props
}: CountryFlagProps) => {
  const { image, border, root } = countryFlagStyles();

  return (
    <div
      className={root({ className })}
      title={countryNames[country]}
      {...props}
    >
      <img
        alt={countryNames[country]}
        className={image()}
        height="16"
        src={`/countries/${country}.png`}
        width="16"
      />
      <span aria-hidden="true" className={border()} />
    </div>
  );
};
