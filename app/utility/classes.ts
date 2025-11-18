export function classes(classNames: (string | unknown)[]) {
  return classNames.filter((val) => typeof val === "string" && !!val).join(" ");
}
