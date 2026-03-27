import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-bg.jpg";
import featuredImg from "@/assets/featured-event.jpg";

const images = [
  { src: heroImg, caption: "রাজপথে জনতার ঢল" },
  { src: featuredImg, caption: "পতাকা হাতে মিছিল" },
  { src: gallery1, caption: "শহীদদের স্মরণে মোমবাতি প্রজ্বালন" },
  { src: gallery2, caption: "প্রতিবাদে দৃঢ় তরুণরা" },
  { src: gallery3, caption: "আন্দোলনের পর নির্জন রাজপথ" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-20">
        <div className="page-container">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            <span className="text-primary text-glow-green">গ্যালারি</span>
          </h1>
          <p className="text-muted-foreground mb-12">জুলাই অভ্যুত্থানের স্মরণীয় মুহূর্তগুলো।</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className="group relative rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setSelected(null)}>
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={images[selected].src} alt={images[selected].caption} className="w-full rounded-lg" />
            <p className="text-center text-foreground mt-4 text-sm">{images[selected].caption}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
