import { FaStar } from "react-icons/fa";
export const StarRating: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="flex text-yellow-500 space-x-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < count ? "opacity-100" : "opacity-30"}
          size={18}
        />
      ))}
    </div>
  );
};
