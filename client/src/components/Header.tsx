import { Link } from "wouter";
import { Menu, X, Calendar, Users, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-lg -ml-3" data-testid="link-home">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">CareerHub</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/">
              <a className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-lg" data-testid="link-nav-events">
                Events
              </a>
            </Link>
            <Link href="/coaches">
              <a className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-lg" data-testid="link-nav-coaches">
                Coaches
              </a>
            </Link>
            <Link href="/assessment">
              <a className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-lg" data-testid="link-nav-assessment">
                Assessment
              </a>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" data-testid="button-login">
              Log In
            </Button>
            <Button size="sm" data-testid="button-signup">
              Sign Up
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <Link href="/">
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover-elevate active-elevate-2 rounded-lg" data-testid="link-mobile-events">
                <Calendar className="w-5 h-5" />
                Events
              </a>
            </Link>
            <Link href="/coaches">
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover-elevate active-elevate-2 rounded-lg" data-testid="link-mobile-coaches">
                <Users className="w-5 h-5" />
                Coaches
              </a>
            </Link>
            <Link href="/assessment">
              <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover-elevate active-elevate-2 rounded-lg" data-testid="link-mobile-assessment">
                <ClipboardCheck className="w-5 h-5" />
                Assessment
              </a>
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t mt-2">
              <Button variant="ghost" className="w-full" data-testid="button-mobile-login">
                Log In
              </Button>
              <Button className="w-full" data-testid="button-mobile-signup">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
