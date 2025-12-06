"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, MessageCircle } from "lucide-react";

export default function Bonuses() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Exclusive <span className="text-secondary">Bonuses</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-secondary/20 relative overflow-hidden group hover:border-secondary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gift className="w-32 h-32" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Gift className="text-secondary" /> Bonus #1: Trading Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A printable PDF checklist to keep on your desk. Never miss a step in your trading routine again.
                Ensure every trade meets your criteria before pulling the trigger.
              </p>
              <p className="mt-4 font-bold text-secondary">Value: $29 (FREE)</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle className="w-32 h-32" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <MessageCircle className="text-primary" /> Bonus #2: Telegram Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join our private community of traders. Share charts, discuss setups, and grow together.
                Direct access to market updates and Q&A sessions.
              </p>
              <p className="mt-4 font-bold text-primary">Value: $99/year (FREE)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
