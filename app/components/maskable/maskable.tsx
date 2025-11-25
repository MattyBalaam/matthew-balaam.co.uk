import { Children, type ReactNode } from "react";
import { useSearchParams } from "react-router";

export function Maskable({ children }: { children: ReactNode }) {
  const [searchParams] = useSearchParams();

  const mask = searchParams.get("mask") === "true";

  if (!mask) return children;

  if (typeof children === "string") {
    return children.replace(/[A-Za-z0-9]/g, "_");
  }

  return Children.count(children) > 1
    ? Children.map(children, (child) => {
        return <Maskable>{child}</Maskable>;
      })
    : children;
}
