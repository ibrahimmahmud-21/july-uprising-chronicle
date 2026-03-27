import { useState } from "react";
import Layout from "@/components/Layout";
import { Search, User } from "lucide-react";

const martyrsData = [
  { name: "আবু সাঈদ", location: "রাঙ্গপুর", status: "যাচাইকৃত" },
  { name: "মুগ্ধ অবন্তী", location: "ঢাকা", status: "যাচাইকৃত" },
  { name: "মীর মুগ্ধ", location: "ঢাকা", status: "যাচাইকৃত" },
  { name: "ওয়াসিম আকরাম", location: "চট্টগ্রাম", status: "অযাচাইকৃত" },
  { name: "শামীম বিল্লাহ", location: "সিলেট", status: "যাচাইকৃত" },
  { name: "ফাহিম রেজা", location: "রাজশাহী", status: "অযাচাইকৃত" },
];

const Martyrs = () => {
  const [search, setSearch] = useState("");
  const filtered = martyrsData.filter(
    (m) => m.name.includes(search) || m.location.includes(search)
  );

  return (
    <Layout>
      <section className="py-20">
        <div className="page-container">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            <span className="text-accent text-glow-red">শহীদ</span>দের তালিকা
          </h1>
          <p className="text-muted-foreground mb-8">যারা জীবন দিয়ে এই অভ্যুত্থানকে সার্থক করেছেন।</p>

          {/* Search */}
          <div className="relative max-w-md mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="নাম বা অবস্থান দিয়ে খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-lg py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((m, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-all duration-300 hover:glow-red animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <User className="text-muted-foreground" size={28} />
                </div>
                <h3 className="text-foreground font-bold text-center text-lg mb-1">{m.name}</h3>
                <p className="text-muted-foreground text-center text-sm mb-3">{m.location}</p>
                <p
                  className={`text-center text-xs font-semibold px-3 py-1 rounded-full inline-block w-full ${
                    m.status === "যাচাইকৃত"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {m.status}
                </p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-muted-foreground text-center mt-12">কোনো ফলাফল পাওয়া যায়নি।</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Martyrs;
