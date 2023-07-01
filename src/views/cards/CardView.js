import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Col,
} from "reactstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";

function CardView({ cardDetails }) {
  // console.log("cardDetails", cardDetails);
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
    console.log("cardDetails", cardDetails);
    // navigate("/admin/add-product");
    navigate("/admin/add-product", {
      state: cardDetails,
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
              height: "200px",
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
            <Button variant="primary" onClick={editHandler}>
              Edit
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default CardView;
