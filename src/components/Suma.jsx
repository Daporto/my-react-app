import { useRef, useState } from "react";

import "../styles/suma.css";

const Suma = (props) => {
  const num1 = useRef(null);
  const num2 = useRef(null);
  const [result, setResult] = useState("result");

  const sumar = () => {
    if (num1.current.value && num2.current.value) {
      let res = parseFloat(num1.current.value) + parseFloat(num2.current.value);
      setResult(res);
    }
  };

  return (
    <div className="container col-6">
      <h3> Calculadora de Sumas </h3>
      <div className="first-line">
        <input
          ref={num1}
          type="number"
          className="form-control"
          placeholder="Number 1"
          aria-label="Number 1"
          aria-describedby="basic-addon1"
        />
        <h4> + </h4>
        <input
          ref={num2}
          type="number"
          className="form-control"
          placeholder="Number 2"
          aria-label="Number 2"
          aria-describedby="basic-addon1"
        />
        <h4>=</h4>
        <input
          type="number"
          disabled={true}
          className="form-control"
          placeholder={result}
          aria-label="result"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="second-line">
        <button type="button" className="btn btn-primary" onClick={sumar}>
          Sumar
        </button>
      </div>
    </div>
  );
};

export default Suma;
