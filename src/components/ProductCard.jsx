import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productsData }) => {
  const navigate = useNavigate();
  console.log(productsData);
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <>
      <Card
        className="product_card shadow-sm rounded-4"
        onClick={() => navigate(`/booknow/${slugify(productsData.title)}`)}
      >
        <Card.Img variant="top" src={productsData.image} />
        <Card.Body>
          <Card.Title className="product_title fw-semibold text-center mb-4">
            {productsData.title}
          </Card.Title>
          <Card.Text>{productsData.details}</Card.Text>

          <div className="wrapper d-flex gap-2 justify-content-between">
            <Card.Text className="price_text">
              Price:{" "}
              <span className="fw-bold">
                ₹
                {productsData.price.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </Card.Text>

            <p className="page-btn text-center">Book Now</p>
          </div>
          <Card.Text>
            <span className="tax_include_text mt-2">
              Includes Gold product , piercing service at home and taxes
            </span>
          </Card.Text>
          <div className="desc_wrap my-3 p-3 bg-secondary rounded-3">
            <Card.Text className="desc_text text-center">
              {productsData.description}
            </Card.Text>
            <Card.Text>
              <span className="slogan text-center">{productsData.slogan}</span>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
