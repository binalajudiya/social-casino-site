// FAQ Toggle
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
});

// Smooth scroll to games
function scrollToGames() {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Game URLs
const gameUrls = {
    'rocco': 'https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=roccogallo&lang=en_GB&practice=1&channel=desktop&demo=2',
    'ronin': 'https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=roninshonour&lang=en_GB&practice=1&channel=desktop&demo=2',
    'rotiki': 'https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=rotiki&lang=en_GB&practice=1&channel=desktop&demo=2',
    'masquerade': 'https://asccw.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=masquerade&lang=en_GB&practice=1&channel=desktop&demo=2'
};

// Game popup functions
function openGame(gameName) {
    const modal = document.getElementById('gameModal');
    const gameContainer = document.getElementById('gameContainer');
    
    // Clear previous content
    gameContainer.innerHTML = '';
    
    const gameUrl = gameUrls[gameName];

    if (gameUrl) {
        gameContainer.innerHTML = `<iframe src="${gameUrl}" frameborder="0" style="width: 100%; height: 100%;" allowfullscreen></iframe>`;
    } else {
        gameContainer.innerHTML = '<p>Game not found.</p>';
    }
    
    modal.style.display = 'block';
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    modal.style.display = 'none';
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = ''; // Clear iframe content when closing
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target == modal) {
        closeGame();
    }
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
