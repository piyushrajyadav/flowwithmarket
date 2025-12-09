"use client";

import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-card";

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* Left Column: Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[1/1.4] w-full rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform hover:scale-105 duration-500">
              {/* Book Spine Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/20 to-transparent z-20 rounded-l-lg" />

              <Image
                src="/book.png"
                alt="Flow With Market Book Cover"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
            {/* Reflection/Shadow */}
            <div className="absolute -bottom-8 left-4 right-4 h-8 bg-black/20 blur-xl rounded-[100%]" />
          </motion.div>

          {/* Right Column: Pricing Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlowingCard className="p-8 space-y-8 text-center lg:text-left bg-background/80 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/20 animate-pulse">
                <Clock className="w-4 h-4" />
                <span className="font-mono font-bold">
                  Offer Ends in {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Flow With Market</h2>
                <p className="text-xl text-muted-foreground">
                  The ultimate guide to mastering price action and institutional flow.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-secondary uppercase tracking-wider">Limited Time Offer</p>
                <div className="flex items-baseline justify-center lg:justify-start gap-4">
                  <span className="text-6xl font-extrabold text-primary">₹16,000</span>
                  <div className="flex flex-col items-start">
                    <span className="text-2xl text-muted-foreground line-through decoration-destructive decoration-2">₹20,000</span>
                    <span className="text-sm font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">20% OFF</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 max-w-md mx-auto lg:mx-0">
                {[
                  "Complete Flow With Market Ebook",
                  "Bonus #1: Trading Checklist",
                  "Bonus #2: Private Telegram Access",
                  "Lifetime Updates",
                  "Mobile-Friendly Format",
                  "30-Day Money-Back Guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 rounded-full shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link href="/book" className="cursor-pointer">
                  <Button size="lg" className="w-full sm:w-auto min-w-[200px] text-lg py-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all cursor-pointer">
                    Get Instant Access Now
                  </Button>
                </Link>
                <p className="mt-4 text-sm text-muted-foreground">
                  Secure Payment • Instant Download
                </p>
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
