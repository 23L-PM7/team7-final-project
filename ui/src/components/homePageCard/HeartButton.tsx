import { FaRegHeart } from "react-icons/fa";
export function HeartButton() {
  function toggleFavorite() {
    return;
  }
  return (
    <div
      onClick={toggleFavorite}
      className="text-white text-xl relative hover:opacity-80 transition cursor-pointer"
    >
      <FaRegHeart />
    </div>
  );
}
