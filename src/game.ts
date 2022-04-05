export type Guess = string[]
interface Score {
  black: number
  white: number
}

export interface Game {
  solution: Guess
  won?: true
  turns: {guess: Guess, score: Score}[]
  currentGuess: Guess
}

 const colors = [
  "red", "green", "blue", "yellow", "black", "white"
]

export function startNewGame(): Game {
  const pick = () => colors[Math.floor(Math.random()*6)]
  const solution: Guess = [
    pick(), pick(), pick(), pick()
  ]

  const game: Game = {
    solution,
    currentGuess: ['','','',''],
    turns: []
  }

  return game
}

export function updateGuess(game:Game, indexToUpdate: number): Game{
  const currentGuess = [...game.currentGuess, '','','',''].slice(0, 4)
  const newGuess = currentGuess.map((color, i) => 
    i === indexToUpdate ? nextColor(color) : color
  )

  console.log('updateGuess:', indexToUpdate, newGuess)

  return {
    ...game,
    currentGuess: newGuess
  }
}

export function nextColor(color: string) {
  const index = colors.indexOf(color)
  if (index < 0 || index > 4) return colors[0]
  return colors[index+1]
}

export function isValidGuess(guess: string[]){
  return guess.length === 4 && guess.every(color => colors.includes(color))
}

export function makeGuess(game: Game): Game {
  const {currentGuess, solution} = game

  const black = currentGuess
    .filter((guess,i)=> solution[i] === guess)
    .length

  type colorCount = {[key: string]: number}
  const countColours = (prev: colorCount, col: string): colorCount => (
     {
      ...prev,
      [col]: (prev[col] || 0)+1
  })

  const whiteSolution = solution
    .filter((guess,i)=> currentGuess[i] !== guess)
    .reduce(countColours, {})
  const whiteGuess = currentGuess
    .filter((guess,i)=> solution[i] !== guess)
    .reduce(countColours, {})

  const white = Object.entries(whiteGuess).reduce((p:number, [col, inGuess]: [string, number]) => {
    return p + Math.min(inGuess, whiteSolution[col] || 0)
  }, 0)

  const won = black === 4 ? true : undefined

  return {
    ...game,
    won,
    turns: [
      ...game.turns,
      {
        guess: currentGuess,
        score: {black, white}
      }
    ],
    currentGuess: ['','','',''] as Guess,
  }
}