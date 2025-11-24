import { Paragraph, Paragraphs } from "~/components/typography/typography";
import { UnderConstruction } from "~/components/under-construction/under-construction";
import { href, Link, type MetaDescriptor } from "react-router";

import type { Route } from "./+types/music";
import * as styles from "./music.css";

export function meta() {
  return [{ title: "Matthew Balaam - Music" }] satisfies Array<MetaDescriptor>;
}

// Placeholder until a time a DB or CMS is used
const posts = [
  {
    title: "Warm up set at Renae Manchester",
    url: "https://plyr.fm/track/70",
    description:
      "I played 5-8pm on Saturday 9th of November 2025, here is the recording",
  },
  {
    title: "Special Treatment on Slack City Radio",
    url: "https://www.totallyradio.com/shows/special-treatment",
    description:
      "Special Treatment radio show every 4 weeks on www.slackcityradio.com",
  },
  {
    title: "The Flex - italo euro party",
    url: "https://www.instagram.com/theflexdisko/",
    description: "The Flex Disko Instagram - updates and more",
  },
  {
    title: "inter~mission on 1BTN radio",
    url: "https://soundcloud.com/glocknspiel/reposts",
    description: "inter~mission shows on www.1btn.fm",
  },
];

export function loader() {
  return {
    posts,
  };
}

export default function Music({ loaderData: { posts } }: Route.ComponentProps) {
  return (
    <div className={styles.layout}>
      <h1>DJing and music</h1>

      <Paragraph>This is the music page for Matthew Balaam</Paragraph>

      <UnderConstruction />

      <ul className={styles.posts}>
        {posts.map((item) => (
          <li key={item.url} className={styles.post}>
            <h2>{item.title}</h2>
            <Paragraphs>{item.description} </Paragraphs>
            <a className={styles.listenMatey} href={item.url}>
              Visit site
            </a>
          </li>
        ))}
      </ul>

      <Link to={href("/")} viewTransition>
        Back home
      </Link>
    </div>
  );
}
