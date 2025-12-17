import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";
import { Typography } from "./ui/typography";
import { CrowdIcon, InfoIcon, LocationIcon, ShieldIcon } from "./icons";
import { MultiSelect } from "@/components/ui/multi-select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import offerImage from "@/assets/offer.png";
import { Select } from "@/components/ui/select";
import { FormError } from "@/components/ui/form-error";
import { cn } from "@/lib/utils";

interface FormData {
  step1: {
    numberOfEmployees: string;
    email: string;
    phone: string;
  };
  step2: {
    company: string;
    position: string;
  };
  step3: {
    message: string;
  };
}

interface TouchedFields {
  step1: {
    numberOfEmployees: boolean;
    coverageLevel: boolean;
    selectedCities: boolean;
  };
}

interface FormErrors {
  step1: {
    numberOfEmployees?: string;
    coverageLevel?: string;
    selectedCities?: string;
  };
}

const TOTAL_STEPS = 3;

const cities = [
  { value: "moscow", label: "Москва" },
  { value: "spb", label: "Санкт-Петербург" },
  { value: "novosibirsk", label: "Новосибирск" },
  { value: "krasnoyarsk", label: "Красноярск" },
]

const coverageLevels = [
  { value: "Базовый", label: "Базовый" },
  { value: "Комфорт", label: "Комфорт" },
  { value: "Премиум", label: "Премиум" },
]

