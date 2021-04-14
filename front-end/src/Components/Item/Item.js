import { Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function Item(props) {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
        margin: "auto",
        marginTop: 20,
        borderRadius: 10,
      }}
      size="small"
      cover={
        <img
          alt="example"
          src={props.image}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            maxHeight: 180,
          }}
        />
      }
    >
      <div style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <Button type="primary">
          <a href={props.link} target="_blank">
            Product Website
          </a>
        </Button>
        <Button type="primary">
          <Link to="/predict">
            Predict Price
          </Link>
        </Button>
      </div>
    </Card>
  );
}
