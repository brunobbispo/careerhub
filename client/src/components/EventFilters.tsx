import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface EventFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  categories: string[];
  priceType: string;
}

export default function EventFilters({ onFilterChange }: EventFiltersProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [priceType, setPriceType] = useState("all");

  const handleCategoryToggle = (category: string) => {
    const updated = categories.includes(category)
      ? categories.filter((c) => c !== category)
      : [...categories, category];
    setCategories(updated);
    onFilterChange?.({ categories: updated, priceType });
  };

  const handlePriceChange = (value: string) => {
    setPriceType(value);
    onFilterChange?.({ categories, priceType: value });
  };

  const clearFilters = () => {
    setCategories([]);
    setPriceType("all");
    onFilterChange?.({ categories: [], priceType: "all" });
  };

  const activeFilterCount = categories.length + (priceType !== "all" ? 1 : 0);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold text-lg">Filters</h3>
          {activeFilterCount > 0 && (
            <Badge variant="secondary">{activeFilterCount}</Badge>
          )}
        </div>
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            data-testid="button-clear-filters"
          >
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Category</h4>
          <div className="space-y-3">
            {["workshop", "webinar", "fair"].map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={categories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                  data-testid={`checkbox-category-${category}`}
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category === "workshop" ? "Workshops" : category === "webinar" ? "Webinars" : "Career Fairs"}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Price</h4>
          <RadioGroup value={priceType} onValueChange={handlePriceChange}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="all" id="price-all" data-testid="radio-price-all" />
              <Label htmlFor="price-all" className="text-sm font-normal cursor-pointer">
                All Events
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="free" id="price-free" data-testid="radio-price-free" />
              <Label htmlFor="price-free" className="text-sm font-normal cursor-pointer">
                Free Only
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="paid" id="price-paid" data-testid="radio-price-paid" />
              <Label htmlFor="price-paid" className="text-sm font-normal cursor-pointer">
                Paid Only
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {categories.length > 0 && (
        <div className="pt-6 border-t mt-6">
          <h4 className="text-sm font-medium mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="gap-1 pr-1"
              >
                {category}
                <button
                  onClick={() => handleCategoryToggle(category)}
                  className="ml-1 hover-elevate active-elevate-2 rounded-sm p-0.5"
                  data-testid={`button-remove-${category}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
