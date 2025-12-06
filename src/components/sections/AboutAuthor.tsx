"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";
import Image from "next/image";

export default function AboutAuthor() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-secondary/20 shadow-2xl shadow-secondary/10">
              {/* Placeholder for Author Image - Replace src with actual image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
              <Image 
                src="/placeholder-author.jpg" 
                alt="Bishnugupta - Author"
                fill
                className="object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-card/90 backdrop-blur border border-primary/30 p-4 rounded-xl shadow-lg">
                <p className="text-primary font-bold text-2xl">5+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
            
            {/* Decorative elements behind image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl -z-10" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Meet <span className="text-secondary">Bishnugupta</span>
              </h2>
              <p className="text-xl text-primary font-medium flex items-center gap-2">
                <Award className="w-5 h-5" />
                SEBI Certified Professional
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              "Trading isn't about predicting the future; it's about reacting to the present with probability on your side."
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of dedicated experience in the financial markets, I've transitioned from a corporate analyst to a full-time professional trader. My journey wasn't easy—I've faced the same market volatility and psychological hurdles that you do. That's why I created <em>Flow With Market</em>: to provide the structured, data-driven approach I wish I had when I started.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SEBI Certified Professional",
                "5+ Years Market Experience",
                "Ex-Corporate Financial Analyst",
                "Price Action Specialist",
                "Mentor to 1000+ Traders",
                "Risk Management Expert"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-card/50 p-3 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-foreground">5K+</p>
                  <p className="text-sm text-muted-foreground">Community Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">₹10Cr+</p>
                  <p className="text-sm text-muted-foreground">Capital Managed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
