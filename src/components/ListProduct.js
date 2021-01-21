import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import { InputGroup, FormControl } from "react-bootstrap";

const ListProduct = () => {
  const [products, setProducts] = useState({
    loading: false,
    data: [],
    error: false,
  });
  const [cari, setCari] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setProducts({
      loading: true,
      data: [],
      error: false,
    });
    const response = await fetch(
      `https://6007d065309f8b0017ee4d3a.mockapi.io/rakkishoppu/listDesign`
    );
    if (!response.ok) {
      setProducts({
        loading: false,
        data: [],
        error: true,
      });
    } else {
      const data = await response.json();
      setProducts({
        loading: false,
        data: data,
        error: false,
      });
    }
  };

  const updateSearch = (e) => {
    setCari(e.target.value);
  };

  let content = null;

  if (products.error) {
    content = <p>Error cuy</p>;
  }
  if (products.loading) {
    content = <h2>Loading</h2>;
  }
  if (products.data) {
    content = (
      <div className="row" style={{ marginTop: 48 }}>
        {products.data
          .filter((products) => products.nameItem.includes(cari))
          .map((product) => (
            <div key={product.idItem} className="col-md-12 col-12 mb-4">
              <CardProduct
                id={product.idItem}
                title={product.nameItem}
                desc={product.descItem}
                image={product.imageItem}
              />
            </div>
          ))}
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <InputGroup className="mb-5">
        <FormControl
          id="inlineFormInputGroup"
          onChange={updateSearch}
          placeholder="Search Design"
          size="lg"
        />
      </InputGroup>
      {content}
    </div>
  );
};

const styles = {
  container: {
    padding: "0px 16px",
    position: "relative",
    top: -260,
  },
};

export default ListProduct;
