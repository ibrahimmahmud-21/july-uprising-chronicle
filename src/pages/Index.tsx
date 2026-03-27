import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import featuredImg from "@/assets/featured-event.jpg";
import dictatorSmall from "@/assets/dictator-small.png";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const stats = [
  { icon: Calendar, label: "মোট ঘটনা", value: "৫০+", color: "text-primary" },
  { icon: Clock, label: "আন্দোলনের দিন", value: "২৬", color: "text-primary" },
  { icon: Users, label: "শহীদ", value: "শত শত", color: "text-accent" },
];

const timelinePreview = [
  { date: "১ জুলাই ২০২৪", title: "কোটা সংস্কার আন্দোলন শুরু", desc: "বিশ্ববিদ্যালয়ের ছাত্ররা কোটা সংস্কারের দাবিতে রাজপথে নামেন।" },
  { date: "১৬ জুলাই ২০২৪", title: "ব্যাপক সংঘর্ষ", desc: "সারাদেশে পুলিশ ও ছাত্রদের মধ্যে তীব্র সংঘর্ষ হয়।" },
  { date: "১৯ জুলাই ২০২৪", title: "ইন্টারনেট বন্ধ", desc: "সরকার সারাদেশে ইন্টারনেট সংযোগ বিচ্ছিন্ন করে।" },
  { date: "৫ আগস্ট ২০২৪", title: "সরকারের পতন", desc: "গণআন্দোলনের মুখে প্রধানমন্ত্রী পদত্যাগ করেন এবং দেশ ত্যাগ করেন।" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] overflow-hidden">
      <img src={heroBg} alt="জুলাই অভ্যুত্থান" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 page-container flex items-center min-h-[90vh]">
        <div className="animate-fade-in py-16 md:py-0 w-full">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-primary text-glow-green text-left">
              জুলাই অভ্যুত্থান
            </h1>
            <img
              src={dictatorSmall}
              alt="স্বৈরাচার"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover shrink-0 border-2 border-border"
            />
          </div>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-xl mb-8 text-left">
            রক্তে রাঙানো পথে, স্বাধীনতার নতুন ভোর — বাংলাদেশের ছাত্র-জনতার অপ্রতিরোধ্য জাগরণ
          </p>
          <div className="gradient-line h-1 w-48 rounded-full" />
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20">
      <div className="page-container grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-lg p-8 text-center animate-slide-up hover:glow-green transition-shadow duration-300">
            <s.icon className={`mx-auto mb-4 ${s.color}`} size={32} />
            <p className={`text-4xl font-black ${s.color} mb-2`}>{s.value}</p>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Featured */}
    <section className="py-16">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          <span className="text-accent text-glow-red">মুখ্য</span> ঘটনা
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden glow-green">
            <img src={featuredImg} alt="মুখ্য ঘটনা" className="w-full h-72 object-cover" loading="lazy" width={1280} height={720} />
          </div>
          <div className="animate-fade-in">
            <p className="text-primary text-sm font-semibold mb-2">৫ আগস্ট ২০২৪</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">গণজাগরণে সরকারের পতন</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              দীর্ঘ ২৬ দিনের আন্দোলনের পর, লক্ষ লক্ষ মানুষের অদম্য সাহস ও ত্যাগের ফলে স্বৈরাচারী সরকারের পতন ঘটে। 
              এই দিনটি বাংলাদেশের ইতিহাসে একটি নতুন অধ্যায়ের সূচনা করে।
            </p>
            <Link to="/timeline" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
              সম্পূর্ণ টাইমলাইন দেখুন <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline Preview */}
    <section className="py-16">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-foreground mb-10">
          টাইমলাইন <span className="text-primary text-glow-green">প্রিভিউ</span>
        </h2>
        <div className="space-y-6">
          {timelinePreview.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 items-start bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0 animate-pulse-glow" />
              <div>
                <p className="text-primary text-sm font-semibold mb-1">{item.date}</p>
                <h4 className="text-foreground font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/timeline" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
            সম্পূর্ণ টাইমলাইন <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
