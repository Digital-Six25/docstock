import { Header } from "@/components/header"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center py-16 px-4">
        <RegisterForm />
      </div>
    </main>
  )
}
