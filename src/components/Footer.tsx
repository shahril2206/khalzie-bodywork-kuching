import logo from "@/assets/khalzie-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="Khalzie Bodywork" 
              className="w-20 h-20 object-contain mx-auto md:mx-0 mb-4"
            />
            <p className="text-muted-foreground">
              Professional Car Bodywork & Repair
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-foreground font-semibold mb-2">Khalzie Bodywork Kuching</p>
            <p className="text-muted-foreground mb-1">Kuching, Sarawak, Malaysia</p>
            <p className="text-muted-foreground">+60 12-345 6789</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Khalzie Bodywork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
