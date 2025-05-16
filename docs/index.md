---
layout: default
---

<style>
  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
  }
  
  .language-btn {
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    transition: all 0.2s ease;
  }
  
  .btn-en {
    background-color: #f47b7b;
    color: white;
  }
  
  .btn-fr {
    background-color: #4acea3;
    color: white;
  }
  
  .btn-jp {
    background-color: #ffd15c;
    color: #333;
  }
  
  .btn-keanu {
    background-color: #2193b0;
    color: white;
  }
  
  .result-box {
    background-color: #f7f7f7;
    border-radius: 6px;
    padding: 20px;
    margin: 20px 0;
    position: relative;
    min-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #333;
  }
  
  .copy-btn {
    position: absolute;
    bottom: -15px;
    right: 10px;
    width: 36px;
    height: 36px;
    background-color: #159957;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .dark-mode {
    background-color: #2c3e50;
    color: #ecf0f1;
  }
  
  .coffee-mug {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #d32f2f;
    border-radius: 5px 5px 30px 30px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .mug-contents {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background-color: #5d4037;
    border-radius: 0 0 25px 25px;
  }
  
  .mug-handle {
    position: absolute;
    top: 10px;
    right: 0;
    width: 20px;
    height: 30px;
    border: 6px solid #d32f2f;
    border-left: none;
    border-radius: 0 15px 15px 0;
  }
</style>

<h1 id="main-title">Icebreaker</h1>

<p id="subtitle" style="text-align: center; font-size: 20px;">Start a conversation with an icebreaker.</p>

<div class="button-container">
  <button id="en-button" class="language-btn btn-en">English</button>
  <button id="fr-button" class="language-btn btn-fr">Français</button>
  <button id="jp-button" class="language-btn btn-jp">日本語</button>
  <button id="keanu-button" class="language-btn btn-keanu">Keanu Mode</button>
</div>

<div class="result-box">
  <p id="result-text">Click any button above to generate an icebreaker!</p>
  <button id="copy-btn" class="copy-btn" onclick="copyToClipboard()">
    ⎘
  </button>
</div>

<div style="text-align: center; margin-top: 40px; color: #666; font-size: 14px;">
  <p>© 2025 <a href="https://github.com/lingasc" target="_blank">lingasc</a> | <span id="footer-text">Start your day with bright conversations</span></p>
</div>

<div class="coffee-mug">
  <div class="mug-contents"></div>
  <div class="mug-handle"></div>
</div>

<script>
  // Content data
  const data = {
    en: {
      title: "Icebreaker",
      subtitle: "Start a conversation with an icebreaker.",
      footer: "Start your day with bright conversations",
      icebreakers: [
        "If you could have dinner with any historical figure, who would it be and why?",
        "What's the most interesting place you've ever visited?",
        "If you could instantly become an expert in something, what would it be?",
        "What's your favorite book or movie and why does it resonate with you?",
        "If you could live in any fictional world, which would you choose?",
        "What's a skill you'd like to learn or improve?",
        "If you had to teach a class on something, what would you teach?",
        "What's the best advice you've ever received?",
        "If you could solve one world problem, what would it be?",
        "What's something you believed as a child that you later found out wasn't true?"
      ]
    },
    fr: {
      title: "Brise-Glace",
      subtitle: "Commencez une conversation avec un brise-glace.",
      footer: "Commencez votre journée avec des conversations brillantes",
      icebreakers: [
        "Si vous pouviez dîner avec n'importe quelle figure historique, qui choisiriez-vous et pourquoi?",
        "Quel est l'endroit le plus intéressant que vous ayez jamais visité?",
        "Si vous pouviez instantanément devenir expert en quelque chose, que serait-ce?",
        "Quel est votre livre ou film préféré et pourquoi vous touche-t-il?",
        "Si vous pouviez vivre dans n'importe quel monde fictif, lequel choisiriez-vous?",
        "Quelle compétence aimeriez-vous apprendre ou améliorer?",
        "Si vous deviez enseigner une matière, qu'enseigneriez-vous?",
        "Quel est le meilleur conseil que vous ayez jamais reçu?",
        "Si vous pouviez résoudre un problème mondial, lequel serait-ce?",
        "Quelle est une chose que vous croyiez étant enfant et dont vous avez découvert plus tard qu'elle n'était pas vraie?"
      ]
    },
    jp: {
      title: "会話術",
      subtitle: "会話を始めるきっかけに使いましょう。",
      footer: "会話で明るい一日を始めましょう",
      icebreakers: [
        "歴史上の人物と夕食を共にできるとしたら、誰を選びますか？また、その理由は？",
        "今まで訪れた中で最も興味深い場所はどこですか？",
        "一瞬でエキスパートになれるとしたら、何を選びますか？",
        "あなたのお気に入りの本や映画は何ですか？それはなぜあなたの心に響くのですか？",
        "どんなフィクションの世界に住むことができるとしたら、どこを選びますか？",
        "学びたい、または上達したいスキルは何ですか？",
        "何かを教えなければならないとしたら、何を教えますか？",
        "今までに受けた最高のアドバイスは何ですか？",
        "世界の問題を一つ解決できるとしたら、何を選びますか？",
        "子どもの頃に信じていたけれど、後に真実ではないと分かったことは何ですか？"
      ]
    },
    keanu: {
      title: "Keanu Mode",
      subtitle: "Learn something amazing about Keanu Reeves.",
      footer: "Keanu Reeves is breathtaking",
      icebreakers: [
        "Keanu Reeves once helped a stranded stranger by driving her 50 miles out of his way.",
        "Keanu Reeves gave away a significant portion of his Matrix earnings to the special effects team.",
        "Keanu Reeves often takes pay cuts so films can hire other actors they want.",
        "Keanu Reeves secretly funds children's hospitals and doesn't attach his name to the donations.",
        "It's possible that Keanu Reeves accidentally married Winona Ryder.",
        "Keanu Reeves rides the subway regularly and gives up his seat to other passengers.",
        "Keanu Reeves has been playing in a band called Dogstar since the early 1990s.",
        "Keanu Reeves is an avid motorcyclist and co-founded a motorcycle company.",
        "Keanu Reeves is trained in several martial arts including Judo, Jiu-Jitsu, and Wushu.",
        "Keanu Reeves reads a book a day when he's filming."
      ]
    }
  };

  // DOM elements
  const title = document.getElementById('main-title');
  const subtitle = document.getElementById('subtitle');
  const resultText = document.getElementById('result-text');
  const footerText = document.getElementById('footer-text');
  const copyBtn = document.getElementById('copy-btn');
  
  // Current state
  let currentLanguage = 'en';
  let currentText = '';
  
  // Button click handlers
  document.getElementById('en-button').addEventListener('click', () => generateIcebreaker('en'));
  document.getElementById('fr-button').addEventListener('click', () => generateIcebreaker('fr'));
  document.getElementById('jp-button').addEventListener('click', () => generateIcebreaker('jp'));
  document.getElementById('keanu-button').addEventListener('click', () => generateIcebreaker('keanu'));
  
  // Generate icebreaker
  function generateIcebreaker(language) {
    const languageData = data[language];
    const randomIndex = Math.floor(Math.random() * languageData.icebreakers.length);
    const icebreaker = languageData.icebreakers[randomIndex];
    
    title.textContent = languageData.title;
    subtitle.textContent = languageData.subtitle;
    resultText.textContent = icebreaker;
    footerText.textContent = languageData.footer;
    
    currentLanguage = language;
    currentText = icebreaker;
    
    // Update copy button color based on language
    copyBtn.style.backgroundColor = 
      language === 'en' ? '#f47b7b' : 
      language === 'fr' ? '#4acea3' : 
      language === 'jp' ? '#ffd15c' : '#2193b0';
      
    if (language === 'jp') {
      copyBtn.style.color = '#333';
    } else {
      copyBtn.style.color = 'white';
    }
  }
  
  // Copy to clipboard
  function copyToClipboard() {
    if (currentText) {
      navigator.clipboard.writeText(currentText)
        .then(() => {
          copyBtn.textContent = '✓';
          setTimeout(() => {
            copyBtn.textContent = '⎘';
          }, 2000);
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    }
  }
</script>