import React from "react";
import { createRoot } from "react-dom/client"
import App from "@/App"
import "amfe-flexible"

createRoot(document.getElementById("app")).render(<App />)

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

