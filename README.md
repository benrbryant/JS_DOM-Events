# Exercises

## Exercise #1: SELECTING/MANIPULATING ELEMENTS

1. Select Node #1 using the `getElementById()` method, and change the text to: “I used the `getElementById(“node1”)` method to access this”

2. Select Node #2 using the `getElementsByClassName()` method, and change the text to: "I used the `getElementByClassName("node2")` method to access this"

3. Select ALL the h3 tags using the `getElementsByTagName()` method, and change the text to: "I used the `getElementByTagName("h3")` method to access all of these"

## Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS

1. Create a paragraph element using this `element.createElement()` and put this text inside "This node was created using the `createElement()` method"

2. Append the created node to the parent node using the `element.appendChild()` method (Keep in mind that you’ll need to select the parent node first)

3. Create a `<a>` element using this element.createElement() and put this text inside "I am a `<p>` tag"

4. Insert the created `<a>` in the parent node, but before the `<p>` you just created using the `element.insertBefore()` method

5. Add a link href to the `<a>` by selecting the `anchorElement.link` property

## Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS

1. Replace the "Child Node" with a new `<p>` element that reads "New Child Node" using the `replaceChild()` method.

2. Remove the "New Child Node" using the `remove()` method or `removeChild()` method.
