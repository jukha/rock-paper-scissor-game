import { useSelector } from "react-redux";
import { getTotalScore } from "../gameSlice";

function Score() {
  const totalScore = useSelector(getTotalScore);

  return (
    <div className="relative z-30 mx-auto mb-16 flex max-w-[550px] items-center justify-between rounded-md  border-2 border-solid border-headerOutline  p-4">
      <div>
        <h2 className="text-4xl  font-bold uppercase leading-7 text-white">
          Rock
        </h2>
        <h2 className="text-4xl  font-bold uppercase leading-7 text-white">
          Paper
        </h2>
        <h2 className="text-4xl  font-bold uppercase leading-7 text-white">
          Scissors
        </h2>
      </div>
      <div className="rounded-md bg-white px-10 py-4 text-center ">
        <span className="uppercase text-score">Score</span>
        <h2 className="text-5xl  font-bold uppercase text-dark">
          {totalScore}
        </h2>
      </div>
    </div>
  );
}

export default Score;
