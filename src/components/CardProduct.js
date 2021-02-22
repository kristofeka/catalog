import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { Row, Col } from "react-bootstrap";
import { Event } from "../utils/Analytics";

const display = "flex";

const WRAPCARD = styled.div`
  padding: 16px;
  display: ${display};
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  box-shadow: rgb(0 0 0 / 14%) 0px 2px 16px;
`;

const WRAPCARDTEXT = styled.div`
  display: ${display};
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 16px;
`;

const CARDTITLETEXT = styled.h2`
  font-size: 20px;
  color: #35405a;
  font-weight: bold;
`;

const CARDDESCTEXT = styled.p`
  color: #9ca9b4;
  font-size: 14px;
`;
const WRAPIMAGECARD = styled.div`
  background-color: #cfdce8;
  border-radius: 16px;
  padding: 16px;
`;

const CARDIMAGE = styled.img`
  margin: 16px 0px;
  width: 100%;
`;

const CardProduct = ({ id, title, desc, image }) => {

  const trackingProduct = () => {
    Event("Product", "lihat produk", title)
  }

  return (
    <WRAPCARD>
      <Link to={`/products/${id}`} onClick={trackingProduct}>
        <Row>
          <Col>
            <WRAPCARDTEXT>
              <CARDTITLETEXT>{title}</CARDTITLETEXT>
              <CARDDESCTEXT>{desc}</CARDDESCTEXT>
            </WRAPCARDTEXT>
          </Col>
          <Col>
            <LazyLoad once={true} placeholder={<CARDIMAGE src={`assets/image/imageLoad.png`} alt="" />}>
              <WRAPIMAGECARD>
                <CARDIMAGE src={`assets/image/product/${image}`} alt="" />
              </WRAPIMAGECARD>
            </LazyLoad>
          </Col>
        </Row>
      </Link>
    </WRAPCARD>
  );
};

export default CardProduct;
