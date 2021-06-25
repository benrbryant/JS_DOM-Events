/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
window.onload = () => {
  setTimeout(() => {document.getElementById('node1').innerHTML = 'I used <code>getElementById("node1")</code> to access this.';}, 500);
  setTimeout(() => {document.getElementsByClassName('node2')[0].innerHTML = 'I used <code>getElementsByClassName("node2")</code> to access this.';}, 1000);
  setTimeout(() => {
    let h3 = document.getElementsByTagName('h3');
    for (let i=0; i<h3.length; i++) {
      setTimeout(() => {h3[i].innerHTML = 'I used the <code>getElementsByTagName("h3")</code> method to access all of these';}, i*150);
    };
  }, 1500);

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method
// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
// BONUS: Add a link href to the <a>

let p = document.createElement('p');
p.innerHTML = 'This node was created using the <code>createElement()</code> method<br>';
let a = document.createElement('a');
//a.link = 'https://www.scottseverance.us'; // Instructions are wrong. This doesn't work.
a.setAttribute('href', 'https://www.scottseverance.us');
a.innerText = 'My website';
let parent = document.getElementById('parent');

setTimeout(() => {parent.appendChild(p);}, 2000);
setTimeout(() => {parent.insertBefore(a, p)}, 2500);



/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
};
