import { UnderConstruction } from "~/components/under-construction/under-construction";
import { href, unstable_useRoute, useNavigate } from "react-router";

import type { Route } from "./+types/experience-details";
import * as styles from "./experience-details.css";

export default function ExperienceDetails({
  params: { experience },
}: Route.ComponentProps) {
  const data = unstable_useRoute("routes/cv/cv")?.loaderData?.work.find(
    (item) => item.name.toLowerCase() === experience.toLowerCase(),
  );

  const navigate = useNavigate();

  if (!data) return null;

  const handleClose = () => {
    void navigate(href("/cv"), { preventScrollReset: true });
  };

  return (
    <dialog
      className={styles.dialog}
      ref={(node) => {
        node?.showModal();
      }}
      onClose={handleClose}
    >
      <UnderConstruction />

      <pre className={styles.pre}>{JSON.stringify(data, undefined, 2)}</pre>
      <form method="dialog">
        <button type="submit">Back to CV</button>
      </form>
    </dialog>
  );
}
