# a simply terminal program that adds quotes i like to a text file

import sys
import json

print('Enter quotes below, press q to quit:')

with open('quotes.json') as f:
    quotesdict = json.load(f)

index = int(sorted(list(quotesdict.keys()))[-1])

quotes = sys.stdin.readline()
while quotes.rstrip() != 'q':
    index += 1
    quotesdict[str(index)] = quotes.rstrip()
    print('Quote added!\n')
    quotes = sys.stdin.readline()

print(quotesdict)
with open('quotes.json', 'w') as f:
    json.dump(quotesdict, f)