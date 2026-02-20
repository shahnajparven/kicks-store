import Card from "./Card";
import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";

import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";

const products = [
  {
    id: 1,
    title: "Good Quality",
    description: "I highly recommend shopping from kicks",
    image: review1,
    profile: profile1,
  },
  {
    id: 2,
    title: "Good Quality",
    description: "I highly recommend shopping from kicks",
    image: review2,
      profile: profile2,
  },
  {
    id: 3,
    title: "Good Quality",
    description: "I highly recommend shopping from kicks",
    image: review3,
      profile: profile3,
  },
];


export default function Review() {
  const loading= false;
  return (
    <div className=" px-4 md:px-8 py-10">
  

 <div className='flex justify-between items-center'>
       <h2 className="text-[#232321] text-[24px] md:text-[74px] font-bold py-4 md:uppercase">
          Reviews
        </h2>
        <button className="text-[14px] rounded-lg bg-[#4A69E2] text-white px-2 md:px-6 py-2 md:py-3 hover:bg-[#232321] hover:text-white transition">
              SEE ALL
            </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
  {products.map((product, index) => (
          <div
            key={product.id}
            className={index === 0 ? "block" : "hidden md:block"}
          >
            <Card product={product} />
          </div>
        ))}
</div>

 
</div>

  );
}
