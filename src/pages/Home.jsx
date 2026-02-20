import Banner from "./banner/Banner";
import CategorySlider from "./categories/Categories";
import ProductsCard from "./products/ProductsCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductsCard />
      <CategorySlider/>
    </div>
  );
};

export default Home;
