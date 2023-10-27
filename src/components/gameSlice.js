import { createSlice } from "@reduxjs/toolkit";
import rockImg from "./../assets/icon-rock.svg";
import paperImg from "./../assets/icon-paper.svg";
import scissorsImg from "./../assets/icon-scissors.svg";

const initialState = {
  userTotalScore: 0,
  userSelection: "",
  compSelection: "",
  winner: "",
  allSelections: [
    {
      name: "paper",
      img: paperImg,
      power: {
        rock: 1,
        scissors: -1,
        paper: 0,
      },
    },
    {
      name: "scissors",
      img: scissorsImg,
      power: {
        rock: -1,
        scissors: 0,
        paper: 1,
      },
    },
    {
      name: "rock",
      img: rockImg,
      power: {
        rock: 0,
        scissors: 1,
        paper: -1,
      },
    },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUserSelection(state, action) {
      state.userSelection = action.payload;
    },
    setCompSelection(state, action) {
      state.compSelection = action.payload;
    },
    decideWinner(state) {
      const { power } = state.allSelections.find(
        (selection) => selection.name === state.userSelection,
      );

      const compPowerValue = power[state.compSelection];
      switch (compPowerValue) {
        case 1:
          state.winner = "user";
          state.userTotalScore += 1;
          break;

        case -1:
          state.winner = "computer";
          break;

        case 0:
          state.winner = "none";
      }
    },
    resetGame(state) {
      state.userSelection = initialState.userSelection;
      state.compSelection = initialState.compSelection;
      state.winner = initialState.winner;
    },
  },
});

export const { setUserSelection, setCompSelection, decideWinner, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;

// Selector functions

export const getCompSelection = (state) => state.game.compSelection;
export const getUserSelection = (state) =>
  state.game.allSelections.find(
    (item) => item.name === state.game.userSelection,
  )?.name;
export const getAllPossibleSelections = (state) => state.game.allSelections;
export const getTotalScore = (state) => state.game.userTotalScore;
export const getResult = (state) => state.game.winner;
