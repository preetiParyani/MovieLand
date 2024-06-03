import { useState, useEffect } from "react";
import "./App.css";

// another way to declare a function:

// const App = () =>{
// return <> code goes within </>
// }
function Person(props) {
  return (
    <>
      <p>FirstName: {props.fn}</p>
      <p>LastName: {props.ln}</p>
      <p>Age:{props.Age}</p>
    </>
  );
}
const Count = () => {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    setcounter(100)
  },[]);
  // [] refers to useEffect will only once on the initialization
  // [stateVariable] refers to useEffect will run everytime the value of stateVariable gets changed

  return (
    <>
      <button
        onClick={() => {
          setcounter((Prevcount) => Prevcount - 1);
        }}
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setcounter((precount) => precount + 1);
        }}
      >
        +
      </button>
    </>
  );
};

function Practice() {
  return (
    <div className="App">
      Hello madarchod!
      <Person fn={"marry"} ln={"Doe"} Age={20} />
      <Count />
    </div>
  );
}

export default Practice;
