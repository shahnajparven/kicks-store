import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpRight } from "lucide-react";

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
    <div className="w-full px-6 lg:px-16 py-12 bg-[#232321]">
      <h2 className="text-white text-5xl font-bold mb-8">
        CATEGORIES
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="relative bg-[#EDEDED] rounded-[32px] overflow-hidden group">

              {/* Image */}
              <div className="h-[450px] flex items-center justify-center p-8">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-[#232321]">
                  {cat.title}
                </h3>
              </div>

              {/* Arrow Button */}
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
  );
};

export default CategorySlider;
