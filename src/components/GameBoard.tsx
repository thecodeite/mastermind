import { GameTurn, CurrentGameTurn } from "./GameTurn";
import "./GameBoard.scss"
import { useState } from "react";
import { Game, makeGuess, startNewGame, updateGuess } from "../game";

export function GameBoard({initialGame}:{initialGame?: Game}) {
  const [game, setGame] = useState<Game>(() => initialGame || startNewGame())

  return (
    <div className="GameBoard">
      <h1>Mastermind<a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">?</a></h1>
      {game.turns.map(turn => <GameTurn guess={turn.guess} score={turn.score}/>)}
      {game.won ? <GameWon setGame={setGame} /> : <CurrentGameTurn game={game} 
        updateGuess={(index: number) => setGame((oldGame: Game) => updateGuess(oldGame, index))}
        makeGuess={() => setGame(makeGuess)}
        />}
    </div>
  );
}
function GameWon({setGame}:{setGame:(game: Game) => void}) {
  return <div className="GameWon">
    <div>Well done!</div>
    <button onClick={() => setGame(startNewGame())}>Start new game</button>
  </div>
}
