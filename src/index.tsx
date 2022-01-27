import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import Layout from './pages/layout';

const ele = () => (
  <Router>
    <Layout />
  </Router>);



ReactDOM.render(
  React.createElement(ele as any),
  document.getElementById('root')
)
