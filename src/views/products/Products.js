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
import ViewProduct from "../ViewProduct";

const Products = ({ pageTitle }) => {
  const navigate = useNavigate();

  const addProductPage = () => {
    navigate("/admin/add-product", {
      state: {
        parentPage: "/admin/products",
        currentPage: "Add Product",
        cardDetails: {},
      },
      name: "Add Product",
    });
  };
  return (
    <div className="content">
      <row>
        <Col className="text-right">
          <Button
            className="btn-round btn btn-primary m-0 mb-3"
            onClick={addProductPage}
          >
            Add Product
          </Button>
        </Col>
      </row>
      <Row>
        <Col md="12">
          <ViewProduct />
        </Col>
      </Row>
    </div>
  );
};

export default Products;
