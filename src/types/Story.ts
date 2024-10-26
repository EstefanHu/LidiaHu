import { Entry } from "./Entry";

export interface IStory extends Entry {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
}
