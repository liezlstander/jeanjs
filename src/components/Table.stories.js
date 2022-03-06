import React from 'react'
import Table from './Table'
import DefaultData from '../json/Table.json'

export default {
    component: Table,
    title: 'Table',
}

const Template = args => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
    data: DefaultData.Data,
    columns: DefaultData.columns,

}