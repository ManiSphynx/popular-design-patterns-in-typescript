import { Message } from "./message";
import { RealMessage } from "./real-message";

export class RemoteMessageProxy implements Message {
  private realMessage: RealMessage;

  constructor() {
    this.realMessage = new RealMessage();
  }

  send(content: string): void {
    // Simulating a remote call
    console.log("Making a remote call...");
    this.realMessage.send(content);
  }
}
