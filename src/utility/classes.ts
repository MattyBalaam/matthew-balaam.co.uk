type mightBeClass = string | undefined;

export default function classes(classNames: mightBeClass[]) {
  return classNames.filter((val: mightBeClass) => !!val).join(" ");
}
