import { type Easing } from "framer-motion";

declare module "framer-motion" {
	type CubicBezierDefinition = [number, number, number, number];

	interface Transition {
		ease?: Easing | Easing[] | CubicBezierDefinition | CubicBezierDefinition[];
	}
}

