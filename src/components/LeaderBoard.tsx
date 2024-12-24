import React from "react";

interface LeaderBoardProps {
  numberOfWins: { "X": number; "O": number };
}

export const LeaderBoard: React.FC<LeaderBoardProps> = ({ numberOfWins }) => {
  return <div className="leaderBoardContainer">
    {/* <input type="text" /> */}
    <div className="playerX">
    
    {`Player X - ${numberOfWins.X} wins`} 
    </div>
    <div className="playerY">
    {`Player O - ${numberOfWins.O} wins`} 
    </div>
  </div>;
};
