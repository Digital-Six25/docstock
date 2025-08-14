import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, Award, Shield } from "lucide-react"

export function CTASections() {
  return (
    <>
      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Upgrade Your Medical Equipment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of healthcare professionals who trust DocStock for their medical equipment needs. Get expert
            advice and premium products delivered fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call 1300 DOC STOCK
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Same Day Dispatch</h3>
                <p className="text-slate-600 mb-6">
                  Order before 2 PM and get your medical equipment dispatched the same day. Fast delivery across
                  Australia.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Shop Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Expert Support</h3>
                <p className="text-slate-600 mb-6">
                  Get professional advice from our medical equipment specialists. 20+ years of industry experience at
                  your service.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Contact Expert</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Quality Guarantee</h3>
                <p className="text-slate-600 mb-6">
                  All products come with manufacturer warranty and our quality guarantee. Your satisfaction is our
                  priority.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
