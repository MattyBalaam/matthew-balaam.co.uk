import type { ComponentProps, ReactNode } from "react";
import Linkify from "linkify-react";

type Props = ComponentProps<typeof Linkify> & {
	children: ReactNode;
	className?: string;
	title?: string;
	to?: string;
	visibleLink?: string;
	external?: boolean;
	securityProps?: {
		target?: string;
		rel?: string;
	};
};

export const Linkatron = ({
	children,
	className,
	visibleLink,
	external = true,
	securityProps = {
		target: external ? "_blank" : undefined,
		rel: external ? "noopener noreferrer" : undefined,
	},
	...props
}: Props) => (
	<Linkify
		// {...securityProps}
		// {...props}
		options={{
			className,
			defaultProtocol: "https",
			format: (val) => {
				return visibleLink ? visibleLink : val;
			},
		}}
	>
		{children}
	</Linkify>
);
