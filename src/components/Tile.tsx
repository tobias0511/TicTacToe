import React from "react";

interface TileProps {
  value: "X" | "O" | undefined;
  onClick: any;
  currentSymbol : "X" | "O"
}

export const Tile: React.FC<TileProps> = ({ value, onClick, currentSymbol }) => {

  return (
    <div className="tileContainer tileHover" onClick={onClick} >
      {value}
    </div>
  );
};
