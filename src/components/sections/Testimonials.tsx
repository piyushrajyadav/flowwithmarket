"use client";

import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Rahul S.",
      handle: "@rahul_trader",
      avatar: "/placeholder-user-0.jpg"
    },
    text: "This book changed my perspective completely. I stopped chasing indicators and started following the flow. My win rate has doubled.",
    href: "#"
  },
  {
    author: {
      name: "Sarah J.",
      handle: "@sarah_markets",
      avatar: "/placeholder-user-1.jpg"
    },
    text: "Finally, a guide that explains market psychology in simple terms. The strategies are practical and easy to implement.",
    href: "#"
  },
  {
    author: {
      name: "Amit K.",
      handle: "@amit_invests",
      avatar: "/placeholder-user-2.jpg"
    },
    text: "I was losing money for months. After reading Flow With Market, I finally understand where I was going wrong. Highly recommended!",
    href: "#"
  },
  {
    author: {
      name: "John D.",
      handle: "@johndoe_fx",
      avatar: "/placeholder-user.jpg"
    },
    text: "The section on risk management alone is worth 10x the price. A must-read for any serious trader.",
    href: "#"
  },
  {
    author: {
      name: "Priya M.",
      handle: "@priya_charts",
      avatar: "/placeholder-user.jpg"
    },
    text: "Simple, effective, and to the point. No fluff, just pure trading wisdom. Love the 3D examples!",
    href: "#"
  }
];

export default function Testimonials() {
  return (
    <TestimonialsSection
      title="What Traders Are Saying"
      description="Join thousands of traders who have transformed their results with Flow With Market."
      testimonials={testimonials}
    />
  );
}
