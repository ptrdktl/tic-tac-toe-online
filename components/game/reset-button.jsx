export function ResetButton({ onClick }) {
  return (
    <button
      className="cursor-pointer mt-3 bg-transparent border border-black py-1 px-2 hover:text-white hover:bg-black"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}
