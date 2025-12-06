import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemPromise from "@/components/sections/ProblemPromise";
import WhatYouWillLearn from "@/components/sections/WhatYouWillLearn";
import AboutBook from "@/components/sections/AboutBook";
import AboutAuthor from "@/components/sections/AboutAuthor";
import Proof from "@/components/sections/Proof";
import Testimonials from "@/components/sections/Testimonials";
import Bonuses from "@/components/sections/Bonuses";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import SalesPopup from "@/components/sections/SalesPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemPromise />
      <WhatYouWillLearn />
      <AboutBook />
      <AboutAuthor />
      <Proof />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
      <SalesPopup />
    </main>
  );
}
