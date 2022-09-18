import { useEffect } from "react";
const Charts = require("echarts");

export default ({ el }) => {
    let myEcharts = null
    myEcharts = Charts.init(el)
    return myEcharts
}