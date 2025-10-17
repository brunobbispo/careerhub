import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import AssessmentSection from "@/components/AssessmentSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import workshopImage from "@assets/generated_images/Workshop_event_thumbnail_e0738c1e.png";
import webinarImage from "@assets/generated_images/Webinar_event_thumbnail_6bd3ac62.png";
import fairImage from "@assets/generated_images/Career_fair_event_thumbnail_8fb6f24e.png";

export default function Home() {
  const featuredEvents = [
    {
      id: "1",
      title: "Resume Writing Masterclass",
      description: "Learn from industry experts how to craft a resume that gets you noticed by top recruiters and hiring managers.",
      category: "workshop" as const,
      date: "Dec 15, 2025",
      time: "2:00 PM",
      location: "Online",
      price: 29,
      capacity: 50,
      registered: 35,
      imageUrl: workshopImage,
      isFeatured: true,
    },
    {
      id: "2",
      title: "Tech Career Webinar Series",
      description: "Monthly webinar covering the latest trends in tech careers, from AI to cloud computing opportunities.",
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
      description: "Meet representatives from over 100 companies actively hiring. Network with recruiters and explore opportunities.",
      category: "fair" as const,
      date: "Jan 10, 2026",
      time: "10:00 AM",
      location: "San Francisco Convention Center",
      price: 0,
      capacity: 1000,
      registered: 687,
      imageUrl: fairImage,
      isFeatured: true,
    },
  ];

  const upcomingEvents = [
    {
      id: "4",
      title: "Interview Preparation Workshop",
      description: "Practice common interview questions and learn strategies to present your best self to potential employers.",
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
      description: "Master the art of negotiating your salary and benefits package with confidence and data-driven strategies.",
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
      description: "Explore opportunities in healthcare from nursing to hospital administration with leading medical institutions.",
      category: "fair" as const,
      date: "Jan 15, 2026",
      time: "9:00 AM",
      location: "Los Angeles Conference Hall",
      price: 0,
      capacity: 500,
      registered: 234,
      imageUrl: fairImage,
    },
  ];

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
              {featuredEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
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
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
