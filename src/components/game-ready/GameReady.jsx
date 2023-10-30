import { useDispatch, useSelector } from "react-redux";
import { getAllPossibleSelections, setUserSelection } from "../gameSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function GameReady() {
  const allSelections = useSelector(getAllPossibleSelections);
  const dispatch = useDispatch();
  function handleSelection(selectionName) {
    dispatch(setUserSelection(selectionName));
  }
  useEffect(() => {
    Aos.init({
      delay: 300,
    });
  }, []);
  return (
    <div className=" relative z-20 mx-auto flex max-w-[400px] flex-wrap items-center justify-center gap-14 bg-triangleImg bg-[length:70%_80%] bg-center  bg-no-repeat  sm:gap-16 md:gap-20">
      {allSelections.map((selection, i) => {
        return (
          <a
            className="relative z-10 flex items-center"
            key={selection.name}
            data-aos={
              i === 0 ? "fade-right" : i === 1 ? "fade-left" : "fade-up"
            }
            onClick={() => handleSelection(selection.name)}
          >
            <button
              className={` ${
                selection.name === "rock"
                  ? "bg-rockGradient"
                  : selection.name === "paper"
                  ? "bg-paperGradient"
                  : "bg-scissorsGradient"
              } flex h-28 w-28  items-center justify-center rounded-full bg-cover transition hover:opacity-80 md:h-36 md:w-36`}
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-6 md:h-28 md:w-28">
                <img
                  className="h-[40px] w-[40px] object-contain md:h-16  md:w-16"
                  src={selection.img}
                  alt={`${selection.name} icon`}
                />
              </span>
            </button>
          </a>
        );
      })}
    </div>
  );
}

export default GameReady;
