
import Banner from "./banner/Banner";
import CategorySlider from "./categories/Categories";
import Contact from "./contact/contact";
import Products from "./products/Products";
import Review from "./reviews/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <CategorySlider/>
      <Review/>
      <Contact/>
    </div>
  );
};

export default Home;
