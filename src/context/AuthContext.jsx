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
        try {
            const response = await fetch("http://localhost:9001/usuarios/login", {
            method: "POST",
            headers: {
                'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
                'Content-Type': 'application/json'
            }
            });

            if (!response.ok) {
            return false;
            }

            // Aquí parseamos la respuesta JSON del backend
            const userData = await response.json();

            // 👉 aquí generamos y guardamos el token Basic
            const authToken = btoa(`${username}:${password}`);
            const fullUser = { ...userData, authToken };

            setUser(fullUser);
            localStorage.setItem('user', JSON.stringify(fullUser));

            return true;
        } catch (error) {
            console.error("Error en login:", error);
            return false;
        }
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