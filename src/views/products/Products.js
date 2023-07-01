import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import {
  createProductService,
  updateProductService,
} from "../../services/services";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Products = ({ pageTitle }) => {
  const location = useLocation();
  const stateParams = location?.state;
  console.log("stateParams***", stateParams);
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
  } = stateParams || [
    {
      title: "",
      description: "",
      imagePath: "",
      rating: "",
      totalRatings: "",
      price: "",
      listPrice: "",
      discount: "",
      link: "",
    },
  ];
  const [productList, setProductList] = useState({
    title: title || "",
    description: description || "",
    imagePath: imagePath || "",
    rating: rating || "",
    totalRatings: totalRatings || "",
    price: price || "",
    listPrice: listPrice || "",
    discount: discount || "",
    link: link || "",
  });
  const formHandler = (e) => {
    setProductList({
      ...productList,
      [e.target.name]: e.target.value,
    });
  };
  const getProductHandler = (name) => {
    console.log("name", name);
    name === "Create Product"
      ? createProductService(productList)
      : updateProductService({ ...productList, _id: _id });
  };
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Row>
                <Col className="pr-1" md="12">
                  <FormGroup>
                    <label>Title</label>
                    <Input
                      defaultValue=""
                      onChange={formHandler}
                      name="title"
                      type="text"
                      value={productList?.title}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="12">
                  <FormGroup>
                    <label>Description</label>
                    <Input
                      defaultValue=""
                      name="description"
                      onChange={formHandler}
                      type="textarea"
                      value={productList.description}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="2">
                  <FormGroup>
                    <label>Rating</label>
                    <Input
                      defaultValue=""
                      name="rating"
                      onChange={formHandler}
                      type="text"
                      value={productList.rating}
                    />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="2">
                  <FormGroup>
                    <label>Total Ratings</label>
                    <Input
                      defaultValue=""
                      name="totalRatings"
                      onChange={formHandler}
                      type="text"
                      value={productList.totalRatings}
                    />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="2">
                  <FormGroup>
                    <label>Price</label>
                    <Input
                      defaultValue=""
                      name="price"
                      onChange={formHandler}
                      type="text"
                      value={productList.price}
                    />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="2">
                  <FormGroup>
                    <label>List Price</label>
                    <Input
                      defaultValue=""
                      name="listPrice"
                      onChange={formHandler}
                      type="text"
                      value={productList.listPrice}
                    />
                  </FormGroup>
                </Col>
                <Col className="pr-1" md="2">
                  <FormGroup>
                    <label>Discount</label>
                    <Input
                      defaultValue=""
                      name="discount"
                      onChange={formHandler}
                      type="text"
                      value={productList.discount}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Image Path</label>
                    <Input
                      defaultValue=""
                      name="imagePath"
                      onChange={formHandler}
                      type="text"
                      value={productList.imagePath}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Link</label>
                    <Input
                      defaultValue=""
                      name="link"
                      onChange={formHandler}
                      type="url"
                      value={productList.link}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <div className="update ml-auto mr-auto">
                  <Button
                    className="btn-round"
                    color="primary"
                    type="button"
                    onClick={(e) =>
                      getProductHandler(
                        stateParams ? "Update Product" : "Create Product"
                      )
                    }
                  >
                    {stateParams ? "Update Product" : "Create Product"}
                  </Button>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
