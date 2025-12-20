import { Button } from "@/components/ui/button";
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { Typography } from "../ui/typography";
import { CloseIcon } from "../icons/CloseIcon";

interface StepNavigationProps {
  currentStep: number;
  isLoading: boolean;
  isValid: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export function StepNavigation() {
  return (
    <div className="w-full max-w-6xl mx-auto flex justify-between">
      <Button variant="text-secondary" size="mediumSquare">
        <ArrowBackIcon />
        <Typography className="text-primary">Назад</Typography>
      </Button>
      <Button variant="text-secondary" size="mediumSquare">
        <CloseIcon />
      </Button>
    </div>
  );
}
