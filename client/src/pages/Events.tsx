import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import EventFilters from "@/components/EventFilters";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import workshopImage from "@assets/generated_images/Workshop_event_thumbnail_e0738c1e.png";
import webinarImage from "@assets/generated_images/Webinar_event_thumbnail_6bd3ac62.png";
import fairImage from "@assets/generated_images/Career_fair_event_thumbnail_8fb6f24e.png";

export default function Events() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const allEvents = [
    {
      id: "1",
      title: "Resume Writing Masterclass",
      description: "Learn from industry experts how to craft a resume that gets you noticed by top recruiters.",
      category: "workshop" as const,
      date: "Dec 15, 2025",
      time: "2:00 PM",
      location: "Online",
      price: 29,
      capacity: 50,
      registered: 35,
      imageUrl: workshopImage,
    },
    {
      id: "2",
      title: "Tech Career Webinar Series",
      description: "Monthly webinar covering the latest trends in tech careers.",
      category: "webinar" as const,
      date: "Dec 18, 2025",
      time: "6:00 PM",
      location: "Virtual",
      price: 0,
      capacity: 200,
      registered: 156,
      imageUrl: webinarImage,
    },
    {
      id: "3",
      title: "Annual Tech Career Fair 2025",
      description: "Meet representatives from over 100 companies actively hiring.",
      category: "fair" as const,
      date: "Jan 10, 2026",
      time: "10:00 AM",
      location: "San Francisco Convention Center",
      price: 0,
      capacity: 1000,
      registered: 687,
      imageUrl: fairImage,
    },
    {
      id: "4",
      title: "Interview Preparation Workshop",
      description: "Practice common interview questions and learn winning strategies.",
      category: "workshop" as const,
      date: "Dec 20, 2025",
      time: "3:00 PM",
      location: "Online",
      price: 39,
      capacity: 30,
      registered: 22,
      imageUrl: workshopImage,
    },
    {
      id: "5",
      title: "Salary Negotiation Webinar",
      description: "Master the art of negotiating your salary with confidence.",
      category: "webinar" as const,
      date: "Dec 22, 2025",
      time: "5:00 PM",
      location: "Virtual",
      price: 0,
      capacity: 150,
      registered: 89,
      imageUrl: webinarImage,
    },
    {
      id: "6",
      title: "Healthcare Careers Fair",
      description: "Explore opportunities in healthcare with leading institutions.",
      category: "fair" as const,
      date: "Jan 15, 2026",
      time: "9:00 AM",
      location: "Los Angeles Conference Hall",
      price: 0,
      capacity: 500,
      registered: 234,
      imageUrl: fairImage,
    },
    {
      id: "7",
      title: "LinkedIn Profile Optimization",
      description: "Transform your LinkedIn profile into a powerful career tool.",
      category: "workshop" as const,
      date: "Dec 28, 2025",
      time: "1:00 PM",
      location: "Online",
      price: 25,
      capacity: 40,
      registered: 31,
      imageUrl: workshopImage,
    },
    {
      id: "8",
      title: "Remote Work Best Practices",
      description: "Learn how to excel in remote and hybrid work environments.",
      category: "webinar" as const,
      date: "Jan 5, 2026",
      time: "4:00 PM",
      location: "Virtual",
      price: 0,
      capacity: 180,
      registered: 98,
      imageUrl: webinarImage,
    },
  ];

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
                  {allEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
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
