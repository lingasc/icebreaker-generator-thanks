![](https://y.yarn.co/caa9c31d-b640-40d0-8a9a-0cf586412dd8_text.gif)

# [Icebreaker Generator MVP](https://lingasc.github.io/icebreaker-generator-thanks/)   
### Surprise!  
  
To thank you for the past three months, I've taken what I've learned from DSB-210 and written an [icebreaker generator](https://lingasc.github.io/icebreaker-generator-thanks/) capable of generating 5,724 unique, safe-for-work icebreakers, to streamline the task of finding and copying an icebreaker to be pasted into a chat. It's hosted on GitHub Pages and is best viewed on desktop.  

### The Purpose of This Generator:  
This simple, lightweight MVP was built to provide increased convenience for putting icebreakers into online chats. Plus a little fun:  

- French translations for Matt
- Japanese translations for Eric
- Random Keanu Reeves trivia in English, a nod to Argo's Keanu-themed Office Hours  
  
## [~~Bonus Features:~~ For Future Deployment:](https://d902920a-af24-4e86-98e7-61d70dd3511e.spock.prod.repl.run/) Special Website Interactivity!  

Here are features I already built that I had to remove to make this site compatible with GitHub Pages. Once I figure out a cost-free, clean migration and hosting of dynamic webpages, and time, I may launch a dynamic version of the site (see preview [here](https://d902920a-af24-4e86-98e7-61d70dd3511e.spock.prod.repl.run/)), where:
  
- Colors change from sunrise to dusk depending on user's local time of day
- Greetings subheading changes depending on your local time of day
- Customizable coffee mug with animated steam
- Dark mode toggle
- Easy one-click icebreaker copy-paste
- Interface translated into English, French, and Japanese

This static version on GitHub Pages does allow some customizable coffee mug customization and dark mode toggle.
  
### Best for:  
Remote team building.  
  
## [Try Out the Icebreaker Generator on GitHub Pages Here!](https://lingasc.github.io/icebreaker-generator-thanks/)  
---  

![](https://cdn.notonthehighstreet.com/system/product_images/images/001/332/036/original_set-of-12-colourful-thank-you-note-cards.jpg)  
  
#### Eric  
This was why I'd been asking all those questions about how you make icebreakers!  
  
#### Matt  
Now that you're moving on without your icebreaker person, maybe this can come in handy. 🥲    
  
#### Argo  
You might not need icebreakers, but a piece of Keanu trivia a day whiles the long Office Hours away!  

---

## To Use:  
1. Keep clicking on any button to cycle through until you find an icebreaker you like.
2. Click on the clipboard button to copy it.
3. Paste the icebreaker into your chat. Done!  

Extras:
- Click on the coffee to change mug colors.
- Click on the sun/moon icon to toggle dark mode.

---

# What Problem Does This Solve?  
No real problem, as far as I can tell. It's just something fun and quick that ties into our experience the past three months. _There is no obligation whatsoever to use this generator!_    
  
However, if we're talking about solving a problem of convenience, then this program can provide icebreakers faster and cheaper than what's widely available out there. Here's how it compares to two popular, free alternatives when you go through the process of finding one icebreaker, copying, and pasting it into a chat.  

|                            |This Program|GenAI    |Search Engine|
|----------------------------|------------|---------|-------------|
|Requires the least steps    |✓           |         |             |
|Uses the least resources    |✓           |         |             |
|Easy to use                 |✓           |✓        |✓            |
|Free                        |✓           |✓        |✓            |
|Fast                        |✓           |✓        |✓            |

## How It Works (In Python):  
  
The code generates icebreakers at random by putting together a question from phrases sourced from the [breakfast hour dataset](data/breakfast_hour.csv). (By random, I mean in the way computers can simulate randomness.)  

1. An array contains the types of questions that the generator can create.
2. The code picks a question type from the array at random.
3. The code then constructs the question, following the format of the chosen question type.
4. The complete question is printed.
   
The code can also print French and Japanese translations of the generated question.  

It can also generate a random piece of Keanu Reeves trivia instead of a question.  
  
## How It Works (Website):  
_To make the website work in GitHub Pages, the Python code and CSV dataset were converted into JavaScript. The site uses a version of GitHub Pages' Jekyll theme. The webpage can run completely on HTML, CSS, and JavaScript._  
_Items with strikethrough are for future deployments, if possible. Preview a future version [here](https://d902920a-af24-4e86-98e7-61d70dd3511e.spock.prod.repl.run/)._

- ~~Colors change from sunrise to dusk depending on user's local time of day~~
- ~~JavaScript time dependency code changes greeting from "Good morning!", "Good afternoon!", to "Good evening!" depending on user's local time of day~~
- The data from the csv file was converted to JavaScript, so that when the user clicks on a button, it sources the JavaScript data instead of requiring Python and Pandas to source data.
- Clicking on a button runs the JavaScript that generates icebreakers in the language you selected. Keep clicking to shuffle through icebreakers.
- Clicking on the tiny coffee cup icon in the bottom right of the screen activates customizable coffee mug feature
- Clicking on sun icon toggles dark mode
- Easy one-click icebreaker copy-paste with clipboard icon
- Interface translated into English, French, and Japanese depending on the language button clicked  
  
## The Concept  
The program is based on my experience of our own breakfast hour icebreakers, which seem to fit into two categories:  
  
- Questions from which people must choose one out of two provided options.  
  Example: "Would you rather be able to talk to animals, or know how to play every musical instrument?"
- Open-ended questions that encourage people to discuss their opinions on a subject.  
  Example: "What's your favorite pizza topping?"

For the former question type to be effective, the two options provided must be _both negative_ or _both positive,_ or else the question is not worth contemplating. After all, the following question is pretty easy to answer, isn't it?  

> "Would you rather be stung by a murder hornet, or win a million dollars tax free?"  

Here is a picture of a murder hornet to illustrate how horrible they are, compared to a hornet common in D.C.  
  
![](https://media.nbcwashington.com/2019/09/murder-hornets-01.jpg?fit=1024%2C576)
  
Nor should options be neutral. Your audience must be moved emotionally or rationally enough to want to answer the question.  
  
To this end, the icebreaker program will generate three types of questions:  
  
- Negative "would you rather" questions  
  Example: "Would you rather be stranded on a desert island or stuck in an elevator?"  
- Positive "would you rather" questions  
  Example: "Would you rather win the Nobel Prize or the lottery?"  
- Open-ended questions  
  "Which actor would play you in a movie about your life?"  
  
The type of question will be chosen at random, as will the options if it is a "Would you rather" type of question. All components of the questions are stored in [this breakfast hour dataset](data/breakfast_hour.csv).  

---

## Limitations  

While this icebreaker generator might be more convenient than generative AI or google, the results you get might be on par. That is, not every icebreaker this generates will be gold, just like what you'd get from genAI or Google.  

The French translations might be better than the Japanese. While I was able to write and proofread in French, using even common syntax and phrasing in my code comments that French software engineers commonly use, I used an online translator to get the Japanese translations and cannot guarantee the same level of acuity there.  

The Keanu facts are true to the best of my knowledge, but I got them from Google, so they're about as true as true can mean for the internet.  

Ultimately, this is an MVP. There's much room for improvement, which I might do if I have time.

# Our Audience  
**End Users:**  
Matt, Eric, and Argo, for whom I made this as a teacher appreciation gift.  
This program could also be useful for:  

- New Hire/New Student Orientation Leaders
- Adults learning French, Japanese, or American English
- Anyone in a position where remote team building is a routine task
  - Where resources are limited (e.g. security risks or no budget for paid agentic AI)
  
**Our End Users' Audience Would Be:**  

- Adults (age 18+)
- Who are proficient in American English, textbook French, or textbook Japanese
- Who communicate textually

---

# Materials  

## [Code](code/)  

|Notebooks                                |Description                         |
|-----------------------------------------|------------------------------------|
|[01 English](code/01_code_en.ipynb)      |The code for English icebreakers.   |
|[02 French](code/02_code_fr.ipynb)       |The icebreaker generator in French. |
|[03 Japanese](code/03_code_jp.ipynb)     |The Japanese icebreaker code.       |
|[04 Keanu Trivia](code/04_code_kr.ipynb) |The code for Keanu trivia.          |  


The following are Python files saved from my notebooks that I didn't use for the statis version of the website, but will use for future iterations.  
  
|Python Scripts                        |Description                         |
|--------------------------------------|------------------------------------|
|[English](code/icebreaker_en.py)      |This runs the English icebreaker generator.                   |
|[French](code/icebreaker_fr.py)       |This runs the French icebreaker generator.                    |
|[Japanese](code/icebreaker_jp.py)     |This runs the Japanese icebreaker generator.                  |
|[Keanu Mode](code/keanu_mode.py)      |This runs Keanu Mode.                                         | 
|[Requirements](code/requirements.py)  |This imports our libraries and loads our dataset into pandas. | 

## [Data](/data)
[Icebreaker Dataset](data/breakfast_hour.csv)  

### Data Dictionary
|Column                |type    |Description                                  |
|----------------------|--------|---------------------------------------------|
|bad_options           |str     |Components of undesirable options.           |
|mauvaises_préfs       |str     |The English undesirable options in French.   |
|bad_jp                |str     |The English undesirable options in Japanese. |
|good_options          |str     |Components of favorable options.             |
|bonnes_préfs          |str     |The English favorable options in French.     |
|good_jp               |str     |The English favorable options in Japanese.   |
|open_ended            |str     |Complete open-ended questions.               |
|ouvertes              |str     |The English open-ended questions in French.  |
|open_jp               |str     |The English open-ended questions in Japanese.|
|keanu_trivia          |str     |Complete sentences of Keanu trivia. English. |   

## [Docs](docs/)  
This is the directory from where GitHub Pages deploys the webpage.  

|File                            |Description                         |
|--------------------------------|------------------------------------|
|[_config.yml](docs/_config.yml) |Lets the site run on a version of GitHub Pages' Jekyll theme.|
|[data.js](docs/data.js)         |The data in [breakfast_hour.csv](code/breakfast_hour.csv) converted into JavaScript for GitHub Pages.|
|[index.html](docs/index.html)   |A standalone html file that contains all of the site's markdown and styling.|
|[main.js](docs/main.js) |Contains all our icebreaker generator code converted into JavaScript for GitHub Pages.          | 
