import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../../actions/productAction";
import Cards from "./Cards";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";


const ProductsCard = ({ swiperRef }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
    
  }, [dispatch, error]);

  return (
    <div className="py-8 w-full">
 <Swiper
  modules={[Grid]}
  spaceBetween={20}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}

  breakpoints={{
    0: {
      slidesPerView: 2,   // 2 columns
      grid: {
        rows: 2,          // 2 rows
        fill: "row",
      },
    },
    768: {
      slidesPerView: 3,
      grid: { rows: 1 },
    },
    1024: {
      slidesPerView: 4,
      grid: { rows: 1 },
    },
  }}
>

  {products.map((product) => (
    <SwiperSlide key={product._id}>
      <Cards product={product} />
    </SwiperSlide>
  ))}
</Swiper>


</div>

  );
};

export default ProductsCard;
