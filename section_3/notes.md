# Section 3

## How the web works.
Client goes to a URL, browser reaches out to DNS to ask what is the IP address.
DNS requests the IP address to the server.
Server iteracts with logic, database, validates, etc. Sends response back to the user.

The response could be a bunch of different things, when using a broswer we usually think of it as HTML, CSS, and JS. It also contains headers with is meta data.

HTTP - Hyper Text Transfer Protocol, with SSL encrypted turned on.

## First App
- Normally root is called `server.js` or `app.js` becuase it is the single file that is executed.
- We have to import modules most of the time becuase there are so many we don't want global enviornment poluted with everything. Same with JS in the browser.

## Core modules
- `http` - Launch a server and send requests, we can even send a request to another server.
- `https` - Launch a SSL server
- `fs` - 
- `path`
- `os`

## Require
- We normally keep this as the name of the module we are importing by convention.

## Node Program Lifecycle
- Start script
- Parse code, register variables
- Enter event loop with an event listener, the server should stay up and running. All the code happens in this event loop.
- The whole server runs on one thread which could become an issue if we didn't have the event loop. Behind the scenes it does some multi-threading.

## `req` Object
- has `.url`, `.method`, and `.headers`

## Steams and Buffers
- A steam is an incoming request coming in in multiple parts, at some point, it is done and fully parsed.
- But if it was a file, stream might make sense becasuse you want to be able to work with it as half-written.
- We use a buffer like a bus stop. The buses are always moving. We can hold multiple chunks in them.

## Async
- Lots of what is happening depends on event listeners which can happen out of order.
- Node has a lot of async features.
- Node handles event listeners just like the

## Write File (Workers)
- We have async and sync, `.writeFileSync` is executed synchonously and will block until it finishes.
- `.writeFile` is async and will happen in the background.
- If we are interacting with a file, we should do something async becuase generally it takes a longer time.

## Event Loop
- Started by node.js, keeps node JS running and handles all the callbacks.
- A node program ends when there is no more work to do

> Note: I/O Means Input/Output, like disk and network operations.

## We can export in two ways
- `module.exports` which we can use
- Exports should be read-only, consider them locked once they export that you can't edit parts of them.