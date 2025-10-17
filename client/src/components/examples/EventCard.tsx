import EventCard from "../EventCard";
import workshopImage from "@assets/generated_images/Workshop_event_thumbnail_e0738c1e.png";

export default function EventCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <EventCard
        id="1"
        title="Resume Writing Workshop"
        description="Learn how to craft a compelling resume that stands out to recruiters and hiring managers."
        category="workshop"
        date="Dec 15, 2025"
        time="2:00 PM"
        location="Online"
        price={29}
        capacity={50}
        registered={35}
        imageUrl={workshopImage}
        isFeatured
      />
    </div>
  );
}
