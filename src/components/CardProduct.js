import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ id, title, desc, image }) => {
  return (
    <div style={styles.wrapCard}>
      <Link to={`/products/${id}`}>
        <div className="row">
          <div className="col-6">
            <div style={styles.wrapText}>
              <h2 style={styles.textCard}>{title}</h2>
              <p style={styles.descCard}>{desc}</p>
            </div>
          </div>
          <div className="col-6">
            <div style={styles.wrapImgCard}>
              <img
                style={styles.imgCard}
                src={`assets/image/product/${image}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  wrapCard: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    height: "102%",
    position: "relative",
    boxShadow: "rgb(0 0 0 / 14%) 0px 2px 16px"
  },
  wrapText: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    padding:16
  },
  textCard: {
    fontSize: 20,
    color: '#35405a',
    fontWeight: "bold",
  },
  descCard: {
      color: '#9ca9b4',
      fontSize: 14
  },
  wrapImgCard: {
    backgroundColor: "#cfdce8",
    borderRadius: 16,
    padding: 16,
  },
  imgCard: {
    margin: "16px 0px",
    width: "100%",
  },
};

export default CardProduct;
