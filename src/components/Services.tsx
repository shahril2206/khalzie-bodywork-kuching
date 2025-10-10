import { Wrench, Sparkles, PaintBucket, Car, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Body Repair",
    description: "Expert dent removal, panel beating, and structural repairs for all vehicle types.",
  },
  {
    icon: PaintBucket,
    title: "Spray Painting",
    description: "Professional color matching and high-quality spray painting with premium finishes.",
  },
  {
    icon: Sparkles,
    title: "Polishing",
    description: "Restore your vehicle's shine with our expert polishing and paint correction services.",
  },
  {
    icon: Car,
    title: "Detailing",
    description: "Complete interior and exterior detailing to make your car look brand new.",
  },
  {
    icon: Shield,
    title: "Accident Repair",
    description: "Comprehensive collision repair services with insurance claim assistance.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional automotive bodywork solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
