import React, { useEffect, useState } from "react";
import Products from "./products/Products";
import { CardHeader, Col, Container, Row } from "reactstrap";
import CardView from "./cards/CardView";
import { getProducts } from "services/services";

const ViewProduct = () => {
  const [allProducts, setAllProducts] = useState();
  const getList = async () => {
    const products = await getProducts();
    setAllProducts(products);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="content">
      {/* {JSON.stringify(allProducts)} */}
      <Container>
        <Row>
          {/* <Card>
            <Products pageTitle="View Product" />
          </Card> */}
          {allProducts?.map((list) => {
            return <CardView key={list._id} cardDetails={list} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ViewProduct;
