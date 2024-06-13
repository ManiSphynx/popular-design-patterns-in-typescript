import { Resource } from "./resource";

export class RealResource implements Resource {
  access(): void {
    console.log("Accessing the resource");
  }
}
