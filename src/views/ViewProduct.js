import React, { useEffect, useState } from "react";
import Products from "./products/Products";
import { CardHeader, Col, Container, Row } from "reactstrap";
import CardView from "./cards/CardView";
import { getProducts } from "services/services";
import { getDeleteProduct } from "services/services";

const ViewProduct = () => {
  const [allProducts, setAllProducts] = useState();
  const getList = async () => {
    const products = await getProducts();
    setAllProducts(products);
  };

  useEffect(() => {
    getList();
  }, []);

  const deleteHandler = (id) => {
    console.log("_id", id);
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete the item!")) {
      getDeleteProduct({ _id: id }).then((res) => {
        console.log("res", res);
        if (
          res.statusText === "Created" ||
          res.status === 200 ||
          res.status === 201 ||
          res.statusText === "OK"
        ) {
          setAllProducts(allProducts.filter((list) => list._id !== id));
        }
      });
    }
  };
  return (
    <div className="content">
      {/* {JSON.stringify(allProducts)} */}
      <Container>
        <Row>
          {/* <Card>
            <Products pageTitle="View Product" />
          </Card> */}
          {allProducts?.map((list) => {
            return (
              <CardView
                key={list._id}
                cardDetails={list}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ViewProduct;
