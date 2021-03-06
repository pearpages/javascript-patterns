# Patterns in Typescript

+ Take what varies and "encapsulate" it so won't affect the rest of the code.
+ Program to an interface, not an implementation. Which really means program to a **supertype**.
+ Favor Composition over inheritance.
+ Strive for loosely coupled designs between objects that interact.
+ Classes should be open for extension, but closed for modification.
+ Depend on abstractions. Do not depend on concrete classes.
+ Principle of _Least Knowledge_ (aka Law of Demeter): talk only to your immediate friends.
  + The object itself
  + Objects passed in as a parameter to the method
  + Any object the method creates or instantiates
  + Do not call methods on objects that were returned from calling other methods

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

> **Abstract Factory** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

> **Dependeny Inversion principle** both high-level and low-level modules depending on abstraction.

> **Singleton** Pattern ensures a class has only one instance, and provides a global point of access to it.

> **The Command Pattern** encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

> **Macro Commands** are a simple extension of Command that allow multiple commands to be invoked. Likewise, Macro Commands can easily support undo().

> **Adapter Pattern** converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
> Adapter
  + Object Adapter
  + Class Adapter (Through multiple inheritance)

> **Facade Pattern** provides a unified interface to a set of interfaces  in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

## Dependency Inversion

+ If you use **new**, you'll be holding a reference to a concrete class. Use factory to get around that!
+ If you derive from a concrete class, you're depending on a concrete class. Derive from an abstraction, like an interface or an abstract class.
+ If you override an implemented method, then your base class wasn't really an abstraction to start with. Those methods implemented in the base class are meant to be shared by all your subclasses.
+ Introduction
+ Objects in Javascript
+ Creational Design Patterns
+ Structural Design Patterns
+ Behavioral Design Patterns

---

[READ MORE](/docs/more.md)