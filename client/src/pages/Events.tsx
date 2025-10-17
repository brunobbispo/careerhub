import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import EventFilters from "@/components/EventFilters";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Event } from "@shared/schema";

export default function Events() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { data: allEvents = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Events</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Discover workshops, webinars, and career fairs to advance your professional journey
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="pl-10"
                  data-testid="input-search-events"
                />
              </div>
              <Button className="sm:hidden" variant="outline" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} data-testid="button-toggle-filters">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex gap-8">
              <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
                <div className="sticky top-24">
                  <EventFilters onFilterChange={(filters) => console.log("Filters:", filters)} />
                </div>
              </aside>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {allEvents.length} events
                  </p>
                  <select className="text-sm border rounded-lg px-3 py-2 bg-background" data-testid="select-sort">
                    <option>Sort by: Date</option>
                    <option>Sort by: Price</option>
                    <option>Sort by: Popularity</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {isLoading ? (
                    <p className="text-muted-foreground">Loading events...</p>
                  ) : allEvents.length === 0 ? (
                    <p className="text-muted-foreground">No events available</p>
                  ) : (
                    allEvents.map((event) => (
                      <EventCard 
                        key={event.id} 
                        {...event} 
                        category={event.category as "workshop" | "webinar" | "fair"}
                        isFeatured={event.isFeatured ?? undefined}
                      />
                    ))
                  )}
                </div>

                <div className="mt-12 text-center">
                  <Button variant="outline" size="lg" data-testid="button-load-more">
                    Load More Events
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
