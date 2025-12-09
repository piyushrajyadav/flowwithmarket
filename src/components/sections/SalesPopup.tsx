"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const names = ["Rahul from Mumbai", "Sarah from London", "Amit from Delhi", "John from New York", "Priya from Bangalore"];

export default function SalesPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const showPopup = () => {
      setName(names[Math.floor(Math.random() * names.length)]);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const interval = setInterval(showPopup, 15000);
    setTimeout(showPopup, 5000); // First popup after 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: -50 }}
          className="fixed bottom-6 left-6 z-50 bg-card border border-primary/20 p-4 rounded-lg shadow-lg flex items-center gap-4 max-w-xs"
        >
          <Avatar className="h-10 w-10 border border-primary/50">
            <AvatarImage src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99)}.jpg`} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-bold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">just purchased Flow With Market</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
