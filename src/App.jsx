import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import Header from "./pages/header/Header";
import ProductsDetails from "./pages/products/ProductsDetails";
import Contact from "./pages/contact/contact";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/cart/Cart";

function App() {
  const isLoading = false;

  return (
    <>
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Header />
            <ScrollToTop />
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route index element={<Home />} />

                <Route path="/product/:id" element={<ProductsDetails />} />
                <Route path="/cart" element={<CartPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Contact />
          </>
        )}
      </>
    </>
  );
}

export default App;
