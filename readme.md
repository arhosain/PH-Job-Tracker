1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementId select one element only with id. 
getElementsByClassName select all elements only with  same class name. 
querySelector select only first element with id, class name and tag name, attributes and it's very flexible
querySelectorAll select all the matching element with class, id , tag and all and it returns static NodeList 


2. How do you create and insert a new element into the DOM?

we can create and insert a new element into DOM with three step. 
step 1: create a new HTML element using document.createElement() 
step 2: inside the element add content or attributes. we can use innerText, innerHTML or add classes with classList. 
step 3: insert it into DOM with appendChild() or append()



3. What is Event Bubbling? And how does it work?

Event Bubbling in DOM, it's always go upward for example it's clicked on target then go to the parent and cautiously propagates upward through its parent element until it's reaches the root. 


4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where we add a single addEventListener to a parent instead of using multiple addEventListener to child element.  
it works because of Event Bubbling; when the target is clicked it comes to the parent element. 


5. What is the difference between preventDefault() and stopPropagation() methods?



A. preventDefault() stops the browser’s default behavior for an event. For example it stops form submitting and stops link to open in other page. 
so preventDefault() stops the default action of the browser. 

Example:
form.addEventListener("submit", function(event) {
  event.preventDefault();
});
it stops the page from reloading; 

B. stopPropagation() it stops the even from bubbling the DOM. 
it's stop the element from reaching the parent. 

Example:
child.addEventListener("click", function(event) {
  event.stopPropagation();
});

now it will not trigger the parent element. 
