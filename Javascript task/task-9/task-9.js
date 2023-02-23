const paragraph = document.getElementById("keyParagraph");

// Add the keypress event listener to the document
document.addEventListener("keypress", (event) => {
  // Get the pressed key
  const key = event.key;
  document.getElementById("keyParagraph").innerHTML = event.key;
});
