import { Check } from "lucide-react";
import { TOTAL_STEPS } from "@/constants/form";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                ${isCompleted
                  ? "bg-primary border-primary text-primary-foreground"
                  : isCurrent
                    ? "border-primary text-primary bg-background"
                    : "border-muted text-muted-foreground bg-background"
                }
              `}
            >
              {isCompleted ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="font-semibold">{stepNumber}</span>
              )}
            </div>
            {index < TOTAL_STEPS - 1 && (
              <div
                className={`
                  w-16 h-1 mx-2 transition-all
                  ${isCompleted ? "bg-primary" : "bg-muted"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

