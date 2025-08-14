export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  company?: string
  phone?: string
  role: "customer" | "admin"
  createdAt: Date
  lastLogin?: Date
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

// Mock user data for demonstration
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@docstock.com.au",
    firstName: "Admin",
    lastName: "User",
    role: "admin",
    createdAt: new Date("2024-01-01"),
    lastLogin: new Date(),
  },
  {
    id: "2",
    email: "doctor@hospital.com",
    firstName: "Dr. Sarah",
    lastName: "Johnson",
    company: "City General Hospital",
    phone: "+61 2 9876 5432",
    role: "customer",
    createdAt: new Date("2024-02-15"),
    lastLogin: new Date(),
  },
]

export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock authentication - in real app, this would be an API call
  const user = mockUsers.find((u) => u.email === email)
  if (user && password === "password123") {
    return { ...user, lastLogin: new Date() }
  }
  return null
}

export const registerUser = async (userData: {
  email: string
  password: string
  firstName: string
  lastName: string
  company?: string
  phone?: string
}): Promise<User | null> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Check if user already exists
  const existingUser = mockUsers.find((u) => u.email === userData.email)
  if (existingUser) {
    throw new Error("User already exists with this email")
  }

  // Create new user
  const newUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    company: userData.company,
    phone: userData.phone,
    role: "customer",
    createdAt: new Date(),
    lastLogin: new Date(),
  }

  mockUsers.push(newUser)
  return newUser
}

export const updateUserProfile = async (userId: string, updates: Partial<User>): Promise<User | null> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const userIndex = mockUsers.findIndex((u) => u.id === userId)
  if (userIndex === -1) return null

  mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates }
  return mockUsers[userIndex]
}
