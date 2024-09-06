import { useState } from "react";
import "./assets/css/App.css";
import "./assets/css/Tile.css";
import "./assets/css/Board.css";
import "./assets/css/LeaderBoard.css";
import { Board } from "./components/UI/Board";
import { LeaderBoard } from "./components/LeaderBoard";

function App() {
  // current symbol über props runtergeben

  const [valueOfTiles, setValueOfTiles] = useState<("X" | "O" | undefined)[]>(
    Array(9).fill(undefined)
  );
  const [currentSymbol, setCurrentSymbol] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<"X" | "O" | undefined>(undefined);
  const [numberOfWins, setNumberOfWins] = useState<{ X: number; O: number }>({
    X: 0,
    O: 0,
  });

  const checkForWinner = (valueOfTiles: ("X" | "O" | undefined)[]) => {
    // Check for winner in column
    for (let i = 0; i <= valueOfTiles.length - 2; i += 3) {
      console.log(valueOfTiles);
      if (
        valueOfTiles[i] === valueOfTiles[i + 1] &&
        valueOfTiles[i] === valueOfTiles[i + 2] &&
        valueOfTiles[i] != undefined
      ) {
        setWinner(valueOfTiles[i]);
        setNumberOfWins((prevState) => ({
          ...prevState,
          [valueOfTiles[i] as "X" | "O"]:
            prevState[valueOfTiles[i] as "X" | "O"] + 1,
        }));

        return;
      }
    }
    // Check for winner in row
    for (let i = 0; i < valueOfTiles.length - 6; i++) {
      if (
        valueOfTiles[i] === valueOfTiles[i + 3] &&
        valueOfTiles[i] === valueOfTiles[i + 6] &&
        valueOfTiles[i] != undefined
      ) {
        setWinner(valueOfTiles[i]);

        setNumberOfWins((prevState) => ({
          ...prevState,
          [valueOfTiles[i] as "X" | "O"]:
            prevState[valueOfTiles[i] as "X" | "O"] + 1,
        }));

        return;
      }
    }
    // Check for winner in diagonal
    if (
      valueOfTiles[0] === valueOfTiles[4] &&
      valueOfTiles[0] === valueOfTiles[8] &&
      valueOfTiles[0] != undefined
    ) {
      setWinner(valueOfTiles[0]);
      setNumberOfWins((prevState) => ({
        ...prevState,
        [valueOfTiles[0] as "X" | "O"]:
          prevState[valueOfTiles[0] as "X" | "O"] + 1,
      }));

      return;
    }
    if (
      valueOfTiles[6] === valueOfTiles[4] &&
      valueOfTiles[6] === valueOfTiles[2] &&
      valueOfTiles[6] != undefined
    ) {
      setWinner(valueOfTiles[6]);

      setNumberOfWins((prevState) => ({
        ...prevState,
        [valueOfTiles[6] as "X" | "O"]:
          prevState[valueOfTiles[6] as "X" | "O"] + 1,
      }));

      return;
    }
  };

  const checkForFullBoard = (valueOfTiles: ("X" | "O" | undefined)[]) => {
    for (let i = 0; i < valueOfTiles.length; i++) {
      if (valueOfTiles[i] === undefined) {
        return false;
      }
    }
    return true;
  };

  const handleTileClick = (index: number) => {
    if (valueOfTiles[index] === undefined && winner === undefined) {
      // tile not yet occupied and no winner yet
      const newValueOfTiles = [...valueOfTiles];
      newValueOfTiles[index] = currentSymbol;
      setValueOfTiles(newValueOfTiles);
      currentSymbol === "X" ? setCurrentSymbol("O") : setCurrentSymbol("X"); // change player every round
      checkForWinner(newValueOfTiles);
    }
  };

  const handleNewGame = () => {
    setValueOfTiles(Array(9).fill(undefined));
    setWinner(undefined);
    setCurrentSymbol("X");
  };

  return (
    <div className="appContainer">
      
    <div className="leaderBoardWrapper">
    <LeaderBoard numberOfWins={numberOfWins} />
    </div>
 
      
      
      <h1>Tic Tac Toe</h1>
      <Board
        onTileClick={handleTileClick}
        valueOfTiles={valueOfTiles}
        currentSymbol={currentSymbol}
      />
      <h3>
        {checkForFullBoard(valueOfTiles)
          ? "The Board is full"
          : winner
          ? `The winner is: ${winner}`
          : `Player ${currentSymbol}`}
      </h3>
      <button
        className={
          !winner && !checkForFullBoard(valueOfTiles)
            ? "hiddenButton"
            : "playAgainButton"
        }
        onClick={handleNewGame}
      >
        Play Again
      </button>
      </div>
      
 
  );
}

export default App;
