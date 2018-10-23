export default function classes(classNames) {
  return classNames.filter(val => !!val).join(" ");
}
