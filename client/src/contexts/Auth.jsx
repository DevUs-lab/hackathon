import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = { isAuth: false, user: null };

const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);

    // Check if user is already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            fetchUserProfile();
        } else {
            setIsLoading(false);
        }
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get("/api/auth/me");
            setState({ isAuth: true, user: response.data.user });
        } catch (error) {
            console.error("Failed to fetch user profile", error);
            localStorage.removeItem("token");
            delete axios.defaults.headers.common["Authorization"];
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post("/api/auth/login", { email, password });
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setState({ isAuth: true, user });

            window.notify("Login successful!", "success");
            return { success: true };
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed";
            window.notify(errorMessage, "error");
            return { success: false, error: errorMessage };
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post("/api/auth/register", userData);
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setState({ isAuth: true, user });

            window.notify("Registration successful!", "success");
            return { success: true };
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Registration failed";
            window.notify(errorMessage, "error");
            return { success: false, error: errorMessage };
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setState(initialState);
        window.notify("Logout successful", "success");
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            isLoading,
            login,
            register,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;