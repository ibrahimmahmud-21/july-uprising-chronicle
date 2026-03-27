import Layout from "@/components/Layout";

const events = [
  { date: "১ জুলাই ২০২৪", title: "কোটা সংস্কার আন্দোলন শুরু", desc: "ঢাকা বিশ্ববিদ্যালয়সহ বিভিন্ন বিশ্ববিদ্যালয়ে ছাত্ররা কোটা সংস্কারের দাবিতে আন্দোলন শুরু করেন।" },
  { date: "৭ জুলাই ২০২৪", title: "আন্দোলন তীব্রতর", desc: "সারাদেশে আন্দোলন ছড়িয়ে পড়ে। রাজপথে ছাত্রদের বিশাল মিছিল।" },
  { date: "১৫ জুলাই ২০২৪", title: "পুলিশের দমনপীড়ন", desc: "পুলিশ ও ছাত্রলীগ যৌথভাবে আন্দোলনকারীদের উপর আক্রমণ চালায়।" },
  { date: "১৬ জুলাই ২০২৪", title: "রক্তক্ষয়ী সংঘর্ষ", desc: "ঢাকাসহ সারাদেশে তীব্র সংঘর্ষে অনেকে নিহত ও আহত হন।" },
  { date: "১৮ জুলাই ২০২৪", title: "কারফিউ জারি", desc: "সরকার সারাদেশে কারফিউ জারি করে এবং সেনাবাহিনী মোতায়েন করে।" },
  { date: "১৯ জুলাই ২০২৪", title: "ইন্টারনেট বিচ্ছিন্ন", desc: "দেশব্যাপী ইন্টারনেট সংযোগ সম্পূর্ণ বন্ধ করে দেওয়া হয়।" },
  { date: "২১ জুলাই ২০২৪", title: "সুপ্রিম কোর্টের রায়", desc: "সুপ্রিম কোর্ট কোটা সংস্কারের পক্ষে রায় দেন।" },
  { date: "৪ আগস্ট ২০২৪", title: "চূড়ান্ত গণজাগরণ", desc: "লক্ষ লক্ষ মানুষ ঢাকার রাজপথে নেমে আসেন। এক দফা এক দাবি — সরকারের পতন।" },
  { date: "৫ আগস্ট ২০২৪", title: "সরকারের পতন", desc: "প্রধানমন্ত্রী পদত্যাগ করে দেশ ত্যাগ করেন। জনতার বিজয় হয়।" },
];

const Timeline = () => (
  <Layout>
    <section className="py-20">
      <div className="page-container">
        <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
          <span className="text-primary text-glow-green">টাইমলাইন</span>
        </h1>
        <p className="text-muted-foreground mb-12 max-w-xl">জুলাই অভ্যুত্থানের গুরুত্বপূর্ণ ঘটনাগুলো তারিখ অনুযায়ী।</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px gradient-line opacity-30" />

          <div className="space-y-12">
            {events.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 animate-fade-in ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 md:mt-0 glow-green z-10" />

                  {/* Card */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors duration-300">
                      <p className="text-primary text-sm font-semibold mb-2">{ev.date}</p>
                      <h3 className="text-foreground font-bold text-lg mb-2">{ev.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{ev.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Timeline;
