### 🧩 Command Pattern

**What is it?** 🧩
The Command pattern is a behavioral design pattern that encapsulates a request as an independent object. This object contains all the information necessary to execute an action, such as the object that will perform the action and the parameters for the action. The main components include:

- **Command Interface:** Declares the method for executing a command.
- **Concrete Command:** Implements the command interface and defines the binding between the receiver and the action.
- **Receiver:** The object that performs the actual action when the command is executed.
- **Invoker:** Initiates the execution of the command.
- **Client:** Creates and configures the command objects.

**Purpose:** 🎯
The Command pattern is used to:
- Decouple the object that invokes an operation from the one that performs it.
- Parameterize objects with operations.
- Support undoable operations.
- Facilitate the implementation of queues of requests and logging changes.

**When to use it?** 🕰️
Consider using the Command pattern when:
- You need to parameterize objects according to an action to perform.
- You need to queue, undo, or redo operations.
- You need to support transactions in complex systems.

**Benefits:** 🌟
- **Decoupling:** Separates the invoker of a request from its executor.
- **Flexibility:** New commands can be added without changing existing code.
- **Undo/Redo:** Supports easy implementation of undo and redo functionality.

**Drawbacks:** ⚠️
- **Complexity:** Adds an additional layer of abstraction.
- **Overhead:** Can increase the number of classes and objects in the system.

Explore the Command folder to see practical examples and understand how this pattern can be applied! 🔍📂

**Frequency of Use:** Medium-High

**Reason:**
The frequency of use for the Command pattern in JavaScript and TypeScript is **medium-high**. This is due to several factors:

1. **Decoupling and Flexibility:** The Command pattern is highly effective for decoupling the sender of a request from its receiver, providing flexibility in how actions are executed and managed.
2. **Support for Complex Operations:** It is particularly useful in applications that require complex operations such as undo/redo functionality, queuing, and logging, which are common in many interactive and complex systems.
3. **Moderate Complexity:** While it adds some complexity, the benefits of improved organization and flexibility often justify the use of the pattern, especially in larger or more sophisticated applications.
