import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import action, { ActionFn } from "@/action"
import styles from '@/App.module.css'
import MyButton from "./components/MyButton"
import './base.css'
import http from './http'
import { useRequest } from 'ahooks'

const root = {
  id: 1,
  name:"jack1",
  children: [
    {
      id: 2,
      name: "jack2",
      children: [
        {
          id: 3,
          name: "jack3",
          children:[]
        }
      ]
    },
    {
      id: 4,
      name: "jack4",
      children: [
        {
          id: 5,
          name: "jack5",
          children:[]
        }
      ]
    }
  ]
}

function deep(parent:any) {
  let stack = [];
  let ids = [];
  if (parent) {
    stack.push(parent);
    while(stack.length){
      const item:any = stack.pop();
      const children = item.children;
      const newItem = JSON.parse(JSON.stringify(item))
      delete newItem.children
      ids.push(newItem);
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
    return ids
  }
}

console.log(deep(root))
//@ts-ignore
console.log(NODE_ENV)
const App = (props:any) => {

  return (
    <>
      <div className='header'>
        4
      </div>
      <MyButton />
      <button type='button' className={styles.btn} onClick={props.add}>+</button>
      <button type='button' onClick={props.sub}>-</button>
      <button type='button' onClick={props.asyncAdd}>asyncAdd</button>
      <button type='button' onClick={props.asyncSub}>asyncSub</button>
      <p>{props.counter.count}</p>
    </>
  );
};

export default connect(state => state, dispatch => ({
  add: () => dispatch({ type: 'add' }),
  sub: () => dispatch({ type: "sub" }),
  asyncAdd: () => dispatch(action.asyncAdd(1)),
  asyncSub: () => dispatch(action.asyncSub(1))
}))(App);