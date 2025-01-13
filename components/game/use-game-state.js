import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [getWinnerCell, setWinnerSequence] = useState();

  const toggleCell = (index) => {
    if (cells[index] || getWinnerCell) {
      return;
    }

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setCurrentStep(SYMBOL_O);
    setWinnerSequence();
  };

  const winnerSymbol = getWinnerCell ? cells[getWinnerCell[0]] : undefined;
  const isDraw = !getWinnerCell && cells.filter((value) => value).length === 9;

  return {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  };
}
