# bithound

## Visualization. Initial thoughts:

console application because those are kind of silly and fun.

along the bottom is a year slider, controlled with left and right arrows.

from left to right, something to represent the data. 

what's interesting about the data though? lets rewind and go back to that. 

Pick a province and see how it correlates with national data in the previous 5 or following 5 elections (are there enough to make that range vialbe? will need to see later) .

Okay, so year is not important or at least is not left to right: Province is left to right, year is up and down.

Three-ish major pieces:

1) Navigation tool along the bottom.

[--- BC: 1900 -------------------]
Up changes year like so:
[--- BC: 1910 -------------------]
Right (a bunch of times) changes province like so:
[------------------------- NFLD: 1910 ---]
Down changes year like so:
[------------------------- NFLD: 1900 ---]


2) Main content. Pretty simple:
CANADA -2: 20% CON 80% LIB
CANADA -1: 30% CON 70% LIB
**BC: 40% CON 60% LIB**
CANADA +1: 40% CON 60% LIB
CANADA +2: 45% CON 55% LIB


3) Data storage. I'm probably just going to load it into memory, fuck a database.
