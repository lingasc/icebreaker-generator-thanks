// Current selected language and text for clipboard
let currentLanguage = '';
let currentText = '';

// DOM elements
const resultText = document.getElementById('result-text');
const loading = document.getElementById('loading');
const copyBtn = document.getElementById('copy-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌙';
} else {
    darkModeToggle.textContent = '☀️';
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'disabled');
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);

// Show loading animation
function showLoading() {
    resultText.style.opacity = '0';
    loading.style.display = 'block';
    setTimeout(() => {
        hideLoading();
    }, 600);
}

// Hide loading animation
function hideLoading() {
    loading.style.display = 'none';
    resultText.style.opacity = '1';
}

// Function to get random items without replacement
function getRandomItems(array, count) {
    // Clone the array to avoid modifying the original
    const items = [...array];
    const result = [];
    
    for (let i = 0; i < count; i++) {
        if (items.length === 0) break;
        
        const randomIndex = Math.floor(Math.random() * items.length);
        result.push(items[randomIndex]);
        items.splice(randomIndex, 1);
    }
    
    return result;
}

// English generator
function generateEnglish() {
    showLoading();
    currentLanguage = 'english';
    copyBtn.style.backgroundColor = '#f47b7b';
    
    // Randomly choose the type of icebreaker
    const type = Math.floor(Math.random() * 3);
    
    let icebreaker;
    if (type === 0) {
        // Bad options
        const options = getRandomItems(icebreaker_data.en.bad_options, 2);
        icebreaker = `Would you rather ${options[0]} or ${options[1]}?`;
    } else if (type === 1) {
        // Good options
        const options = getRandomItems(icebreaker_data.en.good_options, 2);
        icebreaker = `Would you rather ${options[0]} or ${options[1]}?`;
    } else {
        // Open ended
        const randomIndex = Math.floor(Math.random() * icebreaker_data.en.open_ended.length);
        icebreaker = icebreaker_data.en.open_ended[randomIndex];
    }
    
    resultText.textContent = icebreaker;
    currentText = icebreaker;
}

// French generator
function generateFrench() {
    showLoading();
    currentLanguage = 'french';
    copyBtn.style.backgroundColor = '#4acea3';
    
    // Randomly choose the type of icebreaker
    const type = Math.floor(Math.random() * 3);
    
    let icebreaker;
    if (type === 0) {
        // Mauvaises préférences
        const options = getRandomItems(icebreaker_data.fr.mauvaises_prefs, 2);
        icebreaker = `Vous préféreriez ${options[0]} ou ${options[1]}?`;
    } else if (type === 1) {
        // Bonnes préférences
        const options = getRandomItems(icebreaker_data.fr.bonnes_prefs, 2);
        icebreaker = `Vous préféreriez ${options[0]} ou ${options[1]}?`;
    } else {
        // Questions ouvertes
        const randomIndex = Math.floor(Math.random() * icebreaker_data.fr.ouvertes.length);
        icebreaker = icebreaker_data.fr.ouvertes[randomIndex];
    }
    
    resultText.textContent = icebreaker;
    currentText = icebreaker;
}

// Japanese generator
function generateJapanese() {
    showLoading();
    currentLanguage = 'japanese';
    copyBtn.style.backgroundColor = '#ffd15c';
    
    // Randomly choose the type of icebreaker
    const type = Math.floor(Math.random() * 3);
    
    let icebreaker;
    if (type === 0) {
        // Bad options - using warui instead of bad_jp
        const options = getRandomItems(icebreaker_data.jp.warui, 2);
        icebreaker = `どちらがいいですか？${options[0]}か、それとも${options[1]}か？`;
    } else if (type === 1) {
        // Good options - using yoi instead of good_jp
        const options = getRandomItems(icebreaker_data.jp.yoi, 2);
        icebreaker = `どちらがいいですか？${options[0]}か、それとも${options[1]}か？`;
    } else {
        // Open ended - using open instead of open_jp
        const randomIndex = Math.floor(Math.random() * icebreaker_data.jp.opun.length);
        icebreaker = icebreaker_data.jp.opun[randomIndex];
    }
    
    resultText.textContent = icebreaker;
    currentText = icebreaker;
}

