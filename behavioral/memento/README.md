### 📝 Memento Pattern

**What is it?** 📝
The Memento pattern allows capturing and storing the internal state of an object without exposing its implementation. Three classes participate in this pattern:
- **Memento:** Responsible for storing the object's state.
- **Originator:** Creates the memento and sets the content to be saved.
- **Caretaker:** Stores a series of states (mementos) and can restore them, undoing changes if necessary.

**Purpose:** 🎯
The Memento pattern is used to save and restore the state of an object at some point in time, facilitating undo and redo functionalities.

**When to use it?** 🕰️
Consider using the Memento pattern when:
- You need to save the state of an object.
- You want to implement undo/redo functionalities.
- You want to maintain a record of historical states.

**Benefits:** 🌟
- **Encapsulation:** Keeps the state of the object secure without exposing internal details.
- **Simplicity:** Facilitates the implementation of undo/redo functions.
- **Flexibility:** Allows restoring the state at any point in time.

**Drawbacks:** ⚠️
- **High memory consumption:** If the object states are large or if there are many states stored, it can consume a lot of memory.
- **Implementation complexity:** Managing multiple states and restorations can add complexity to the code.

Explore the Memento folder to see practical examples and understand how this pattern can be applied! 🔍📂

**Frequency of Use:** Medium

**Reason:**
The frequency of use for the Memento pattern in JavaScript and TypeScript is **medium**. This is due to several factors:

1. **State management:** The Memento pattern is useful for managing the state of objects and implementing undo/redo functionalities, which are common requirements in various applications.
2. **Balancing memory and complexity:** While it provides powerful state management capabilities, it can lead to higher memory consumption and added implementation complexity.
3. **Application scenarios:** It is particularly useful in applications like text editors, where maintaining and restoring the state of the document is crucial.
