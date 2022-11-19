import React, { useState,useRef } from 'react';
import Model from "@/components/model"
const Home = () => {
    //对象
    const [model, setModel] = useState(false)
    const $refM = useRef()
    const [tableDate,setDate]  = useState([])
    function onSubmit(){
        // setModel(true)
        $refM.current.show()
        .then(res=>{
            console.log(res)
        })
    }
    function ok(res){
        setDate(state => [...state, { ...res }])
        setModel(false)
    }
    return (
        <>
            <Model ref={$refM} model={model} ok={ok}/>
            <button type='button' onClick={onSubmit}>添加</button>
            <table>
                <tbody>
                    {tableDate.map((v, i) => (<tr key={i}><td>账号:{v.username}</td><td>密码:{v.password}</td></tr>))}
                </tbody>

            </table>
        </>
    );
}

export default Home;

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//     }
//     static getDerviedStateFormProps(peops, state) {
//         return { msg: "Hello world" }
//     }
//     shouldComponentUpdate(nextProps, nextState) {}
//     componentDidMount() {}
//     getSnapshotBeforeUpdate(preProps, preState) { return 0}
//     componentDidUpdate(preProps, preState,snap) { }
//     componentWillUnmount() { }
//     render() {
//         return (
//             <div>{this.msg}</div>
//         )
//     }
// }
