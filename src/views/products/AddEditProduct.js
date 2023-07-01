import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  createProductService,
  updateProductService,
} from "../../services/services";

const AddEditProduct = ({ pageTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const stateParams = location?.state;

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
  } = stateParams.cardDetails || [
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
    if (name === "Add Product") {
      createProductService(productList).then((res) => {
        console.log("data", res);
        if (
          res.statusText === "Created" ||
          res.status === 200 ||
          res.status === 201 ||
          res.statusText === "OK"
        ) {
          navigate("/admin/products");
        }
      });
    } else {
      updateProductService({ ...productList, _id: _id }).then((res) => {
        if (
          res.statusText === "Created" ||
          res.status === 200 ||
          res.status === 201 ||
          res.statusText === "OK"
        ) {
          navigate("/admin/products");
        }
      });
    }
  };
  return (
    <div className="content">
      <Breadcrumb listTag="div">
        <BreadcrumbItem onClick={() => navigate("/admin/products")} tag="a">
          Products
        </BreadcrumbItem>
        <BreadcrumbItem tag="span" active>
          {stateParams.currentPage}
        </BreadcrumbItem>
      </Breadcrumb>
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
                        stateParams.currentPage === "Add Product"
                          ? "Add Product"
                          : "Update Product"
                      )
                    }
                  >
                    {stateParams.currentPage === "Add Product"
                      ? "Add Product"
                      : "Update Product"}
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

export default AddEditProduct;
