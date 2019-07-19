# Answers

- [ ] Why are forms used so often in web applications and software?

They are one of the best ways for companies to gather data from their users, or to get your users to interact with your software.

- [ ] What advantages are there by using a forms library like Formik?

Formik abstracts away some of the more complex situations we might come across, such as:

Nested form data and/or arrays
Wiring up state
Validation
Error messages

- [ ] What is stateful logic?

Stateful logic is logic that is built into a component. It can be a function that handles a click event or a typing event, or maybe a function that sets toggle state, or even a logic that formats data passed to the component before it gets displayed. 

- [ ] What is a custom hook, and what does it mean to compose hooks together?

Custom Hooks, so-called because you are building the hook yourself, allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. You can build a reusable custom hook for uses as varied as handling controlled inputs, managing event listeners, and watching for key presses.

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.

A common pattern is for a login endpoint to exist, which takes a payload of username and password. If the credentials are known, the server responds with a fresh JWT. From then on, it’s the application’s responsibility to add an Authorization: token header to every request, in order to be allowed access to protected resources that require authentication.

