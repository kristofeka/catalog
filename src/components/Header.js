import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  let back = useHistory();
  console.log(props.showIcon);
  return (
    <div style={styles.container}>
      {props.showIcon && 
        <div style={styles.iconBack} onClick={() => back.goBack()}>
          <i className="fas fa-arrow-left"></i>
        </div>
      }
      <p style={styles.brandText}>RAKKISHOPPU</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "24px 16px",
    width: "100%",
  },
  iconBack: {
    fontSize: "20px",
    color: "#FF76A7",
    marginRight: 16,
  },
  brandText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    margin: 0,
  },
};

export default Header;
