import { Star, Clock, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CoachCardProps {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviews: number;
  rate30min: number;
  rate60min: number;
  imageUrl: string;
  available: boolean;
}

export default function CoachCard({
  id,
  name,
  title,
  specialties,
  rating,
  reviews,
  rate30min,
  rate60min,
  imageUrl,
  available,
}: CoachCardProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md" data-testid={`card-coach-${id}`}>
      <div className="flex flex-col items-center text-center mb-4">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
        </Avatar>
        {available && (
          <Badge variant="secondary" className="mb-2">Available Now</Badge>
        )}
        <h3 className="text-xl font-semibold mb-1" data-testid={`text-coach-name-${id}`}>{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{title}</p>
        
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-chart-4 text-chart-4" />
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {specialties.map((specialty, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2 mb-4 pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>30 min</span>
          </div>
          <span className="font-medium">${rate30min}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Video className="w-4 h-4" />
            <span>60 min</span>
          </div>
          <span className="font-medium">${rate60min}</span>
        </div>
      </div>

      <Button className="w-full" data-testid={`button-book-coach-${id}`}>
        Book Session
      </Button>
    </Card>
  );
}
