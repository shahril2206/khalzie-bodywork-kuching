import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const galleryItems = [
  { before: before1, after: after1, title: "Door Panel Restoration" },
  { before: before2, after: after2, title: "Bumper Repair" },
];

const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Our Work
            </span>
            <span className="text-foreground"> Speaks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the quality of our repairs - from damaged to perfect
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                {item.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div className="relative group overflow-hidden rounded-lg border-2 border-destructive">
                  <img 
                    src={item.before} 
                    alt={`Before ${item.title}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-bold uppercase text-sm">
                    Before
                  </div>
                </div>

                {/* After */}
                <div className="relative group overflow-hidden rounded-lg border-2 border-primary">
                  <img 
                    src={item.after} 
                    alt={`After ${item.title}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold uppercase text-sm">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-4">
            Ready to restore your vehicle to perfection?
          </p>
          <a 
            href="https://wa.me/60123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-lg font-bold text-primary hover:text-primary-glow transition-colors underline underline-offset-4"
          >
            Contact us for a free quote →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
