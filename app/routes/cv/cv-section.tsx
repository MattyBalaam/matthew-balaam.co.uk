import type { ElementType, ReactNode } from "react";
import * as styles from "./cv-section.css";
import { Grid } from "~/components/grid/grid";
import { FormattedDate } from "~/components/formatted-date/formatted-date";

interface CvSectionHeaderProps {
  children: ReactNode;
  className?: string;
  Component?: ElementType;
}

function CvSectionHeading({
  children,
  className,
  Component = "h2",
}: CvSectionHeaderProps) {
  return (
    <Grid.Child variant="start">
      <Component className={`${styles.header} ${className ? className : ""}`}>
        {children}
      </Component>
    </Grid.Child>
  );
}

interface CvSectionChildProps {
  variant: "profiles" | "main" | "sub" | "info";
  children: ReactNode;
  divider?: boolean;
  Component?: ElementType;
}

const variantConfig = {
  profiles: "start",
  main: "main",
  sub: "sub",
  info: "mainToSub",
} as const;

function CvSectionChild({
  children,
  variant,
  Component,
  divider = true,
}: CvSectionChildProps) {
  return (
    <Grid.Child
      variant={variantConfig[variant]}
      Component={Component}
      divider={divider}
    >
      {children}
    </Grid.Child>
  );
}

interface CvSectionProps {
  children: ReactNode;
  tightBottom?: boolean;
  Component?: ElementType;
}

export function CvSectionDates({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string;
}) {
  return (
    <p>
      <FormattedDate date={startDate} />
      <> – </>
      {endDate ? <FormattedDate date={endDate} /> : <span>Current</span>}
    </p>
  );
}

export function CvSection({
  children,
  Component = "article",
  tightBottom = false,
}: CvSectionProps) {
  return (
    <Grid Component={Component} tightBottom={tightBottom}>
      {children}
    </Grid>
  );
}

CvSection.Heading = CvSectionHeading;
CvSection.Child = CvSectionChild;
CvSection.Dates = CvSectionDates;
