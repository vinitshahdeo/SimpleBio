// Initialize variables
var i = 0; // Counter for tracking the current position in the name string
var txt = 'Maameyaa'; // Replace 'Maameyaa' with your own name here
var speed = 160; // Speed of typing animation (in milliseconds)

// Function for typing animation
function typeWriter() {
  if (i < txt.length) {
    // Check if there are still characters to be typed
    // Add the next character to the innerHTML of the element with the ID "name"
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++; 
    setTimeout(typeWriter, speed); 
  }
}

window.onload = typeWriter; // Call the typeWriter function when the window is fully loaded
