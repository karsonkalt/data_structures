# OO Design Patterns

# Singleton Class

A class has only one instance and ensure access to the instace through the application.

1. Some people call it an anti-pattern or really dislike the design pattern.

## Factory Method

1. Offers an interface for creating an instance of a class with its subclasses deciding which class to instantiate.
2. Allows us to crete objects without having to specify the exact class of the object that will be created.
3. Allows us an interface.
4. Does not call a constructor.
5. Allows us to design flexible, resuable object-oriented software.

Solves Problems:

- How can an object be created so that subclasses can redefine which class to instatntiate?
- How can a class defer instatiation to a subclass.
