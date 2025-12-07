"use client";

import { GlowingCard } from "@/components/ui/glowing-card";
import { Gift, MessageCircle } from "lucide-react";

export default function Bonuses() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Exclusive <span className="text-secondary">Bonuses</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlowingCard className="bg-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gift className="w-32 h-32" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-3 mb-4">
                <Gift className="text-secondary" /> Bonus #1: Trading Checklist
              </h3>
              <div className="text-sm text-muted-foreground">
                <p className="text-muted-foreground">
                  A printable PDF checklist to keep on your desk. Never miss a step in your trading routine again.
                  Ensure every trade meets your criteria before pulling the trigger.
                </p>
                <p className="mt-4 font-bold text-secondary">Value: $29 (FREE)</p>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard className="bg-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle className="w-32 h-32" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-3 mb-4">
                <MessageCircle className="text-primary" /> Bonus #2: Telegram Access
              </h3>
              <div className="text-sm text-muted-foreground">
                <p className="text-muted-foreground">
                  Join our private community of traders. Share charts, discuss setups, and grow together.
                  Direct access to market updates and Q&A sessions.
                </p>
                <p className="mt-4 font-bold text-primary">Value: $99/year (FREE)</p>
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
    </section>
  );
}
