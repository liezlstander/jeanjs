import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LineChart({
  data,
  colors,
  xTitle,
  yTitle,
  DailyTimeSeries,
  MonthlyTimeSeries,
}) {
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Col style={{width: '100%'}}>
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
                Line Chart
              </h2>
            </Card.Title>
            <div style={{ height: "300px" }}>
              <ResponsiveLine
                data={data}
                colors={colors}
                margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
                xFormat={DailyTimeSeries ? "time:%Y-%m-%d" : ">-"}
                xScale={
                  DailyTimeSeries
                    ? {
                        type: "time",
                        format: "%Y-%m-%d",
                        useUTC: false,
                        precision: "day",
                      }
                    : { type: "point" }
                }
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: false,
                  reverse: false,
                }}
                axisBottom={{
                  format: DailyTimeSeries ? "%Y-%m-%d" : "c",
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickValues: DailyTimeSeries ? "every day" : "every day",
                  tickRotation: 0,
                  legend: xTitle,
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  orient: "left",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: yTitle,
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: "right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    toggleSerie: true,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
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
