import "./GameTurn.scss"
import {Game, isValidGuess} from '../game'

interface TurnScore {
  black: number
  white: number
}

interface GameTurnArgs {
  guess: string[]
  score: TurnScore
}
export function GameTurn({guess, score}:GameTurnArgs) {
  return (
    <div className="GameTurn">
      {guess.map(color => <Circle color={color} />)}
      <Score black={score.black} white={score.white}/> 
    </div>
  );
}

interface CurrentGameTurnArgs {
  game: Game
  updateGuess : (index: number) => void
  makeGuess : () => void
}

export function CurrentGameTurn({game, updateGuess, makeGuess}:CurrentGameTurnArgs) { 
  const validGuess = isValidGuess(game.currentGuess)
  const currentGuess = [...game.currentGuess]
  while (currentGuess.length<4) currentGuess.push('')

  return (
    <div className="GameTurn">
      {currentGuess.map((color, i) => <Circle color={color} onClick={() => updateGuess(i)} />)}
      <button onClick={() => validGuess && makeGuess()} disabled={!validGuess}>Go</button>
    </div>
  );
}

function Circle({color, onClick}: {color: string, onClick?: () => void}) {
  return <button className={`Circle ${color === '' ? 'empty' : color}`} onClick={onClick}>{color.substring(0, 1)}</button>
}

function Score({black, white}: {black: number, white: number}) {
  const dots = Array.from({length: 4}, (_, v) => v<black ? 'b' : v<black+white ? 'w': '')
  
  return <div className="Score">
    {dots.map(d => <div className={d} />)}
  </div>
}