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
  const [result, setResult] = useState("");

  function computerTurn() {
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
  }

  function playerTurn(name) {
    setPlayer(name);
    computerTurn();
  }

  useEffect(() => {
    function checkWinner() {
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
      } else {
        setResult(`You lost! ${player} is beaten by ${computer}`);
      }
    }
    checkWinner();
  }, [player, computer]);

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
            />
          ))}
        </div>
        <Restart />
        <Choice player={`Player:${player}`} computer={`Computer:${computer}`} />
        <Result result={`${result}`} />
        <Score playerScore={""} computerScore={""} />
      </main>
    </>
  );
}

export default App;
