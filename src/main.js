import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client"
import App from "@/App"
// import Home from "@/views/Home"
import 'antd/dist/antd.css';
import "amfe-flexible"
import {Provider} from "react-redux"
import store from "./store";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <Provider store={store}>
           <App />
        </Provider>
    </StrictMode>
   
)

// var search = function (nums) {
//     if (nums.length < 2) {
//         return nums
//     }
//     let middle = nums.splice(Math.floor(nums.length / 2),1)[0]
//     let leftarr = [], rightarr = [];
//     for (let value of nums) {
//         if (value > middle) {
//             rightarr.push(value)
//         } else {
//             leftarr.push(value)
//         }
//     }
//     return [...search(leftarr),middle].concat(search(rightarr))
// };


