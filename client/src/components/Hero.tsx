import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@assets/generated_images/Career_fair_workshop_hero_24aa40ef.png";

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Career professionals networking at event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Your Next Career Opportunity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join thousands of professionals attending career events, workshops, and webinars designed to accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-10 bg-white/95 backdrop-blur-sm border-white/30"
                data-testid="input-hero-search"
              />
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-white" data-testid="button-search-events">
              Search Events
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="backdrop-blur-md bg-white/20 border-white/30 text-white hover:bg-white/30"
              data-testid="button-browse-workshops"
            >
              Browse Workshops
            </Button>
            <Button
              variant="outline"
              className="backdrop-blur-md bg-white/20 border-white/30 text-white hover:bg-white/30"
              data-testid="button-find-coach"
            >
              Find a Coach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
