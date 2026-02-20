import Banner from "./banner/Banner";
import CategorySlider from "./categories/Categories";
import ProductsCard from "./products/ProductsCard";
import Review from "./reviews/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductsCard />
      <CategorySlider/>
      <Review/>
    </div>
  );
};

export default Home;
