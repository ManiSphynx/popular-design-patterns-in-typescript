import { Image } from "./image";

export class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}
