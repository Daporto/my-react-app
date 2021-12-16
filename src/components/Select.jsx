import { Form, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

const Select = () => {
  const select = useRef(null);
  const [value,setValue] = useState("2");
  const handleButton = () => {
    const selectedItem =
      select.current.options[select.current.selectedIndex].value;
    alert("Usted seleccionó: " + selectedItem);
  };

  const handleChange = (event) => {
    setValue({value: event.target.value})
  }
/*   useEffect(() => {
    console.log(select.current.options[3].value)
    select.current.options[3].innerText = "edited";
  }); */

  return (
    <div className="container col-4">
      <Form.Select ref={select} defaultValue={value} onChange={handleChange} aria-label="Default select example">
        <option disabled hidden>
          Open this select menu
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Button onClick={handleButton}>Aceptar</Button>
    </div>
  );
};

export default Select;
