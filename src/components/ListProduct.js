import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import LoadingContent from "./LoadingContent";
import styled from "styled-components";

import {LISTPRODUCT} from "../constans/colors"

const InputText = styled.input`
  width: 100%;
  height: 48px;
  background: transparent;
  border: none;
  color: ${LISTPRODUCT.iconColor};
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;


const ListProduct = () => {
  const [products, setProducts] = useState({
    loading: false,
    data: [],
    error: false,
  });
  const [cari, setCari] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getData();
  }, []);

  const getData = async () => {
    setProducts({
      loading: true,
      data: false,
      error: false,
    });
    const response = await fetch(
      `https://6007d065309f8b0017ee4d3a.mockapi.io/rakkishoppu/listDesign`
    );
    if (!response.ok) {
      setProducts({
        loading: false,
        data: false,
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

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else setScrolled(false);
  };

  console.log(scrolled);

  let content = null;

  if (products.error) {
    content = <p>Error Cuy</p>;
  }
  if (products.loading) {
    content = (
      <div style={{ marginTop: 48 }}>
        <LoadingContent />
      </div>
    );
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
      <div style={scrolled ? styles.scrolled : styles.scroll}>
        <div style={styles.wrapSearch}>
          <div style={styles.iconSearch}>
            <i className="fas fa-search"></i>
          </div>
          <InputText
            onChange={updateSearch}
            type="text"
            placeholder="Cari desain"
          ></InputText>
        </div>
      </div>
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
  scroll: {
    position: "relative",
  },
  scrolled: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    left: 0,
    padding: "0px 8px 16px 8px",
    background: LISTPRODUCT.background,
    top: 72,
    borderRadius: "0px 0px 8px 8px",
    boxShadow: "rgb(0 0 0 / 26%) 0px 8px 16px",
    transition: 'width 2s ease-in'
  },
  wrapSearch: {
    display: "flex",
    width: "100%",
    padding: "4px 16px",
    background: LISTPRODUCT.backgroundSearch,
    borderRadius: 8,
    alignItems: "center",
  },
  iconSearch: {
    fontSize: "20px",
    color: LISTPRODUCT.iconColor,
    marginRight: 14,
  },
};

export default ListProduct;
