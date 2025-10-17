import Header from "@/components/Header";
import CoachCard from "@/components/CoachCard";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import femaleCoachImage from "@assets/generated_images/Female_coach_profile_photo_859fe82b.png";
import maleCoachImage from "@assets/generated_images/Male_coach_profile_photo_ac4db9d0.png";

export default function Coaches() {
  const coaches = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Senior Career Strategist",
      specialties: ["Resume Review", "Interview Prep", "Career Transition"],
      rating: 4.9,
      reviews: 127,
      rate30min: 49,
      rate60min: 89,
      imageUrl: femaleCoachImage,
      available: true,
    },
    {
      id: "2",
      name: "Michael Chen",
      title: "Executive Career Coach",
      specialties: ["Leadership Development", "Executive Coaching", "Negotiation"],
      rating: 4.8,
      reviews: 94,
      rate30min: 59,
      rate60min: 109,
      imageUrl: maleCoachImage,
      available: false,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      title: "Tech Career Specialist",
      specialties: ["Tech Interviews", "Coding Career", "Portfolio Review"],
      rating: 5.0,
      reviews: 156,
      rate30min: 55,
      rate60min: 99,
      imageUrl: femaleCoachImage,
      available: true,
    },
    {
      id: "4",
      name: "David Williams",
      title: "Career Change Expert",
      specialties: ["Career Pivoting", "Skills Assessment", "Job Search"],
      rating: 4.7,
      reviews: 83,
      rate30min: 45,
      rate60min: 79,
      imageUrl: maleCoachImage,
      available: true,
    },
    {
      id: "5",
      name: "Jennifer Lee",
      title: "Personal Branding Coach",
      specialties: ["LinkedIn Optimization", "Personal Brand", "Networking"],
      rating: 4.9,
      reviews: 112,
      rate30min: 49,
      rate60min: 89,
      imageUrl: femaleCoachImage,
      available: false,
    },
    {
      id: "6",
      name: "Robert Taylor",
      title: "Interview Success Coach",
      specialties: ["Behavioral Interviews", "Technical Interviews", "Mock Interviews"],
      rating: 4.8,
      reviews: 98,
      rate30min: 52,
      rate60min: 95,
      imageUrl: maleCoachImage,
      available: true,
    },
  ];

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
              {coaches.map((coach) => (
                <CoachCard key={coach.id} {...coach} />
              ))}
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
