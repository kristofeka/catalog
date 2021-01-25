import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, NavbarBottom } from "../components";

import { PRODUCTDETAIL } from "../constans/colors";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [size, setSize] = useState({
    sizes: false,
    ukuran: "0",
    tinggi: "0",
    lebar: "0",
    sisi: "0",
  });

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

  const sizeChartA = () => {
    setSize({
      sizes: true,
      ukuran: "A",
      tinggi: "18",
      lebar: "18",
      sisi: "10",
    });
  }
  const sizeChartB = () => {
    setSize({
      sizes: true,
      ukuran: "B",
      tinggi: "20",
      lebar: "25",
      sisi: "10",
    });
  }
  const sizeChartC = () => {
    setSize({
      sizes: true,
      ukuran: "C",
      tinggi: "22",
      lebar: "30",
      sisi: "10",
    });
  }
  const sizeChartD = () => {
    setSize({
      sizes: true,
      ukuran: "D",
      tinggi: "22",
      lebar: "35",
      sisi: "10",
    });
  }
  
  const sendOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=6281382086321&text=Pakai desain yang ini ya ${window.location.href}`
    );
  };

  return (
    <div style={styles.container}>
      <Header showIcon title="Detail Produk" />
      <div style={styles.wrapImage}>
        <div style={styles.wrapImageText}>
          <h2 style={styles.Title}>
            <span style={styles.span}>Kode Desain</span>
            {product.nameItem}
          </h2>
          <div style={size.sizes ? {} : { display: "none" }}>
            <p style={styles.textChartNumber}>Ukuran {size.ukuran}</p>
            <div style={styles.textChartNumber}>
              <p style={styles.textChart}>Lebar</p>
              {size.lebar}
            </div>
            <div style={styles.textChartNumber}>
              <p style={styles.textChart}>Sisi</p>
              {size.sisi}
            </div>
            <div style={styles.textChartNumber}>
              <p style={styles.textChart}>Tinggi</p>
              {size.tinggi}
            </div>
          </div>
        </div>
        <img
          style={styles.image}
          src={`../assets/image/product/${product.imageItem}`}
          alt=""
        />
      </div>
      <div style={styles.wrapContentDesc}>
        <span style={styles.span2}>Desain ini bisa digunakan untuk</span>
        <p style={styles.Title2}>{product.descItem}</p>
        <span style={styles.span2}>Pilih ukuran lain</span>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
          <div
            style={{
              padding: "8px 16px",
              background: size.ukuran === "A" ? '#FF76A7' : '#35405a',
              color: "white",
              borderRadius: 4,
              marginRight: 8,
            }}
            onClick= {sizeChartA}
          >
            Size A
          </div>
          <div
            style={{
              padding: "8px 16px",
              background: size.ukuran === "B" ? '#FF76A7' : '#35405a',
              color: "white",
              borderRadius: 4,
              marginRight: 8,
            }}
            onClick= {sizeChartB}
          >
            Size B
          </div>
          <div
            style={{
              padding: "8px 16px",
              background: size.ukuran === "C" ? '#FF76A7' : '#35405a',
              color: "white",
              borderRadius: 4,
              marginRight: 8,
            }}
            onClick= {sizeChartC}
          >
            Size C
          </div>
          <div
            style={{
              padding: "8px 16px",
              background: size.ukuran === "D" ? '#FF76A7' : '#35405a',
              color: "white",
              borderRadius: 4,
              marginRight: 8,
            }}
            onClick= {sizeChartD}
          >
            Size D
          </div>
        </div>
      </div>
      <NavbarBottom action={sendOnWhatsApp} />
    </div>
  );
}

const styles = {
  container: {
    diplay: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: PRODUCTDETAIL.background,
    borderRadius: "0px 0px 0px 40px",
  },
  textChart: {
    marginBottom: 8,
    color: PRODUCTDETAIL.textColor,
    fontWeight: 300,
    width: 64,
    display: "inline-block",
  },
  textChartNumber: {
    fontWeight: "bold",
    color: PRODUCTDETAIL.textColor,
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
    height: 300,
    position: "relative",
    backgroundColor: PRODUCTDETAIL.backgroundSecondary,
    borderRadius: "0px 0px 0px 40px",
  },
  wrapImageText: {
    position: "absolute",
    left: 24,
    top: 8,
  },
  image: {
    width: "64%",
    position: "absolute",
    bottom: -54,
    right: 16,
    filter: "drop-shadow(-8px 13px 16px rgba(0,0,0,0.1))",
  },
  wrapContent: {
    backgroundColor: PRODUCTDETAIL.textColor,
    padding: "24px 24px",
    borderRadius: "32px 32px 0px 0px",
    position: "relative",
  },
  span: {
    fontWeight: 300,
    color: PRODUCTDETAIL.textColor,
    display: "block",
    fontSize: 14,
  },
  span2: {
    color: PRODUCTDETAIL.textSecondary,
    display: "block",
    fontSize: 14,
  },
  Title: {
    color: PRODUCTDETAIL.textTitle,
    margin: "4px 0px",
    marginBottom: 24,
  },
  Title2: {
    color: PRODUCTDETAIL.color,
    margin: "4px 0px",
    marginBottom: 24,
  },
  wrapContentDesc: {
    padding: 24,
    top: "60%",
    position: "absolute",
  },
};

export default ProductDetail;
