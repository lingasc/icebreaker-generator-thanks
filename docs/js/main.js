// Main JavaScript for the Icebreaker Application
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const body = document.body;
    const resultText = document.getElementById('result-text');
    const langIndicator = document.getElementById('lang-indicator');
    const modeIcon = document.getElementById('dark-mode-icon');
    const copyBtn = document.getElementById('copy-btn');
    const loaderElement = document.querySelector('.loader');
    
    // Language buttons
    const enButton = document.getElementById('en-button');
    const frButton = document.getElementById('fr-button');
    const jpButton = document.getElementById('jp-button');
    const keanuButton = document.getElementById('keanu-button');
    
    // Function to show loading state
    function showLoading() {
        if (loaderElement) {
            loaderElement.style.display = 'flex';
        }
        if (resultText) {
            resultText.style.opacity = '0.3';
        }
    }
    
    // Function to hide loading state
    function hideLoading() {
        if (loaderElement) {
            loaderElement.style.display = 'none';
        }
        if (resultText) {
            resultText.style.opacity = '1';
        }
        
        // Ensure language indicator and copy button are visible
        langIndicator.style.display = 'block';
        copyBtn.style.display = 'flex'; // Ensure clipboard button is always visible
    }
    
    // Function to update the result text with animation
    function updateResult(text, language) {
        resultText.textContent = text;
        resultText.classList.remove('fade-in');
        // Trigger reflow
        void resultText.offsetWidth;
        resultText.classList.add('fade-in');
        
        // Remove all language classes from both elements
        langIndicator.classList.remove('lang-en', 'lang-fr', 'lang-jp', 'lang-keanu');
        copyBtn.classList.remove('lang-en', 'lang-fr', 'lang-jp', 'lang-keanu');
        
        // Reset Japanese text class
        resultText.classList.remove('jp-text');
        
        // Update UI language based on selected language
        updateUILanguage(language);
        
        // Language-specific updates
        if (language === 'en') {
            // Update language indicator
            langIndicator.classList.add('lang-en');
            // Use the simpler SVG file for the US flag
            langIndicator.innerHTML = '<img src="img/flags/us-flag-simple.svg" alt="US Flag" style="width:100%;height:100%;object-fit:contain;display:block;margin:0;padding:0;">';
            
            // Update clipboard button
            copyBtn.classList.add('lang-en');
            
            // Update tooltip text to English
            const tooltipText = copyBtn.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.textContent = 'Copy to clipboard';
            }
            
            // Log for debugging
            console.log('Setting English flag:', langIndicator.innerHTML);
        } 
        else if (language === 'fr') {
            // Update language indicator
            langIndicator.classList.add('lang-fr');
            // Create French flag directly with CSS - more reliable than SVG
            langIndicator.innerHTML = '<div style="width:100%;height:100%;display:flex;overflow:hidden;">' +
                '<div style="flex-basis:33.33%;height:100%;background-color:#002395;"></div>' +
                '<div style="flex-basis:33.33%;height:100%;background-color:white;"></div>' +
                '<div style="flex-basis:33.33%;height:100%;background-color:#ED2939;"></div>' +
            '</div>';
            
            // Update clipboard button
            copyBtn.classList.add('lang-fr');
            
            // Update tooltip text to French
            const tooltipText = copyBtn.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.textContent = 'Copier dans le presse-papiers';
            }
            
            // Log for debugging
            console.log('Setting French flag:', langIndicator.innerHTML);
        } 
        else if (language === 'jp') {
            // Update language indicator
            langIndicator.classList.add('lang-jp');
            // Use the simpler SVG file for the Japanese flag
            langIndicator.innerHTML = '<img src="img/flags/jp-flag-simple.svg" alt="Japanese Flag" style="width:100%;height:100%;object-fit:contain;display:block;margin:0;padding:0;">';
            
            // Add Japanese text styling
            resultText.classList.add('jp-text');
            
            // Update clipboard button
            copyBtn.classList.add('lang-jp');
            
            // Update tooltip text to Japanese
            const tooltipText = copyBtn.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.textContent = 'クリップボードにコピー';
            }
            
            // Log for debugging
            console.log('Setting Japanese flag:', langIndicator.innerHTML);
        } 
        else if (language === 'keanu') {
            // Update language indicator
            langIndicator.classList.add('lang-keanu');
            langIndicator.innerHTML = '<img src="img/flags/keanu.png" alt="Keanu Reeves" title="Keanu Mode">';
            
            // Update clipboard button
            copyBtn.classList.add('lang-keanu');
            
            // Update tooltip text to Keanu-themed English
            const tooltipText = copyBtn.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.textContent = 'Copy to clipboard';
            }
        }
    }
    
    // Function to reset clipboard button state
    function resetClipboardButton() {
        const icon = copyBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-clipboard');
        }
        
        const tooltipText = copyBtn.querySelector('.tooltip-text');
        if (tooltipText) {
            // Reset tooltip text based on current language
            if (copyBtn.classList.contains('lang-fr')) {
                tooltipText.textContent = 'Copier dans le presse-papiers';
            } else if (copyBtn.classList.contains('lang-jp')) {
                tooltipText.textContent = 'クリップボードにコピー';
            } else {
                tooltipText.textContent = 'Copy to clipboard';
            }
        }
    }
    
    // Function to show copied state
    function showCopiedState() {
        const icon = copyBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-clipboard');
            icon.classList.add('fa-check');
        }
        
        const tooltipText = copyBtn.querySelector('.tooltip-text');
        if (tooltipText) {
            if (copyBtn.classList.contains('lang-fr')) {
                tooltipText.textContent = 'Copié !';
            } else if (copyBtn.classList.contains('lang-jp')) {
                tooltipText.textContent = 'コピーしました！';
            } else {
                tooltipText.textContent = 'Copied!';
            }
        }
        
        // Reset after 1.5 seconds
        setTimeout(resetClipboardButton, 1500);
    }
    
    // Copy to clipboard functionality
    window.copyToClipboard = function() {
        const text = resultText.textContent;
        
        if (text === 'Click any button above to generate an icebreaker!' || 
            text === 'Oops! Something went wrong. Please try again.') {
            return;
        }
        
        // Create a text area element
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        
        // Select the text
        textArea.select();
        
        try {
            // Execute copy command
            const successful = document.execCommand('copy');
            if (successful) {
                showCopiedState();
            }
        } catch (err) {
            console.error('Copy failed:', err);
            alert('Failed to copy text');
        }
        
        // Remove the text area
        document.body.removeChild(textArea);
    };
    
    // Add hover functionality to clipboard button
    copyBtn.addEventListener('mouseenter', function() {
        const tooltipText = copyBtn.querySelector('.tooltip-text');
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
    });
    
    copyBtn.addEventListener('mouseleave', function() {
        // Only hide tooltip if it's not in "copied" state
        if (copyBtn.querySelector('i').classList.contains('fa-clipboard')) {
            const tooltipText = copyBtn.querySelector('.tooltip-text');
            tooltipText.style.visibility = '';
            tooltipText.style.opacity = '';
        }
    });
    
    // Function to generate icebreakers - replaces the fetch call to the backend
    function generateIcebreaker(language) {
        showLoading();
        
        try {
            let text = '';
            
            // Simulate server response time for a natural feel
            setTimeout(() => {
                if (language === 'en') {
                    // Choose a question type randomly
                    const questionTypes = ['bad', 'good', 'open'];
                    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
                    
                    if (questionType === 'bad') {
                        // Get two random bad options
                        const options = getRandomItems(icebreakersData.en.badOptions, 2);
                        text = `Would you rather ${options[0]}, or ${options[1]}?`;
                    } else if (questionType === 'good') {
                        // Get two random good options
                        const options = getRandomItems(icebreakersData.en.goodOptions, 2);
                        text = `Would you rather ${options[0]}, or ${options[1]}?`;
                    } else {
                        // Get a random open-ended question
                        text = getRandomItem(icebreakersData.en.openEnded);
                    }
                } 
                else if (language === 'fr') {
                    // Choose a question type randomly
                    const questionTypes = ['nulles', 'bonnes', 'ouvertes'];
                    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
                    
                    if (questionType === 'nulles') {
                        // Get two random bad options
                        const options = getRandomItems(icebreakersData.fr.badOptions, 2);
                        text = `Vous préféreriez ${options[0]}, ou ${options[1]}?`;
                    } else if (questionType === 'bonnes') {
                        // Get two random good options
                        const options = getRandomItems(icebreakersData.fr.goodOptions, 2);
                        text = `Vous préféreriez ${options[0]}, ou ${options[1]}?`;
                    } else {
                        // Get a random open-ended question
                        text = getRandomItem(icebreakersData.fr.openEnded);
                    }
                } 
                else if (language === 'jp') {
                    // Choose a question type randomly
                    const questionTypes = ['warui', 'yoi', 'ōpun'];
                    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
                    
                    if (questionType === 'warui') {
                        // Get two random bad options
                        const options = getRandomItems(icebreakersData.jp.badOptions, 2);
                        text = `あなたは ${options[0]} と ${options[1]} のどちらを好みますか？`;
                    } else if (questionType === 'yoi') {
                        // Get two random good options
                        const options = getRandomItems(icebreakersData.jp.goodOptions, 2);
                        text = `あなたは ${options[0]} と ${options[1]} のどちらを好みますか？`;
                    } else {
                        // Get a random open-ended question
                        text = getRandomItem(icebreakersData.jp.openEnded);
                    }
                } 
                else if (language === 'keanu') {
                    // Get a random Keanu fact
                    text = getRandomItem(icebreakersData.keanu);
                }
                
                hideLoading();
                updateResult(text, language);
            }, 300); // Small delay to simulate server response
            
        } catch (error) {
            console.error('Error generating icebreaker:', error);
            hideLoading();
            updateResult('Oops! Something went wrong. Please try again.', language);
        }
    }
    
    // Utility function to get random items from an array
    function getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    // Utility function to get a random item from an array
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    // Event Listeners for buttons
    enButton.addEventListener('click', function() {
        generateIcebreaker('en');
    });
    
    frButton.addEventListener('click', function() {
        generateIcebreaker('fr');
    });
    
    jpButton.addEventListener('click', function() {
        generateIcebreaker('jp');
    });
    
    keanuButton.addEventListener('click', function() {
        generateIcebreaker('keanu');
    });
    
    // Function to update the UI language elements (heading, subheading, footer)
    function updateUILanguage(language) {
        try {
            const heading = document.querySelector('.header h1');
            const subheading = document.querySelector('.header p');
            const footer = document.querySelector('.footer p');
            
            if (!heading || !subheading || !footer) {
                console.warn('Could not find heading, subheading, or footer elements');
                return;
            }
            
            // Remove any special heading classes
            heading.classList.remove('jp-heading', 'keanu-heading');
            // Remove any special subheading classes
            subheading.classList.remove('keanu-subheading');
            
            // Determine current time period - simplify to basic time periods
            const currentHour = new Date().getHours();
            let currentTimePeriod = 'afternoon';
            
            if (currentHour >= 5 && currentHour < 12) {
                currentTimePeriod = 'morning';
            } else if (currentHour >= 12 && currentHour < 17) {
                currentTimePeriod = 'afternoon';
            } else if (currentHour >= 17 || currentHour < 5) {
                currentTimePeriod = 'evening';
            }
            
            let greeting = '';
            
            // Set greeting based on time period and selected language
            switch(currentTimePeriod) {
                case 'morning':
                    greeting = language === 'fr' ? 'Bonjour! ' : 
                               language === 'jp' ? 'おはようございます！ ' : 'Good morning! ';
                    break;
                case 'afternoon':
                    greeting = language === 'fr' ? 'Bon après-midi! ' : 
                               language === 'jp' ? 'こんにちは！ ' : 'Good afternoon! ';
                    break;
                case 'evening':
                    greeting = language === 'fr' ? 'Bonsoir! ' : 
                               language === 'jp' ? 'こんばんは！ ' : 'Good evening! ';
                    break;
                default:
                    greeting = language === 'fr' ? 'Bonjour! ' : 
                               language === 'jp' ? 'こんにちは！ ' : 'Good day! ';
            }
            
            if (language === 'fr') {
                // For French, change the heading letter by letter
                heading.innerHTML = '<span>B</span><span>r</span><span>i</span><span>s</span><span>e</span><span>-</span><span>g</span><span>l</span><span>a</span><span>c</span><span>e</span>';
                // Update subheading
                subheading.textContent = greeting + 'Commencez une conversation avec un brise-glace.';
                // Update footer
                footer.innerHTML = '© 2025 <a href="https://github.com/lingasc" target="_blank" rel="noopener noreferrer">lingasc</a> | Commencez votre journée avec des conversations brillantes';
            } 
            else if (language === 'jp') {
                // For Japanese, use a more compact title that won't expand the window width
                heading.innerHTML = '<span>会</span><span>話</span><span>術</span>';
                // Add special JP class to make heading font smaller
                heading.classList.add('jp-heading');
                // Update subheading with Japanese text
                subheading.textContent = greeting + 'アイスブレイカーで会話を始めましょう。';
                // Update footer with Japanese text
                footer.innerHTML = '© 2025 <a href="https://github.com/lingasc" target="_blank" rel="noopener noreferrer">lingasc</a> | 明るい会話で一日を始めましょう';
            } 
            else if (language === 'keanu') {
                // For Keanu mode, add a special class to control width
                heading.innerHTML = '<span>K</span><span>e</span><span>a</span><span>n</span><span>u</span><span> </span><span>M</span><span>o</span><span>d</span><span>e</span>';
                // Use a special class to avoid window size changes
                heading.classList.add('keanu-heading');
                // Update subheading and add a special class for it
                subheading.textContent = greeting + 'Learn something amazing about Keanu Reeves.';
                subheading.classList.add('keanu-subheading');
                // Update footer
                footer.innerHTML = '© 2025 <a href="https://github.com/lingasc" target="_blank" rel="noopener noreferrer">lingasc</a> | Keanu Reeves is gives up his seat to people on the subway!';
            }
            else {
                // Default to English
                heading.innerHTML = '<span>I</span><span>c</span><span>e</span><span>b</span><span>r</span><span>e</span><span>a</span><span>k</span><span>e</span><span>r</span>';
                // Update subheading
                subheading.textContent = greeting + 'Start a conversation with an icebreaker.';
                // Update footer
                footer.innerHTML = '© 2025 <a href="https://github.com/lingasc" target="_blank" rel="noopener noreferrer">lingasc</a> | Start your day with bright conversations';
            }
        } catch (error) {
            console.error('Error updating UI language:', error);
        }
    }
    
    // Initialize with a welcome message
    updateResult('Click any button above to generate an icebreaker!', 'en');
    
    // Add event listener for dark mode toggle button
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
    
    // Dark mode toggle functionality
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            // When switching TO dark mode, change icon to moon
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'enabled');
            
            // When switching to dark mode, preserve the current time class but override its styles
            const currentTimeClass = Array.from(body.classList).find(cls => cls.startsWith('time-'));
            if (!currentTimeClass) {
                // If no time class is present (edge case), default to morning
                body.classList.add('time-morning');
            }
        } else {
            // When switching FROM dark mode, change icon to sun
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'disabled');
            
            // When switching back to light mode, trigger the time-based color update
            if (typeof window.updateTimeBasedColors === 'function') {
                window.updateTimeBasedColors();
            } else {
                console.log("Time-based color function not available yet");
                // If the time-of-day.js hasn't loaded yet, we'll try again shortly
                setTimeout(function() {
                    if (typeof window.updateTimeBasedColors === 'function') {
                        window.updateTimeBasedColors();
                    }
                }, 500);
            }
        }
    }
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
    
    // For mug customizer
    const mugButtons = document.querySelectorAll('.mug-customizer .color-option');
    mugButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mugColor = this.getAttribute('data-color');
            const mug = document.querySelector('.coffee-mug');
            
            // Remove all color classes
            mug.classList.remove('mug-red', 'mug-blue', 'mug-green', 'mug-yellow', 'mug-white');
            
            // Add the selected color class
            mug.classList.add(`mug-${mugColor}`);
            
            // Update active state
            mugButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
