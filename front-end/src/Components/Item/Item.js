import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function Item(props) {
  console.log('lolwat', props.pid);
  return (
    <div
      hoverable
      style={{
        width: "100%",
        borderRadius: "10px",
        padding: "0px",
        backgroundColor: "white",
        borderRadius: "0px",
      }}
      size="small"
    >
      <div style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <h3 className="productname">{props.productName.substring(0, 60)}...</h3>
        <Button type="primary" className="wishlist-button">
          <a href={props.url} target="_blank">
            Product Website
          </a>
        </Button>
        <Button type="primary" className="wishlist-button">
          <Link to={{
            pathname: '/predict',
            customProps: {
              pid: props.pid,
            }
          }}>
            Predict Price
          </Link>
        </Button>
      </div>
    </div>
  );
}
