### 🌉 Bridge Pattern

**What is it?** 🌉
The Bridge pattern is a design pattern that promotes the use of good practices and SOLID principles in a system, where composition is preferred over inheritance. Implementations should implement an interface with common methods, and there should be an abstraction that dictates to an intermediary class how its internal method should look. This class receives an instance of the concrete implementation and extends from the abstraction, allowing the implementation to be called in a decoupled manner.

**Purpose:** 🎯
It serves to keep a system decoupled, simple, and easy to extend.

**When to use it?** 🕰️
It should be used when you need to change the implementation of a class without affecting other parts of the system and when working with platforms that may change over time.

**Benefits:** 🌟
- **Flexibility:** Facilitates the extension and modification of the system.
- **Maintenance:** Simplifies maintenance by keeping the code modular.
- **Decoupling:** Allows the abstraction and implementation to evolve independently.
- **Reusability:** Implementations can be reused with different abstractions.

**Drawbacks:** ⚠️
- **Overhead:** Can add an additional layer of complexity.
- **Best for new systems:** More suitable for new or refactored systems.
- **Requires refactoring:** May require refactoring existing systems to implement.
