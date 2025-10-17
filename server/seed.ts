import { db } from "./db";
import { events, coaches } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  const seedEvents = [
    {
      title: "Resume Writing Masterclass",
      description: "Learn from industry experts how to craft a resume that gets you noticed by top recruiters and hiring managers.",
      category: "workshop",
      date: "Dec 15, 2025",
      time: "2:00 PM",
      location: "Online",
      price: 29,
      capacity: 50,
      registered: 35,
      imageUrl: "/assets/generated_images/Workshop_event_thumbnail_e0738c1e.png",
      isFeatured: true,
    },
    {
      title: "Tech Career Webinar Series",
      description: "Monthly webinar covering the latest trends in tech careers, from AI to cloud computing opportunities.",
      category: "webinar",
      date: "Dec 18, 2025",
      time: "6:00 PM",
      location: "Virtual",
      price: 0,
      capacity: 200,
      registered: 156,
      imageUrl: "/assets/generated_images/Webinar_event_thumbnail_6bd3ac62.png",
      isFeatured: false,
    },
    {
      title: "Annual Tech Career Fair 2025",
      description: "Meet representatives from over 100 companies actively hiring. Network with recruiters and explore opportunities.",
      category: "fair",
      date: "Jan 10, 2026",
      time: "10:00 AM",
      location: "San Francisco Convention Center",
      price: 0,
      capacity: 1000,
      registered: 687,
      imageUrl: "/assets/generated_images/Career_fair_event_thumbnail_8fb6f24e.png",
      isFeatured: true,
    },
    {
      title: "Interview Preparation Workshop",
      description: "Practice common interview questions and learn strategies to present your best self to potential employers.",
      category: "workshop",
      date: "Dec 20, 2025",
      time: "3:00 PM",
      location: "Online",
      price: 39,
      capacity: 30,
      registered: 22,
      imageUrl: "/assets/generated_images/Workshop_event_thumbnail_e0738c1e.png",
      isFeatured: false,
    },
    {
      title: "Salary Negotiation Webinar",
      description: "Master the art of negotiating your salary and benefits package with confidence and data-driven strategies.",
      category: "webinar",
      date: "Dec 22, 2025",
      time: "5:00 PM",
      location: "Virtual",
      price: 0,
      capacity: 150,
      registered: 89,
      imageUrl: "/assets/generated_images/Webinar_event_thumbnail_6bd3ac62.png",
      isFeatured: false,
    },
    {
      title: "Healthcare Careers Fair",
      description: "Explore opportunities in healthcare from nursing to hospital administration with leading medical institutions.",
      category: "fair",
      date: "Jan 15, 2026",
      time: "9:00 AM",
      location: "Los Angeles Conference Hall",
      price: 0,
      capacity: 500,
      registered: 234,
      imageUrl: "/assets/generated_images/Career_fair_event_thumbnail_8fb6f24e.png",
      isFeatured: false,
    },
    {
      title: "LinkedIn Profile Optimization",
      description: "Transform your LinkedIn profile into a powerful career tool that attracts recruiters and opportunities.",
      category: "workshop",
      date: "Dec 28, 2025",
      time: "1:00 PM",
      location: "Online",
      price: 25,
      capacity: 40,
      registered: 31,
      imageUrl: "/assets/generated_images/Workshop_event_thumbnail_e0738c1e.png",
      isFeatured: false,
    },
    {
      title: "Remote Work Best Practices",
      description: "Learn how to excel in remote and hybrid work environments with proven productivity strategies.",
      category: "webinar",
      date: "Jan 5, 2026",
      time: "4:00 PM",
      location: "Virtual",
      price: 0,
      capacity: 180,
      registered: 98,
      imageUrl: "/assets/generated_images/Webinar_event_thumbnail_6bd3ac62.png",
      isFeatured: false,
    },
  ];

  const seedCoaches = [
    {
      name: "Sarah Johnson",
      title: "Senior Career Strategist",
      specialties: ["Resume Review", "Interview Prep", "Career Transition"],
      rating: 5,
      reviews: 127,
      rate30min: 49,
      rate60min: 89,
      imageUrl: "/assets/generated_images/Female_coach_profile_photo_859fe82b.png",
      available: true,
    },
    {
      name: "Michael Chen",
      title: "Executive Career Coach",
      specialties: ["Leadership Development", "Executive Coaching", "Negotiation"],
      rating: 5,
      reviews: 94,
      rate30min: 59,
      rate60min: 109,
      imageUrl: "/assets/generated_images/Male_coach_profile_photo_ac4db9d0.png",
      available: false,
    },
    {
      name: "Emily Rodriguez",
      title: "Tech Career Specialist",
      specialties: ["Tech Interviews", "Coding Career", "Portfolio Review"],
      rating: 5,
      reviews: 156,
      rate30min: 55,
      rate60min: 99,
      imageUrl: "/assets/generated_images/Female_coach_profile_photo_859fe82b.png",
      available: true,
    },
    {
      name: "David Williams",
      title: "Career Change Expert",
      specialties: ["Career Pivoting", "Skills Assessment", "Job Search"],
      rating: 5,
      reviews: 83,
      rate30min: 45,
      rate60min: 79,
      imageUrl: "/assets/generated_images/Male_coach_profile_photo_ac4db9d0.png",
      available: true,
    },
    {
      name: "Jennifer Lee",
      title: "Personal Branding Coach",
      specialties: ["LinkedIn Optimization", "Personal Brand", "Networking"],
      rating: 5,
      reviews: 112,
      rate30min: 49,
      rate60min: 89,
      imageUrl: "/assets/generated_images/Female_coach_profile_photo_859fe82b.png",
      available: false,
    },
    {
      name: "Robert Taylor",
      title: "Interview Success Coach",
      specialties: ["Behavioral Interviews", "Technical Interviews", "Mock Interviews"],
      rating: 5,
      reviews: 98,
      rate30min: 52,
      rate60min: 95,
      imageUrl: "/assets/generated_images/Male_coach_profile_photo_ac4db9d0.png",
      available: true,
    },
  ];

  try {
    const existingEvents = await db.select().from(events);
    if (existingEvents.length === 0) {
      console.log("Inserting events...");
      await db.insert(events).values(seedEvents);
      console.log(`Inserted ${seedEvents.length} events`);
    } else {
      console.log(`Database already has ${existingEvents.length} events, skipping event seed`);
    }

    const existingCoaches = await db.select().from(coaches);
    if (existingCoaches.length === 0) {
      console.log("Inserting coaches...");
      await db.insert(coaches).values(seedCoaches);
      console.log(`Inserted ${seedCoaches.length} coaches`);
    } else {
      console.log(`Database already has ${existingCoaches.length} coaches, skipping coach seed`);
    }

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

seed().catch(console.error);
