"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemPromise() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 p-8 rounded-2xl bg-red-950/10 border border-red-900/20"
          >
            <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
              <XCircle /> The Struggle
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                Buying at the top and selling at the bottom.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                Confused by lagging indicators and messy charts.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✕</span>
                Blowing accounts due to lack of strategy.
              </li>
            </ul>
          </motion.div>

          {/* Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 p-8 rounded-2xl bg-secondary/5 border border-secondary/20"
          >
            <h3 className="text-2xl font-bold text-secondary flex items-center gap-2">
              <CheckCircle2 /> The Solution
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                Identify high-probability setups with precision.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                Understand market psychology and institutional flow.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                Consistent growth with a proven system.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
