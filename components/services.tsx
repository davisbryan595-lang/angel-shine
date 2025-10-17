"use client"

import { Card } from "@/components/ui/card"
import { Sparkles, Shield, Zap, Droplet } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Exterior Detailing",
      description:
        "Complete exterior restoration including paint correction, ceramic coating, and protective wax application.",
      features: ["Paint Correction", "Ceramic Coating", "Wax Protection"],
    },
    {
      icon: Droplet,
      title: "Interior Detailing",
      description: "Deep cleaning of interior surfaces, leather conditioning, and odor elimination for a fresh cabin.",
      features: ["Carpet Cleaning", "Leather Care", "Odor Removal"],
    },
    {
      icon: Shield,
      title: "Paint Protection",
      description: "Advanced protective films and coatings to shield your vehicle from environmental damage.",
      features: ["PPF Installation", "Ceramic Pro", "UV Protection"],
    },
    {
      icon: Zap,
      title: "Express Service",
      description: "Quick maintenance detailing for busy professionals who want their car looking pristine.",
      features: ["Quick Wash", "Tire Shine", "Interior Vacuum"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Premium Detailing Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From exterior restoration to interior deep cleaning, we offer comprehensive detailing services tailored to
            your vehicle's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl p-8 sm:p-12 text-center border border-border">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Transform Your Vehicle?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us today for a free consultation and discover how our premium detailing services can restore your
            car's shine.
          </p>
          <button className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}
