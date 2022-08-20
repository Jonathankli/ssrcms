import React from 'react';
import ReactDOM from "react-dom";
import PageContainer from "./PageContainer";

const domContainer = document.querySelector('#root');
ReactDOM.hydrate(<PageContainer />, domContainer);