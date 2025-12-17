import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Check } from "lucide-react"

interface FormData {
  step1: {
    name: string
    email: string
    phone: string
  }
  step2: {
    company: string
    position: string
  }
  step3: {
    message: string
  }
}

const TOTAL_STEPS = 3

export function FormStepper() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    step1: {
      name: "",
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
  })

  const progress = (currentStep / TOTAL_STEPS) * 100

  const handleInputChange = (
    step: keyof FormData,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }))
  }

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Здесь можно добавить отправку данных на сервер
    alert("Форма успешно отправлена!")
  }

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return (
          formData.step1.name.trim() !== "" &&
          formData.step1.email.trim() !== "" &&
          formData.step1.phone.trim() !== ""
        )
      case 2:
        return (
          formData.step2.company.trim() !== "" &&
          formData.step2.position.trim() !== ""
        )
      case 3:
        return formData.step3.message.trim() !== ""
      default:
        return false
    }
  }

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep

          return (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                  ${
                    isCompleted
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
          )
        })}
      </div>
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                placeholder="Введите ваше имя"
                value={formData.step1.name}
                onChange={(e) =>
                  handleInputChange("step1", "name", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.step1.email}
                onChange={(e) =>
                  handleInputChange("step1", "email", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.step1.phone}
                onChange={(e) =>
                  handleInputChange("step1", "phone", e.target.value)
                }
              />
            </div>
          </div>
        )

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
        )

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
        )

      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-h5">Многошаговая форма</CardTitle>
          <CardDescription className="text-body2">
            Шаг {currentStep} из {TOTAL_STEPS}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {renderStepIndicator()}
            <Progress value={progress} className="mb-6" />
            {renderStepContent()}
            <div className="flex justify-between pt-4">
              <Button
                variant="text"
                size="large"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Назад
              </Button>
              {currentStep < TOTAL_STEPS ? (
                <Button
                  variant="solid"
                  size="large"
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
                  rightIcon={<ChevronRight className="w-5 h-5" />}
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
    </div>
  )
}

