import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./components/gameSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