// Keanu generator
function generateKeanu() {
    showLoading();
    currentLanguage = 'keanu';
    copyBtn.style.backgroundColor = '#2193b0';
    
    // Using keanu.keanu to choose Keanu facts at random
    const randomIndex = Math.floor(Math.random() * icebreaker_data.keanu.keanu.length);
    const fact = icebreaker_data.keanu.keanu[randomIndex];
    
    resultText.textContent = fact;
    currentText = fact;
}

// Copy to clipboard with improved hover text
function copyToClipboard() {
    if (!currentText) return;
    
    navigator.clipboard.writeText(currentText)
        .then(() => {
            // Change button to green checkmark
            const originalColor = copyBtn.style.backgroundColor;
            copyBtn.textContent = '✓';
            copyBtn.style.backgroundColor = '#388e3c'; // Green from the color palette
            
            // Add a custom attribute to change hover text
            copyBtn.setAttribute('data-copied', 'true');
            
            // Add CSS for the "Copied!" hover text
            const style = document.createElement('style');
            style.textContent = `
                .copy-btn[data-copied="true"]:hover:before {
                    content: "Copied!";
                    position: absolute;
                    top: -40px;
                    right: -30px;
                    background-color: #333;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 3px;
                    font-size: 12px;
                    white-space: nowrap;
                }
            `;
            document.head.appendChild(style);
            
            // Reset after 2 seconds
            setTimeout(() => {
                copyBtn.textContent = '⎘';
                copyBtn.style.backgroundColor = originalColor;
                copyBtn.removeAttribute('data-copied');
                document.head.removeChild(style);
            }, 2000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// Coffee mug functions
function changeMugColor() {
    const colors = ['#d32f2f', '#388e3c', '#1976d2', '#ffa000', '#7b1fa2', '#e64a19', '#00897b'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    
    const mug = document.querySelector('.coffee-mug');
    const handle = document.querySelector('.coffee-handle');
    
    mug.style.backgroundColor = randomColor;
    handle.style.borderColor = randomColor;
}

function changeCoffeeType() {
    const coffee = document.querySelector('.coffee-content');
    const currentHeight = coffee.style.height;
    
    if (!currentHeight || currentHeight === '70%') {
        // Change to espresso (shorter)
        coffee.style.backgroundColor = '#3c2415';
        coffee.style.height = '40%';
    } else if (currentHeight === '40%') {
        // Change to latte (lighter color)
        coffee.style.backgroundColor = '#c6a47f';
        coffee.style.height = '70%';
    } else {
        // Back to default coffee
        coffee.style.backgroundColor = '#6f4e37';
        coffee.style.height = '70%';
    }
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Make sure the dark mode toggle has the correct event listener
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Ensure all buttons have their event listeners
    const englishBtn = document.getElementById('english-btn');
    const frenchBtn = document.getElementById('french-btn');
    const japaneseBtn = document.getElementById('japanese-btn');
    const keanuBtn = document.getElementById('keanu-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    if (englishBtn) englishBtn.addEventListener('click', generateEnglish);
    if (frenchBtn) frenchBtn.addEventListener('click', generateFrench);
    if (japaneseBtn) japaneseBtn.addEventListener('click', generateJapanese);
    if (keanuBtn) keanuBtn.addEventListener('click', generateKeanu);
    if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);
    
    // Coffee mug interactions
    const coffeeMug = document.querySelector('.coffee-mug');
    const coffeeContent = document.querySelector('.coffee-content');
    
    if (coffeeMug) coffeeMug.addEventListener('click', changeMugColor);
    if (coffeeContent) coffeeContent.addEventListener('dblclick', changeCoffeeType);
});
