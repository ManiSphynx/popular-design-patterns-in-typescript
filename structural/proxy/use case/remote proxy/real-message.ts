import { Message } from "./message";

export class RealMessage implements Message {
  send(content: string): void {
    console.log(`Sending message: ${content}`);
  }
}
