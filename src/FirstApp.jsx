
import PropTypes from 'prop-types';

// const newMessaje = {
//     message: 'Hola',
//     title: 'el titulo'
// };

// const n1 = 2;
// const n2 = 3;

//  export function Bro () {
//    let resultado = '';
//    resultado = n1 + n2;
//    return resultado;

// }

//  Usando prop(properties) en un project


export const FirstApp = ({title, subTitle}) => {
// console.log(props);
return(
<>
    <h1> {title} </h1>
    <p>{subTitle}</p>





     {/* <h2>Resultado, {Bro()}</h2> */}
    {/* <code>{JSON.stringify(newMessaje)}</code> */}
    
</>

)};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,

};



/* export function FirstApp(){
    // document.createElement...
    return (<h1>Message for method first app</h1>)
} */