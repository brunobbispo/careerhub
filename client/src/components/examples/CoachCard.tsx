import CoachCard from "../CoachCard";
import coachImage from "@assets/generated_images/Female_coach_profile_photo_859fe82b.png";

export default function CoachCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <CoachCard
        id="1"
        name="Sarah Johnson"
        title="Senior Career Strategist"
        specialties={["Resume Review", "Interview Prep", "Career Transition"]}
        rating={4.9}
        reviews={127}
        rate30min={49}
        rate60min={89}
        imageUrl={coachImage}
        available={true}
      />
    </div>
  );
}
