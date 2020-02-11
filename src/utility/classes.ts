export default function classes(classNames: (string | undefined)[]) {
  return classNames.filter(val => !!val).join(" ");
}
