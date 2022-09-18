import React, { useState, useEffect } from 'react'
import "./App.css"
import CryptoJS from 'crypto-js'
import axios from 'axios'
export default function App() {
  const [state, setState] = useState("")
  const [count, setCount] = useState(1)
  function save() {
    let wordArray = CryptoJS.enc.Utf8.parse(state)
    let key = CryptoJS.enc.Utf8.parse("123456789wedfghh")
    let iv = CryptoJS.enc.Utf8.parse("789456123erfjhdg")
    let encrpt = CryptoJS.AES.encrypt(wordArray, key, {
      iv
    }).toString()
    console.log(encrpt)
    let decrypt = CryptoJS.AES.decrypt(encrpt, key, {
      iv
    }).toString(CryptoJS.enc.Utf8)
    console.log(decrypt)
  }
  function get() {
    // let url = `http://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word='美女图片'&fr=ala&ala=1&alatpl=normal&pos=3`;
    // // let headers = { "Accept": "text/text;charset=utf-8" }

    // axios.get(url)
    //   .then(res => {
    //     console.log(res)
    //   })
  }
  return (
    <>
      <header className='header'>
        <div className='title'>
          <p className='text'>
            头部头部头部头部头部头部头部头部
          </p>
        </div>
      </header>
      <div>
        {/* <p><input type="text" value={state} onChange={(e) => setState(e.target.value)} /> <button onClick={save}>保存</button></p>
        <button onClick={get}>获取</button>
        <p>{ }</p> */}
        <main>
          <div className='left'>left</div>
          <div className='right'>right</div>
        </main>
      </div>
    </>
  )
}



















// import Echarts from './components/Echarts'
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       option:{
//         color:["red"],
//         legend:{
//           data:["bar"]
//         }
//       },
//       xData:[1,2,3,4],
//       series:[{
//         name:"bar",
//         type:"bar",
//         data:[250,235,485,102]
//       }]
//     }
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerviedStateFromProps")
//     return null
//   }

//   shouldComponentUpdate(nextProps,nextState) {
//     console.log("shouldComponentUpdate")
//     return true
//   }


//   componentDidMount() {
//     console.log("componentDidMount",this)
//   }
//   getSnapshotBeforUpdate(preProps, preState) {
//     console.log("getSnapshotBerfoUpdate")
//     return null
//   }
//   componentDidUpdate(preProps, preState) {
//     console.log("componentDidUpdate")
//   }
//   componentDidWillUnmount() {
//     console.log("componentDidWillUnmount")
//   }
//   btn = ()=>{
//     this.setState(state => ({
//       ...state, series: [{
//         name: "bar",
//         type: "bar",
//         data: [520, 435, 485, 102]
//       }] }))
//   }
//   render() {
//     return <>
//     <button onClick={this.btn}>变化</button>
//       <Echarts {...this.state}/>
//     </>
//   }
// }

