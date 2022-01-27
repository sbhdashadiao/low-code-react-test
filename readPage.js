const path = require('path')
const fs = require('fs')

/**
 * @description 动态读取指定路径下的文件名，通过正则匹配出路由，再写入config、menu中，省去了手动配置路由，但是每次添加要再编译一次，或者根据文件变化去主动编译
 */


const dir = fs.readdirSync(path.join(__dirname,'./src/pages'));
const route = dir.filter(i=>!/\.ts$|layout/.test(i))
// [ 'apple', 'form', 'hello', 'index.ts', 'layout' ]
/**
 * @description 模板文件
 */
const template = `
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import {List,Detail} from './pages';

function App() {
  return (
      <Routes>
       ${route.reduce((str,item)=>{
str+=`<Route path='/${item}' element={<${item[0].toUpperCase()}${item.slice(1)} />} /> \n`
return str
       },'')}
      </Routes>
  );
}
export default App
`
fs.writeFileSync(path.join(__dirname,'./src/router.tsx'),template)