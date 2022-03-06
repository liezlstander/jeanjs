import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ColorsList({ colors }) {
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Col>
        <Card
          className="mb-4"
          style={{
            marginLeft: "1rem",
            marginRight: "1rem",
            boxShadow:
              "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)",
            borderRadius: "0.25em",
            paddingLeft: '1em',
            paddingRight: '1em',
            paddingBottom: '1em',
          }}
        >
          <Card.Body>
            <Card.Title>
              <h2
                style={{
                  textAlign: "center",
                  paddingTop: "0.5em",
                  fontFamily:
                    '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
                }}
              >
                Color Chart
              </h2>
            </Card.Title>

            <Row style={{ display: "flex" }}>
              {colors.map((color, index) => (
                <Col
                  key={index}
                  style={{
                    backgroundColor: color,
                    margin: "1em",
                    padding: "1.5em",
                    color: "white",
                    fontWeight: "bold",
                    boxShadow: "inset 0px 0px 0px 5px white",
                    border: "solid",
                    borderColor: color,
                    borderWidth: "0.5em",
                    borderRadius: "2.5em",
                  }}
                >
                  {color}
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
