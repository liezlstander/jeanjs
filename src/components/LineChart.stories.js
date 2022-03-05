import React from 'react'
import LineChart from './LineChart'
import data from '../json/LineChart.json'

export default {
    component: LineChart,
    title: 'LineChart',
}

const Template = args => <LineChart {...args} />

export const Default = Template.bind({})
Default.args = {
    data: data,
    colors: ['#013A63', '#2A6F97', '#468FAF', '#61A5C2', '#A9D6E5'],
    xTitle: 'X Title',
    yTitle: 'Y Title'
}