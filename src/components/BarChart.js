import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BarChart({ data, keys, orientation, xTitle, yTitle, colors}) {
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
              Bar Chart
            </h2>
          </Card.Title>
    <div style={{ height: '300px' }}>
      <ResponsiveBar
        keys={keys}
        data={data}
        indexBy="country"
        layout={orientation}
        margin={{ top: 50, right: 120, bottom: 50, left: 120 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={colors} 
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        colorBy="id"
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: xTitle,
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -40,
          legend: yTitle,
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        labelSkipWidth={12}
        labelSkipHeight={12}
        enableLabel={false}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
        }}
      />
    </div>
    </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}