// Select the « No » button
const noBtn = document.getElementById(‘no-btn’);

// Add an event listener for mouseover (when the mouse gets close to the button)
noBtn.addEventListener(‘mouseover’, moveButton);

function moveButton() {
    // Generate random positions within the viewport for the button to move to
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    // Apply the new position to the button
    noBtn.style.position = ‘absolute’;
    noBtn.style.left = randomX + ‘px’;
    noBtn.style.top = randomY + ‘px’;
}
