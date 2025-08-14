import { Header } from "@/components/header"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center py-16 px-4">
        <LoginForm />
      </div>
    </main>
  )
}
