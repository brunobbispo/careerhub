# Design Guidelines: Events-Driven Careers Hub Platform

## Design Approach
**Reference-Based Approach** drawing inspiration from leading event and professional platforms:
- **Eventbrite**: Clean event cards, clear CTAs, streamlined registration flows
- **LinkedIn**: Professional aesthetic, trust-building elements, clear hierarchy
- **Stripe**: Refined color palette, sophisticated payment UI, minimal animations

**Key Design Principles:**
- Professional credibility with modern warmth
- Frictionless user journeys from discovery to registration
- Visual hierarchy that guides users to key actions
- Trust-building through clean, polished interfaces

---

## Core Design Elements

### A. Color Palette

**Primary Brand Colors:**
- Primary: 220 85% 45% (Professional blue - trust and career-focused)
- Primary Dark: 220 85% 35% (Darker variant for depth)

**Supporting Colors:**
- Success: 145 65% 45% (Confirmation states, paid events)
- Accent: 280 70% 60% (Premium features, coaching CTAs)
- Neutral Gray: 220 15% 25% (Text, borders)
- Light Gray: 220 10% 96% (Backgrounds, cards)

**Semantic Colors:**
- Free Event Badge: 200 90% 50%
- Paid Event Badge: 280 70% 60%
- Workshop Category: 30 80% 55%
- Webinar Category: 200 85% 50%
- Career Fair Category: 280 65% 55%

### B. Typography

**Font Families:**
- Headings: Inter (700, 600) - modern, professional
- Body: Inter (400, 500) - excellent readability
- Accent/CTAs: Inter (600) - consistent brand voice

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Event Titles: text-xl md:text-2xl font-semibold
- Body Text: text-base leading-relaxed
- Small Text/Labels: text-sm

### C. Layout System

**Spacing Primitives:**
Primary units: 4, 6, 8, 12, 16, 20, 24, 32 (p-4, p-6, p-8, m-12, etc.)
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-6 md:gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6

**Grid Systems:**
- Event Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Featured Events: grid-cols-1 lg:grid-cols-2
- Filter Sidebar: Fixed left sidebar on desktop, collapsible on mobile

### D. Component Library

**Navigation:**
- Sticky header with logo, main nav, and prominent "Dashboard" link
- Mobile: Hamburger menu with slide-out drawer
- Include user profile dropdown when authenticated

**Event Cards:**
- Featured image (16:9 aspect ratio)
- Event category badge (top-left overlay)
- Free/Paid indicator (top-right)
- Event title, date/time, location
- Brief description (2 lines, truncated)
- Price display for paid events
- "Register Now" primary CTA button

**Event Listing Page:**
- Hero section with gradient overlay and search bar
- Filter sidebar: Categories (checkboxes), Date range, Price (Free/Paid toggle)
- Active filter pills with remove option
- Results count and sort dropdown
- Load more button or infinite scroll

**Event Detail Page:**
- Full-width hero image with gradient overlay
- Event metadata bar: Date, time, location, capacity
- Tabbed content: Overview, Schedule, Speakers, Media Gallery
- Sticky "Register" CTA bar on scroll
- Related events carousel at bottom

**Registration Flow:**
- Modal-based for free events (name, email, phone)
- Full-page checkout for paid events with Stripe integration
- Progress indicator for multi-step flows
- Clear ticket summary with pricing breakdown

**Career Coach Booking:**
- Grid of coach profiles with photos, specialties, pricing
- Embedded Calendly widget in modal
- Session type cards (30min, 60min, package deals)
- Trust indicators: Reviews, credentials, availability

**Assessment Tool Embed:**
- Full-width container with branded header
- Progress bar for multi-step assessment
- Results dashboard with charts and insights
- "Save to Profile" CTA upon completion

**Admin Dashboard:**
- Left sidebar navigation with icon + label
- Stats cards: Total events, registrations, revenue
- Data tables with search, filter, export actions
- Event creation wizard with media upload dropzone
- Rich text editor for event descriptions

**Forms & Inputs:**
- Rounded corners (rounded-lg)
- Clear labels above inputs
- Focus states with primary color ring
- Inline validation messages
- Disabled state styling

**Buttons:**
- Primary: bg-primary text-white hover:bg-primary-dark (rounded-lg px-6 py-3)
- Secondary: border-2 border-primary text-primary hover:bg-primary/10
- Ghost: text-primary hover:bg-primary/5
- Over images: backdrop-blur-md bg-white/20 border border-white/30

**Cards:**
- White background with subtle shadow (shadow-sm hover:shadow-md)
- Rounded corners (rounded-xl)
- Hover lift effect (transition-transform hover:-translate-y-1)

### E. Animations

**Minimal, Purposeful Motion:**
- Card hover: transform + shadow transition (200ms ease)
- Button interactions: scale(0.98) on active
- Modal/Drawer: slide + fade entrance
- Tab switches: crossfade content (150ms)
- Page transitions: fade only, no complex animations

---

## Page-Specific Layouts

### Homepage
- Hero: Full-width with background image, centered headline, search bar
- Featured events carousel
- Event categories grid (3 columns)
- Upcoming events section (list view)
- Career coach preview (2-column: info + CTA)
- Testimonials slider
- Newsletter signup footer section

### Events Listing
- Condensed hero with breadcrumb navigation
- Two-column layout: Filter sidebar (25%) + Event grid (75%)
- Sticky filter summary bar on mobile
- Empty state illustration when no results

### Event Detail
- Hero image with overlay gradient (dark to transparent)
- Content max-width container (max-w-5xl)
- Sidebar: Registration card, share buttons, add to calendar
- Full-width media gallery section

### Booking Page
- Split layout: Coach selection (60%) + Booking details (40%)
- Calendar widget integrated seamlessly
- Payment form with Stripe Elements styling

### Admin Dashboard
- Persistent left sidebar (w-64 on desktop, collapsed on tablet)
- Top bar with search and notifications
- White content area with cards and tables
- Bulk action toolbar when items selected

---

## Images

**Required Images:**

1. **Homepage Hero**: Professional diverse group in career fair/workshop setting, 1920x1080, subtle overlay gradient from primary color
2. **Event Category Icons**: Workshop (presentation icon), Webinar (video icon), Career Fair (building icon)
3. **Event Card Thumbnails**: High-quality photos relevant to each event type, 800x450 minimum
4. **Coach Profile Photos**: Professional headshots, 400x400, circular crop
5. **Assessment Tool Graphics**: Abstract illustrations for career paths/results visualization
6. **Empty States**: Friendly illustrations for "no events found", "no registrations yet"
7. **Background Patterns**: Subtle geometric patterns for section dividers (optional texture)

**Image Treatment:**
- Hero images: Always with gradient overlay (from primary-900/60 to transparent)
- Event cards: No overlay on listing, subtle overlay on hover
- Maintain 16:9 aspect ratio for all event images
- Use object-cover for responsive scaling
- Lazy load images below the fold

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, bottom sheet filters)
- Tablet: 768px - 1024px (2-column event grid, collapsible sidebar)
- Desktop: > 1024px (3-column event grid, persistent sidebar)

**Mobile-First Priorities:**
- Bottom navigation bar for key actions
- Swipeable event cards
- Sticky "Register" button on event details
- Collapsible filter sheet from bottom
- Touch-friendly tap targets (min 44x44px)

---

This design creates a professional, conversion-optimized events platform that builds trust while maintaining a modern, accessible user experience across all devices.