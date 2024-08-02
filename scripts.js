document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        contactForm.reset();
        alert('Your message has been sent!');
    });

    const resumeButton = document.getElementById('resumeButton');
    resumeButton.addEventListener('click', () => {
        window.open('path/to/your/resume.pdf', '_blank');
    });

    // Cloud Animation Effect
    const cloudContainer = document.querySelector('.clouds');
    const cloudCount = 20; // Number of clouds to generate

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        const size = Math.random() * 150 + 100; // Random size between 100 and 250
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size}px`;
        cloud.style.backgroundImage = `url(images/cloud${Math.floor(Math.random() * 3) + 1}.png)`;
        cloud.style.top = `${Math.random() * 100}vh`;
        cloud.style.left = `${Math.random() * 100}vw`;
        cloud.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
        cloud.style.animationDuration = `${Math.random() * 20 + 10}s`; // Random animation duration between 10s and 30s

        cloudContainer.appendChild(cloud);
    }

    for (let i = 0; i < cloudCount; i++) {
        createCloud();
    }

    document.addEventListener('mousemove', (event) => {
        const clouds = document.querySelectorAll('.cloud');
        clouds.forEach(cloud => {
            const cloudRect = cloud.getBoundingClientRect();
            const distance = Math.sqrt(
                Math.pow(event.clientX - (cloudRect.left + cloudRect.width / 2), 2) +
                Math.pow(event.clientY - (cloudRect.top + cloudRect.height / 2), 2)
            );
            const maxDistance = 200; // Max distance at which clouds start moving
            if (distance < maxDistance) {
                const moveFactor = (1 - distance / maxDistance) * 30
