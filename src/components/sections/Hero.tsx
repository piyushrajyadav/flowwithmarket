"use client";

import { Button } from "@/components/ui/button";
import { Book } from "@/components/ui/book";
import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingPaths } from "@/components/ui/background-paths";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Flow With Market <br />
            <span className="text-secondary">
              Master Profitable Trading
            </span>
          </h1>
          <p className="text-xl text-muted-foreground border-l-4 border-secondary pl-4">
            No hype. No guessing. Just pure market flow strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-[#22E07A] shadow-[0_0_20px_rgba(43,255,136,0.4)] transition-all hover:scale-105 cursor-pointer">
                Buy Now – Instant Access
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              Read Sample
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="relative flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
            <Book
              title="Flow With Market"
              width={240}
              color="hsl(146 100% 58%)" // Primary Green
              textColor="#041B12" // Dark Green Text
              variant="stripe"
              textured={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
