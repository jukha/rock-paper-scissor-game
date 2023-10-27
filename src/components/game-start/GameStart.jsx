import { useDispatch, useSelector } from "react-redux";
import {
  decideWinner,
  getAllPossibleSelections,
  getCompSelection,
  getResult,
  getUserSelection,
  setCompSelection,
} from "../gameSlice";
import { useEffect, useRef } from "react";
import GameResult from "../game-result/GameResult";
import Aos from "aos";
import "aos/dist/aos.css";

function GameStart() {
  const userSelection = useSelector(getUserSelection);
  const compSelection = useSelector(getCompSelection);
  const allSelections = useSelector(getAllPossibleSelections);
  const winner = useSelector(getResult);
  const dispatch = useDispatch();
  const userSelectionIndex = allSelections.findIndex(
    (item) => item.name === userSelection,
  );
  const compSelectionIndex = allSelections.findIndex(
    (item) => item.name === compSelection,
  );
  const loadingDivRef = useRef(null);
  const loadingSpanRef = useRef(null);
  const loadingImgRef = useRef(null);

  const loadingOuterAdditionalClasses =
    "rounded-full h-52 w-52  flex justify-center items-center";

  useEffect(() => {
    Aos.init({
      delay: 300,
    });
    if (!compSelection) {
      let previousRandomIndex = -1; // Initialize with an invalid value

      const intervalId = setInterval(() => {
        if (
          loadingDivRef.current &&
          loadingSpanRef.current &&
          loadingImgRef.current
        ) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * allSelections.length);
          } while (randomIndex === previousRandomIndex);

          previousRandomIndex = randomIndex;

          const randomSelection = allSelections[randomIndex];

          loadingDivRef.current.className = `${loadingOuterAdditionalClasses} bg-${randomSelection.name}Gradient`;
          loadingSpanRef.current.classList.remove("bg-dark");
          loadingSpanRef.current.classList.add("bg-white");
          loadingImgRef.current.src = randomSelection.img;
        }
      }, 300);

      setTimeout(() => {
        clearInterval(intervalId);
        const finalSelection =
          allSelections[Math.floor(Math.random() * allSelections.length)];
        dispatch(setCompSelection(finalSelection.name));
        dispatch(decideWinner());

        if (loadingImgRef.current) {
          loadingImgRef.current.style.src = "none";
        }
      }, 2000);
    }
  }, [allSelections, compSelection, dispatch]);

  return (
    <div className="relative z-20 mx-auto flex max-w-[800px] justify-between">
      <div data-aos="fade-right">
        <h3 className="text-infinity mb-10 text-center text-2xl uppercase tracking-wider text-white">
          You picked
        </h3>
        <div
          className={`flex h-52 w-52  items-center justify-center rounded-full  ${
            userSelection === "rock"
              ? "bg-rockGradient"
              : userSelection === "paper"
              ? "bg-paperGradient"
              : "bg-scissorsGradient"
          } ${winner === "user" ? "animate-pulse" : ""}`}
        >
          <span className="flex h-40 w-40 items-center justify-center rounded-full bg-white p-6">
            <img
              src={allSelections[userSelectionIndex].img}
              alt={`${userSelection} icon`}
            />
          </span>
        </div>
      </div>
      {/* ============ */}
      {/* Reset Game */}
      {/* ============ */}
      {<GameResult />}
      <div data-aos="fade-left">
        <h3 className="mb-10 text-center text-2xl uppercase tracking-wider text-white">
          The house picked
        </h3>
        {!compSelection ? (
          <div className={loadingOuterAdditionalClasses} ref={loadingDivRef}>
            <span
              className="flex h-40 w-40 items-center justify-center rounded-full bg-dark p-6"
              ref={loadingSpanRef}
            >
              <img src="" ref={loadingImgRef} />
            </span>
          </div>
        ) : (
          <div
            className={`flex h-52 w-52  items-center justify-center rounded-full bg-${compSelection}Gradient ${
              winner === "computer" ? "animate-pulse" : ""
            }`}
          >
            <span className="flex h-40 w-40 items-center justify-center rounded-full bg-white p-6">
              <img
                src={allSelections[compSelectionIndex].img}
                alt={`${compSelection} icon`}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameStart;
