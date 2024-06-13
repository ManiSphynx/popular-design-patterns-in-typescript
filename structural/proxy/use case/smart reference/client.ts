import { SmartReference } from "./smart-reference";

const resource = new SmartReference();
resource.access(); // Resource accessed 1 times
// Accessing the resource
resource.access(); // Resource accessed 2 times
// Accessing the resource
