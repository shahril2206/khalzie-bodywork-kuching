import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/khalzie-logo.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/60123456789", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+60123456789";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <img 
            src={logo} 
            alt="Khalzie Bodywork" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Professional Car Bodywork
          </span>
          <br />
          <span className="text-foreground">
            & Repair Services
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in">
          Expert body repair, spray painting, polishing, and detailing in Kuching
        </p>

        <p className="text-lg text-primary font-semibold mb-12 animate-fade-in">
          Restoring Your Vehicle to Perfection
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            variant="hero" 
            size="lg"
            onClick={handleWhatsApp}
            className="text-lg px-8 py-6"
          >
            <MessageCircle className="mr-2" />
            Get a Quote on WhatsApp
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleCall}
            className="text-lg px-8 py-6 border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="mr-2" />
            Call Now
          </Button>
        </div>

        {/* Business Hours */}
        <div className="mt-16 text-muted-foreground animate-fade-in">
          <p className="text-sm uppercase tracking-wider mb-2">Open Daily</p>
          <p className="text-lg font-semibold">Monday - Saturday: 9:00 AM - 6:00 PM</p>
          <p className="text-lg font-semibold">Sunday: Closed</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default Hero;
