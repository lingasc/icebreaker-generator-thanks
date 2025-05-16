// Time-of-day based color transitions and greeting
document.addEventListener('DOMContentLoaded', () => {
  // Get greeting element
  const greeting = document.querySelector('.header p');
  
  // Initialize
  initTimeBasedColors();
  
  // Function to get current time period
  function getCurrentTimePeriod() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 8) {
      return 'dawn';
    } else if (hour >= 8 && hour < 12) {
      return 'morning';
    } else if (hour >= 12 && hour < 17) {
      return 'afternoon';
    } else if (hour >= 17 && hour < 21) {
      return 'evening';
    } else {
      return 'night';
    }
  }
  
  // Update CSS variables based on time of day
  function updateTimeBasedColors(timePeriod) {
    const root = document.documentElement;
    
    // Update body class for specific filters
    document.body.classList.remove('time-dawn', 'time-morning', 'time-afternoon', 'time-evening', 'time-night');
    document.body.classList.add(`time-${timePeriod}`);
    
    // Set variables based on time period
    switch (timePeriod) {
      case 'dawn':
        root.style.setProperty('--time-primary', '#e7b7ff');
        root.style.setProperty('--time-secondary', '#ffb7e5');
        root.style.setProperty('--time-accent', '#ffd8be');
        root.style.setProperty('--time-highlight', '#fff1c5');
        root.style.setProperty('--time-bg-gradient', 'linear-gradient(to bottom, rgba(231, 183, 255, 0.2), rgba(255, 183, 229, 0.15), rgba(255, 216, 190, 0.1))');
        break;
        
      case 'morning':
        root.style.setProperty('--time-primary', '#f47b7b');
        root.style.setProperty('--time-secondary', '#f49e6e');
        root.style.setProperty('--time-accent', '#ffd15c');
        root.style.setProperty('--time-highlight', '#fff27c');
        root.style.setProperty('--time-bg-gradient', 'linear-gradient(to bottom, rgba(244, 123, 123, 0.2), rgba(244, 158, 110, 0.15), rgba(255, 209, 92, 0.1))');
        break;
        
      case 'afternoon':
        root.style.setProperty('--time-primary', '#64b3f4');
        root.style.setProperty('--time-secondary', '#74ccf4');
        root.style.setProperty('--time-accent', '#5eead4');
        root.style.setProperty('--time-highlight', '#98f5e1');
        root.style.setProperty('--time-bg-gradient', 'linear-gradient(to bottom, rgba(100, 179, 244, 0.2), rgba(116, 204, 244, 0.15), rgba(94, 234, 212, 0.1))');
        break;
        
      case 'evening':
        root.style.setProperty('--time-primary', '#ff7e5f');
        root.style.setProperty('--time-secondary', '#feb47b');
        root.style.setProperty('--time-accent', '#ffcf96');
        root.style.setProperty('--time-highlight', '#f2e5bc');
        root.style.setProperty('--time-bg-gradient', 'linear-gradient(to bottom, rgba(255, 126, 95, 0.2), rgba(254, 180, 123, 0.15), rgba(255, 207, 150, 0.1))');
        break;
        
      case 'night':
        root.style.setProperty('--time-primary', '#4b6cb7');
        root.style.setProperty('--time-secondary', '#182848');
        root.style.setProperty('--time-accent', '#7b8aad');
        root.style.setProperty('--time-highlight', '#a9c1f5');
        root.style.setProperty('--time-bg-gradient', 'linear-gradient(to bottom, rgba(75, 108, 183, 0.2), rgba(24, 40, 72, 0.15), rgba(123, 138, 173, 0.1))');
        break;
    }
  }
  
  // Update greeting based on time of day
  function updateTimeOfDaySubtitle(timePeriod) {
    let timeGreeting = '';
    
    switch (timePeriod) {
      case 'dawn':
        timeGreeting = 'Good morning!';
        break;
      case 'morning':
        timeGreeting = 'Good morning!';
        break;
      case 'afternoon':
        timeGreeting = 'Good afternoon!';
        break;
      case 'evening':
        timeGreeting = 'Good evening!';
        break;
      case 'night':
        timeGreeting = 'Good evening!';
        break;
    }
    
    const currentText = greeting.textContent;
    
    // Only update the time-of-day part, preserve the rest of the greeting
    const updatedText = currentText.replace(/^(Good morning!|Good afternoon!|Good evening!|Good night!)/, timeGreeting);
    greeting.textContent = updatedText;
  }
  
  // Initialize time-based features
  function initTimeBasedColors() {
    const timePeriod = getCurrentTimePeriod();
    updateTimeBasedColors(timePeriod);
    updateTimeOfDaySubtitle(timePeriod);
    
    // Update colors every hour
    setInterval(() => {
      const newTimePeriod = getCurrentTimePeriod();
      updateTimeBasedColors(newTimePeriod);
      updateTimeOfDaySubtitle(newTimePeriod);
    }, 3600000); // 1 hour
  }
});