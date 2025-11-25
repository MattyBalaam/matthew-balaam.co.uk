import type { ReactNode } from "react";
import { useSearchParams } from "react-router";

import { Maskable } from "~/components/maskable/maskable";

type LinkProps = {
  className?: string;
  title?: string;
  maskable?: boolean;
} & (
  | {
      children: string;
      href?: never;
    }
  | {
      children: ReactNode;
      href: string;
    }
);

export function Link({
  children,
  className,
  href,
  title,
  maskable,
}: LinkProps) {
  const [searchParams] = useSearchParams();

  const mask = maskable && searchParams.get("mask") === "true";

  if (mask) return <Maskable>{children}</Maskable>;

  return (
    <a className={className} href={href ?? children} title={title}>
      {children}
    </a>
  );
}
