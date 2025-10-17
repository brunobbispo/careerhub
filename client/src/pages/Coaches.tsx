import Header from "@/components/Header";
import CoachCard from "@/components/CoachCard";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Coach } from "@shared/schema";

export default function Coaches() {
  const { data: coaches = [], isLoading } = useQuery<Coach[]>({
    queryKey: ["/api/coaches"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Coaches</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Connect with experienced career coaches for personalized guidance
            </p>
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by specialty or name..."
                className="pl-10"
                data-testid="input-search-coaches"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                {coaches.length} coaches available
              </p>
              <select className="text-sm border rounded-lg px-3 py-2 bg-background" data-testid="select-sort-coaches">
                <option>Sort by: Rating</option>
                <option>Sort by: Price</option>
                <option>Sort by: Availability</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <p className="text-muted-foreground">Loading coaches...</p>
              ) : coaches.length === 0 ? (
                <p className="text-muted-foreground">No coaches available</p>
              ) : (
                coaches.map((coach) => (
                  <CoachCard 
                    key={coach.id}
                    id={coach.id}
                    name={coach.name}
                    title={coach.title}
                    specialties={coach.specialties}
                    rating={coach.rating}
                    reviews={coach.reviews}
                    rate30min={coach.rate30min}
                    rate60min={coach.rate60min}
                    imageUrl={coach.imageUrl}
                    available={coach.available ?? false}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold mb-2">Choose Your Coach</h3>
                <p className="text-sm text-muted-foreground">
                  Browse profiles and select the coach that matches your needs
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold mb-2">Book a Session</h3>
                <p className="text-sm text-muted-foreground">
                  Select a time slot and complete your booking
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold mb-2">Get Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Connect via video call and receive expert advice
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
