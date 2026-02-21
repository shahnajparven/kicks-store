
// import { Link } from "react-router-dom";


// const Cards = ({ product }) => {
//   const isDiscount = product?.isDiscount || false;



//   return (
//    <>
//       <div className="rounded-3xl overflow-hidden">
        
//         {/* Product Image */}
//         <div className="rounded-[24px] overflow-hidden bg-white p-1.5 transition duration-300 group-hover:scale-[1.02]">
//           <div className="relative">
            
//             {/* Image */}
//             <img
//               src={product.images?.[0] || undefined}
//               alt={product.title}
//               className="
//                 w-full 
//                 h-[180px] 
//                 sm:h-[220px] 
//                 md:h-[334px] 
//                 object-cover 
//                 rounded-3xl
//               "
//             />

//             {/* Badge */}
//             <div className="absolute top-0 left-0">
//               <div
//                 className={`
//                   text-[12px] 
//                   px-3 sm:px-4 
//                   py-2 sm:py-3
//                   rounded-br-[34px] 
//                   rounded-tl-[20px]
//                   font-medium
//                   ${isDiscount ? "bg-yellow-400 text-black" : "bg-[#4A69E2] text-white"}
//                 `}
//               >
//                 {isDiscount ? "10% OFF" : "New"}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Title */}
//       <div className="py-3 md:py-4 text-base md:text-lg font-medium text-[#232321] md:uppercase min-h-[60px] md:min-h-[100px]">
//         {product.title}
//       </div>

//       {/* Button */}
//        <Link to={`/product/${product.id}`} className="group block w-full">
//       <button className="
//         w-full 
//         text-sm 
//         rounded-xl 
//         bg-[#232321] 
//         text-white 
//         px-2 md:px-6 
//         py-2 md:py-3 
//         transition 
//         hover:bg-[#4A69E2]
//       ">
//         View Product -{" "}
//         <span className="text-[#FFA52F]">
//           ${product.price}
//         </span>
//       </button>
//     </Link>
//     </>
//   );
// };

// export default Cards;
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const isDiscount = product?.isDiscount || false;

  return (
    <div className="w-full h-full flex flex-col">
      {/* Product Image */}
      <div className="rounded-3xl overflow-hidden">
        <div className="rounded-[24px] overflow-hidden bg-white p-1.5 transition duration-300 group-hover:scale-[1.02]">
          <div className="relative">
            <img
              src={product.images?.[0] || undefined}
              alt={product.title}
              className="
                w-full 
                h-[180px] 
                sm:h-[220px] 
                md:h-[334px] 
                object-cover 
                rounded-3xl
              "
            />

            {/* Badge */}
            <div className="absolute top-0 left-0">
              <div
                className={`
                  text-[12px] 
                  px-3 sm:px-4 
                  py-2 sm:py-3
                  rounded-br-[34px] 
                  rounded-tl-[20px]
                  font-medium
                  ${
                    isDiscount
                      ? "bg-yellow-400 text-black"
                      : "bg-[#4A69E2] text-white"
                  }
                `}
              >
                {isDiscount ? "10% OFF" : "New"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="py-3 md:py-4 text-base md:text-lg font-medium text-[#232321] md:uppercase min-h-[60px] md:min-h-[100px]">
        {product.title}
      </div>

      {/* Button */}
      <Link to={`/product/${product.id}`} className="mt-auto block w-full">
        <button
          className="
            w-full 
            text-sm 
            rounded-xl 
            bg-[#232321] 
            text-white 
            px-2 md:px-6 
            py-2 md:py-3 
            transition 
            hover:bg-[#4A69E2]
          "
        >
          View Product -{" "}
          <span className="text-[#FFA52F]">
            ${product.price}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Cards;
