# CareerHub Platform

## Overview

CareerHub is an events-driven careers platform that helps professionals discover career development opportunities through events, coaching sessions, and career assessments. The platform focuses on three core features: browsing and registering for career-related events (workshops, webinars, career fairs), booking sessions with career coaches, and taking career assessments. The application supports both free and paid events with integrated payment processing through Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React with TypeScript for type safety and component-based development
- Vite as the build tool for fast development and optimized production builds
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and data fetching
- shadcn/ui component library built on Radix UI primitives for accessible, customizable components

**Styling Approach**
- Tailwind CSS for utility-first styling with custom design system
- Custom CSS variables for theming (supports light/dark modes)
- Design system inspired by Eventbrite, LinkedIn, and Stripe aesthetics
- Professional color palette focused on trust and credibility (primary blue HSL 220 85% 45%)
- Inter font family for modern, readable typography

**Component Structure**
- Reusable UI components in `client/src/components/ui/`
- Feature components (EventCard, CoachCard, AssessmentSection) in `client/src/components/`
- Page-level components in `client/src/pages/`
- Component examples for development in `client/src/components/examples/`

### Backend Architecture

**Server Framework**
- Express.js as the web server framework
- TypeScript for type-safe server code
- Custom middleware for request logging and error handling
- Session-based authentication using express-session

**API Design**
- RESTful API endpoints under `/api` prefix
- Authentication-protected routes using middleware
- Endpoints for events, coaches, bookings, and registrations
- JSON request/response format

**Database Layer**
- PostgreSQL as the primary database (via Neon serverless)
- Drizzle ORM for type-safe database queries and migrations
- Schema-first approach with migrations in `/migrations` directory
- Connection pooling for efficient database access

### Data Storage Solutions

**Database Schema**
The application uses PostgreSQL with the following core tables:

- **users**: User profiles with email, name, profile image, timestamps
- **events**: Career events with title, description, category, date/time, location, pricing, capacity tracking, featured flag
- **coaches**: Career coach profiles with name, title, specialties, ratings, pricing tiers (30/60 min sessions)
- **registrations**: Event registration records linking users to events
- **bookings**: Coaching session bookings linking users to coaches
- **sessions**: Session store for user authentication state

**Data Access Pattern**
- Repository pattern implementation in `server/storage.ts`
- Interface-based storage abstraction (IStorage) for potential future storage backend changes
- Drizzle ORM for query building with full TypeScript support

### Authentication and Authorization

**Authentication Mechanism**
- OpenID Connect (OIDC) integration with Replit authentication
- Passport.js strategy for OIDC flow
- Session-based authentication using PostgreSQL session store (connect-pg-simple)
- HTTP-only, secure cookies for session management

**Session Management**
- 7-day session TTL (time-to-live)
- Sessions persisted in PostgreSQL for reliability
- Session secret from environment variables
- Middleware (`isAuthenticated`) for protecting routes

**User Flow**
- OAuth2 authorization code flow for login
- Automatic user profile creation/update on authentication
- User profile includes email, name, and profile image from OIDC provider

### External Dependencies

**Payment Processing**
- Stripe integration for paid events and coaching sessions
- Stripe API version: 2025-09-30.clover
- @stripe/stripe-js and @stripe/react-stripe-js for client-side payment flows
- Server-side Stripe SDK for payment intent creation and webhook handling

**Database Service**
- Neon serverless PostgreSQL for database hosting
- WebSocket support for real-time connections
- Connection string from DATABASE_URL environment variable

**Development Tools**
- Replit-specific development plugins (cartographer, dev-banner, runtime-error-modal)
- TSX for running TypeScript server code in development
- ESBuild for production builds

**Third-party UI Libraries**
- Radix UI primitives for accessible component foundations
- Lucide React for icon system
- react-hook-form with Zod resolvers for form validation
- class-variance-authority (CVA) for variant-based component styling
- date-fns for date manipulation

**Environment Configuration**
Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `STRIPE_SECRET_KEY`: Stripe API key for payment processing
- `SESSION_SECRET`: Secret for signing session cookies
- `REPL_ID`: Replit workspace identifier
- `ISSUER_URL`: OIDC issuer URL (defaults to Replit OIDC)
- `REPLIT_DOMAINS`: Allowed domains for Replit integration

**Asset Management**
- Static assets served from `/attached_assets` directory
- Generated images for events, coaches, and hero sections
- Image optimization handled by Vite in production builds