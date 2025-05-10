const valor1 = 2;
const valor2= 3;
const valor3 = 4;

const  Suma = () => {
    
     
    return valor1+valor2+valor3;
}

console.log(Suma());

export const SecondApp = (props) => {
    console.log(props)
  return (
    
    <h1>{props.title}</h1>
    //   Suma()
    
  )
}


