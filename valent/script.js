// Get the "No" button element
const noButton = document.getElementById('noButton');

// Add event listener for hover
noButton.addEventListener('mouseover', () => {
    // Generate random positions within the viewport
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

    // Move the button to the random position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});