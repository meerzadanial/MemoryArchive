function handleButtonClick(event) {
  // Display the overlay with the loading icon
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex";

  // Simulate a loading delay (e.g., 3 seconds)
  setTimeout(() => {
      overlay.style.display = "none";

      // Redirect to a specific page (modify URLs as needed)
      if (event.target.classList.contains("btn1")) {
          window.location.href = "/about.html";
      } else if (event.target.classList.contains("btn2")) {
          window.location.href = "/poster.html";
      } else if (event.target.classList.contains("btn3")) {
          window.location.href = "/ads.html";
      } else if (event.target.classList.contains("btn4")) {
          window.location.href = "/index.html";
      }
  }, 1500);
}

// Attach the event listener to the buttons
document.querySelectorAll(".button-container button").forEach(button => {
  button.addEventListener("click", handleButtonClick);
});