export function FormStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [coverageLevel, setCoverageLevel] = useState<string>('Базовый')
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

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const validateStep1 = (): FormErrors['step1'] => {
    const errors: FormErrors['step1'] = {}
    
    if (!formData.step1.numberOfEmployees.trim()) {
      errors.numberOfEmployees = "Обязательное поле"
    }
    
    if (!coverageLevel) {
      errors.coverageLevel = "Выберите уровень покрытия"
    }
    
    if (selectedCities.length === 0) {
      errors.selectedCities = "Выберите хотя бы один регион"
    }
    
    return errors
  }

  const errors = validateStep1()

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

  const handleBlur = (field: keyof TouchedFields['step1']) => {
    setTouched((prev) => ({
      ...prev,
      step1: {
        ...prev.step1,
        [field]: true,
      },
    }));
  };

  const handleCoverageLevelChange = (value: string) => {
    setCoverageLevel(value)
    if (!touched.step1.coverageLevel) {
      setTouched((prev) => ({
        ...prev,
        step1: {
          ...prev.step1,
          coverageLevel: true,
        },
      }))
    }
  }

  const handleCitiesChange = (value: string[]) => {
    setSelectedCities(value)
    if (!touched.step1.selectedCities) {
      setTouched((prev) => ({
        ...prev,
        step1: {
          ...prev.step1,
          selectedCities: true,
        },
      }))
    }
  }

  const handleNext = () => {
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
      if (!isStepValid(1)) {
        return;
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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Здесь можно добавить отправку данных на сервер
    alert("Форма успешно отправлена!");
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return (
          formData.step1.numberOfEmployees.trim() !== "" &&
          coverageLevel !== "" &&
          selectedCities.length > 0 &&
          !errors.numberOfEmployees &&
          !errors.coverageLevel &&
          !errors.selectedCities
        );
      case 2:
        return (
          formData.step2.company.trim() !== "" &&
          formData.step2.position.trim() !== ""
        );
      case 3:
        return formData.step3.message.trim() !== "";
      default:
        return false;
    }
  };

  const renderStepIndicator = () => {
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
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                <div className="flex items-center gap-2.5 tracking-wide">
                  <CrowdIcon className="ml-1" />
                  <span>Количество сотрудников</span>
                </div>
              </Label>
              <Input
                id="numberOfEmployees"
                type="number"
                placeholder="Какое количество сотрудников в компании?"
                value={formData.step1.numberOfEmployees}
                onChange={(e) =>
                  handleInputChange("step1", "numberOfEmployees", e.target.value)
                }
                onBlur={() => handleBlur("numberOfEmployees")}
                className={cn(
                  touched.step1.numberOfEmployees && errors.numberOfEmployees && "border-error focus-visible:ring-error placeholder:text-error"
                )}
              />
              {touched.step1.numberOfEmployees && errors.numberOfEmployees && (
                <FormError>{errors.numberOfEmployees}</FormError>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                <div className="flex items-center gap-2.5 tracking-wide">
                  <ShieldIcon className="ml-1" />
                  <span>Уровень покрытия </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button>
                          <InfoIcon size={20} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xl">
                        <p className="text-subtitle1">Уровень покрытия</p>
                        <br />
                        <ul>
                          <li>- Базовый: основное покрытие, включая обязательные медицинские услуги</li>
                          <li>- Комфорт: Расширенная помощь, включая амбулаторное лечение и доп. услуги</li>
                          <li>- Премиум: Полный пакет с приоритетным обслуживанием и доп. опциями</li>
                        </ul>

                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </Label>
              <div
                className={cn(
                  touched.step1.coverageLevel && errors.coverageLevel && "[&_input]:border-error [&_input]:focus-visible:ring-error [&_input]:placeholder:text-error"
                )}
              >
                <Select
                  options={coverageLevels}
                  value={coverageLevel}
                  onChange={handleCoverageLevelChange}
                  placeholder="Выберите уровень покрытия"
                />
              </div>
              {touched.step1.coverageLevel && errors.coverageLevel && (
                <FormError>{errors.coverageLevel}</FormError>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                <div className="flex items-center gap-2.5 tracking-wide">
                  <LocationIcon className="ml-1" />
                  <span>Регион обслуживания</span>
                </div>
              </Label>
              <div
                className={cn(
                  touched.step1.selectedCities && errors.selectedCities && "[&_div]:border-error [&_div]:focus-within:ring-error [&_input]:placeholder:text-error"
                )}
              >
                <MultiSelect
                  options={cities}
                  value={selectedCities}
                  onChange={handleCitiesChange}
                  placeholder="Выберите город или регион"
                  onBlur={() => handleBlur("selectedCities")}
                />
              </div>
              {touched.step1.selectedCities && errors.selectedCities && (
                <FormError>{errors.selectedCities}</FormError>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Компания *</Label>
              <Input
                id="company"
                placeholder="Название компании"
                value={formData.step2.company}
                onChange={(e) =>
                  handleInputChange("step2", "company", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Должность *</Label>
              <Input
                id="position"
                placeholder="Ваша должность"
                value={formData.step2.position}
                onChange={(e) =>
                  handleInputChange("step2", "position", e.target.value)
                }
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение *</Label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-2xl border border-input bg-background px-4 py-5 text-input ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Расскажите о вашем проекте..."
                value={formData.step3.message}
                onChange={(e) =>
                  handleInputChange("step3", "message", e.target.value)
                }
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {renderStepIndicator()}
      <Typography className="text-h6">1. Информация о компании</Typography>
      <Progress value={progress} className="mb-6" />
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/2">
          <CardContent>
            <div className="space-y-2">
              {renderStepContent()}
              <div className="flex justify-between pt-4">
                {currentStep !== 1 && (
                  <Button variant="text" size="large" onClick={handlePrevious}>
                    Назад
                  </Button>
                )}
                {currentStep < TOTAL_STEPS ? (
                  <Button
                    className="w-full text-white"
                    variant="solid"
                    size="large"
                    onClick={handleNext}
                    disabled={!isStepValid(currentStep)}
                  >
                    Далее
                  </Button>
                ) : (
                  <Button
                    variant="solid"
                    size="large"
                    onClick={handleSubmit}
                    disabled={!isStepValid(currentStep)}
                  >
                    Отправить
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className="w-full md:w-1/2 bg-morning-light"
        >
          <CardContent className="flex items-center justify-center w-full h-full">
            <img
              src={offerImage}
              alt="Offer"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
