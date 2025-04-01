export type CellTypes = "code" | "text";
export interface Cell {
  id: string;
  content: CellTypes;
  type: "code" | "text";
}


