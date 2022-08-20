import React from 'react';
import ReactDOM from "react-dom/client";
import PageContainer from "./PageContainer";

const domContainer = document.querySelector('#root');
ReactDOM.hydrateRoot(domContainer!, <PageContainer />);
//ReactDOM.createRoot(domContainer!).render(<PageContainer />);