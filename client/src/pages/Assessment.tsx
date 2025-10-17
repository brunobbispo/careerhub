import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

export default function Assessment() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Personal Information", completed: false },
    { id: 2, title: "Skills & Experience", completed: false },
    { id: 3, title: "Career Goals", completed: false },
    { id: 4, title: "Work Preferences", completed: false },
    { id: 5, title: "Results", completed: false },
  ];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {!started ? (
          <>
            <section className="bg-muted/30 py-12 border-b">
              <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Assessment</h1>
                <p className="text-lg text-muted-foreground">
                  Discover your strengths, interests, and ideal career path
                </p>
              </div>
            </section>

            <section className="py-16">
              <div className="max-w-4xl mx-auto px-4 md:px-6">
                <Card className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">What You'll Discover</h2>
                    <p className="text-muted-foreground">
                      Our comprehensive assessment helps you understand your career potential
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-chart-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Core Strengths</h3>
                        <p className="text-sm text-muted-foreground">
                          Identify your key skills and natural talents
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-chart-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Career Matches</h3>
                        <p className="text-sm text-muted-foreground">
                          Find roles that align with your profile
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-chart-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Growth Areas</h3>
                        <p className="text-sm text-muted-foreground">
                          Discover opportunities for development
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-chart-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Action Plan</h3>
                        <p className="text-sm text-muted-foreground">
                          Get personalized next steps for your journey
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">⏱️</div>
                      <div>
                        <h3 className="font-semibold mb-2">Assessment Details</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Estimated time: 15-20 minutes</li>
                          <li>• 40 questions across 4 sections</li>
                          <li>• Save progress and continue later</li>
                          <li>• Results saved to your profile</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" onClick={() => setStarted(true)} data-testid="button-begin-assessment">
                      Begin Assessment
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Free for all registered users
                    </p>
                  </div>
                </Card>
              </div>
            </section>
          </>
        ) : (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">
                    Step {currentStep} of {steps.length}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {progress.toFixed(0)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="mb-4" />
                <div className="flex gap-2 overflow-x-auto">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex items-center gap-2 text-sm whitespace-nowrap"
                    >
                      {step.id < currentStep ? (
                        <CheckCircle2 className="w-5 h-5 text-chart-3" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <span className={step.id === currentStep ? "font-medium" : "text-muted-foreground"}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">
                  {steps[currentStep - 1].title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    This is where the actual assessment questions would appear. The assessment tool would be embedded here once integrated.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      [Proprietary Assessment Tool Integration Point]
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    data-testid="button-previous-step"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                    data-testid="button-next-step"
                  >
                    {currentStep === steps.length ? "View Results" : "Next"}
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
