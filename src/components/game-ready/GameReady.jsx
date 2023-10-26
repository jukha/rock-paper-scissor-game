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
    <div className="relative z-20 mx-auto flex max-w-[400px] flex-wrap items-center justify-center gap-20 bg-triangleImg  bg-center bg-no-repeat">
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
              className={` bg-${selection.name}Gradient flex h-36 w-36 items-center justify-center rounded-full transition hover:opacity-80`}
            >
              <span className="flex h-28 w-28 items-center justify-center rounded-full bg-white p-6">
                <img src={selection.img} alt={`${selection.name} icon`} />
              </span>
            </button>
          </a>
        );
      })}
    </div>
  );
}

export default GameReady;
