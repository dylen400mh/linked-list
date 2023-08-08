# Linked List Implementation in JavaScript

This repository contains a simple implementation of a linked list in JavaScript. The linked list consists of two main factories:

1. **LinkedList**: Represents the entire linked list.
2. **Node**: Represents individual nodes in the linked list.

## Node Factory

The Node factory contains two properties:

- `value`: Holds the data value of the node.
- `nextNode`: Points to the next node in the list. Initialized as `null` by default.

## LinkedList Factory

The LinkedList factory represents the linked list and provides various functions for manipulation:

- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given index.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the passed-in `value` is in the list, otherwise returns `false`.
- `find(value)`: Returns the index of the node containing `value`, or `null` if not found.
- `toString()`: Represents the LinkedList object as a string in the format: `( value ) -> ( value ) -> ( value ) -> null`
- `insertAt(value, index)`: Inserts a new node with the provided `value` at the given `index`.
- `removeAt(index)`: Removes the node at the given `index`.
