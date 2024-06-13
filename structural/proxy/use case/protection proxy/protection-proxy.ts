import { Document } from "./document";
import { RealDocument } from "./real-document";

export class ProtectionProxy implements Document {
  private realDocument: RealDocument;

  constructor(private filename: string, private userRole: string) {
    this.realDocument = new RealDocument(this.filename);
  }

  display(): void {
    this.realDocument.display();
  }

  edit(content: string): void {
    if (this.userRole !== "Admin") {
      console.log(
        "Access denied. You do not have permission to edit this document."
      );
      return;
    }
    this.realDocument.edit(content);
  }
}
