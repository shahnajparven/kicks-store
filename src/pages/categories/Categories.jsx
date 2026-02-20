// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ArrowUpRight } from "lucide-react";

// const categories = [
//   {
//     id: 1,
//     title: "LIFESTYLE SHOES",
//     image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
//   },
//   {
//     id: 2,
//     title: "BASKETBALL SHOES",
//     image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
//   },
//   {
//     id: 3,
//     title: "RUNNING SHOES",
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//   },
// ];

// const CategorySlider = () => {
//   return (
//     <div className="w-full pl-6 lg:pl-16 pt-12 bg-[#232321]">
//       <h2 className="text-white text-5xl font-bold mb-8">
//         CATEGORIES
//       </h2>
// <div className="bg-white rounded-tl-[34px] ">
//      <Swiper
//   modules={[Navigation]}
//   spaceBetween={0}
//   slidesPerView={1}
//   navigation
//   breakpoints={{
//     768: {
//       slidesPerView: 2,
//     },
//   }}
// >
//   {categories.map((cat, index) => (
//     <SwiperSlide key={cat.id}>
//       <div className="relative overflow-hidden group">

//         {/* Image */}
//         <div>
//           <img
//             src={cat.image}
//             alt={cat.title}
//             className={`
//               w-full 
//               h-[300px] 
//               md:h-[400px] 
//               object-cover
//               ${index === 0 ? "rounded-tl-[34px]" : ""}
//             `}
//           />
//         </div>

//         {/* Title */}
//         <div className="absolute bottom-8 left-8">
//           <h3 className="text-3xl font-bold text-[#232321]">
//             {cat.title}
//           </h3>
//         </div>

//         {/* Arrow Button */}
//         <div className="absolute bottom-8 right-8">
//           <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-lg">
//             <ArrowUpRight size={22} />
//           </div>
//         </div>

//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>

//     </div>
//     </div>
//   );
// };

// export default CategorySlider;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpRight } from "lucide-react";
import { IoIosArrowBack ,IoIosArrowForward} from "react-icons/io";

const categories = [
  {
    id: 1,
    title: "LIFESTYLE SHOES",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
  {
    id: 2,
    title: "BASKETBALL SHOES",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  },
  {
    id: 3,
    title: "RUNNING SHOES",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
];

const CategorySlider = () => {
  return (
    <div className="w-full pl-6 lg:pl-16 pt-12 bg-[#232321]">

      {/* Title + Custom Arrows */}
      <div className="flex items-center justify-between mb-8 pr-6">
        
        <h2 className="text-white text-5xl font-bold">
          CATEGORIES
        </h2>

        <div className="flex gap-3">
          <button className="custom-prev bg-white hover:bg-[#b1b1ac] hover:text-white text-black w-8 h-8 rounded-lg flex items-center justify-center">
            <IoIosArrowBack  size={15} />
          </button>
          <button className="custom-next bg-white text-black hover:bg-[#b1b1ac] hover:text-white w-8 h-8 rounded-lg flex items-center justify-center">
            <IoIosArrowForward  size={15} />
          </button>
        </div>

      </div>

      <div className="bg-white rounded-tl-[34px]">

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={cat.id}>
              <div className="relative overflow-hidden group">
                
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`w-full h-[300px] md:h-[400px] object-cover ${
                    index === 0 ? "rounded-tl-[34px]" : ""
                  }`}
                />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold text-[#232321]">
                    {cat.title}
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8">
                  <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-lg">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default CategorySlider;
