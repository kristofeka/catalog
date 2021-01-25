import React from "react";
import {Spinner} from 'react-bootstrap';

function LoadingContent() {
  return (
    <div style={styles.wrapCard}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
    </div>
  );
}

const styles = {
  wrapCard: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 196,
    position: "relative",
    boxShadow: "rgb(0 0 0 / 14%) 0px 2px 16px",
  },
};

export default LoadingContent;
