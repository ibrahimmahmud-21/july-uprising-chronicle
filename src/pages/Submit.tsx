import { useState } from "react";
import Layout from "@/components/Layout";
import { Upload, Send } from "lucide-react";

const Submit = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="page-container max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            তথ্য <span className="text-primary text-glow-green">জমা দিন</span>
          </h1>
          <p className="text-muted-foreground mb-10">শহীদ বা ঘটনা সম্পর্কে তথ্য জমা দিতে নিচের ফর্মটি পূরণ করুন।</p>

          {submitted ? (
            <div className="bg-card border border-primary/30 rounded-lg p-12 text-center animate-fade-in glow-green">
              <p className="text-primary text-2xl font-bold mb-2">ধন্যবাদ!</p>
              <p className="text-muted-foreground">আপনার তথ্য সফলভাবে জমা হয়েছে।</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <label className="text-foreground text-sm font-semibold block mb-2">নাম</label>
                <input
                  type="text"
                  required
                  placeholder="শহীদ বা সাক্ষীর নাম"
                  className="w-full bg-card border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-foreground text-sm font-semibold block mb-2">ছবি</label>
                <div className="bg-card border border-dashed border-border rounded-lg p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                  <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                  <p className="text-muted-foreground text-sm">ছবি আপলোড করতে ক্লিক করুন</p>
                </div>
              </div>

              <div>
                <label className="text-foreground text-sm font-semibold block mb-2">বিবরণ</label>
                <textarea
                  required
                  rows={5}
                  placeholder="ঘটনার বিস্তারিত বিবরণ লিখুন..."
                  className="w-full bg-card border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                জমা দিন
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Submit;
