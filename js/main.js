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

// Game popup functions
function openGame(gameName) {
    const modal = document.getElementById('gameModal');
    const gameContainer = document.getElementById('gameContainer');
    
    // Clear previous content
    gameContainer.innerHTML = '';
    
    // Load game based on type
    let gameHTML = '';
    
    switch(gameName) {
        case 'slots':
            gameHTML = createSlotsGame();
            break;
        case 'poker':
            gameHTML = createPokerGame();
            break;
        case 'roulette':
            gameHTML = createRouletteGame();
            break;
        case 'blackjack':
            gameHTML = createBlackjackGame();
            break;
        case 'bingo':
            gameHTML = createBingoGame();
            break;
        default:
            gameHTML = '<p>Game loading...</p>';
    }
    
    gameContainer.innerHTML = gameHTML;
    modal.style.display = 'block';
    
    // Initialize game after loading
    if (gameName === 'slots') initSlots();
    if (gameName === 'roulette') initRoulette();
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target == modal) {
        closeGame();
    }
}

// ===== GAME CREATORS =====

function createSlotsGame() {
    return `
        <div style="text-align: center; width: 100%;">
            <h2 style="margin-bottom: 2rem;">🎰 Lucky Slots</h2>
            <div style="background: rgba(0,0,0,0.5); padding: 3rem; border-radius: 20px; max-width: 600px; margin: 0 auto;">
                <div id="slotMachine" style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
                    <div class="slot-reel" style="font-size: 5rem; background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; min-width: 100px;">🍒</div>
                    <div class="slot-reel" style="font-size: 5rem; background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; min-width: 100px;">🍋</div>
                    <div class="slot-reel" style="font-size: 5rem; background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; min-width: 100px;">🍊</div>
                </div>
                <div style="margin-bottom: 2rem;">
                    <p style="font-size: 1.5rem; margin-bottom: 1rem;">Credits: <span id="slotCredits">1000</span></p>
                    <p style="font-size: 1.2rem; color: #ffeb3b;" id="slotResult">Pull the lever to spin!</p>
                </div>
                <button onclick="spinSlots()" style="background: linear-gradient(135deg, #ff6b9d, #ff3366); color: white; border: none; padding: 1rem 3rem; border-radius: 25px; font-size: 1.2rem; font-weight: bold; cursor: pointer;">
                    🎰 SPIN (10 credits)
                </button>
            </div>
        </div>
    `;
}

function initSlots() {
    window.slotCredits = 1000;
}

function spinSlots() {
    if (window.slotCredits < 10) {
        document.getElementById('slotResult').textContent = 'Not enough credits!';
        return;
    }
    
    window.slotCredits -= 10;
    document.getElementById('slotCredits').textContent = window.slotCredits;
    document.getElementById('slotResult').textContent = 'Spinning...';
    
    const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '💎', '7️⃣'];
    const reels = document.querySelectorAll('.slot-reel');
    
    // Animate spinning
    let spins = 0;
    const spinInterval = setInterval(() => {
        reels.forEach(reel => {
            reel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        });
        spins++;
        if (spins > 20) {
            clearInterval(spinInterval);
            checkSlotsWin(reels);
        }
    }, 100);
}

function checkSlotsWin(reels) {
    const results = Array.from(reels).map(reel => reel.textContent);
    const resultText = document.getElementById('slotResult');
    
    if (results[0] === results[1] && results[1] === results[2]) {
        const winAmount = results[0] === '💎' ? 500 : results[0] === '7️⃣' ? 300 : 100;
        window.slotCredits += winAmount;
        resultText.textContent = `🎉 JACKPOT! You won ${winAmount} credits!`;
    } else if (results[0] === results[1] || results[1] === results[2]) {
        window.slotCredits += 20;
        resultText.textContent = '🎯 Match! You won 20 credits!';
    } else {
        resultText.textContent = 'Try again!';
    }
    
    document.getElementById('slotCredits').textContent = window.slotCredits;
}

function createPokerGame() {
    return `
        <div style="text-align: center; width: 100%;">
            <h2 style="margin-bottom: 2rem;">🃏 Video Poker</h2>
            <div style="background: rgba(0,0,0,0.5); padding: 3rem; border-radius: 20px; max-width: 700px; margin: 0 auto;">
                <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
                    <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🂡</div>
                    <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🂮</div>
                    <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🃁</div>
                    <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🃋</div>
                    <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🂢</div>
                </div>
                <p style="font-size: 1.5rem; margin-bottom: 2rem;">Credits: 1000</p>
                <p style="margin-bottom: 2rem; color: #b8b8d1;">Select cards to hold and draw new ones!</p>
                <button style="background: linear-gradient(135deg, #ff6b9d, #ff3366); color: white; border: none; padding: 1rem 3rem; border-radius: 25px; font-size: 1.2rem; font-weight: bold; cursor: pointer;">
                    🎴 DEAL NEW HAND
                </button>
            </div>
        </div>
    `;
}

