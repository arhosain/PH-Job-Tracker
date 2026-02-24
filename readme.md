1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects one element only with id.
getElementsByClassName selects all elements with the same class name and it returns a live HTMLCollection.
querySelector selects only the first matching element with id, class name, tag name, attributes and it is very flexible.
querySelectorAll selects all the matching elements with class, id, tag and others and it returns a static NodeList.

2. How do you create and insert a new element into the DOM?

We can create and insert a new element into the DOM with three steps.
Step 1: Create a new HTML element using document.createElement().
Step 2: Inside the element add content or attributes. We can use innerText, innerHTML or add classes with classList.
Step 3: Insert it into the DOM with appendChild() or append().

3. What is Event Bubbling? And how does it work?

Event Bubbling in the DOM means the event always goes upward. For example, when it is clicked on the target element, it first runs on that element, then goes to the parent and continuously propagates upward through its parent elements until it reaches the root (document).

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where we add a single addEventListener to a parent instead of using multiple addEventListener on child elements.
It works because of Event Bubbling; when the target is clicked, the event comes to the parent element.

It is useful because it improves performance, reduces memory usage, and also works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

A. preventDefault() stops the browser’s default behavior for an event. For example, it stops form submitting and stops a link from opening another page.
So preventDefault() stops the default action of the browser.

Example:
form.addEventListener("submit", function(event) {
event.preventDefault();
});

It stops the page from reloading.

B. stopPropagation() stops the event from bubbling in the DOM.
It stops the event from reaching the parent element.

Example:
child.addEventListener("click", function(event) {
event.stopPropagation();
});

Now it will not trigger the parent element.