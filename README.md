![](https://y.yarn.co/caa9c31d-b640-40d0-8a9a-0cf586412dd8_text.gif)

# Icebreaker Generator  
### Surprise!  
  
To thank you for the past three months, I've taken what I've learned from DSB-210 and written an icebreaker generator capable of generating 5,724 unique, safe-for-work icebreakers, to streamline the task of finding and copying an icebreaker to be pasted into a chat.  

### The Purpose of This Generator:  
This simple, lightweight MVP was built to provide increased convenience for putting icebreakers into online chats. Plus a little added fun:  

- French translations for Matt
- Japanese translations for Eric
- Random Keanu Reeves trivia in English, a nod to Argo's Keanu-themed Office Hours
  
### Best for:  
Remote team building.  

---  

![](https://cdn.notonthehighstreet.com/system/product_images/images/001/332/036/original_set-of-12-colourful-thank-you-note-cards.jpg)  
  
#### Eric  
This was why I'd been asking all those questions about how you make icebreakers!  
  
#### Matt  
Now that you're moving on without your icebreaker person, maybe this can come in handy.  
  
#### Argo  
You might not need icebreakers, but a piece of Keanu trivia a day whiles the long Office Hours away!  

---

## To Use:  
1. Keep clicking on any button to cycle through until you find an icebreaker you like.
2. Click on the clipboard button to copy it.
3. Paste the icebreaker into your chat. Done!

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

## How It Works:  
  
The code generates icebreakers at random by putting together a question from phrases sourced from the [breakfast hour dataset](data/breakfast_hour.csv). (By random, I mean in the way computers can simulate randomness.)  

1. An array contains the types of questions that the generator can create.
2. The code picks a question type from the array at random.
3. The code then constructs the question, following the format of the chosen question type.
4. The complete question is printed.
   
The code can also print French and Japanese translations of the generated question.  

It can also generate a random piece of Keanu Reeves trivia instead of a question.

---

## The Concept  
The program is based on my experience of our own breakfast hour icebreakers, which seem to fit into two categories:  
  
- Questions from which people must choose one out of two provided options.  
  Example: "Would you rather be able to talk to animals, or know how to play every musical instrument?"
- Open-ended questions that encourage people to discuss their opinions on a subject.  
  Example: "What's your favorite pizza topping?"

For the former question type to be effective, the two options provided must be _both negative_ or _both positive,_ or else the question is not worth contemplating. After all, the following question is pretty easy to answer, isn't it?  

> "Would you rather be stung by a murder hornet, or win a million dollars tax free?"  

Here is a picture of a murder hornet to illustrate how horrible they are, compared to a hornet common in D.C.  
  
![]([https://www.bellinghamherald.com/latest-news/ab3it/picture242408291/alternates/FREE_1140/Asian%20hornet.jpg](https://media.nbcwashington.com/2019/09/murder-hornets-01.jpg?fit=1024%2C576))
  
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

While this icebreaker generator might be more convenient than generative AI or googling icebreakers, the results you get might be on par. That is, not every icebreaker this generates will be gold.  

The French translations might be better than the Japanese. While I was able to write and proofread in French, using even common syntax and phrasing in my code comments that French software engineers commonly use, I used an online translator to get the Japanese translations and cannot guarantee the same level of acuity there.  

The Keanu facts are true to the best of my knowledge, but I got them from google, so they're about as true as true can mean for the internet.  

Ultimately, this is an MVP. There's much room for improvement, which I might do if I have time.

# Our Audience  
**End Users:**  
Matt, Eric, and Argo, for whom I made this as a teacher appreciation gift.  
This program could also be useful for:  

- People managers
- Instructors in American higher education
  - Who are fluent in American English (I built this in American English with only two other language options)
  - Who are studying French in Duolingo (like Matt)
  - Who are re-learning Japanese in Duolingo (for Eric)
- Anyone in a position where remote team building is a routine task
  - Where resources are limited (e.g. security risks or no budget for paid agentic AI)
  
**Our End Users' Audience Would Be:**  

- Adults (age 18+)
- Working or studying in tech
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
