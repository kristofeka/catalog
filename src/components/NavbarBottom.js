import React from "react";

const NavbarBottom = (props) => {
  return (
    <div style={{ position: "fixed", bottom: 0, padding: 16, width: "100%", transition: 'all 0.4s'}}>
      <button
        style={{
          backgroundColor: "#FF76A7",
          padding: "12px 32px",
          color: "white",
          borderRadius: 24,
        }}
        className="btn btn-block"
        onClick={props.action}
      >
        KIRIM KE ADMIN
      </button>
    </div>
  );
};

export default NavbarBottom;
