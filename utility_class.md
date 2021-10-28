# Utility Class

- Also known as a helper class.
- Only contains static methods
- It is stateless and can not be instantiated
- Constructor is private and usually has a comment saying it can not be invoked.
- Some people use becuse OOP should couple data with behavior, but a utility class is just behavior. All data is passed as an input. I

A utility class is just a namespace for functions. No instances of it can exist and all of its methods are static. This reverses the idea of object-oriented programming.

People argue and say that static methods should be related to the class. For example, we call something `toaster` which is an instance. The toaster should know how to `toaster.insert_bread`, we shouldn't make something called `BreadUtil`.

For example: `Math.rand` gives us a random number from the class `Math`.
