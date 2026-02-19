import { Link } from "react-router-dom"


const Cards = ({ product }) => {
  return (
<Link to={`/product/${product.id}`} className="group block">
      <div className=" rounded-3xl overflow-hidden">

        {/* 🔵 Curved New Badge */}
        

        {/* Product Image */}
        <div className=" rounded-[24px] overflow-hidden bg-white p-2 group-hover:scale-105 transition duration-300">
         <div className="relative">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-[302px] h-[334px] object-cover rounded-3xl "
          />
          <div className="absolute top-0 left-0">
          <div className="bg-[#4A69E2] text-white text-[12px] px-4 py-3
                          rounded-br-[34px] rounded-tl-[20px] font-medium">
            New
          </div>
        </div>
        </div>
        </div>
      </div>

      {/* Title */}
      <div className="h-[100px] py-4 text-lg font-medium text-[#232321]">
        {product.title}
      </div>

      {/* Button */}
      <button className="w-full text-sm rounded-xl bg-[#232321] text-white px-6 py-3 hover:bg-[#4A69E2] transition">
        View Product - <span className="text-[#FFA52F]">${product.price}</span>
      </button>
    </Link>
  )
}

export default Cards