import React from 'react';
import { useLocation } from 'react-router-dom';

const Component1 = (props) => {
    const {num} = props;
    let location = useLocation();
    return(
    <div>
        <h1>
        Soy el componente {num} y estoy en la ruta {location.pathname}
        </h1>
    </div>
    )
}

export default Component1;