import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { TOTAL_STEPS } from "@/constants/form";

interface StepNavigationProps {
  currentStep: number;
  isLoading: boolean;
  isValid: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export function StepNavigation({
  currentStep,
  isLoading,
  isValid,
  onPrevious,
  onNext,
  onSubmit,
}: StepNavigationProps) {
  return (
    <div className="flex justify-between pt-4">
      {currentStep !== 1 && (
        <Button variant="text" size="large" onClick={onPrevious}>
          Назад
        </Button>
      )}
      {currentStep < TOTAL_STEPS ? (
        <Button
          className="w-full text-white"
          variant="solid"
          size="large"
          onClick={onNext}
          disabled={!isValid || isLoading}
        >
          {isLoading ? (
            <>
              <Loader size={20} className="mr-2" />
              Загрузка...
            </>
          ) : (
            'Далее'
          )}
        </Button>
      ) : (
        <Button
          variant="solid"
          size="large"
          onClick={onSubmit}
          disabled={!isValid}
        >
          Отправить
        </Button>
      )}
    </div>
  );
}

