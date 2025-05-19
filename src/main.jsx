import React from 'react';
import ReactDom from 'react-dom/client';

// import {App} from './HiWorldApp';
// import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';
//import { SecondApp } from './SecondApp';





// ReactDom.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         {/* <App/> */}
//         <FirstApp title="Hola" subTitle={"Hola, soy subtitulo"}/>
//     </React.StrictMode>
// )

ReactDom.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        < CounterApp />
    </React.StrictMode>

);