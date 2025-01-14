document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".play-button");
    const loadingIcon = document.getElementById("loading-icon");
    const landingPage = document.getElementById("landing-page");
    const playButtonContainer = document.querySelector(".play-button-container");

    playButton.addEventListener("click", () => {
        // Hide the play button container
        playButtonContainer.style.display = "none";

        // Show the loading icon
        loadingIcon.style.display = "flex";

        // Simulate a loading delay
        setTimeout(() => {
            // Hide the loading icon and show the landing page
            loadingIcon.style.display = "none";
            landingPage.style.display = "block";
        }, 3000); // Adjust delay as needed
    });
});
