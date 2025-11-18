import { href, unstable_useRoute, useNavigate } from "react-router";
import type { Route } from "./+types/experience-details";

export default function ExperienceDetails({
  params: { experience },
}: Route.ComponentProps) {
  const data = unstable_useRoute("routes/cv/cv")?.loaderData?.work.find(
    (item) => item.name.toLowerCase() === experience.toLowerCase(),
  );

  const navigate = useNavigate();

  if (!data) return null;

  return (
    <dialog
      ref={(node) => {
        node?.showModal();
      }}
      onClose={() => navigate(href("/cv"), { preventScrollReset: true })}
    >
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </dialog>
  );
}
