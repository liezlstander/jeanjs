import React from 'react'
import ColorsList from './Colors'
import DefaultData from '../json/Table.json'

export default {
    component: ColorsList,
    title: 'Colors List',
}

const Template = args => <ColorsList {...args} />

export const Default = Template.bind({})
Default.args = {
    colors: ['#013A63', '#2A6F97', '#468FAF', '#61A5C2', '#A9D6E5'],

}