import { productsData } from "./../data/UspData";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import blogsCrumbBg from "./../assets/images/breadcrumb/blogscrumb.jpg";

const ProductsCatPage = () => {
  const { category, subCategory } = useParams();

  const filteredProducts = productsData.filter(
    (product) =>
      product.category === category.toLowerCase() &&
      product.subCategory.toLowerCase() === subCategory.toLowerCase()
  );
  const formatText = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <section
        className="page_breadcrumb"
        style={{
          background: `rgba(0, 0, 0, 0.6) url(${blogsCrumbBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container">
          <h2 className="fw-bold text-center main_heading mb-4">
            {formatText(subCategory)}
          </h2>
          <BreadCrumbs crumbParentTitle="Products Page" />
        </div>
      </section>
      <section className="productsPage py-5">
        <div className="container">
          <h2 className="mb-5 heading-clr fw-bold">
            {formatText(category)}-{formatText(subCategory)}
          </h2>
          <div className="row g-4 justify-content-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-lg-4" key={product.id}>
                  <ProductCard productsData={product} />
                </div>
              ))
            ) : (
              <p className="text-center">No products found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsCatPage;
