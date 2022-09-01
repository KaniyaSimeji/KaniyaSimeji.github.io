import { ReactNode } from "react";

export function H1(props: { children?: ReactNode }) {
	return <h1 className="text-blue-600 text-2xl font-bold">{props.children}</h1>
}
