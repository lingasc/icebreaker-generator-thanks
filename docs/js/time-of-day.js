// Time-based color transitions and effects
document.addEventListener('DOMContentLoaded', function() {
    /**
     * Determines the current time of day
     * @returns {string} - The current time period (dawn, morning, afternoon, evening, or night)
     */
    function getCurrentTimePeriod() {
        const hour = new Date().getHours();
        
        if (hour >= 5 && hour < 8) {
            return 'dawn';
        } else if (hour >= 8 && hour < 12) {
            return 'morning';
        } else if (hour >= 12 && hour < 17) {
            return 'afternoon';
        } else if (hour >= 17 && hour < 20) {
            return 'evening';
        } else {
            return 'night';
        }
    }
    
    /**
     * Updates CSS variables based on the current time of day
     * Make this globally accessible for dark mode toggle
     */
    window.updateTimeBasedColors = function() {
        const body = document.body;
        const timePeriod = getCurrentTimePeriod();
        
        // Remove all time-based classes
        body.classList.remove('time-dawn', 'time-morning', 'time-afternoon', 'time-evening', 'time-night');
        
        // Add the appropriate class
        body.classList.add(`time-${timePeriod}`);
        
        // Update the :root variables based on time
        switch(timePeriod) {
            case 'dawn':
                document.documentElement.style.setProperty('--time-primary', '#8a6dc9');
                document.documentElement.style.setProperty('--time-secondary', '#c182b5');
                document.documentElement.style.setProperty('--time-accent', '#ffcce6');
                document.documentElement.style.setProperty('--time-highlight', '#ffebf5');
                document.documentElement.style.setProperty('--time-bg-gradient', 
                    'linear-gradient(to bottom, rgba(138, 109, 201, 0.2), rgba(193, 130, 181, 0.15), rgba(255, 204, 230, 0.1))');
                break;
            case 'morning':
                document.documentElement.style.setProperty('--time-primary', '#f47b7b');
                document.documentElement.style.setProperty('--time-secondary', '#f49e6e');
                document.documentElement.style.setProperty('--time-accent', '#ffd15c');
                document.documentElement.style.setProperty('--time-highlight', '#fff27c');
                document.documentElement.style.setProperty('--time-bg-gradient', 
                    'linear-gradient(to bottom, rgba(244, 123, 123, 0.2), rgba(244, 158, 110, 0.15), rgba(255, 209, 92, 0.1))');
                break;
            case 'afternoon':
                document.documentElement.style.setProperty('--time-primary', '#64b3f4');
                document.documentElement.style.setProperty('--time-secondary', '#6ab7e2');
                document.documentElement.style.setProperty('--time-accent', '#c2e9fb');
                document.documentElement.style.setProperty('--time-highlight', '#f0f9ff');
                document.documentElement.style.setProperty('--time-bg-gradient', 
                    'linear-gradient(to bottom, rgba(100, 179, 244, 0.2), rgba(106, 183, 226, 0.15), rgba(194, 233, 251, 0.1))');
                break;
            case 'evening':
                document.documentElement.style.setProperty('--time-primary', '#f55c41');
                document.documentElement.style.setProperty('--time-secondary', '#f6734b');
                document.documentElement.style.setProperty('--time-accent', '#f5af19');
                document.documentElement.style.setProperty('--time-highlight', '#ffebb8');
                document.documentElement.style.setProperty('--time-bg-gradient', 
                    'linear-gradient(to bottom, rgba(245, 92, 65, 0.2), rgba(246, 115, 75, 0.15), rgba(245, 175, 25, 0.1))');
                break;
            case 'night':
                document.documentElement.style.setProperty('--time-primary', '#2c3e50');
                document.documentElement.style.setProperty('--time-secondary', '#34495e');
                document.documentElement.style.setProperty('--time-accent', '#3498db');
                document.documentElement.style.setProperty('--time-highlight', '#6ab7e2');
                document.documentElement.style.setProperty('--time-bg-gradient', 
                    'linear-gradient(to bottom, rgba(44, 62, 80, 0.2), rgba(52, 73, 94, 0.15), rgba(52, 152, 219, 0.1))');
                break;
        }
        
        // Update the subtitle text
        updateTimeOfDaySubtitle(timePeriod);
    }
    
    /**
     * Updates the subtitle based on time of day
     */
    function updateTimeOfDaySubtitle(timePeriod) {
        // Only update the subtitle if English is selected
        const langIndicator = document.getElementById('lang-indicator');
        if (langIndicator && langIndicator.classList.contains('lang-en')) {
            const subtitle = document.querySelector('.header p');
            if (subtitle) {
                let greeting = '';
                switch(timePeriod) {
                    case 'dawn':
                        greeting = 'Good dawn! ';
                        break;
                    case 'morning':
                        greeting = 'Good morning! ';
                        break;
                    case 'afternoon':
                        greeting = 'Good afternoon! ';
                        break;
                    case 'evening':
                    case 'night':
                        greeting = 'Good evening! ';
                        break;
                    default:
                        greeting = 'Good day! ';
                }
                
                subtitle.textContent = greeting + 'Start a conversation with an icebreaker.';
            }
        }
    }
    
    /**
     * Initializes the time-based color transitions
     */
    function initTimeBasedColors() {
        // Set initial colors
        updateTimeBasedColors();
        
        // Update colors every 5 minutes
        setInterval(updateTimeBasedColors, 5 * 60 * 1000);
    }
    
    // Make getCurrentTimePeriod globally available
    window.getCurrentTimePeriod = getCurrentTimePeriod;
    
    // Initialize
    initTimeBasedColors();
});