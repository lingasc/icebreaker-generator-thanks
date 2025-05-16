// Main JavaScript for the Icebreaker Generator
document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const resultText = document.getElementById('result-text');
  const copyBtn = document.getElementById('copy-btn');
  const loader = document.querySelector('.loader');
  const langIndicator = document.getElementById('lang-indicator');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const headerTitle = document.querySelector('.header h1');
  const headerSubtitle = document.querySelector('.header p');
  const footerText = document.querySelector('.footer p');
  const copyTooltip = document.querySelector('.share-button .tooltip-text');
  
  // Language buttons
  const enButton = document.getElementById('en-button');
  const frButton = document.getElementById('fr-button');
  const jpButton = document.getElementById('jp-button');
  const keanuButton = document.getElementById('keanu-button');
  
  // Current state
  let currentLanguage = 'en';
  let currentText = '';
  let darkMode = localStorage.getItem('darkMode') === 'true';
  
  // Initialize
  initTheme();
  
  // Event listeners
  enButton.addEventListener('click', () => generateIcebreaker('en'));
  frButton.addEventListener('click', () => generateIcebreaker('fr'));
  jpButton.addEventListener('click', () => generateIcebreaker('jp'));
  keanuButton.addEventListener('click', () => generateIcebreaker('keanu'));
  darkModeToggle.addEventListener('click', toggleDarkMode);
  
  // Color options for mug customizer
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      const color = option.getAttribute('data-color');
      setMugColor(color);
      
      // Update active state
      colorOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      
      // Save preference
      localStorage.setItem('mugColor', color);
    });
  });
  
  // Load saved mug color if available
  const savedMugColor = localStorage.getItem('mugColor');
  if (savedMugColor) {
    setMugColor(savedMugColor);
    document.querySelector(`.color-option[data-color="${savedMugColor}"]`).classList.add('active');
  }
  
  // Functions
  function showLoading() {
    loader.style.display = 'flex';
  }
  
  function hideLoading() {
    loader.style.display = 'none';
  }
  
  function updateResult(text, language) {
    resultText.textContent = text;
    resultText.classList.add('fade-in');
    currentText = text;
    currentLanguage = language;
    
    // Update language-specific styling
    if (language === 'jp') {
      resultText.classList.add('jp-text');
    } else {
      resultText.classList.remove('jp-text');
    }
    
    // Update clipboard button class
    copyBtn.className = 'share-button lang-' + language;
    
    setTimeout(() => {
      resultText.classList.remove('fade-in');
    }, 500);
  }
  
  function resetClipboardButton() {
    copyBtn.innerHTML = '<i class="fas fa-clipboard"></i><span class="tooltip-text">' + 
                        languageSettings[currentLanguage].copyBtn + '</span>';
  }
  
  function showCopiedState() {
    copyBtn.innerHTML = '<i class="fas fa-check"></i><span class="tooltip-text">' + 
                        languageSettings[currentLanguage].copied + '</span>';
    copyBtn.classList.add('copy-success');
    
    setTimeout(() => {
      resetClipboardButton();
      copyBtn.classList.remove('copy-success');
    }, 2000);
  }
  
  function generateIcebreaker(language) {
    showLoading();
    
    // Simulate a brief loading time
    setTimeout(() => {
      const icebreakers = icebreakerData[language];
      const randomIndex = Math.floor(Math.random() * icebreakers.length);
      const icebreaker = icebreakers[randomIndex];
      
      updateResult(icebreaker, language);
      updateUILanguage(language);
      hideLoading();
    }, 400);
  }
  
  function updateUILanguage(language) {
    const settings = languageSettings[language];
    
    // Update header
    if (language === 'jp') {
      headerTitle.innerHTML = '<span class="jp-heading">会話術</span>';
    } else if (language === 'fr') {
      headerTitle.innerHTML = '<span>B</span><span>r</span><span>i</span><span>s</span><span>e</span><span>-</span><span>G</span><span>l</span><span>a</span><span>c</span><span>e</span>';
    } else if (language === 'keanu') {
      headerTitle.innerHTML = '<span class="keanu-heading">Keanu Mode</span>';
      headerSubtitle.classList.add('keanu-subheading');
    } else {
      headerTitle.innerHTML = '<span>I</span><span>c</span><span>e</span><span>b</span><span>r</span><span>e</span><span>a</span><span>k</span><span>e</span><span>r</span>';
      headerSubtitle.classList.remove('keanu-subheading');
    }
    
    // Update subtitle and footer
    headerSubtitle.textContent = settings.subtitle;
    footerText.innerHTML = `© 2025 <a href="https://github.com/lingasc" target="_blank" rel="noopener noreferrer">lingasc</a> | ${settings.footer}`;
    
    // Update tooltip text
    copyTooltip.textContent = settings.copyBtn;
  }
  
  // Copy to clipboard functionality
  window.copyToClipboard = function() {
    if (currentText) {
      navigator.clipboard.writeText(currentText).then(() => {
        showCopiedState();
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    }
  };
  
  // Dark mode functionality
  function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    
    // Toggle icon
    if (darkMode) {
      darkModeIcon.classList.remove('fa-sun');
      darkModeIcon.classList.add('fa-moon');
    } else {
      darkModeIcon.classList.remove('fa-moon');
      darkModeIcon.classList.add('fa-sun');
    }
    
    // Save preference
    localStorage.setItem('darkMode', darkMode);
  }
  
  function initTheme() {
    // Apply dark mode if saved
    document.body.classList.toggle('dark-mode', darkMode);
    
    // Set the correct icon
    if (darkMode) {
      darkModeIcon.classList.remove('fa-sun');
      darkModeIcon.classList.add('fa-moon');
    } else {
      darkModeIcon.classList.remove('fa-moon');
      darkModeIcon.classList.add('fa-sun');
    }
  }
  
  // Set mug color
  function setMugColor(color) {
    const coffeeMug = document.querySelector('.coffee-mug');
    
    // Remove all color classes
    coffeeMug.classList.remove('mug-red', 'mug-blue', 'mug-green', 'mug-yellow', 'mug-white');
    
    // Add selected color class
    coffeeMug.classList.add(`mug-${color}`);
  }
});