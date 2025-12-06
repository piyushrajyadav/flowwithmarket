"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="text-xl font-bold text-primary tracking-tighter">
        FLOW WITH MARKET
      </div>
      <div className="flex items-center gap-4">
        <Link href="#pricing">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            Buy Now
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}
