# This code will print icebreakers in Japanese at random.
# Sourced from breakfast_hour.csv
# by lingasc

# 私たちの3つの質問タイプを格納する配列を作成する
# 配列を変数 'questions_jp' に保存する

# (Create array that stores our three question types)
# (Save array to variable 'questions_jp')
questions_jp = ['warui', 'yoi', 'ōpun']

# (ランダムに 'questions_jp' から質問タイプを選ぶために 'icebreaker' を作成する)
# (もし 'warui' を選んだら、ネガティブオプションの質問を表示する)
# (もし 'yoi' を選んだら、ポジティブオプションの質問を表示する)
# (それ以外の場合は、開放的な質問を表示する)

# (Create 'icebreaker' to pick a question type from 'questions_jp' at random)
# (If it picks 'warui', print a negative-option question)
# (If 'yoi', print positive-option question)
# (Else print an open-ended question)

icebreaker = (random.choice(questions_jp))
if icebreaker == 'warui':
    # Select two different bad options by sampling without replacement
    options = random.sample(df['bad_jp'].tolist(), 2)
    print(f'あなたは {options[0]} と {options[1]} のどちらを好みますか？')
elif icebreaker == 'yoi':
    # Select two different bad options by sampling without replacement
    options = random.sample(df['good_jp'].tolist(), 2)
    print(f'あなたは {options[0]} と {options[1]} のどちらを好みますか？')
else: print(f"{random.choice(df['open_jp'])}")