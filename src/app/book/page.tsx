"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PaymentButton from "@/components/book/PaymentButton";
import dynamic from "next/dynamic";
import { ShieldCheck, BookOpen, Star, TrendingUp } from "lucide-react";
import Navbar from "@/components/sections/Navbar";

const BookReader = dynamic(() => import("@/components/book/BookReader"), { ssr: false });

export default function BookPage() {
    const [isPurchased, setIsPurchased] = useState(false);

    if (isPurchased) {
        return (
            <main className="min-h-screen bg-black">
                <BookReader pdfUrl="/book.pdf" />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left: Content */}
                        <div className="lg:w-1/2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold"
                            >
                                <TrendingUp size={16} />
                                <span>#1 Best Seller in Stock Market</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
                            >
                                Master the <span className="text-primary">Flow</span> of the Market
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-muted-foreground leading-relaxed"
                            >
                                Stop gambling and start trading. The ultimate guide to understanding price action, market psychology, and institutional movements.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary"><BookOpen size={20} /></div>
                                    <span className="text-lg">Interactive PDF Experience</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary"><ShieldCheck size={20} /></div>
                                    <span className="text-lg">Secure Razorpay Payment</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary"><Star size={20} /></div>
                                    <span className="text-lg">Lifetime Access + Updates</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="pt-4"
                            >
                                <PaymentButton onSuccess={() => setIsPurchased(true)} />
                                <p className="mt-4 text-sm text-muted-foreground">Instant access immediately after payment.</p>
                            </motion.div>
                        </div>

                        {/* Right: Book Preview */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                            animate={{ opacity: 1, scale: 1, rotateY: -10 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2 perspective-[2000px] flex justify-center"
                        >
                            <div className="relative w-[300px] h-[460px] lg:w-[400px] lg:h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-2 shadow-[0_50px_100px_rgba(43,255,136,0.2)] transform-style-3d rotate-y-12 transition-transform hover:rotate-y-0 duration-500">
                                {/* Book Cover Mockup */}
                                <div className="w-full h-full bg-[#0a0a0a] rounded border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
                                    <h2 className="text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 z-10 px-4">
                                        FLOW WITH MARKET
                                    </h2>
                                    <div className="mt-8 w-24 h-1 bg-primary rounded-full" />
                                    <p className="mt-4 text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">The Trader's Bible</p>
                                </div>

                                {/* Spine Effect */}
                                <div className="absolute top-0 left-0 w-4 h-full bg-white/10 blur-sm rounded-l" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
