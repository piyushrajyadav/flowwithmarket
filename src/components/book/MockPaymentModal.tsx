"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, CreditCard, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MockPaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    amount: string;
}

export default function MockPaymentModal({ isOpen, onClose, onSuccess, amount }: MockPaymentModalProps) {
    const [step, setStep] = useState<"details" | "processing" | "success">("details");

    // Reset state when modal opens/closes
    useEffect(() => {
        if (isOpen) setStep("details");
    }, [isOpen]);

    const handlePay = () => {
        setStep("processing");
        // Simulate network delay
        setTimeout(() => {
            setStep("success");
            // Close after showing success for a moment
            setTimeout(() => {
                onSuccess();
                onClose();
            }, 1500);
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-card w-full max-w-md rounded-xl shadow-2xl border border-border overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-green-500" />
                                <span className="font-semibold text-sm">Secure Payment Gateway</span>
                            </div>
                            <button onClick={onClose} className="p-1 hover:bg-muted rounded-full">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {step === "details" && (
                                <div className="space-y-4">
                                    <div className="text-center mb-6">
                                        <p className="text-muted-foreground text-sm">Total Amount</p>
                                        <h3 className="text-3xl font-bold text-foreground">{amount}</h3>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground">Card Number</label>
                                            <div className="relative">
                                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                <input
                                                    type="text"
                                                    value="4242 4242 4242 4242"
                                                    readOnly
                                                    className="w-full bg-background border border-input rounded-md py-2 pl-9 pr-3 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-muted-foreground">Expiry</label>
                                                <input
                                                    type="text"
                                                    value="12/28"
                                                    readOnly
                                                    className="w-full bg-background border border-input rounded-md py-2 px-3 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-medium text-muted-foreground">CVC</label>
                                                <input
                                                    type="text"
                                                    value="123"
                                                    readOnly
                                                    className="w-full bg-background border border-input rounded-md py-2 px-3 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={handlePay}
                                        className="w-full py-6 mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg shadow-[0_0_20px_rgba(43,255,136,0.3)] mt-6"
                                    >
                                        Pay {amount}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground mt-4">
                                        This is a secure 256-bit SSL encrypted payment.
                                    </p>
                                </div>
                            )}

                            {step === "processing" && (
                                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                                    <p className="text-lg font-medium">Processing Payment...</p>
                                    <p className="text-sm text-muted-foreground">Please do not close this window</p>
                                </div>
                            )}

                            {step === "success" && (
                                <div className="py-8 flex flex-col items-center justify-center space-y-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center"
                                    >
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-foreground">Payment Successful!</h3>
                                    <p className="text-muted-foreground text-center">Redirecting to your book...</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
