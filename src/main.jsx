import React from 'react';
import ReactDom from 'react-dom/client';

// import {App} from './HiWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';



ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/> */}
        <FirstApp title="Hola" subTitle={"Hola, soy subtitulo"}/>
    </React.StrictMode>
)