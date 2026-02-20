
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";
// import { FiArrowUpRight } from "react-icons/fi";

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
//     <div className="w-full pl-4 md:pl-8 pt-12 bg-[#232321]">

//       {/* Title + Custom Arrows */}
//       <div className="flex items-center justify-between mb-8 pr-6">
        
//         <h2 className="text-white text-[24px] md:text-[74px] font-bold">
//           CATEGORIES
//         </h2>

//         <div className="flex gap-3">
//           <button className="custom-prev bg-white hover:bg-[#b1b1ac] hover:text-white text-black w-8 h-8 rounded-lg flex items-center justify-center">
//             <IoIosArrowBack  size={15} />
//           </button>
//           <button className="custom-next bg-white text-black hover:bg-[#b1b1ac] hover:text-white w-8 h-8 rounded-lg flex items-center justify-center">
//             <IoIosArrowForward  size={15} />
//           </button>
//         </div>

//       </div>

//       <div className="bg-white rounded-tl-[34px]">

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//             },
//           }}
//         >
//           {categories.map((cat, index) => (
//             <SwiperSlide key={cat.id}>
//               <div className="relative overflow-hidden group">
                
//                 <img
//                   src={cat.image}
//                   alt={cat.title}
//                   className={`w-full h-[300px] md:h-[400px] object-cover ${
//                     index === 0 ? "rounded-tl-[34px]" : ""
//                   }`}
//                 />

//                 <div className="absolute bottom-8 left-8">
//                   <h3 className=" text-[24px] md:text-[36px] font-bold text-[#232321]">
//                     {cat.title}
//                   </h3>
//                 </div>

//                 <div className="absolute bottom-8 right-8">
//                   <div className="bg-black text-white w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-lg">
//                     <FiArrowUpRight className="text-base md:text-lg lg:text-xl" />

//                   </div>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </div>
//   );
// };

// export default CategorySlider;


import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full pl-4 md:pl-8 pt-12 bg-[#232321]">

      {/* Title + Custom Arrows */}
      <div className="flex items-center justify-between mb-8 pr-6">
        <h2 className="text-white text-[24px] md:text-[74px] font-bold">
          CATEGORIES
        </h2>

        <div className="flex gap-3">
          <button
            ref={prevRef}
            className="bg-white hover:bg-[#b1b1ac] hover:text-white text-black w-8 h-8 rounded-lg flex items-center justify-center"
          >
            <IoIosArrowBack size={15} />
          </button>
          <button
            ref={nextRef}
            className="bg-white text-black hover:bg-[#b1b1ac] hover:text-white w-8 h-8 rounded-lg flex items-center justify-center"
          >
            <IoIosArrowForward size={15} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-tl-[34px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay initialization to fix custom buttons
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
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
                  <h3 className="text-[24px] md:text-[36px] font-bold text-[#232321]">
                    {cat.title}
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8">
                  <div className="bg-black text-white w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-lg">
                    <FiArrowUpRight className="text-base md:text-lg lg:text-xl" />
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

