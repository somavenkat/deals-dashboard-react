import { Card, CardImg, CardBody, CardTitle, Button, Col } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import { getDeleteProduct } from "../../services/services";

function CardView({ cardDetails, deleteHandler }) {
  const {
    title,
    description,
    discount,
    imagePath,
    link,
    listPrice,
    price,
    rating,
    totalRatings,
    _id,
  } = cardDetails;

  const navigate = useNavigate();
  // const history = useHistory();

  const editHandler = () => {
    // navigate("/admin/add-product");
    navigate("/admin/add-product", {
      state: {
        parentPage: "/admin/products",
        currentPage: "Edit Product",
        cardDetails,
      },
      name: "Update Product",
    });
  };
  return (
    <>
      <Col md="3">
        <Card>
          <CardImg
            variant="top"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "scale-down",
              marginLeft: "20px",
            }}
            src={imagePath}
          />
          <CardBody>
            <h5>${price}</h5>
            <p>
              List: <del className="">${price}</del> (<span>${discount}</span>)
            </p>
            <p>
              <Link className="twoLineEllipsis">${link}</Link>
            </p>
            <CardTitle className="twoLineEllipsis">{title}</CardTitle>
            {/* <CardText className="twoLineEllipsis">{description}</CardText> */}
            <Button color="success" size="sm" outline onClick={editHandler}>
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              outline
              onClick={() => deleteHandler(_id)}
            >
              Delete
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default CardView;
