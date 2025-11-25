export function classes(classNames: unknown[]) {
  return classNames.filter((val) => typeof val === "string" && !!val).join(" ");
}
