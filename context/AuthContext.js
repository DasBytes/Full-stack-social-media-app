import { Children, createContext, useContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({Children})=> {
    const [user,setUser] =userState(null);
    const setAuth = authUser => {
        setUser(authUser);
    }

    const setUserData = userData => {
        setUser({...userData});
    }
    return (
        <AuthContext.Provider value={{user, setAuth,setUserData}}>
            {Children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext);