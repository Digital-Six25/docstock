import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "General Practitioner",
    location: "Sydney, NSW",
    rating: 5,
    text: "DocStock has been our go-to supplier for medical equipment for over 5 years. Their ECG machines are top quality and the customer service is exceptional. Same day dispatch really makes a difference for our practice.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Practice Manager",
    location: "Melbourne, VIC",
    rating: 5,
    text: "The blood pressure monitors we purchased have been incredibly reliable. Great value for money and the technical support team helped us with setup. Highly recommend DocStock for any medical practice.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Dr. Jennifer Lee",
    role: "Cardiologist",
    location: "Brisbane, QLD",
    rating: 5,
    text: "Outstanding quality diagnostic equipment. The stethoscopes and monitoring devices we ordered exceeded our expectations. DocStock's expertise in medical equipment is evident in their product selection.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Clinic Director",
    location: "Perth, WA",
    rating: 5,
    text: "Fast delivery, competitive prices, and excellent after-sales support. DocStock has helped us upgrade our entire clinic with modern medical equipment. Their 20 years of experience really shows.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Dr. Amanda Foster",
    role: "Emergency Medicine",
    location: "Adelaide, SA",
    rating: 5,
    text: "When we needed urgent replacement equipment, DocStock delivered within 24 hours. Their pulse oximeters and monitoring devices are hospital-grade quality. Exceptional service when it matters most.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 6,
    name: "Michael Rodriguez",
    role: "Physiotherapy Clinic Owner",
    location: "Gold Coast, QLD",
    rating: 5,
    text: "The rehabilitation equipment we purchased has transformed our clinic. DocStock's team provided excellent guidance on product selection and the ongoing support has been fantastic. Truly professional service.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">What Healthcare Professionals Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by thousands of medical professionals across Australia. See why healthcare providers choose DocStock
            for their equipment needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" />
                  <p className="text-slate-700 leading-relaxed pl-6">{testimonial.text}</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Join Our Satisfied Customers</h3>
            <p className="text-slate-600 mb-6">
              Experience the DocStock difference. Quality medical equipment, expert support, and reliable service that
              healthcare professionals trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-slate-700">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="font-semibold">10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="font-semibold">20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
