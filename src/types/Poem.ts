import { Entry } from "./Entry";

export interface IPoem extends Entry {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
}
