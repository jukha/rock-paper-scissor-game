import { useDispatch, useSelector } from "react-redux";
import { getResult, resetGame } from "../gameSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function GameResult() {
  const winner = useSelector(getResult);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {winner && (
        <div
          className=" after:inline-block; relative z-10 flex flex-col items-center justify-center"
          data-aos="zoom-in"
        >
          <h2 className="mb-5 text-4xl font-bold uppercase text-white">
            {winner === "user"
              ? "You win"
              : winner === "computer"
              ? "You lose"
              : "It's a draw"}
          </h2>
          <button
            onClick={() => dispatch(resetGame())}
            className=" min-w-[200px] rounded-md bg-white px-7 py-3 uppercase tracking-wider text-dark transition hover:text-red-400"
          >
            Play again
          </button>
        </div>
      )}
    </>
  );
}
export default GameResult;
