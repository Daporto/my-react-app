import { createContext, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const AuthContext = createContext();

const AuthProvider = (props) => {
    
    const [user, setUser] = useState(localStorage.getItem("user"));

    const login = (user) => {
        setUser(user);
        localStorage.setItem("user",JSON.stringify(user));
    }

    const isLogin = () => {
        if(user && Object.keys(user).length!==0){
            return true
        }else{
            return false
        }
    }

    return (
        <AuthContext.Provider value={ {login, isLogin} }>
            {props.children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider }