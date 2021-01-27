import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { HEADER } from "../constans/colors";

const Header = (props) => {
  let back = useHistory();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const styles = {
    wrapHeader: {
      zIndex: 1 ,
      display: "flex",
      alignItems: "center",
      padding: scrolled ? "16px" : "24px 16px",
      width: "100%",
      backgroundColor: HEADER.background,
      position: scrolled ? "fixed" : "relative",
      top: 0,
      left: 0,
      transition: 'padding 0.3s ease'
    },
    wrapHeaderIcon: {
      fontSize: 20,
      color: HEADER.iconColor,
      marginRight: 16,
    },
    wrapHeaderText: {
      fontSize: 18,
    fontWeight: 'bold',
    color: HEADER.color,
    margin: 0,
    },
  };

  return (
    <div style={styles.wrapHeader}>
      {props.showIcon && (
        <div style={styles.wrapHeaderIcon} onClick={() => back.goBack()}>
          <i className="fas fa-arrow-left"></i>
        </div>
      )}
      <div style={styles.wrapHeaderText}>{props.title}</div>
    </div>
  );
};

export default Header;
