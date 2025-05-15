# This code will print icebreakers in English at random.
# Sourced from breakfast_hour.csv
# by lingasc

# Créer un tableau qui stocke nos trois types de questions
# Sauvegarder le tableau dans la variable 'questions_fr'

# (Create array that stores our three question types)
# (Save array to variable 'questions_fr')
questions_fr = ['nulles', 'bonnes', 'ouvertes']

# Créer 'brise_glace' pour choisir un type de question au hasard dans 'questions_fr'
# Si cela choisit 'nulle', afficher une question avec une option négative
# Si 'bonne', afficher une question avec une option positive
# Sinon, afficher une question à réponse ouverte

# (Create 'brise_glace' to pick a question type from 'questions_fr' at random)
# (If it picks 'nulle', print a negative-option question)
# (If 'bonne', print positive-option question)
# (Else print an open-ended question)

brise_glace = (random.choice(questions_fr))
if brise_glace == 'nulles':
    # Select two different bad options by sampling without replacement
    options = random.sample(df['mauvaises_préfs'].tolist(), 2)
    print(f'Vous préféreriez {options[0]}, ou {options[1]}?')
elif brise_glace == 'bonnes':
    # Select two different bad options by sampling without replacement
    options = random.sample(df['bonnes_préfs'].tolist(), 2)
    print(f'Vous préféreriez {options[0]}, ou {options[1]}?')
else: print(f"{random.choice(df['ouvertes'])}")