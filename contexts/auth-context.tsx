"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import type { User, AuthState } from "@/lib/auth"
import { authenticateUser, registerUser, updateUserProfile } from "@/lib/auth"

type AuthAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_USER"; payload: User | null }
  | { type: "LOGOUT" }

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (userData: {
    email: string
    password: string
    firstName: string
    lastName: string
    company?: string
    phone?: string
  }) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateProfile: (updates: Partial<User>) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: action.payload !== null,
        isLoading: false,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    default:
      return state
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoading: true,
    isAuthenticated: false,
  })

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("docstock-user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        dispatch({ type: "SET_USER", payload: user })
      } catch (error) {
        console.error("Failed to load user from localStorage:", error)
        localStorage.removeItem("docstock-user")
      }
    }
    dispatch({ type: "SET_LOADING", payload: false })
  }, [])

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("docstock-user", JSON.stringify(state.user))
    } else {
      localStorage.removeItem("docstock-user")
    }
  }, [state.user])

  const login = async (email: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true })
    try {
      const user = await authenticateUser(email, password)
      if (user) {
        dispatch({ type: "SET_USER", payload: user })
        return { success: true }
      } else {
        dispatch({ type: "SET_LOADING", payload: false })
        return { success: false, error: "Invalid email or password" }
      }
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false })
      return { success: false, error: "Login failed. Please try again." }
    }
  }

  const register = async (userData: {
    email: string
    password: string
    firstName: string
    lastName: string
    company?: string
    phone?: string
  }) => {
    dispatch({ type: "SET_LOADING", payload: true })
    try {
      const user = await registerUser(userData)
      if (user) {
        dispatch({ type: "SET_USER", payload: user })
        return { success: true }
      } else {
        dispatch({ type: "SET_LOADING", payload: false })
        return { success: false, error: "Registration failed" }
      }
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false })
      return {
        success: false,
        error: error instanceof Error ? error.message : "Registration failed. Please try again.",
      }
    }
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" })
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!state.user) return { success: false, error: "Not authenticated" }

    dispatch({ type: "SET_LOADING", payload: true })
    try {
      const updatedUser = await updateUserProfile(state.user.id, updates)
      if (updatedUser) {
        dispatch({ type: "SET_USER", payload: updatedUser })
        return { success: true }
      } else {
        dispatch({ type: "SET_LOADING", payload: false })
        return { success: false, error: "Profile update failed" }
      }
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false })
      return { success: false, error: "Profile update failed. Please try again." }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
