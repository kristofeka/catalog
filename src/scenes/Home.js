import React, {useState, useEffect} from "react";
import { Header, ListProduct } from "../components";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 90) {
      setScrolled(true);
    } else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.wrapHead}>
          {scrolled && <Header title="RAKKISHOPPU" /> }
        {/* <Header title="RAKKISHOPPU" /> */}
        <h1 style={{ padding: "0px 20px", fontSize: 48, color: "#FF76A7" }}>
          Katalog{" "}
          <span
            style={{
              display: "block",
              fontSize: 16,
              marginTop: 8,
              color: "#fff",
            }}
          >
            Desain Rakkishoppu
          </span>
        </h1>
      </div>
      <ListProduct />
    </div>
  );
};
const styles = {
  container: {
    width: "100%",
  },
  wrapHead: {
    backgroundColor: "#35405A",
    paddingTop: 48,
    height: 360,
    borderRadius: "0px 0px 24px 24px",
  },
};
export default Home;
