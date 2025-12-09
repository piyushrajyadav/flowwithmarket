"use client";

import { useState } from "react";
import MockPaymentModal from "./MockPaymentModal";

interface PaymentButtonProps {
    onSuccess: () => void;
}

export default function PaymentButton({ onSuccess }: PaymentButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(43,255,136,0.3)] hover:shadow-[0_0_30px_rgba(43,255,136,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
                Buy Now - ₹499
            </button>

            <MockPaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={onSuccess}
                amount="₹499"
            />
        </>
    );
}
