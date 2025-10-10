import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/60123456789", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Get in </span>
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit us or contact us for expert advice and free quotations
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <Card className="bg-card border-border hover:border-primary transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kuching, Sarawak
                <br />
                Malaysia
              </p>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="bg-card border-border hover:border-primary transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Phone</h3>
              <a 
                href="tel:+60123456789" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +60 12-345 6789
              </a>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="bg-card border-border hover:border-primary transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Hours</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mon - Sat: 9:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/20 to-accent/20 border-primary">
            <CardContent className="p-12">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Quick Response via WhatsApp
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Get instant replies to your queries and free quotations
              </p>
              <Button 
                variant="hero"
                size="lg"
                onClick={handleWhatsApp}
                className="text-lg px-12 py-6"
              >
                <MessageCircle className="mr-2" />
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
