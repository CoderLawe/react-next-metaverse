import { useContext, useState, createContext } from "react";

export const ClickedContext = createContext();
export const UserContext = createContext();
export const LoginNameContext = createContext();

export const ClickedProvider = ({ children }) => {

    const [clicked, setClicked] = useState(false);
    const [name, setName] = useState('');
    const [loginName, setLoginName] = useState('');

    return(
        <ClickedContext.Provider value={[clicked, setClicked]}>
            <UserContext.Provider value={[name, setName]}>
                <LoginNameContext.Provider value={[loginName, setLoginName]}>
                    { children }
                </LoginNameContext.Provider>
            </UserContext.Provider>
        </ClickedContext.Provider>
    )
}