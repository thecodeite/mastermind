import { Game, makeGuess } from "./game"

const emptyGame: Game = {
  solution: ['','','',''],
  turns: [],
  currentGuess: ['','','',''],
}

test('no correct answers is 0 black, 0 white', () => {
  const game: Game = {
    ...emptyGame,
    solution: ['red','red','red','red'],
    currentGuess: ['blue','blue','blue','blue'],
  }

  const result = makeGuess(game).turns[0].score

  expect(result).toStrictEqual({black: 0, white: 0})
})

test('single answers is 1 black, 0 white', () => {
  const game: Game = {
    ...emptyGame,
    solution: ['red','red','red','red'],
    currentGuess: ['red','blue','blue','blue'],
  }

  const result = makeGuess(game).turns[0].score

  expect(result).toStrictEqual({black: 1, white: 0})
})

test('answer in solution used once', () => {
  const game: Game = {
    ...emptyGame,
    solution: ['red','blue','blue','blue'],
    currentGuess: ['red','red','red','red'],
  }

  const result = makeGuess(game).turns[0].score

  expect(result).toStrictEqual({black: 1, white: 0})
})

test('each answer in solution used once', () => {
  const game: Game = {
    ...emptyGame,
    solution: ['red','blue','green','green'],
    currentGuess: ['red','red','blue','blue'],
  }

  const result = makeGuess(game).turns[0].score

  expect(result).toStrictEqual({black: 1, white: 1})
})

test('exact match is 4 black', () => {
  const game: Game = {
    ...emptyGame,
    solution: ['red','blue','white','black'],
    currentGuess: ['red','blue','white','black'],
  }

  const result = makeGuess(game).turns[0].score

  expect(result).toStrictEqual({black: 4, white: 0})
})

test('close exact match is 4 white', () => {
  const game: Game = {
    ...emptyGame,
    solution: ['blue','white','black', 'red'],
    currentGuess: ['red','blue','white','black'],
  }

  const result = makeGuess(game).turns[0].score

  expect(result).toStrictEqual({black: 0, white: 4})
})

