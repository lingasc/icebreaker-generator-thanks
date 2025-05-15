# This code will print icebreakers in English at random.
# Sourced from breakfast_hour.csv
# by lingasc

# Create array that stores our three question types
# Save array to variable 'questions_en'
questions_en = ['bad', 'good', 'open']

# Create 'icebreaker' to pick a question type from 'questions_en' at random
# If it picks 'bad', print a negative-option question
# If 'good', print positive-option question
# Else print open-ended question

icebreaker = (random.choice(questions_en))
if icebreaker == 'bad':
    # Select two different bad options by sampling without replacement
    options = random.sample(df['bad_options'].tolist(), 2)
    print(f'Would you rather {options[0]}, or {options[1]}?')
elif icebreaker == 'good':
    # Select two different bad options by sampling without replacement
    options = random.sample(df['good_options'].tolist(), 2)
    print(f'Would you rather {options[0]}, or {options[1]}?')
else: print(f"{random.choice(df['open_ended'])}")