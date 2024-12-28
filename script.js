function revealSurprise() {
    // Reveal the surprise section
    const surprise = document.querySelector('.surprise');
    surprise.style.display = 'block';

    // Play music
    const audio = new Audio('birthday.mp3');
    audio.play();
}

// Optional: Automatically add more balloons dynamically
window.onload = () => {
    const balloonsContainer = document.querySelector('.balloons');
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.animationDelay = `${i + 1}s`;
        balloonsContainer.appendChild(balloon);
    }
};
