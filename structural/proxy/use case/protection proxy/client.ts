import { ProtectionProxy } from "./protection-proxy";

const doc = new ProtectionProxy("secure_doc.txt", "User");
doc.display(); // Displaying document: secure_doc.txt
doc.edit("New content"); // Access denied. You do not have permission to edit this document.

const adminDoc = new ProtectionProxy("secure_doc.txt", "Admin");
adminDoc.display(); // Displaying document: secure_doc.txt
adminDoc.edit("New content"); // Editing document: secure_doc.txt with content: New content
