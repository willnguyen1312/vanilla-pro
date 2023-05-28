export interface TreeNodeType {
  label: string;
  open?: boolean;
  isActive?: boolean;
  children?: TreeNodeType[];
}

export type DataItem = { name: string; items: string[]; removed?: boolean };
export type Data = DataItem[];
