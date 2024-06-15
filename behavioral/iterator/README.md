### 🔄 Iterator Pattern

**What is it?** 📜
The Iterator pattern is a behavioral design pattern that provides a way to iterate over a collection stored in an object in an orderly fashion. It exposes methods like `next`, `hasNext`, and optionally `current`, essentially, it is a pattern that defines an interface for accessing the properties of a collection of information stored in an object in an orderly manner without exposing its internal structure.

**Purpose:** 🎯
The Iterator pattern is used to access information from a list of elements in an orderly manner based on a contract, facilitating the traversal of complex collections without exposing their internal representation.

**When to use it?** 🕰️
Consider using the Iterator pattern when:
- You need to traverse a collection of data without exposing its internal structure.
- You want to provide multiple ways to access a collection.

**Benefits:** 🌟
- **Encapsulation:** Does not expose the internal structure of the collection.
- **Simplicity:** Simplifies the access and traversal of complex collections.
- **Flexibility:** Allows adding custom traversal methods without modifying the underlying collection.

**Drawbacks:** ⚠️
- **Additional overhead:** Can add complexity and potentially overhead in small collections.
- **Incompatibility with certain structures:** May not be suitable for all data structures, especially those that do not require sequential traversal.

Explore the Iterator folder to see practical examples and understand how this pattern can be applied! 🔍📂

**Frequency of Use:** High

**Reason:**
The frequency of use for the Iterator pattern in JavaScript and TypeScript is **high**. This is due to several factors:

1. **Convenience and consistency:** Provides a standard and consistent way to traverse collections, useful in various contexts, especially in web development.
2. **Language compatibility:** JavaScript and TypeScript have native support for iterators and generators, facilitating the implementation and use of this pattern.
3. **Universal applicability:** It is applicable to a wide variety of data structures, from arrays and lists to sets and maps.
