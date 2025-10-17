import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertEventSchema,
  insertRegistrationSchema,
  insertBookingSchema,
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events Routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEvent(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ error: "Failed to fetch event" });
    }
  });

  app.post("/api/events/register", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      res.status(201).json(registration);
    } catch (error: any) {
      console.error("Error creating registration:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid registration data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create registration" });
    }
  });

  app.get("/api/events/:id/registrations", async (req, res) => {
    try {
      const registrations = await storage.getEventRegistrations(req.params.id);
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({ error: "Failed to fetch registrations" });
    }
  });

  // Coaches Routes
  app.get("/api/coaches", async (req, res) => {
    try {
      const coaches = await storage.getCoaches();
      res.json(coaches);
    } catch (error) {
      console.error("Error fetching coaches:", error);
      res.status(500).json({ error: "Failed to fetch coaches" });
    }
  });

  app.get("/api/coaches/:id", async (req, res) => {
    try {
      const coach = await storage.getCoach(req.params.id);
      if (!coach) {
        return res.status(404).json({ error: "Coach not found" });
      }
      res.json(coach);
    } catch (error) {
      console.error("Error fetching coach:", error);
      res.status(500).json({ error: "Failed to fetch coach" });
    }
  });

  app.post("/api/coaches/book", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.status(201).json(booking);
    } catch (error: any) {
      console.error("Error creating booking:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid booking data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create booking" });
    }
  });

  app.get("/api/coaches/:id/bookings", async (req, res) => {
    try {
      const bookings = await storage.getCoachBookings(req.params.id);
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
