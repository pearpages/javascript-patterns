# Patterns in Typescript

+ Take what varies and "encapsulate" it so won't affect the rest of the code.
+ Program to an interface, not an implementation. Which really means program to a **supertype**.
+ Favor Composition over inheritance.
+ Strive for loosely coupled designs between objects that interact.
+ Classes should be open for extension, but closed for modification.
+ Depend on abstractions. Do not depend on concrete classes.

> **Polymorphism** is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types.

> **Strategy** defines a family of algorithms, encapsulates each one, and makes the interchangeable. Strategy lets the algorithm vary independently from clients that use it.

> **Observer Pattern** defines a one-to-many dependency between objects so that when one object changes state, all of its dependents ara notified and updated automatically.

> **The Decorator Pattern** attaches additional responsabilities to an object dynamically. Decorators provide flexible alternative to subclassing for extending functionality.
> The decorator adds its own behavior either before and/or after delegating to the object it decorates to do the rest of the job.
> New behavior is typically added by doing computation before or after an existing method in the component.

> **SimpleFactory** personally (me) I see the Factory a pattern where we remove all the creational conditionals from everywhere to put them in only one place so we avoid D.R.Y.

> **StaticFaactory** when the factory is a static method we call it that way.

> **FactoryMethodPattern** encapsulates object creation by _letting subclasses decide what objectes create_. Defines an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
> Defines an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to the subclasses.
> For me it's all about the factories forcing them to share a common behavior, but having liberties in how to create the objects and making them return the same supertype.
> Factory Method is very good at Dependeny Inversion.

> **Dependeny Inversion principle** both high-level and low-level modules depending on abstraction.

## Dependency Inversion

+ If you use **new**, you'll be holding a reference to a concrete class. Use factory to get around that!
+ If you derive from a concrete class, you're depending on a concrete class. Derive from an abstraction, like an interface or an abstract class.
+ If you override an implemented method, then your base class wasn't really an abstraction to start with. Those methods implemented in the base class are meant to be shared by all your subclasses.
