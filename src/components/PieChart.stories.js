import React from "react";

import PieChart from "./PieChart";
import DefaultData from "../json/PieChart.json";

export default {
  component: PieChart,
  title: "Pie Chart",
};

const Template = (args) => (

          <PieChart {...args} />

);

export const Default = Template.bind({});
Default.args = {
  data: DefaultData,
  colors: ["#013A63", "#2A6F97", "#468FAF", "#61A5C2", "#A9D6E5", "#15616d"],
};
