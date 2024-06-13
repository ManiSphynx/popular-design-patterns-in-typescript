import { RemoteMessageProxy } from "./remote-message-proxy";

const messageProxy = new RemoteMessageProxy();
messageProxy.send("Hello, World!"); // Making a remote call...
// Sending message: Hello, World!
