import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const s = localStorage.getItem('user');
        if (s) setUser(JSON.parse(s));
    }, []);

    const login = async (username, password) => {
        const user= await
            fetch("http://localhost:9001/usuarios/login", {
            method: "POST",
            headers: {
                'Authorization': `Basic ${username}:${password}`,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok){
                return false;
                // throw new Error(`HTTP error ${response.status}`);
            }else{
                setUser(user); 
                localStorage.setItem('user', JSON.stringify(u));
                return true;
            }
        });
    };

    const logout = () => {
        setUser(null); localStorage.removeItem('user');
    };
    
    return <AuthContext.Provider value={{
        user, login,
        logout
    }}>{children}</AuthContext.Provider>;
}
// Gestiona el usuario en memoria y en localStorage (solo para clase).