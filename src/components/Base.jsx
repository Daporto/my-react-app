import React from 'react';

const Base = ({children}) => {
    return(
    <div>
        <h1>
        Soy el componente base
        </h1>
        {children}
    </div>
    )
}

export default Base;