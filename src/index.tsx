import React from "react";
import ReactDOM from "react-dom";
import {
  RecoilRoot,
} from 'recoil';
import { HashRouter as Router } from 'react-router-dom';
import Layout from './pages/layout';



const ele = () => {
  return (
    <RecoilRoot>
      <Router>
        <Layout />
      </Router>
    </RecoilRoot>

  );

}



ReactDOM.render(
  React.createElement(ele as any),
  document.getElementById('root')
)
