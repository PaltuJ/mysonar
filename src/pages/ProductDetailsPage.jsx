import { useNavigate, useParams } from "react-router-dom";
import { productsData } from "../data/UspData";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import BreadCrumbs from "../components/BreadCrumbs";
import blogsCrumbBg from "./../assets/images/breadcrumb/blogscrumb.jpg";

const ProductDetailsPage = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const product = productsData.find((p) => slugify(p.title) === productSlug);

  const handleBookNow = () => {
    navigate("/checkOut", { state: { product } });
  };

  if (!product) {
    return (
      <Container className="text-center my-5">
        <h3>Product not found</h3>
      </Container>
    );
  }

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
            {product.title}
          </h2>
          <BreadCrumbs
            crumbParentTitle="Products Page"
            custumBreadcrumb={product.title}
          />
        </div>
      </section>

      <section className="productDetailsPage my-5" onClick={handleBookNow}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={5}>
              <div className="details_img">
                <Image
                  src={product.image}
                  fluid
                  className="details_productImg"
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="details_text">
                <h2 className="fw-bold heading-clr">{product.title}</h2>
                <p className="text_pink">{product.slogan}</p>
                <p className="desc">
                  <span>{product.description}</span>
                </p>
                <div className="details_price_area bg-white p-3 w-75 mb-3">
                  <p className="d-flex justify-content-between w-75">
                    <strong>Price:</strong> ₹
                    {product.price.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <p className="d-flex justify-content-between w-75">
                    <strong>Service Charge:</strong> ₹
                    {product.serviceCharge.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <p className="d-flex justify-content-between w-75">
                    <strong>Delivery Charge:</strong> ₹
                    {product.deleveryCharge.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <hr />
                  <p className="d-flex justify-content-between w-75">
                    <strong>
                      Total Price{" "}
                      <span className="tax_include_text">
                        (Inclusive of all Taxes)
                      </span>
                      :
                    </strong>{" "}
                    ₹
                    {(
                      product.price +
                      product.serviceCharge +
                      product.deleveryCharge
                    ).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <Button className="page-btn text-center">Book Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailsPage;
