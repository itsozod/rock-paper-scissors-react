import "./App.css";
import { Header } from "./components/header/Header";
import { Info } from "./components/info/Info";
import { Game } from "./components/game/Game";
import { weapons } from "./Weapon";
import { Restart } from "./components/restart/Restart";
import { Choice } from "./components/choice/Choice";
import { Result } from "./components/result/Result";
import { Score } from "./components/score/Score";

function App() {
  return (
    <>
      <Header />
      <main>
        <Info />
        <div className="button-container">
          {weapons.map((weapon) => (
            <Game key={weapon.id} text={weapon.name} />
          ))}
        </div>
        <Restart />
        <Choice player={""} computer={""} />
        <Result result={""} />
        <Score playerScore={""} computerScore={""} />
      </main>
    </>
  );
}

export default App;
