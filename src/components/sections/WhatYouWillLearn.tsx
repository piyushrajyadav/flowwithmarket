"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { motion } from "framer-motion";
import { TrendingUp, Brain, BarChart3, ShieldCheck, Target, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "Market Psychology",
    description: "Decode the emotions driving the market and trade with the smart money.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-secondary" />,
    title: "Trend Identification",
    description: "Spot trends early and ride them for maximum profit potential.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Price Action Mastery",
    description: "Read naked charts like a pro without relying on lagging indicators.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
    title: "Risk Management",
    description: "Protect your capital with professional position sizing and stop-loss strategies.",
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: "Sniper Entries",
    description: "Learn exact entry and exit points to minimize drawdown.",
  },
  {
    icon: <Zap className="w-10 h-10 text-secondary" />,
    title: "Intraday & Swing",
    description: "Strategies adaptable for both day trading and swing trading styles.",
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What You Will <span className="text-primary">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete roadmap to becoming a profitable trader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlowingCard className="bg-card/50 h-full">
                <div className="p-6">
                  <div className="mb-4 p-3 bg-background/50 w-fit rounded-xl border border-border">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold leading-none tracking-tight mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
