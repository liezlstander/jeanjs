import React from "react";
import { ResponsivePie } from "@nivo/pie";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PieChart({ data, colors }) {
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {" "}
      <Col style={{ width: "50%" }}>
        <Card
          className="mb-4"
          style={{
            marginLeft: "1rem",
            marginRight: "1rem",
            boxShadow:
              "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)",
            borderRadius: "0.25em",
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
                Pie Chart
              </h2>
            </Card.Title>

            <div style={{ height: "300px" }}>
              <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                colors={colors}
                arcLinkLabelsTextColor={"#333333"}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={"white"}
                labelTextColor="white"
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
