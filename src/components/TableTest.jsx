import { FormCheck, Table, Button } from "react-bootstrap";
import { useState } from "react";

const TableTest = () => {
  const [users, setUsers] = useState([]);

  const handleButton = () => {
    const table = document.getElementById("usersTable2");
    const checkBoxs = table.querySelectorAll("[type~=checkbox]");
    let newUsers = [];
    const rows = table.rows;
    let row;
    for (let i = 0; i < rows.length; i++) {
      row = rows[i];
      if (row.cells[0].nodeName === "TD" && checkBoxs[i - 1].checked) {
        const user = {
          firstName: row.cells[1].innerText,
          lastName: row.cells[2].innerText,
          username: row.cells[3].innerText,
        };
        newUsers.push({ ...user });
      }
    }
    setUsers([...newUsers]);
  };

  return (
    <>
      <Table striped bordered hover id="usersTable">
        <thead>
          <tr>
            <th>Select</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FormCheck />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>
              <FormCheck />
            </td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>
              <FormCheck />
            </td>
            <td>Larry the Bird</td>
            <td>Thompson</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={handleButton}>Aceptar</Button>
      <br></br>
      <Table id='usersTable2'>
        <thead>
          <tr>
            <th>Select</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FormCheck />
            </td>
            <td>Daniel</td>
            <td>Porto</td>
            <td>@danielpr99</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableTest;
