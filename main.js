/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
window.onload = () => {
  const timeouts = [500, 2500, 4500, 6500, 15000];
  setTimeout(() => {
    document.getElementById('node1').innerHTML = 'I used <code>getElementById("node1")</code> to access this.';
    setTimeout(() => {document.getElementsByClassName('node2')[0].innerHTML = 'I used <code>getElementsByClassName("node2")</code> to access this.';}, 500);
    setTimeout(() => {
      let h3 = document.getElementsByTagName('h3');
      for (let i=0; i<h3.length; i++) {
        setTimeout(() => {h3[i].innerHTML = 'I used the <code>getElementsByTagName("h3")</code> method to access all of these';}, i*150);
      };
    }, 1000);
  }, timeouts.shift());
  /*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

  // TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
  // TODO: Append the created node to the parent node using the element.appendChild() method
  // TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
  // TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
  // BONUS: Add a link href to the <a>
  setTimeout(() => {
    let p = document.createElement('p');
    p.innerHTML = 'This node was created using the <code>createElement()</code> method<br>';
    let a = document.createElement('a');
    //a.link = 'https://www.scottseverance.us'; // Instructions are wrong. This doesn't work.
    a.setAttribute('href', 'https://www.scottseverance.us');
    a.innerText = 'My website';
    let parent = document.getElementById('parent');

    setTimeout(() => {parent.appendChild(p);}, 500);
    setTimeout(() => {parent.insertBefore(a, p)}, 1000);
  }, timeouts.shift());
  /*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

  // TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
  // TODO: Remove the "New Child Node"

  setTimeout(() => {
    let child = document.getElementById('N1');
    let new_child = document.createElement('p')
    new_child.style.color = 'red';
    new_child.innerText = 'New Child Node';
    child.parentElement.replaceChild(new_child, child);
    setTimeout(() => {
      new_child.parentElement.removeChild(new_child);
    }, 1000)
  }, timeouts.shift());

  /*----------- Exercise #4: ANIMATIONS ----------- */

  // TODO: Write your JavaScript here to make the red box go from right to left
  // BONUS - Make the red box go all the way around the perimeter of the green box */

  setTimeout(() => {
    function animate() {
      const container = document.getElementById('container');
      const box = document.getElementById('box');
      const label = document.getElementById('container-label');
      const step_size = 1;
      const max_trips = 5;
      const box_width = window.getComputedStyle(box).width.replace(/[^0-9]+/, '') * 1;
      const box_height = window.getComputedStyle(box).height.replace(/[^0-9]+/, '') * 1;
      const container_width = window.getComputedStyle(container).width.replace(/[^0-9]+/, '') * 1;
      const container_height = window.getComputedStyle(container).height.replace(/[^0-9]+/, '') * 1;
      
      let box_top = 0;
      let box_left = 0;
      let direction = 'right';
      let trips = 1;
      
      const timer = setInterval(() => {
        console.debug('tick', direction);
        switch(direction) {
          case 'right':
            if(box_left == 0) {
              label.innerHTML = `Lap ${trips} of ${max_trips}`;
            }
            if(box_left < container_width - box_width) {
              box_left += step_size;
              box.style.left = box_left + 'px';
            } else {
              direction = 'down';
            }
            break;
          case 'down':
            if(box_top < container_height - box_height) {
              box_top += step_size;
              box.style.top = box_top + 'px';
            } else{
              direction = 'left';
            }
            break;
          case 'left':
            if(box_left > 0) {
              box_left -= step_size;
              box.style.left = box_left + 'px';
            } else {
              direction = 'up';
            }
            break;
          case 'up':
            if(box_top > 0) {
              box_top -= step_size;
              box.style.top = box_top + 'px';
            } else {
              trips++;
              if (trips > max_trips) {
                clearInterval(timer);
                label.innerHTML = 'Animation finished!<br>';
                let a = document.createElement('a');
                a.innerHTML = 'Run animation again';
                a.setAttribute('href', 'javascript:');
                a.addEventListener('click', animate);
                label.appendChild(a);
              }
              direction = 'right';
            }
        }
      }, 3);
    }
    animate();
  }, timeouts.shift());
};

  /*----------- Exercise #5: DOM EVENTS --------------*/

  // TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
  // This div should be a 'modal' that covers the main content on the screen
  // BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show() {
  let div = document.createElement('div');
  let inner_div = document.createElement('div');
  let p = document.createElement('p');
  let x = document.createElement('div');
  
  div.id = 'show-modal';
  p.innerHTML = 'Clicking the button triggers the <code>onclick</code> event, which calls the JS function <code>show()</code>, which alerts the user.';
  x.id = 'show-modal-close';
  x.innerHTML = '&times;';
  inner_div.appendChild(p);
  inner_div.appendChild(x);
  div.appendChild(inner_div);
  x.addEventListener('click', () => {
    div.parentNode.removeChild(div);
  });
  document.getElementsByTagName('body')[0].appendChild(div);
}
