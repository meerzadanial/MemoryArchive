const loadingIcon = document.getElementById('loading-icon');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    loadingIcon.style.display = 'block';
    // Start loading
    

    setTimeout(() => { 
        loadingIcon.style.display = 'none';

        // redirect to landing page    
       window.location.href = "/landing_page.html";
    }
    , 3000);
});