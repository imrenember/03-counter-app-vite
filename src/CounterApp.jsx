import  { useState } from 'react'
import PropTypes from "prop-types"


  


export const CounterApp = ({value}) => {


    const [counter, setCounter] = useState(value);
 const handleAdd = () => {
        //console.log(event)
        // console.log('+1');
        // value = 1000
        setCounter(counter + 1)
        //setCounter( (r) => r + 1)
    };
     const handleRest = () => {
        
        setCounter(counter - 1)
        //setCounter( (r) => r + 1)
    };
     const handleRemove = () => setCounter( value ) ;

return(
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    <button onClick={handleAdd }> +1</button>
    <button  onClick={handleRest}> -1</button>
    <button onClick={handleRemove}> Reset</button>

    </>
)
};


CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
};