import { Button } from "@/components/ui/button";
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { Typography } from "../ui/typography";
import { CloseIcon } from "../icons/CloseIcon";
import type { Step3Mode } from "@/types/form";

interface StepNavigationProps {
  currentStep: number;
  step3Mode: Step3Mode;
  onBack: () => void;
}

export function StepNavigation({ currentStep, step3Mode, onBack }: StepNavigationProps) {
  const handleBackClick = () => {
    onBack();
  };

  return (
    <div className={`w-full max-w-6xl mx-auto flex ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
      {currentStep > 1 && (
        <Button 
          variant="text-secondary" 
          size="mediumSquare"
          onClick={handleBackClick}
        >
          <ArrowBackIcon />
          <Typography className="text-primary">Назад</Typography>
        </Button>
      )}
      <Button variant="text-secondary" size="mediumSquare">
        <CloseIcon />
      </Button>
    </div>
  );
}
