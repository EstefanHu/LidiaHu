import { IEntry } from "./Entry";
import { IVerse } from "./Verse";

export interface IStory extends IEntry {
  id: string;
  title: string;
  body: string;
  category: string;
  verse?: IVerse;
  createdAt: string;
}
