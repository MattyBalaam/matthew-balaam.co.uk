import { href, unstable_useRoute, useNavigate } from "react-router";

import type { Route } from "./+types/experience-details";
import styles from "./experience-details.module.css";

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
      <img
        src="/MoMotorCitySpeedway1656construct.gif"
        alt="This feature is under construction"
      />
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      <form method="dialog">
        <button type="submit">Back to CV</button>
      </form>
    </dialog>
  );
}
