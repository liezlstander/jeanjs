import React from 'react'
import { ResponsiveLine } from '@nivo/line'

export default function LineChart ({data, colors, xTitle, yTitle}) {
    return (
        <div style={{ height: '300px' }}>
        <ResponsiveLine
        data={data}
        colors={colors}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false,
          }}
          axisBottom={{
            // format: '%b %d',
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            // tickValues: 'every month',
            tickRotation: 0,
            legend: xTitle,
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: yTitle,
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              toggleSerie: true,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
      />
      </div>
    )
}