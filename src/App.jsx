import { Tabs } from 'antd';
import React,{useState}from 'react';

const App = () => {
  const [active,setActive] = useState(1)//对应 key
  const [items, setItems] = useState([
    {
      label: `Tab 1`,
      key: '1',
      children: `Content of Tab Pane 1`,
    },
    {
      label: `Tab 2`,
      key: '2',
      children: `Content of Tab Pane 2`,
    },
    {
      label: `Tab 3`,
      key: '3',
      children: `Content of Tab Pane 3`,
    },
  ])
  const style = {
    fontSize:'28px',
    paddingLeft:"10px"
  }

  function btn(){
    if (items.length == 1) return setActive(items[0].key)//如果标签还剩一个，直接返回
    setItems(state => state.filter(v => v.key != active)) 
    if (active == items.at(-1).key) return setActive(items.at(-2).key)   //如果最后一个，删除后高亮上一个
    setActive(items.find(v=>v.key== (+active+1))?.key) //否则高亮下一个
  }
  function setAc(key){
    setActive(key)
  }

  return(
    <>
      <p><button onClick={btn} type="button">删除当前选中</button></p>

      {items.map(v => <span style={style} key={v.key}>{v.label + '   '}</span>)} {/* 模拟上边的导航*/}

      <Tabs //下边导航
        defaultActiveKey={active}
        items={items}
        onTabClick={setAc}
      />
    </>
   
)};
export default App;