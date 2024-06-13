### 🛠️ Adapter Pattern

**What is it?** 🎨
It is a design pattern that allows two classes with incompatible interfaces to work together by making their methods compatible with each other.

**Purpose:** 🎯
It serves to maintain legacy code and to enable the integration of new components without affecting other parts of the system that use the legacy code interface to call methods.

**When to use it?** 🕰️
It should be used when we have classes with incompatible interfaces and we want them to coexist, meaning their call methods should be compatible even if their internal logic is slightly different.

**Benefits:** 🌟
- Allows the extension of a system without affecting other components.
- Facilitates the maintenance and updating of existing components.
- Promotes code reuse and the integration of new functionalities.

**Drawbacks:** ⚠️
- It can introduce a slight overhead due to the need to create an interface that is compatible between both objects.
- Adds an extra level of abstraction, which can increase system complexity.

Explore the Adapter folder to see practical examples and understand how this pattern can be applied! 🔍📂
