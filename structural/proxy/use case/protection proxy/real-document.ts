import { Document } from "./document";

export class RealDocument implements Document {
  constructor(private filename: string) {}

  display(): void {
    console.log(`Displaying document: ${this.filename}`);
  }

  edit(content: string): void {
    console.log(`Editing document: ${this.filename} with content: ${content}`);
  }
}
