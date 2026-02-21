import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions/productAction";

const CategorySlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getCategories());
  }, [dispatch, error]);

  console.log(categories);

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
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  breakpoints={{
    768: { slidesPerView: 2 },
  }}
>

          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              {({ isActive }) => (
                <div className="relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className={`w-full h-[300px] md:h-[400px] object-cover transition-all duration-300 ${
                      isActive ? "rounded-tl-[34px]" : ""
                    }`}
                  />

                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-[24px] md:text-[36px] font-bold text-[#232321]">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="absolute bottom-8 right-8">
                    <div className="bg-black text-white w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-lg">
                      <FiArrowUpRight />
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
