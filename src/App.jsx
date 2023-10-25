import "./App.css";
import GameReset from "./components/game-reset/GameReset";
import Score from "./components/score/Score";

function App() {
  return (
    <>
      <main className="bg-radialGradient min-h-screen">
        <div className="container max-w-custom mx-auto pt-3">
          <Score />
          <GameReset />
        </div>
      </main>
      
    </>
  );
}

export default App;
