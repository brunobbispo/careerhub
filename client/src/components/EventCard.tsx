import { Calendar, MapPin, Users, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  category: "workshop" | "webinar" | "fair";
  date: string;
  time: string;
  location: string;
  price: number;
  capacity: number;
  registered: number;
  imageUrl: string;
  isFeatured?: boolean;
}

const categoryColors = {
  workshop: "bg-chart-4 text-white",
  webinar: "bg-chart-5 text-white",
  fair: "bg-chart-2 text-white",
};

const categoryLabels = {
  workshop: "Workshop",
  webinar: "Webinar",
  fair: "Career Fair",
};

export default function EventCard({ 
  id,
  title, 
  description, 
  category, 
  date, 
  time, 
  location, 
  price, 
  capacity, 
  registered,
  imageUrl,
  isFeatured = false
}: EventCardProps) {
  const spotsLeft = capacity - registered;
  const percentFull = (registered / capacity) * 100;

  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md" data-testid={`card-event-${id}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${categoryColors[category]} no-default-hover-elevate no-default-active-elevate`}>
            {categoryLabels[category]}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          {price === 0 ? (
            <Badge className="bg-chart-5 text-white no-default-hover-elevate no-default-active-elevate">Free</Badge>
          ) : (
            <Badge className="bg-chart-2 text-white no-default-hover-elevate no-default-active-elevate">
              <DollarSign className="w-3 h-3 mr-1" />
              {price}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6">
        {isFeatured && (
          <Badge variant="secondary" className="mb-3">Featured Event</Badge>
        )}
        <h3 className="text-xl font-semibold mb-2 line-clamp-2" data-testid={`text-event-title-${id}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>{date} at {time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{spotsLeft} spots left • {percentFull.toFixed(0)}% full</span>
          </div>
        </div>

        <Button className="w-full" data-testid={`button-register-${id}`}>
          {price === 0 ? "Register Free" : `Register - $${price}`}
        </Button>
      </div>
    </Card>
  );
}
