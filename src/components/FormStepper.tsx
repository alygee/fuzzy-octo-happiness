import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Typography } from "./ui/typography";
import type { FilterResponse, InsuranceRecord } from "@/types/api";
import type { FormData, TouchedFields } from "@/types/form";
import { TOTAL_STEPS, cities } from "@/constants/form";
import type { MultiSelectOption } from "@/components/ui/multi-select";
import {
  StepIndicator,
  Step1Form,
  Step2Form,
  Step3Form,
  LoadingScreen,
  OfferCard,
  StepNavigation,
} from "./form";
import { validateStep1, isStepValid } from "@/utils/validation";
import { fetchFilterData } from "@/api/filter";

export function FormStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [coverageLevel, setCoverageLevel] = useState<string>("Базовый");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRecalculate, setIsLoadingRecalculate] = useState(false);
  const [apiData, setApiData] = useState<FilterResponse | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<{
    insurerName: string;
    city: string;
    record: InsuranceRecord;
  } | null>(null);
  const [citiesList, setCitiesList] = useState<MultiSelectOption[]>(cities);
  const [formData, setFormData] = useState<FormData>({
    step1: {
      numberOfEmployees: "",
      email: "",
      phone: "",
    },
    step2: {
      company: "",
      position: "",
    },
    step3: {
      message: "",
    },
  });
  const [touched, setTouched] = useState<TouchedFields>({
    step1: {
      numberOfEmployees: false,
      coverageLevel: false,
      selectedCities: false,
    },
  });

  const errors = validateStep1(formData, coverageLevel, selectedCities);

  const handleInputChange = (
    step: keyof FormData,
    field: string,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));
  };

  const handleStep1InputChange = (field: string, value: string) => {
    handleInputChange("step1", field, value);
  };

  const handleStep3InputChange = (field: string, value: string) => {
    handleInputChange("step3", field, value);
  };

  const handleBlur = (field: keyof TouchedFields["step1"]) => {
    setTouched((prev) => ({
      ...prev,
      step1: {
        ...prev.step1,
        [field]: true,
      },
    }));
  };

  const handleCoverageLevelChange = (value: string) => {
    setCoverageLevel(value);
    if (!touched.step1.coverageLevel) {
      setTouched((prev) => ({
        ...prev,
        step1: {
          ...prev.step1,
          coverageLevel: true,
        },
      }));
    }
  };

  const handleCitiesChange = (value: string[]) => {
    setSelectedCities(value);
    if (!touched.step1.selectedCities) {
      setTouched((prev) => ({
        ...prev,
        step1: {
          ...prev.step1,
          selectedCities: true,
        },
      }));
    }
  };

  const handleNext = async () => {
    if (currentStep === 1) {
      // Помечаем все поля как touched при попытке перейти на следующий шаг
      setTouched({
        step1: {
          numberOfEmployees: true,
          coverageLevel: true,
          selectedCities: true,
        },
      });

      // Проверяем валидность перед переходом
      if (!isStepValid(1, formData, errors, coverageLevel, selectedCities)) {
        return;
      }

      // Отправляем запрос на API
      setIsLoading(true);
      try {
        const data = await fetchFilterData({
          cities: selectedCities,
          level: coverageLevel,
          count: formData.step1.numberOfEmployees,
        });
        setApiData(data);
        console.log("API Response:", data);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
        // Можно добавить обработку ошибок, например, показать уведомление
      } finally {
        setIsLoading(false);
      }
    }

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRecalculate = async () => {
    // Проверяем валидность данных перед запросом
    if (!isStepValid(1, formData, errors, coverageLevel, selectedCities)) {
      return;
    }

    setIsLoadingRecalculate(true);
    try {
      const data = await fetchFilterData({
        cities: selectedCities,
        level: coverageLevel,
        count: formData.step1.numberOfEmployees,
      });
      setApiData(data);
      console.log("API Response (Recalculate):", data);
    } catch (error) {
      console.error("Ошибка при пересчете:", error);
      // Можно добавить обработку ошибок, например, показать уведомление
    } finally {
      setIsLoadingRecalculate(false);
    }
  };

  const handleSelectOffer = (
    insurerName: string,
    city: string,
    record: InsuranceRecord,
  ) => {
    setSelectedOffer({
      insurerName,
      city,
      record,
    });
    setCurrentStep(3);
  };

  const handleCreateCity = (label: string): string => {
    // Генерировать value из label (lowercase с заменой пробелов на дефисы)
    const value = label.toLowerCase().replace(/\s+/g, '-')
    
    // Проверить, что такого value еще нет
    if (!citiesList.some(c => c.value === value)) {
      const newCity = { value, label }
      setCitiesList([...citiesList, newCity])
      // Автоматически выбрать новый город
      setSelectedCities([...selectedCities, value])
      return value
    }
    
    // Если уже существует, вернуть существующий value
    return value
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    console.log("Selected offer:", selectedOffer);
    // Здесь можно добавить отправку данных на сервер
    alert("Форма успешно отправлена!");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Form
            formData={formData}
            touched={touched}
            errors={errors}
            selectedCities={selectedCities}
            coverageLevel={coverageLevel}
            cities={citiesList}
            onCreateCity={handleCreateCity}
            onInputChange={handleStep1InputChange}
            onBlur={handleBlur}
            onCoverageLevelChange={handleCoverageLevelChange}
            onCitiesChange={handleCitiesChange}
          />
        );
      case 2:
        return (
          <Step2Form
            formData={formData}
            touched={touched}
            errors={errors}
            selectedCities={selectedCities}
            coverageLevel={coverageLevel}
            cities={citiesList}
            onCreateCity={handleCreateCity}
            apiData={apiData}
            isLoadingRecalculate={isLoadingRecalculate}
            onInputChange={handleStep1InputChange}
            onBlur={handleBlur}
            onCoverageLevelChange={handleCoverageLevelChange}
            onCitiesChange={handleCitiesChange}
            onRecalculate={handleRecalculate}
            onSelectOffer={handleSelectOffer}
          />
        );
      case 3:
        return (
          <Step3Form
            formData={formData}
            onInputChange={handleStep3InputChange}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    if (currentStep === 1) {
      return "1. Информация о компании";
    }
    if (currentStep === 2) {
      return "2. Выберите подходящее предложение";
    }
    return "3. Завершение";
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <StepIndicator currentStep={currentStep} />
      <Typography className="text-h6">{getStepTitle()}</Typography>
      <Progress
        totalSteps={TOTAL_STEPS}
        currentStep={currentStep}
        className="mb-6"
      />

      {(isLoading && currentStep === 1) || isLoadingRecalculate ? (
        <LoadingScreen />
      ) : currentStep === 1 ? (
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="w-full md:w-1/2">
            <CardContent>
              <div className="space-y-2">
                {renderStepContent()}
                <StepNavigation
                  currentStep={currentStep}
                  isLoading={isLoading}
                  isValid={isStepValid(
                    currentStep,
                    formData,
                    errors,
                    coverageLevel,
                    selectedCities,
                  )}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onSubmit={handleSubmit}
                />
              </div>
            </CardContent>
          </Card>
          <OfferCard />
        </div>
      ) : currentStep === 2 ? (
        <div className="space-y-2">
          {renderStepContent()}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="w-full md:w-1/2">
            <CardContent>
              <div className="space-y-2">
                {renderStepContent()}
              </div>
            </CardContent>
          </Card>
          <OfferCard />
        </div>
      )}
    </div>
  );
}
