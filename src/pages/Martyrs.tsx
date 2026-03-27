import Layout from "@/components/Layout";
import { User } from "lucide-react";

const martyrsData = [
  {"name": "হাসাইন মিয়া", "district": "হবিগঞ্জ"},
  {"name": "মোঃ আশরাফুল আলম", "district": "হবিগঞ্জ"},
  {"name": "মোঃ মোজাক্কির মিয়া", "district": "হবিগঞ্জ"},
  {"name": "শেখ নয়ন হোসেন", "district": "হবিগঞ্জ"},
  {"name": "মোঃ তোফাজ্জল হোসেন", "district": "হবিগঞ্জ"},
  {"name": "মোঃ সাদিকুর রহমান", "district": "হবিগঞ্জ"},
  {"name": "সানি আহমদ", "district": "সিলেট"},
  {"name": "মোঃ নাজমুল ইসলাম", "district": "সিলেট"},
  {"name": "রিয়াজুল ফরাজী", "district": "মুন্সীগঞ্জ"},
  {"name": "নুর মোহাম্মদ সরদার", "district": "শরীয়তপুর"},
  {"name": "মোঃ মিনারুল ইসলাম", "district": "রাজশাহী"},
  {"name": "মোঃ আকিনুর রহমান", "district": "হবিগঞ্জ"},
  {"name": "গৌছ উদ্দিন", "district": "সিলেট"},
  {"name": "মিনহাজ আহমদ", "district": "সিলেট"},
  {"name": "মোঃ ফরিদ শেখ", "district": "মুন্সীগঞ্জ"},
  {"name": "আমজাদ হোসেন", "district": "নরসিংদী"},
  {"name": "মো: আশিকুল ইসলাম রাব্বি", "district": "ময়মনসিংহ"},
  {"name": "সাজিদ হাওলাদার", "district": "বরিশাল"},
  {"name": "মোঃ জাহাঙ্গীর", "district": "পাবনা"},
  {"name": "মোঃ আসিব মিয়া", "district": "শেরপুর"},
  {"name": "হাসিব আহাসান", "district": "ঢাকা"},
  {"name": "মোঃ কামরুল ইসলাম (সেতু)", "district": "ফরিদপুর"},
  {"name": "জাহাঙ্গীর আলম", "district": "নরসিংদী"},
  {"name": "আব্দুল্লাহ আল মাহিন", "district": "ময়মনসিংহ"},
  {"name": "মোঃ রশিদ", "district": "ঢাকা"},
  {"name": "রথিন বিশ্বাস", "district": "গোপালগঞ্জ"},
  {"name": "রাকিব হোসেন", "district": "লক্ষ্মীপুর"},
  {"name": "বিজয়", "district": "ঢাকা"},
  {"name": "রোকনুজ্জামান রাকিব", "district": "যশোর"},
  {"name": "মোঃ শাওয়ান্ত মেহতাব (প্রিয়)", "district": "যশোর"},
  {"name": "মোঃ তারেক রহমান", "district": "যশোর"},
  {"name": "মোঃ আলামিন বিশ্বাস", "district": "যশোর"},
  {"name": "ওয়াসিম মোঃ", "district": "কক্সবাজার"},
  {"name": "মোঃ ফয়সাল আহমেদ শান্ত", "district": "বরিশাল"},
  {"name": "তানভির ছিদ্দিকী", "district": "কক্সবাজার"},
  {"name": "রবিউল ইসলাম রকিব", "district": "ময়মনসিংহ"},
  {"name": "মোঃ নিজাম উদ্দীন", "district": "নোয়াখালী"},
  {"name": "মোঃ মজিদ হোসেন", "district": "খাগড়াছড়ি"},
  {"name": "মোঃ মুনিরুল ইসলাম", "district": "বগুড়া"},
  {"name": "মোঃ জাহিদুল ইসলাম", "district": "পাবনা"},
  {"name": "জুলফিকার আহম্মেদ শাকিল", "district": "মুন্সীগঞ্জ"},
  {"name": "সিদ্দিক মৃধা", "district": "ভোলা"},
  {"name": "মোঃ সালেহ আহমেদ", "district": "চট্টগ্রাম"},
  {"name": "লোকমান", "district": "কুষ্টিয়া"},
  {"name": "এদাত আলি সেখ", "district": "কুষ্টিয়া"},
  {"name": "মোঃ কাফিল উদ্দিন", "district": "কুষ্টিয়া"},
  {"name": "মোঃ জিয়াউর রাহমান", "district": "বগুড়া"},
  {"name": "জয়নুল আবেদীন", "district": "কুষ্টিয়া"},
  {"name": "নওশের আলী", "district": "কুষ্টিয়া"},
  {"name": "জিন্নাতুল ইসলাম খোকন", "district": "নেত্রকোণা"},
  {"name": "মোঃ শাহারিয়া", "district": "নেত্রকোণা"},
  {"name": "মোঃ আব্দুল হান্নান", "district": "কুষ্টিয়া"},
  {"name": "মারুফ মিয়া", "district": "টাঙ্গাইল"},
  {"name": "মজনু মিয়া", "district": "মুন্সীগঞ্জ"},
  {"name": "মোঃ লাল মিয়া", "district": "মানিকগঞ্জ"},
  {"name": "মোঃ সোহেল রানা", "district": "ঢাকা"},
  {"name": "মোঃ মাহবুব আলম", "district": "শেরপুর"},
  {"name": "মোঃ সবুজ মিয়া", "district": "শেরপুর"},
  {"name": "সারদুল আশীষ সৌরভ", "district": "শেরপুর"},
  {"name": "মোঃ মাহাবুব হাসান নিলয়", "district": "পাবনা"},
  {"name": "মোঃ রাজু আহম্মেদ", "district": "মাগুরা"},
  {"name": "মোহাম্মদ সাইফুল হাসান", "district": "নারায়ণগঞ্জ"},
  {"name": "মাহাফুজুর রহমান", "district": "বাগেরহাট"},
  {"name": "শেখ মোঃ সাকিব রায়হান", "district": "খুলনা"},
  {"name": "মিরাজুল ইসলাম অর্নব", "district": "শরীয়তপুর"},
  {"name": "মোঃ সাগর আহম্মেদ", "district": "রাজবাড়ী"},
  {"name": "মোঃ সুজন", "district": "ভোলা"},
  {"name": "সাব্বির হোসেন রনি", "district": "ঢাকা"},
  {"name": "আবরার মাসনুন নীল", "district": "যশোর"},
  {"name": "মোঃ সজিব", "district": "ঢাকা"},
  {"name": "হাসনাইন আহম্মেদ", "district": "ভোলা"},
  {"name": "মাহামুদুর রহমান সৈকত", "district": "চট্টগ্রাম"},
  {"name": "মোঃ রুস্তম", "district": "নরসিংদী"},
  {"name": "সুজন হোসেন", "district": "লালমনিরহাট"},
  {"name": "আরাফাত মুন্সী", "district": "গোপালগঞ্জ"},
  {"name": "মোঃ মমিন", "district": "ভোলা"},
  {"name": "গোলাম নাফিজ", "district": "ঢাকা"},
  {"name": "শাফিক উদ্দিন আহমেদ", "district": "মানিকগঞ্জ"},
  {"name": "রিপন", "district": "কিশোরগঞ্জ"},
  {"name": "মোঃ কবিরুল ইসলাম", "district": "ঢাকা"},
  {"name": "মোঃ শাহিদুল আলম", "district": "ঢাকা"},
  {"name": "মো: আয়াতুল্লাহ", "district": "সুনামগঞ্জ"},
  {"name": "মোঃ জিহাদ হাসান", "district": "কুমিল্লা"},
  {"name": "মোঃ শামিম হাওলাদার", "district": "ময়মনসিংহ"},
  {"name": "নাসির ইসলাম", "district": "ভোলা"},
  {"name": "মোঃ সুজন মিয়া", "district": "গাইবান্ধা"},
  {"name": "মোঃ আসিফ ইকবাল", "district": "মাগুরা"},
  {"name": "মোঃ আহনাফ আবীর আশরাফুল্লাহ", "district": "টাঙ্গাইল"},
  {"name": "মীর মাহফুজুর রহমান", "district": "ঢাকা"},
  {"name": "মোঃ রমজান আলী", "district": "নাটোর"},
  {"name": "মোঃ শিমুল", "district": "দিনাজপুর"},
  {"name": "সামিদ হোসেন", "district": "ময়মনসিংহ"},
  {"name": "আলমগীর হোসেন", "district": "নোয়াখালী"},
  {"name": "সাবিদ হোসেন", "district": "গোপালগঞ্জ"},
  {"name": "মোঃ আব্দুল মান্নান", "district": "বগুড়া"},
  {"name": "সিয়াম শুভ", "district": "বগুড়া"},
  {"name": "মোঃ জাহাঙ্গীর আলম", "district": "ঢাকা"},
  {"name": "মোঃ হাফিজুর রহমান", "district": "মাদারীপুর"},
  {"name": "রিদওয়ান হোসেন মোঃ", "district": "ময়মনসিংহ"},
  {"name": "মেহেদী হাসাস রাব্বী", "district": "মাগুরা"},
  {"name": "মোঃ সাগর রহমান", "district": "পঞ্চগড়"},
];

const Martyrs = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="page-container">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            <span className="text-accent text-glow-red">শহীদ</span>দের তালিকা
          </h1>
          <p className="text-muted-foreground mb-10">যারা জীবন দিয়ে এই অভ্যুত্থানকে সার্থক করেছেন।</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {martyrsData.map((m, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent/30 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 0.02}s`, opacity: 0 }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                  <User className="text-muted-foreground" size={18} />
                </div>
                <h3 className="text-foreground font-semibold text-sm leading-tight mb-0.5">{m.name}</h3>
                <p className="text-muted-foreground text-xs">{m.district}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Martyrs;
