import React, { useEffect, useState ,useRef} from 'react';
const Charts = require("echarts")
const Echarts = (props = {}) => {
    const { series = [], xData = [], option = {}, width = 400, height = 600 } = props
    let myEcharts = useRef(null)
    let Defaultoption = {
        xAxis: {
            data: ["衣服", "裤子", "帽子", "袜子", "鞋子"]
        },
        yAxis: {
            type: "value"
        },
        legend: {
            data: ["xy"]
        },
        tooltip: {},
        series: [
            {
                type: "bar",
                name: "xy",
                data: [200, 560, 153, 486, 25]
            }
        ]
    }
    let style = {
        width: width + "px",
        height: height + "px"
    }
    useEffect(() => {
        let ech = document.getElementById("ech")
        myEcharts.current = Charts.init(ech)
    }, [])

    useEffect(() => {
        xData && (Defaultoption.xAxis.data = xData)
        series && (Defaultoption.series = series)
        Defaultoption = { ...Defaultoption, ...option }
        myEcharts.current && myEcharts.current.setOption(Defaultoption)
    }, [JSON.stringify(props)])
    return (
        <div id="ech" style={style}>

        </div>
    );
}

export default Echarts;
