import { useSelector } from "react-redux";
import "./App.css";
import GameReady from "./components/game-ready/GameReady";
import GameStart from "./components/game-start/GameStart";
import { getUserSelection } from "./components/gameSlice";
import Rules from "./components/rules/Rules";
import Score from "./components/score/Score";

function App() {
  const userSelection = useSelector(getUserSelection);

  return (
    <>
      <main className="min-h-screen bg-radialGradient">
        <div className="container max-w-7xl mx-auto pt-10 px-7">
          <Score />
          {!userSelection && <GameReady />}
          {userSelection && <GameStart />}
          <Rules />
        </div>
      </main>
    </>
  );
}

export default App;