function createRouletteGame() {
    return `
        <div style="text-align: center; width: 100%;">
            <h2 style="margin-bottom: 2rem;">🎯 Roulette Rush</h2>
            <div style="background: rgba(0,0,0,0.5); padding: 3rem; border-radius: 20px; max-width: 600px; margin: 0 auto;">
                <div id="rouletteWheel" style="width: 300px; height: 300px; border-radius: 50%; background: conic-gradient(#ff0000 0deg 180deg, #000000 180deg 360deg); margin: 0 auto 2rem; display: flex; align-items: center; justify-content: center; border: 10px solid gold; position: relative;">
                    <div style="width: 50px; height: 50px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem;">⚪</div>
                </div>
                <p style="font-size: 1.5rem; margin-bottom: 1rem;">Credits: <span id="rouletteCredits">1000</span></p>
                <p style="font-size: 1.2rem; color: #ffeb3b; margin-bottom: 2rem;" id="rouletteResult">Place your bet!</p>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap;">
                    <button onclick="betRoulette('red')" style="background: #ff0000; color: white; border: none; padding: 1rem 2rem; border-radius: 15px; font-weight: bold; cursor: pointer;">RED</button>
                    <button onclick="betRoulette('black')" style="background: #000000; color: white; border: none; padding: 1rem 2rem; border-radius: 15px; font-weight: bold; cursor: pointer;">BLACK</button>
                </div>
                <p style="font-size: 0.9rem; color: #b8b8d1;">Bet: 50 credits</p>
            </div>
        </div>
    `;
}

function initRoulette() {
    window.rouletteCredits = 1000;
}

function betRoulette(color) {
    if (window.rouletteCredits < 50) {
        document.getElementById('rouletteResult').textContent = 'Not enough credits!';
        return;
    }
    
    window.rouletteCredits -= 50;
    document.getElementById('rouletteCredits').textContent = window.rouletteCredits;
    document.getElementById('rouletteResult').textContent = 'Spinning...';
    
    // Simulate spin
    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'red' : 'black';
        if (result === color) {
            window.rouletteCredits += 100;
            document.getElementById('rouletteResult').textContent = `🎉 ${result.toUpperCase()}! You won 100 credits!`;
        } else {
            document.getElementById('rouletteResult').textContent = `${result.toUpperCase()}. Try again!`;
        }
        document.getElementById('rouletteCredits').textContent = window.rouletteCredits;
    }, 2000);
}

function createBlackjackGame() {
    return `
        <div style="text-align: center; width: 100%;">
            <h2 style="margin-bottom: 2rem;">🂡 Blackjack 21</h2>
            <div style="background: rgba(0,0,0,0.5); padding: 3rem; border-radius: 20px; max-width: 700px; margin: 0 auto;">
                <div style="margin-bottom: 3rem;">
                    <h3 style="margin-bottom: 1rem;">Dealer's Hand</h3>
                    <div style="display: flex; justify-content: center; gap: 0.5rem;">
                        <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🂠</div>
                        <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">❓</div>
                    </div>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">Your Hand (Total: 15)</h3>
                    <div style="display: flex; justify-content: center; gap: 0.5rem;">
                        <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🂨</div>
                        <div style="background: white; color: black; padding: 2rem 1rem; border-radius: 10px; font-size: 2rem; min-width: 80px;">🃕</div>
                    </div>
                </div>
                <p style="font-size: 1.5rem; margin-bottom: 2rem;">Credits: 1000</p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button style="background: linear-gradient(135deg, #00d4ff, #0088cc); color: white; border: none; padding: 1rem 2rem; border-radius: 20px; font-weight: bold; cursor: pointer;">HIT</button>
                    <button style="background: linear-gradient(135deg, #ff6b9d, #ff3366); color: white; border: none; padding: 1rem 2rem; border-radius: 20px; font-weight: bold; cursor: pointer;">STAND</button>
                </div>
            </div>
        </div>
    `;
}

function createBingoGame() {
    return `
        <div style="text-align: center; width: 100%;">
            <h2 style="margin-bottom: 2rem;">🎲 Mega Bingo</h2>
            <div style="background: rgba(0,0,0,0.5); padding: 3rem; border-radius: 20px; max-width: 600px; margin: 0 auto;">
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin-bottom: 2rem; max-width: 400px; margin-left: auto; margin-right: auto;">
                    ${Array(25).fill(0).map((_, i) => `
                        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; border: 2px solid rgba(255,107,157,0.3); font-size: 1.5rem; font-weight: bold;">
                            ${i === 12 ? '⭐' : Math.floor(Math.random() * 75) + 1}
                        </div>
                    `).join('')}
                </div>
                <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #ffeb3b;">Next Number: <span style="font-size: 2rem; font-weight: bold;">42</span></p>
                <p style="font-size: 1.5rem; margin-bottom: 2rem;">Credits: 1000</p>
                <button style="background: linear-gradient(135deg, #ff6b9d, #ff3366); color: white; border: none; padding: 1rem 3rem; border-radius: 25px; font-size: 1.2rem; font-weight: bold; cursor: pointer;">
                    🎲 DRAW NUMBER
                </button>
            </div>
        </div>
    `;
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
