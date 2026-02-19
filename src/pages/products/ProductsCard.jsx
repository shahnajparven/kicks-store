import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction";
import Cards from "./Cards";
import { useEffect } from "react";

// const products = [
//   {
//     id: 1,
//     passage1: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     image: [
//       { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
//       { url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
//       { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" }
//     ]
//   },
//   {
//     id: 2,
//    passage1: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     image: [
//       { url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
//       { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
//       { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" }
//     ]
//   },
//   {
//     id: 3,
//     passage1: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     image: [
//       { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
//       { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
//       { url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" }
//     ]
//   },
//   {
//     id: 4,
//     passage1: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//     image: [
//       { url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       { url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
//       { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" }
//     ]
//   }
// ];

const ProductsCard = () => {
    const dispatch = useDispatch();

    const {
    products,
    loading,
    error,

  } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error]);


  console.log(products)
  return (
    <div className='p-8'>
<div className='flex justify-between items-end'>
        <h3 className='text-[75px] font-bold w-[50%] text-[#232321]'>DON'T MISS OUT NEW DROPS</h3>
        <button className="text-[14px] rounded-lg bg-[#4A69E2] text-white px-6 py-2 lg:py-3 hover:bg-[#232321] hover:text-white transition">
              SHOP NEW DROPS
            </button>
    </div>
     <div className="py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
 {/* {products && products.map((product) => ( */}
 {products?.slice(6, 10).map((product) => (
  <Cards key={product._id} product={product} />
))}

</div>
    </div>
  )
}

export default ProductsCard