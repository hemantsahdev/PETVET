// Before react the whole DOM was getting re-rendered on even a small change in the DOM.=> resulting to more numbver of reloads 
// example if there are lakh changes happening the DOM will be re-rendering lakh times causing the browser to crash.
// So React came with its virtual DOM (in react-dom/client) causing next to no reloads.


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';
import {
  RecoilRoot,
  
} from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
