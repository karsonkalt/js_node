# Express.js
- Use middleware
- Working with requests and responses elegantly
- Routing
- Returning HTML pages

## Why dependencies
- We don't care about the business logic that is repetitive
- Use a framework for the heavy lifting.

## Middleware
- Allows us to split our code into blocks or pieces before a response is given.
- Travel sequentially by calling `.next()`. If we send a response then we won't move forward.

## `app.use`
- First arg is optional of a path.
- Then as many callbacks as we want
- The routes are matches
- Routing needs to be everything before the default route, because it will match everything.
- Use is a loose equality for path matching
- using `app.get` then it is an exact match

## Routes
- By convention we keep a routes folder

## Nested Routes
- Can take segment out and then pass a path where importing the routes.