import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://6007d065309f8b0017ee4d3a.mockapi.io/rakkishoppu/listDesign/${id}`
    );
    const data = await response.json();
    setProduct(data);
  };

  return (
    <div style={styles.container}>
      <Header showIcon />
      <div style={styles.wrapImage}>
        <img
          style={styles.image}
          src={`../assets/image/product/${product.imageItem}`}
          alt=""
        />
      </div>
      <div style={styles.wrapContent}>
        <div style={styles.wrapTitle}>
          <span style={styles.span}>Kode Desain</span>
          <h2 style={styles.Title}>{product.nameItem}</h2>
        </div>
        <div style={styles.wrapDesc}>
          <span style={styles.span}>Deskripsi Desain</span>
          <p style={styles.Title}>{product.descItem}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    diplay: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#35405A",
  },
  iconBack: {
    position: "absolute",
    padding: 16,
  },
  wrapImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px 24px",
    position: "relative",
  },
  image: {
    width: "70%",
  },
  wrapContent: {
    backgroundColor: "white",
    padding: "24px 24px",
    borderRadius: "32px 32px 0px 0px",
    position: "relative",
  },
  wrapTitle : {
    marginBottom : 16
  },
  span: {
    color: "#9EB1DE",
    fontSize: 14
  },
  Title: {
    color: "#35405A",
    margin: "4px 0px",
  },
};

export default ProductDetail;
