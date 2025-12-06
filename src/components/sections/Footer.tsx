import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-primary tracking-tighter">
            FLOW WITH MARKET
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flow With Market. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
