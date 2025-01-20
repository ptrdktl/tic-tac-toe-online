import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextMove(currentMove, playersCount) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);

  const nextMove = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMove] ?? slicedMoveOrder[0];
}

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove, playersCount);

  function handleCellClick(index) {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          index === i ? lastGameState.currentMove : cell,
        ),
      };
    });
  }

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}
