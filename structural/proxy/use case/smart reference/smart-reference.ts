import { Resource } from "./resource";
import { RealResource } from "./real-resource";

export class SmartReference implements Resource {
  private realResource: RealResource;
  private accessCount: number = 0;

  constructor() {
    this.realResource = new RealResource();
  }

  access(): void {
    this.accessCount++;
    console.log(`Resource accessed ${this.accessCount} times`);
    this.realResource.access();
  }
}
