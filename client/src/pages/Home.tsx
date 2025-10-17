import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import AssessmentSection from "@/components/AssessmentSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Event } from "@shared/schema";

export default function Home() {
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const featuredEvents = events.filter((event) => event.isFeatured);
  const upcomingEvents = events.filter((event) => !event.isFeatured).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Events</h2>
                <p className="text-muted-foreground">Don't miss these popular career development opportunities</p>
              </div>
              <Button variant="ghost" className="hidden md:flex items-center gap-2" data-testid="button-view-all-featured">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <p className="text-muted-foreground">Loading events...</p>
              ) : featuredEvents.length === 0 ? (
                <p className="text-muted-foreground">No featured events available</p>
              ) : (
                featuredEvents.map((event) => (
                  <EventCard 
                    key={event.id} 
                    {...event} 
                    category={event.category as "workshop" | "webinar" | "fair"}
                    isFeatured={event.isFeatured ?? undefined}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        <AssessmentSection />

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
                <p className="text-muted-foreground">Discover more opportunities to grow your career</p>
              </div>
              <Button variant="ghost" className="hidden md:flex items-center gap-2" data-testid="button-view-all-upcoming">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <p className="text-muted-foreground">Loading events...</p>
              ) : upcomingEvents.length === 0 ? (
                <p className="text-muted-foreground">No upcoming events available</p>
              ) : (
                upcomingEvents.map((event) => (
                  <EventCard 
                    key={event.id} 
                    {...event} 
                    category={event.category as "workshop" | "webinar" | "fair"}
                    isFeatured={event.isFeatured ?? undefined}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
