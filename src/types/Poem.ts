import { IEntry } from "./Entry";

export interface IPoem extends IEntry {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
}
