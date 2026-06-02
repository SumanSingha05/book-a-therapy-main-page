import {
  Users,
  Zap,
  Shield,
  CheckCircle,
  MapPin,
  Search,
  Smile,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const howItWorksSteps = [
    {
      step: "01",
      icon: MapPin,
      title: "Specify Location & Portal",
      description:
        "Enter your location, pick whether you want a customer, practitioner, or clinic portal, and open your workspace.",
    },
    {
      step: "02",
      icon: Search,
      title: "Match and Customize",
      description:
        "Filter certified massage practitioners by ratings, location, availability, and therapy type to find your perfect fit.",
    },
    {
      step: "03",
      icon: Smile,
      title: "Relax & Thrive",
      description:
        "Confirm your booking instantly with secure Stripe payments, and enjoy a professional therapy experience.",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Verified Therapists",
      description:
        "All therapists are certified, insured, and thoroughly vetted to ensure your complete safety and comfort.",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description:
        "Secure your massage session in minutes. Choose your preferred time, location, and practitioner with ease.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your personal records and health information are fully encrypted and kept completely confidential.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      description:
        "No hidden fees or unexpected charges. See the exact pricing upfront before booking your session.",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Happy Clients" },
    { number: "500+", label: "Certified Therapists" },
    { number: "50+", label: "Cities Covered" },
    { number: "10K+", label: "Sessions Completed" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* ─── HOW IT WORKS SECTION ─── */}
      <section id="services" className="section hiw">
        <div className="section__inner">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <span className="section__label">Simple Steps</span>
            <h2 className="section__heading">How It Works</h2>
            <p className="section__sub" style={{ margin: "0 auto" }}>
              We've streamlined the entire process to connect you with top-tier
              wellness practitioners in a matter of clicks.
            </p>
          </div>

          <div className="hiw__grid">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="hiw__card bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700"
                >
                  <span className="hiw__step-num">Step {step.step}</span>
                  <div className="hiw__icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3 className="hiw__title dark:text-white">{step.title}</h3>
                  <p className="hiw__desc dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US / CORE BENEFITS SECTION ─── */}
      <section id="about" className="section benefits">
        <div className="section__inner">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <span className="section__label">Why Choose Us</span>
            <h2 className="section__heading">BookATherapy Core Benefits</h2>
            <p className="section__sub" style={{ margin: "0 auto" }}>
              We are dedicated to making professional massage therapy
              accessible, transparent, and completely hassle-free.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="benefits__grid" style={{ marginBottom: "64px" }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="benefit-card bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700"
                >
                  <div className="benefit-card__icon bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="benefit-card__title dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="benefit-card__desc dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/80 rounded-2xl p-8 md:p-10 shadow-sm border border-green-100/50 dark:border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PREMIUM GRADIENT CTA BANNER ─── */}
      <section className="section cta-banner">
        <div className="cta-banner__inner">
          {/* Floating glow circles */}
          <div className="cta-banner__circle cta-banner__circle--1" />
          <div className="cta-banner__circle cta-banner__circle--2" />

          <div className="cta-banner__content">
            <h3 className="cta-banner__heading">
              Ready to Experience Professional Wellness?
            </h3>
            <p className="cta-banner__sub">
              Join thousands of wellness enthusiasts who have unlocked premium
              in-home, mobile, or clinic-based massage therapy sessions.
            </p>
            <a
              href="#portals"
              className="cta-banner__btn hover:scale-105 active:scale-95 transition-all"
            >
              Choose Your Portal
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
