import { GameSymbol } from "./game-symbol";
import styles from "./game.module.css";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className="mb-3">Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-3">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-3">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
