import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Index";
import PageBlogs from "./pages/PageBlogs";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import ContactPage from "./pages/ContactPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsCatPage from "./pages/ProductsCatPage";
import CheckOutDetailsPage from "./pages/CheckOutDetailsPage";
import CheckOutPolicy from "./pages/CheckOutPolicy";
import PaymentPage from "./pages/PaymentPage";
import ServiceInCityPage from "./pages/ServiceInCityPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<PageBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/products/:category/:subCategory"
            element={<ProductsCatPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/booknow/:productSlug"
            element={<ProductDetailsPage />}
          />
          <Route path="/checkOut" element={<CheckOutDetailsPage />} />
          <Route path="/checkout-policy/:id" element={<CheckOutPolicy />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/service/:cityId" element={<ServiceInCityPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
