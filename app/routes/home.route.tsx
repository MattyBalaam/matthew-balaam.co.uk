import { type MetaDescriptor } from "react-router";

import { MdxFormatter } from "~/components/mdx/mdx";

import home from "./home.mdx";

export function meta() {
  return [{ title: "Matthew Balaam" }] satisfies Array<MetaDescriptor>;
}

export default function Home() {
  return (
    <article>
      <MdxFormatter md={home} />
    </article>
  );
}
