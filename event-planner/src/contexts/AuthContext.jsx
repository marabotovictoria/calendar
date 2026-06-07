// All references made can be found in the reading material for this Level, unless stated otherwise.
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("registeredUser");
    const loggedInUser = localStorage.getItem("currentUser");

    if (storedUser) {
      setRegisteredUser(JSON.parse(storedUser));
    }

    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  const registerUser = (userData) => {
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    setRegisteredUser(userData);
  };

  const loginUser = (username, password) => {
    if (
      registeredUser &&
      registeredUser.username === username &&
      registeredUser.password === password
    ) {
      localStorage.setItem("currentUser", JSON.stringify(registeredUser));
      setCurrentUser(registeredUser);
      return true;
    }

    return false;
  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        registeredUser,
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
