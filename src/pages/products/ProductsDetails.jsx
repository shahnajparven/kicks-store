import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";

const sizes = [
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
];

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails,
  );

  useEffect(() => {
    if (id) dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.sizes?.length) setSelectedSize(product.sizes[0]);
    if (product?.images?.length) setMainImage(product.images[0]);
  }, [product]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!product) return null;

  const mobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
        {/* LEFT SIDE - Desktop grid + Mobile slider */}
        <div>
          {/* Desktop view: grid */}
          <div className="hidden md:grid grid-cols-2 gap-2">
            {product.images?.map((img, i) => (
              <div key={i} className="bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  onClick={() => setMainImage(img)}
                />
              </div>
            ))}
          </div>

          {/* Mobile view: slider */}
          <div className="md:hidden">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[300px] object-cover rounded-xl mb-2"
            />
            <div className="flex gap-2 overflow-x-auto">
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === img ? "border-black" : "border-gray-200"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PRODUCT INFO */}
        <div className="w-full max-w-md lg:max-w-none">
          <div className="my-2">
            <button className="bg-[#4A69E2] text-white px-4 py-2 text-sm rounded-xl">
              New Release
            </button>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mt-4 uppercase">
            {product.title}
          </h1>
          <p className="text-blue-600 text-xl font-semibold mt-2">
            ${product.price}.00
          </p>

          {/* Color */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#253043] border border-white ring-2 ring-black cursor-pointer"></div>

              <div className="w-6 h-6 rounded-full bg-[#707E6E] cursor-pointer"></div>
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <div className="flex justify-between">
              <h3 className="font-semibold mb-3">Size</h3>
              <h3 className="font-semibold mb-3 text-sm text-[#232321] cursor-pointer uppercase underline">
                Size Chart
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-2 rounded-lg ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          {/* <div className="flex gap-2 mt-6 flex-wrap">
            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:opacity-90">
              Add to Cart
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90">
              Buy Now
            </button>
            <div className="bg-black text-white py-3 rounded-lg px-4 cursor-pointer hover:opacity-90">
              <CiHeart size={20} />
            </div>
          </div> */}

          {/* Buttons */}
          <div className=" flex flex-col not-first-of-type:mt-8 ">
            <div className="flex gap-2 py-2">
              <button className="flex-1 bg-black text-white py-3 rounded-lg hover:opacity-90">
                Add to Cart
              </button>
              <div className="bg-black text-white py-3 rounded-lg hover:opacity-90 px-4">
                <CiHeart />
              </div>
            </div>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90">
              Buy Now
            </button>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg">About the Product</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE */}
      <div className="mt-16">
        <h2 className="text-[24px] md:text-[48px] font-bold mb-6">
          You may also like
        </h2>
        <ProductsCard />
      </div>
    </div>
  );
}
