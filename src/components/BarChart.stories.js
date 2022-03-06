import React from 'react'
import BarChart from './BarChart'
import DefaultData from '../json/BarChart.json'

export default {
    component: BarChart,
    title: 'BarChart',
}

const Template = args => <BarChart {...args} />

export const Default = Template.bind({})
Default.args = {
    data: DefaultData.Data,
    keys: DefaultData.keys,
    orientation: 'vertical',
    colors: ['#013A63', '#2A6F97', '#468FAF', '#61A5C2', '#A9D6E5', '#15616d'],
    xTitle: 'X Title',
    yTitle: 'Y Title',

}