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
      <main className="bg-radialGradient min-h-screen">
        <div className="container max-w-custom mx-auto pt-10">
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
