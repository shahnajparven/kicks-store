
import Banner from "./banner/Banner";
import CategorySlider from "./categories/Categories";
import Contact from "./contact/contact";
import ProductsCard from "./products/ProductsCard";
import Review from "./reviews/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductsCard />
      <CategorySlider/>
      <Review/>
      <Contact/>
    </div>
  );
};

export default Home;
