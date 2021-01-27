import React, { useState } from "react";
import styled from "styled-components";
import { LISTPRODUCT } from "../constans/colors";

const InputText = styled.input`
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  color: ${LISTPRODUCT.iconColor};
  transition: all 0.4s;
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;

const SearchComponent = (props) => {
  const [open, setOpen] = useState(false);

  const styles = {
    wrapTextInput: {
      // opacity: 0,
      // display: "none",
      opacity : open ? 1 : 0,
      // display : open ? 'inline' : 'none',
      transitionDelay: '0.2s',
      transition: 'all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1)',
    },
    wrapSearch: {
      display: "flex",
      paddingLeft: 16,
      width: open ? "100%" : 54,
      height: 56,
      background: LISTPRODUCT.backgroundSearch,
      borderRadius: 8,
      alignItems: "center",
      transition:
        "width 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), padding 0.6s ease-in 0s",
    },
    iconSearch: {
      cursor: "pointer",
      fontSize: "20px",
      color: LISTPRODUCT.iconColor,
      marginRight: open ? 14 : 0,
      transition: "margin-right 0.6s ease-in",
    },
  };

  return (
    <div>
      <div style={styles.wrapSearch}>
        <div
          style={styles.iconSearch}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-search"></i>
          )}
        </div>
        <InputText
          style={styles.wrapTextInput}
          onChange={props.action}
          type="text"
          placeholder="Cari desain"
        ></InputText>
      </div>
    </div>
  );
};

export default SearchComponent;
