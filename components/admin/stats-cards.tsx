import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Products",
    value: "1,234",
    change: "+12%",
    changeType: "positive" as const,
    icon: Package,
  },
  {
    title: "Total Orders",
    value: "856",
    change: "+8%",
    changeType: "positive" as const,
    icon: ShoppingCart,
  },
  {
    title: "Total Users",
    value: "2,341",
    change: "+15%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+23%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-slate-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
