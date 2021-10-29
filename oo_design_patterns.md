# OO Design Patterns

## Creational

### Prototypal Class

Used when objects are created by looking at another instance (reffered to as its prototype), which is cloned to create new objects. Used to avoid subclasses of object creator.

1. Has an abstract base class with a `clone()` method which is called on the prototype. It clones itself.

Solves problems:

- How objects can be created at run time
- Create new objects by copying

### Singleton Class

A class has only one instance and ensure access to the instace through the application.

1. Some people call it an anti-pattern or really dislike the design pattern. It violates the single-responsibility principle becuase they are responsible for instantiating and instance and it's normal tasks.
2. Ensuring a class only has one instance
3. Access a global variable.
4. Can hide constructors of a class.

### Factory Method

1. Offers an interface for creating an instance of a class with its subclasses deciding which class to instantiate.
2. Allows us to crete objects without having to specify the exact class of the object that will be created.
3. Allows us an interface.
4. Does not call a constructor.
5. Allows us to design flexible, resuable object-oriented software.

Solves problems:

- How can an object be created so that subclasses can redefine which class to instatntiate?
- How can a class defer instatiation to a subclass.

### Builder

### Abstract factory
