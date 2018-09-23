# Patterns in Typescript

+ Take what varies and "encapsulate" it so won't affect the rest of the code.
+ Program to an interface, not an implementation. Which really means program to a _supertype_.
+ Favor Composition over inheritance.
+ Strive for loosely coupled designs between objects that interact.
+ Classes should be open for extension, but closed for modification.

> **Polymorphism** is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types.

> **Strategy** defines a family of algorithms, encapsulates each one, and makes the interchangeable. Strategy lets the algorithm vary independently from clients that use it.

> **Observer Pattern** defines a one-to-many dependency between objects so that when one object changes state, all of its dependents ara notified and updated automatically.

> **The Decorator Pattern** attaches additional responsabilities to an object dynamically. Decorators provide flexible alternative to subclassing for extending functionality.
> The decorator adds its own behavior either before and/or after delegating to the object it decorates to do the rest of the job.
> New behavior is typically added by doing computation before or after an existing method in the component.

> **SimpleFactory** personally (me) I see the Factory a pattern where we remove all the creational conditionals from everywhere to put them in only one place so we avoid D.R.Y.
