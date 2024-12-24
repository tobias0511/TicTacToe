import React from "react";
import { Tile } from "../Tile";

interface BoardProps {
  valueOfTiles: ("X" | "O" | undefined)[];
  onTileClick : any;
  currentSymbol : "X" | "O"
}

export const Board: React.FC<BoardProps> = ({
  valueOfTiles,
  onTileClick,
  currentSymbol
}) => {
  return (
    <div className="boardContainer">
      <div className="firstBoardColumn">
        {/*Über Map Code reduzieren, ermöglicht dann auch größerers Spielfeld */}
        <Tile onClick={() => onTileClick(0)} value={valueOfTiles[0]} currentSymbol = {currentSymbol}/>
        <Tile onClick={() => onTileClick(3)} value={valueOfTiles[3]} currentSymbol = {currentSymbol}/>
        <Tile onClick={() => onTileClick(6)} value={valueOfTiles[6]} currentSymbol = {currentSymbol}/>
      </div>
      <div className="secondBoardColumn">
        <Tile onClick={() => onTileClick(1)} value={valueOfTiles[1]} currentSymbol = {currentSymbol}/>
        <Tile onClick={() => onTileClick(4)} value={valueOfTiles[4]} currentSymbol = {currentSymbol}/>
        <Tile onClick={() => onTileClick(7)} value={valueOfTiles[7]} currentSymbol = {currentSymbol}/>
      </div>
      <div className="thirdBoardColumn">
        <Tile onClick={() => onTileClick(2)} value={valueOfTiles[2]} currentSymbol = {currentSymbol}/>
        <Tile onClick={() => onTileClick(5)} value={valueOfTiles[5]} currentSymbol = {currentSymbol}/>
        <Tile onClick={() => onTileClick(8)} value={valueOfTiles[8]} currentSymbol = {currentSymbol}/>
      </div>
    </div>
  );
};
