import { ClipboardCheck, TrendingUp, Target, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AssessmentSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Your Career Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take our comprehensive career assessment to identify your strengths, interests, and ideal career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Skills Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Identify your core competencies and transferable skills
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="font-semibold mb-2">Growth Potential</h3>
            <p className="text-sm text-muted-foreground">
              Discover areas for development and career advancement
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-chart-4" />
            </div>
            <h3 className="font-semibold mb-2">Career Matching</h3>
            <p className="text-sm text-muted-foreground">
              Find roles that align with your profile and goals
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="font-semibold mb-2">Actionable Insights</h3>
            <p className="text-sm text-muted-foreground">
              Get personalized recommendations and next steps
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" data-testid="button-start-assessment">
            Start Free Assessment
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes approximately 15 minutes • Results saved to your profile
          </p>
        </div>
      </div>
    </section>
  );
}
