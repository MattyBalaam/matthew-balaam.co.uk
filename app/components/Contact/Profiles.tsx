import { Linkatron } from "../Linkatron/Linkatron";
import type { Resume } from "~/schema";

export interface Props {
	profiles: Resume["basics"]["profiles"];
}

const Profiles = ({ profiles }: Props) => (
	<>
		{profiles.map(({ network, url, username }) => (
			<p key={url} className="contact__profile">
				<Linkatron visibleLink={username}>{url}</Linkatron>
			</p>
		))}
	</>
);

export default Profiles;
