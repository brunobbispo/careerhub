import {
  type User,
  type InsertUser,
  type Event,
  type InsertEvent,
  type Coach,
  type InsertCoach,
  type Registration,
  type InsertRegistration,
  type Booking,
  type InsertBooking,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Events
  getEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: string, event: Partial<Event>): Promise<Event | undefined>;
  deleteEvent(id: string): Promise<boolean>;

  // Coaches
  getCoaches(): Promise<Coach[]>;
  getCoach(id: string): Promise<Coach | undefined>;
  createCoach(coach: InsertCoach): Promise<Coach>;

  // Registrations
  getRegistrations(): Promise<Registration[]>;
  getEventRegistrations(eventId: string): Promise<Registration[]>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;

  // Bookings
  getBookings(): Promise<Booking[]>;
  getCoachBookings(coachId: string): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Map<string, Event>;
  private coaches: Map<string, Coach>;
  private registrations: Map<string, Registration>;
  private bookings: Map<string, Booking>;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.coaches = new Map();
    this.registrations = new Map();
    this.bookings = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed events
    const events: InsertEvent[] = [
      {
        title: "Resume Writing Masterclass",
        description: "Learn from industry experts how to craft a resume that gets you noticed by top recruiters and hiring managers.",
        category: "workshop",
        date: "Dec 15, 2025",
        time: "2:00 PM",
        location: "Online",
        price: 29,
        capacity: 50,
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
        imageUrl: "/assets/generated_images/Webinar_event_thumbnail_6bd3ac62.png",
        isFeatured: false,
      },
    ];

    events.forEach((event) => {
      this.createEvent(event);
    });

    // Add some registrations to simulate activity
    const eventIds = Array.from(this.events.keys());
    if (eventIds.length > 0) {
      this.updateEvent(eventIds[0], { registered: 35 });
      this.updateEvent(eventIds[1], { registered: 156 });
      this.updateEvent(eventIds[2], { registered: 687 });
      this.updateEvent(eventIds[3], { registered: 22 });
      this.updateEvent(eventIds[4], { registered: 89 });
      this.updateEvent(eventIds[5], { registered: 234 });
      this.updateEvent(eventIds[6], { registered: 31 });
      this.updateEvent(eventIds[7], { registered: 98 });
    }

    // Seed coaches (ratings stored as actual 0-5 scale, not scaled integers)
    const coaches: InsertCoach[] = [
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

    coaches.forEach((coach) => {
      this.createCoach(coach);
    });
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id, email: null, name: null };
    this.users.set(id, user);
    return user;
  }

  // Events
  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = {
      ...insertEvent,
      id,
      registered: 0,
      price: insertEvent.price ?? 0,
      isFeatured: insertEvent.isFeatured ?? null,
    };
    this.events.set(id, event);
    return event;
  }

  async updateEvent(id: string, updates: Partial<Event>): Promise<Event | undefined> {
    const event = this.events.get(id);
    if (!event) return undefined;
    const updated = { ...event, ...updates };
    this.events.set(id, updated);
    return updated;
  }

  async deleteEvent(id: string): Promise<boolean> {
    return this.events.delete(id);
  }

  // Coaches
  async getCoaches(): Promise<Coach[]> {
    return Array.from(this.coaches.values());
  }

  async getCoach(id: string): Promise<Coach | undefined> {
    return this.coaches.get(id);
  }

  async createCoach(insertCoach: InsertCoach): Promise<Coach> {
    const id = randomUUID();
    const coach: Coach = {
      ...insertCoach,
      id,
      available: insertCoach.available ?? null,
    };
    this.coaches.set(id, coach);
    return coach;
  }

  // Registrations
  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async getEventRegistrations(eventId: string): Promise<Registration[]> {
    return Array.from(this.registrations.values()).filter(
      (reg) => reg.eventId === eventId,
    );
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = {
      ...insertRegistration,
      id,
      userId: insertRegistration.userId ?? null,
      phone: insertRegistration.phone ?? null,
      registeredAt: new Date(),
    };
    this.registrations.set(id, registration);

    // Update event registered count
    const event = await this.getEvent(insertRegistration.eventId);
    if (event) {
      await this.updateEvent(event.id, { registered: event.registered + 1 });
    }

    return registration;
  }

  // Bookings
  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getCoachBookings(coachId: string): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      (booking) => booking.coachId === coachId,
    );
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = {
      ...insertBooking,
      id,
      userId: insertBooking.userId ?? null,
      bookedAt: new Date(),
    };
    this.bookings.set(id, booking);
    return booking;
  }
}

export const storage = new MemStorage();
