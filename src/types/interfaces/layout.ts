import type { LayoutsEnum } from "types/enums/layouts";

export interface Layout {
	layout?: LayoutsEnum;
}

export type FCWithLayout<Props = Record<string, any>> = Layout &
	((props: Props) => JSX.Element);
