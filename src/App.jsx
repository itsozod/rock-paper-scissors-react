import "./App.css";
import { Header } from "./components/header/Header";
import { Info } from "./components/info/Info";
import { Game } from "./components/game/Game";
import { weapons } from "./Weapon";

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
      </main>
    </>
  );
}

export default App;
