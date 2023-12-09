import "./App.css";
import { Header } from "./components/header/Header";
import { Info } from "./components/info/Info";
import { Game } from "./components/game/Game";
import { weapons } from "./Weapon";
import { Restart } from "./components/restart/Restart";
import { Choice } from "./components/choice/Choice";
import { Result } from "./components/result/Result";
import { Score } from "./components/score/Score";
import { useState, useEffect } from "react";

function App() {
  const [player, setPlayer] = useState("?");
  const [computer, setComputer] = useState("?");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const computerTurn = () => {
    const randomWeapon = Math.floor(Math.random() * weapons.length) + 1;

    switch (randomWeapon) {
      case 1:
        setComputer("✊");
        break;
      case 2:
        setComputer("✋");
        break;
      case 3:
        setComputer("✌️");
        break;
    }
  };

  const playerTurn = (name) => {
    setPlayer(name);
    computerTurn();
  };

  useEffect(() => {
    const checkWinner = () => {
      if (player === "?") {
        setResult("Waiting for the player!!!");
        return;
      }
      if (player === computer) {
        setResult(`It's a tie ${player} ties with ${computer}`);
      } else if (
        (player === "✊" && computer === "✌️") ||
        (player === "✋" && computer === "✊") ||
        (player === "✌️" && computer === "✋")
      ) {
        setResult(`You won! ${player} beats ${computer}`);
        setPlayerScore((prevScore) => prevScore + 1);
      } else {
        setResult(`You lost! ${player} is beaten by ${computer}`);
        setComputerScore((prevScore) => prevScore + 1);
      }
    };
    checkWinner();
  }, [player, computer]);

  useEffect(() => {
    const checkScores = () => {
      if (playerScore === 5) {
        setResult("Player wins the game!");
        setGameOver(true);
      }
      if (computerScore === 5) {
        setResult("Computer wins the game!");
        setGameOver(true);
      }
    };
    checkScores();
  }, [playerScore, computerScore]);

  return (
    <>
      <Header />
      <main>
        <Info />
        <div className="button-container">
          {weapons.map((weapon) => (
            <Game
              key={weapon.id}
              text={weapon.name}
              onClick={() => playerTurn(weapon.name)}
              disabled={gameOver}
            />
          ))}
        </div>
        <Restart />
        <Choice player={`Player:${player}`} computer={`Computer:${computer}`} />
        <Result result={`${result}`} />
        <Score playerScore={playerScore} computerScore={computerScore} />
      </main>
    </>
  );
}

export default App;
