"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { useState, useEffect } from "react";

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
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-8 border border-destructive/20 animate-pulse">
            <Clock className="w-4 h-4" />
            <span className="font-mono font-bold">
              Offer Ends in {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>

          <Card className="border-2 border-primary shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-card">
            <CardHeader className="text-center space-y-4 pb-8 border-b border-border">
              <CardTitle className="text-4xl font-bold">Flow With Market</CardTitle>
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-5xl font-extrabold text-primary">$49</span>
                <span className="text-xl text-muted-foreground line-through">$199</span>
              </div>
              <p className="text-secondary font-medium">Save 75% Today</p>
            </CardHeader>
            <CardContent className="pt-8 space-y-4">
              <ul className="space-y-3 text-left">
                {[
                  "Complete Flow With Market Ebook",
                  "Bonus #1: Trading Checklist ($29 Value)",
                  "Bonus #2: Private Telegram Access ($99 Value)",
                  "Lifetime Updates",
                  "Mobile-Friendly Format",
                  "30-Day Money-Back Guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 rounded-full">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pb-8 pt-4">
              <Button size="lg" className="w-full text-lg py-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all">
                Get Instant Access Now
              </Button>
            </CardFooter>
          </Card>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Secure Payment • Instant Download • 100% Satisfaction
          </p>
        </div>
      </div>
    </section>
  );
}
