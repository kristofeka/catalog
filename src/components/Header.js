import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { HEADER } from "../constans/colors";

const Header = (props) => {
  let back = useHistory();
  const [scrolled, setScrolled] = useState(false);

  const StyledHeader = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    padding: ${scrolled ? '16px':'24px 16px'};
    width: 100%;
    background-color: ${HEADER.background};
    position: ${scrolled ? "fixed" : "relative"};
    top: 0;
    left: 0;
    transition: all 0.8s ease-in;
  `;

  const StyledIconHeader = styled.div`
    font-size: 20px;
    color: ${HEADER.iconColor};
    margin-right: 16px;
  `;

  const StyledTextHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${HEADER.color};
    margin: 0;
  `;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <StyledHeader>
      {props.showIcon && (
        <StyledIconHeader onClick={() => back.goBack()}>
          <i className="fas fa-arrow-left"></i>
        </StyledIconHeader>
      )}
      <StyledTextHeader>{props.title}</StyledTextHeader>
    </StyledHeader>
  );
};

export default Header;
