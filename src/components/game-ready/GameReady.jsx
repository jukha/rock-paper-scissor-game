import { useDispatch, useSelector } from "react-redux";
import { getAllPossibleSelections, setUserSelection } from "../gameSlice";

function GameReady() {
  const allSelections = useSelector(getAllPossibleSelections);
  const dispatch = useDispatch();
  function handleSelection(selectionName) {
    dispatch(setUserSelection(selectionName));
  }
  return (
    <div className="relative z-20 mx-auto flex max-w-[400px] flex-wrap items-center justify-center gap-20 bg-triangleImg  bg-center bg-no-repeat">
      {allSelections.map((selection) => {
        return (
          <a
            className="relative z-10 flex items-center"
            key={selection.name}
            onClick={() => handleSelection(selection.name)}
          >
            <button
              className={` bg-${selection.name}Gradient flex h-36 w-36 items-center justify-center rounded-full`}
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
