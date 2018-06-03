# Background.

The simple API built here displays both the MVC pattern of development .i.e:
- The user makes a request along a route, 	let’s say /home.
- The controller receives this request and gives a specific set of orders that are related to that route. These instructions could either be for the view to update or serve a certain page, or for the model to perform specific logic. Let’s assume this request has some logic associated with it.
- The *model* carries out the logic, pulls from a database and sends back a consistent response based on the controller’s instructions.
- The *controller* then passes this data to the view to update the user interface.

Common API standards and best practices:

1. Documentation - explain all the routes and rules of how your API works. Use examples of how to access it in your code base.
2. Stability and Consistency - Use Version numbers to provide a fuller experience to the users of your API i.e any time a response changes, bump up a version .
3. Flexibility - More output and input formats,  case insensitiveness e.t.c
4. Security - Token Based Auth i.e using JWT or Json Web Tokens using Passport JS.
5. Ease of Adoption - KISS.Provide language specific documentation.