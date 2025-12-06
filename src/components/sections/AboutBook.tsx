"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutBook() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          {/* Placeholder for book image/mockup */}
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto bg-gradient-to-br from-primary/20 to-background rounded-lg border border-primary/20 flex items-center justify-center">
             <span className="text-primary/50 font-bold text-2xl">Book Preview</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            More Than Just a <span className="text-secondary">Trading Book</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            "Flow With Market" isn't about memorizing patterns. It's about understanding the *why* behind every move. 
            This book distills years of market experience into a concise, actionable guide.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• 150+ Pages of premium content</li>
            <li>• Real-world chart examples</li>
            <li>• Step-by-step strategy implementation</li>
            <li>• Digital format for instant access anywhere</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
