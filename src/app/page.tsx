"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  Mail,
  MessageSquare,
  FileText,
  Check,
  ChevronDown,
  ArrowRight,
  Star,
  Play,
} from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">WriteFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition hidden sm:block">Log in</a>
            <a
              href="#pricing"
              className="gradient-bg text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Trusted by 10,000+ marketers
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Write marketing copy that
            <span className="gradient-text block">converts in seconds</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Stop staring at blank screens. WriteFlow AI generates high-converting emails, ads, landing pages, and social posts tailored to your brand voice.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#pricing"
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Start Writing for Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-300 transition flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.9/5 from 2,000+ reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image/Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-b from-indigo-100 to-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-500 block mb-2">What are you writing?</label>
                    <div className="bg-gray-50 rounded-lg p-3 text-gray-700">Email subject line for Black Friday sale</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <label className="text-sm font-medium text-gray-500 block mb-2">Generated Copy</label>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200">
                      <p className="font-medium text-gray-800">Your cart is getting lonely... 50% off ends tonight!</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-indigo-600">
                        <TrendingUp className="w-4 h-4" />
                        Predicted open rate: 42%
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">Black Friday is HERE - Biggest savings of the year inside</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">48 hours left: Your exclusive 50% discount expires soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -right-4 top-20 bg-white rounded-xl shadow-lg p-4 animate-float hidden lg:block">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Generated!</p>
                <p className="text-xs text-gray-500">3 variations ready</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Logos Section
function Logos() {
  const logos = ["Shopify", "HubSpot", "Mailchimp", "Notion", "Stripe", "Slack"];
  return (
    <section className="py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">Trusted by marketing teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo) => (
            <div key={logo} className="text-2xl font-bold text-gray-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Generate subject lines, body copy, and CTAs that boost open rates and conversions.",
    },
    {
      icon: Target,
      title: "Ad Copy",
      description: "Create high-performing Facebook, Google, and LinkedIn ads that stop the scroll.",
    },
    {
      icon: FileText,
      title: "Landing Pages",
      description: "Write compelling headlines, benefit statements, and testimonials that convert.",
    },
    {
      icon: MessageSquare,
      title: "Social Posts",
      description: "Craft engaging posts for every platform, optimized for each audience.",
    },
    {
      icon: Sparkles,
      title: "Brand Voice AI",
      description: "Train the AI on your brand guidelines for consistent, on-brand messaging.",
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Get AI-powered predictions on what copy will perform best.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">FEATURES</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to write <span className="gradient-text">faster & better</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            From emails to ads to landing pages, WriteFlow has specialized tools for every marketing channel.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Describe your goal",
      description: "Tell WriteFlow what you're writing and who it's for. Add any context about your brand or campaign.",
    },
    {
      step: "02",
      title: "Generate variations",
      description: "Get multiple AI-generated options in seconds. Each one optimized for engagement and conversions.",
    },
    {
      step: "03",
      title: "Edit and publish",
      description: "Fine-tune the copy to your liking, then export directly to your marketing tools.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">HOW IT WORKS</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            From blank page to <span className="gradient-text">published</span> in minutes
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((item, index) => (
            <motion.div key={item.step} variants={fadeInUp} className="relative">
              <div className="text-8xl font-bold text-gray-100 absolute -top-8 left-0">{item.step}</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for trying out WriteFlow",
      features: [
        "50 AI generations per month",
        "3 content types",
        "Basic templates",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For growing marketing teams",
      features: [
        "Unlimited AI generations",
        "All content types",
        "Brand voice training",
        "Performance predictions",
        "Priority support",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom AI training",
        "API access",
        "SSO & security",
        "Dedicated success manager",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">PRICING</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Simple, transparent <span className="gradient-text">pricing</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            Start free, upgrade when you need more power.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "gradient-bg text-white scale-105 shadow-2xl"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="bg-white text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? "text-white" : ""}`}>
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : ""}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-white/80" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>
              <p className={plan.popular ? "text-white/90" : "text-gray-600"}>{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-indigo-600"}`} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "gradient-bg text-white hover:opacity-90"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "WriteFlow cut our email creation time by 80%. We're now sending campaigns that actually convert.",
      author: "Sarah Chen",
      role: "Head of Marketing, TechStart",
      rating: 5,
    },
    {
      quote: "The brand voice feature is incredible. Every piece of copy sounds exactly like us.",
      author: "Marcus Johnson",
      role: "CMO, GrowthCo",
      rating: 5,
    },
    {
      quote: "We've tested dozens of AI writing tools. WriteFlow is the only one that understands marketing.",
      author: "Emily Rodriguez",
      role: "Content Director, ScaleUp",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">TESTIMONIALS</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Loved by <span className="gradient-text">marketers</span> everywhere
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const faqs = [
    {
      question: "How is WriteFlow different from ChatGPT?",
      answer: "WriteFlow is specifically built for marketing. Our AI is trained on high-converting marketing copy and understands concepts like CTAs, benefit statements, and conversion psychology that general AI tools miss.",
    },
    {
      question: "Can I train it on my brand voice?",
      answer: "Yes! Pro and Enterprise plans include brand voice training. Upload your existing content and style guides, and WriteFlow will learn to write in your unique voice.",
    },
    {
      question: "What content types does WriteFlow support?",
      answer: "Email campaigns, subject lines, ad copy (Facebook, Google, LinkedIn), landing pages, social media posts, blog intros, product descriptions, and more.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Our Starter plan is free forever with 50 generations per month. Pro plans also include a 14-day free trial with full access.",
    },
    {
      question: "Can my team collaborate?",
      answer: "Absolutely. Pro and Enterprise plans include team workspaces, shared brand voices, and collaboration features.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">FAQ</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Frequently asked <span className="gradient-text">questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="gradient-bg rounded-3xl p-12 text-center text-white"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to write copy that converts?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 10,000+ marketers who are already saving hours every week and boosting their results with WriteFlow AI.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Start Writing for Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-6 text-white/70 text-sm">
            No credit card required. 50 free generations included.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">WriteFlow</span>
            </div>
            <p className="text-gray-400">
              AI-powered copywriting for marketers who want results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WriteFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
