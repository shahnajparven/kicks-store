
import { Star } from "lucide-react";


const Card = ({ product }) => {

  const isDiscount = product?.isDiscount || false;
  const rating = product?.rating || 4; // default rating

  return (
    // <Link href={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
{/* Content */}
        <div className="p-6">
          <div className="w-full flex items-center justify-between">
  
  <div>
    <h3 className="text-sm font-semibold text-gray-800 truncate">
      {product.title}
    </h3>

    <p className="text-xs text-gray-500 line-clamp-2 mt-1">
      {product.description}
    </p>
  </div>

  {/* Profile Image */}
  <div className="flex-shrink-0">
    <img
      src={product.profile}
      alt="profile"
      className="w-12 h-12 rounded-full object-cover"
    />
  </div>

</div>

          
          {/* Rating Stars (Replaces Price) */}
        <div className="flex items-center gap-1 py-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className={`${
                index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({rating}.0)
          </span>
        </div>

        </div>

        {/* Product Image */}
        <div className="h-[229px] md:h-[325px] w-full overflow-hidden">
          <img
            src={product.image || "/placeholder.png"}
            alt='Review image'
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        
      </div>
    // </Link>
  );
};

export default Card;
