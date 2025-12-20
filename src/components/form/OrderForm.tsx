import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import type { FormData, FormErrors, TouchedFields } from "@/types/form";
import { SelectedInsurerCard } from "./SelectedInsurerCard";
import { getInsurerLogo } from "@/utils/insurerLogos";
import { handlePhoneChange } from "@/utils/phoneMask";
import { coverageLevels } from "@/constants/form";

interface OrderFormProps {
  formData: FormData;
  insurerName: string;
  totalPrice: number;
  coverageLevel: string;
  numberOfEmployees: string;
  serviceRegion: string;
  errors?: FormErrors['step3'];
  touched?: TouchedFields['step3'];
  onInputChange: (field: string, value: string) => void;
  onCoverageLevelChange?: (value: string) => void;
  onBlur?: (field: keyof NonNullable<TouchedFields['step3']>) => void;
  onSubmit: () => void;
}

export function OrderForm({
  formData,
  insurerName,
  totalPrice,
  coverageLevel,
  numberOfEmployees,
  serviceRegion,
  errors,
  touched,
  onInputChange,
  onCoverageLevelChange,
  onBlur,
  onSubmit,
}: OrderFormProps) {
  const logoPath = getInsurerLogo(insurerName);
  
  const handleCoverageLevelChange = (value: string) => {
    if (onCoverageLevelChange) {
      onCoverageLevelChange(value);
    }
    if (onBlur && touched && !touched.coverageLevel) {
      onBlur('coverageLevel');
    }
  };

  return (
    <div className="space-y-6">
      {/* Карточка страховщика */}
      <SelectedInsurerCard
        insurerName={insurerName}
        totalPrice={totalPrice}
        logoPath={logoPath}
      />

      {/* Форма */}
      <Card className="w-full ">
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="space-y-2 w-full md:w-1/2">
                <Label htmlFor="organizationName">Название организации</Label>
                <Input
                  id="organizationName"
                  type="text"
                  placeholder="Как называется?"
                  value={formData.step3.organizationName}
                  onChange={(e) =>
                    onInputChange("organizationName", e.target.value)
                  }
                  onBlur={() => onBlur?.("organizationName")}
                  className={cn(
                    touched?.organizationName && errors?.organizationName && "border-error focus-visible:ring-error placeholder:text-error"
                  )}
                />
                {touched?.organizationName && errors?.organizationName && (
                  <FormError>{errors.organizationName}</FormError>
                )}
              </div>

              <div className="space-y-2 w-full md:w-1/2">
                <Label htmlFor="inn">ИНН</Label>
                <Input
                  id="inn"
                  type="text"
                  placeholder="Введите ИНН"
                  value={formData.step3.inn}
                  onChange={(e) => onInputChange("inn", e.target.value)}
                  onBlur={() => onBlur?.("inn")}
                  className={cn(
                    touched?.inn && errors?.inn && "border-error focus-visible:ring-error placeholder:text-error"
                  )}
                />
                {touched?.inn && errors?.inn && (
                  <FormError>{errors.inn}</FormError>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="space-y-2 w-full md:w-1/2">
                <Label htmlFor="numberOfEmployees">
                  Количество сотрудников
                </Label>
                <Input
                  id="numberOfEmployees"
                  type="text"
                  placeholder="Сколько сотрудников в компании"
                  value={numberOfEmployees}
                />
              </div>

              <div className="space-y-2 w-full md:w-1/2">
                <Label htmlFor="responsiblePerson">ФИО ответственного</Label>
                <Input
                  id="responsiblePerson"
                  type="text"
                  placeholder="Введите ФИО"
                  value={formData.step3.responsiblePerson}
                  onChange={(e) =>
                    onInputChange("responsiblePerson", e.target.value)
                  }
                  onBlur={() => onBlur?.("responsiblePerson")}
                  className={cn(
                    touched?.responsiblePerson && errors?.responsiblePerson && "border-error focus-visible:ring-error placeholder:text-error"
                  )}
                />
                {touched?.responsiblePerson && errors?.responsiblePerson && (
                  <FormError>{errors.responsiblePerson}</FormError>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="space-y-2 w-full md:w-1/2">
                <Label htmlFor="workEmail">Рабочая почта</Label>
                <Input
                  id="workEmail"
                  type="email"
                  placeholder="Какой рабочий email?"
                  value={formData.step3.workEmail}
                  onChange={(e) => onInputChange("workEmail", e.target.value)}
                  onBlur={() => onBlur?.("workEmail")}
                  className={cn(
                    touched?.workEmail && errors?.workEmail && "border-error focus-visible:ring-error placeholder:text-error"
                  )}
                />
                {touched?.workEmail && errors?.workEmail && (
                  <FormError>{errors.workEmail}</FormError>
                )}
              </div>

              <div className="space-y-2 w-full md:w-1/2">
                <Label htmlFor="workPhone">Телефон</Label>
                <Input
                  id="workPhone"
                  type="tel"
                  placeholder="+7 ___ ___ ____"
                  value={formData.step3.workPhone}
                  onChange={(e) =>
                    handlePhoneChange(e.target.value, (value) =>
                      onInputChange("workPhone", value),
                    )
                  }
                  onBlur={() => onBlur?.("workPhone")}
                  className={cn(
                    touched?.workPhone && errors?.workPhone && "border-error focus-visible:ring-error placeholder:text-error"
                  )}
                />
                {touched?.workPhone && errors?.workPhone && (
                  <FormError>{errors.workPhone}</FormError>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverageLevel">Уровень покрытия</Label>
              <Select
                options={coverageLevels}
                value={coverageLevel}
                onChange={handleCoverageLevelChange}
                placeholder="Выберите уровень покрытия"
                className={cn(
                  touched?.coverageLevel && errors?.coverageLevel && "border-error"
                )}
              />
              {touched?.coverageLevel && errors?.coverageLevel && (
                <FormError>{errors.coverageLevel}</FormError>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceRegion">Регион обслуживания</Label>
              <Input id="serviceRegion" type="text" value={serviceRegion} />
            </div>

            <div className="flex justify-end pt-4">
              <Button
                variant="solid"
                size="large"
                onClick={onSubmit}
                className="text-white"
              >
                Отправить заявку
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
