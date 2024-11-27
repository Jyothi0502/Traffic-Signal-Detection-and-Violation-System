document.addEventListener('DOMContentLoaded', function() {
    // Optional: Add some interactivity to the home page
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        
        box.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });

    // Simple animation for stats
    const statBoxes = document.querySelectorAll('.stat-box .card-text');
    statBoxes.forEach(statBox => {
        const value = parseInt(statBox.textContent);
        animateValue(statBox, 0, value, 2000);
    });
});

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}