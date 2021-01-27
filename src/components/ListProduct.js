  import React, { useState, useEffect } from "react";
  import CardProduct from "./CardProduct";
  import SearchComponent from './SearchComponent';
  import LoadingContent from "./LoadingContent";
  import LazyLoad from "react-lazyload";
  import { Row, Col } from "react-bootstrap";

  import { LISTPRODUCT } from "../constans/colors";

  const ListProduct = () => {
    const [products, setProducts] = useState({
      loading: false,
      data: [],
      error: false,
    });
    const [cari, setCari] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      getData();
    }, []);

    const getData = async () => {
      setProducts({
        loading: true,
        data: false,
        error: false,
      });
      const response = await fetch(
        `https://6007d065309f8b0017ee4d3a.mockapi.io/rakkishoppu/listDesign`
      );
      if (!response.ok) {
        setProducts({
          loading: false,
          data: false,
          error: true,
        });
      } else {
        const data = await response.json();
        setProducts({
          loading: false,
          data: data,
          error: false,
        });
      }
    };

    const updateSearch = (e) => {
      setCari(e.target.value);
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else setScrolled(false);
    };

    let content = null;

    if (products.error) {
      content = <p>Error Cuy</p>;
    }
    if (products.loading) {
      content = (
        <div style={{ marginTop: 48 }}>
          <LoadingContent />
        </div>
      );
    }
    if (products.data) {
      content = (
        <Row style={{ marginTop: 48 }}>
          {products.data
            .filter((products) => products.nameItem.includes(cari))
            .map((product) => (
              <LazyLoad
                key={product.idItem}
                height={200}
                offset={[-200, 100]}
                className="row"
                placeholder={<LoadingContent />}
              >
                <Col md={12} sm={12} className="mb-4">
                  <CardProduct
                    id={product.idItem}
                    title={product.nameItem}
                    desc={product.descItem}
                    image={product.imageItem}
                  />
                </Col>
              </LazyLoad>
            ))}
        </Row>
      );
    }

    return (
      <div style={styles.container}>
        <div style={scrolled ? styles.scrolled : styles.scroll}>
            <SearchComponent action={updateSearch}/>
        </div>
        {content}
      </div>
    );
  };

  const styles = {
    container: {
      padding: "0px 16px",
      position: "relative",
      top: -208,
    },
    scroll: {
      position: "relative",
      padding: 0,
      top: 0,
      transition: 'all 0.6s ease-out',
    },
    scrolled: {
      position: "fixed",
      zIndex: 1,
      width: "100%",
      left: 0,
      padding: "0px 8px 16px 8px",
      background: LISTPRODUCT.background,
      top: 56,
      borderRadius: "0px 0px 8px 8px",
      boxShadow: "rgb(0 0 0 / 26%) 0px 8px 16px",
      transition: "top 0.8s ease-in",
    }
  };

  export default ListProduct;
