// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../../actions/productAction";
// import Cards from "./Cards";
// import { useEffect, useRef } from "react";
// import Slider from "react-slick";


// const ProductsCard = () => {
//   const dispatch = useDispatch();
// const sliderRef = useRef(null);

// const sliderSettings = {
//   dots: false,
//   infinite: true,
//    arrows: false, 
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: 3 },
//     },
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 2 },
//     },
//     {
//       breakpoint: 640,
//       settings: { 
//         slidesToShow: 2,  
//         // slidesPerRow: 2,   
//         rows: 2,     
//     },
//     },
//   ],
// };
  

//   const { products, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     dispatch(getProduct());
//   }, [dispatch, error]);






//   return (
//     <div className="py-8">
//     <Slider ref={sliderRef} {...sliderSettings}>
//       {products?.map((product) => (
//         <div key={product._id} className="px-2">
//           <Cards product={product} />
//         </div>
//       ))}
//     </Slider>
//     </div>
//   );
// };
// export default ProductsCard;

import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../../actions/productAction";
import Cards from "./Cards";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const ProductsCard = () => {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
    
  }, [dispatch, error]);




useEffect(() => {
  if (products && products.length) {
    setMounted(true);
    setTimeout(() => window.dispatchEvent(new Event("resize")), 100);
  }
}, [products]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,   
          slidesPerRow: 2,  
          rows: 2,          
        },
      },
    ],
  };


  return (
    <div className="py-8 w-full">
  {mounted && (
    <Slider ref={sliderRef} {...sliderSettings}>
      {products.map((product) => (
        <div key={product._id} className="px-2">
          <Cards product={product} />
        </div>
      ))}
    </Slider>
  )}
</div>

  );
};

export default ProductsCard;
