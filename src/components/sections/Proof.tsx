"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Proof() {
  return (
    <section className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real <span className="text-secondary">Results</span>
          </h2>
          <p className="text-muted-foreground">
            Consistent profits using the Flow With Market strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-primary/20 bg-background">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                    Chart Screenshot {i}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-secondary">+15% Profit</span>
                      <span className="text-sm text-muted-foreground">NIFTY 50 Intraday</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
