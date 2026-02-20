import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction";
import Cards from "./Cards";
import { useEffect } from "react";

const ProductsCard = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <div className="py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* {products && products.map((product) => ( */}
      {products?.slice(0, 4).map((product) => (
        <Cards key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCard;
