# Import pandas
import pandas as pd

# Import random 
# Define random seed as 42 so others can recreate our random choices
import random
random.seed(42)

# Read our dataset into pandas as a DataFrame
df = pd.read_csv('./data/breakfast_hour.csv')