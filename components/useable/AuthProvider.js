"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user info on mount
  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/getMe`, {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  // Login method
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Invalid credentials");
      const data = await res.json();
      setUser(data.user);
      return { success: true };
    } catch (err) {
      setUser(null);
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout method
  const logout = async () => {
    // Remove token cookie (if backend supports a logout endpoint, call it)
    setUser(null);
    // Optionally, reload the page or redirect
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
} 