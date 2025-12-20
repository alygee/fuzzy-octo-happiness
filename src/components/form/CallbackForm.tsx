import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui/typography";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { FormData, FormErrors, TouchedFields } from "@/types/form";
import { handlePhoneChange } from "@/utils/phoneMask";
import { validateStep3Callback } from "@/utils/validation";
import { CallIcon, ContactIcon } from "../icons";

interface CallbackFormProps {
  formData: FormData;
  onInputChange: (field: string, value: string | boolean) => void;
  onSubmit: () => void;
  onBackToOffers?: () => void;
  errors?: FormErrors["step3"];
  touched?: TouchedFields["step3"];
  onBlur?: (field: keyof NonNullable<TouchedFields["step3"]>) => void;
}

export function CallbackForm({
  formData,
  onInputChange,
  onSubmit,
  onBackToOffers,
  errors,
  touched,
  onBlur,
}: CallbackFormProps) {
  const handleSubmit = () => {
    // Выполняем валидацию
    const validationErrors = validateStep3Callback(formData);

    // Помечаем все поля как touched, чтобы показать ошибки
    const allFields: Array<keyof NonNullable<TouchedFields["step3"]>> = [
      "callbackName",
      "callbackPhone",
      "isAgreed",
    ];

    allFields.forEach((field) => {
      if (onBlur && (!touched || !touched[field])) {
        onBlur(field);
      }
    });

    // Проверяем, есть ли ошибки валидации
    const hasErrors =
      validationErrors && Object.keys(validationErrors).length > 0;

    // Если есть ошибки, не вызываем onSubmit
    if (hasErrors) {
      return;
    }

    // Если ошибок нет, вызываем onSubmit
    onSubmit();
  };

  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1">
            <Typography variant="h4">
              Получите индивидуальное предложение по ДМС от топовых СК
            </Typography>
            <Typography className="text-lg text-text-secondary">
              Наш менеджер свяжется с вами в течение 30 минут
            </Typography>
          </div>
          <div className="flex gap-4">
            <div className="space-y-2 w-full md:w-1/2">
              <Label htmlFor="callbackName">
                <div className="flex items-center gap-2.5 tracking-wide">
                  <ContactIcon className="ml-1" />
                  <span>Ваше имя</span>
                </div>
              </Label>
              <Input
                id="callbackName"
                type="text"
                placeholder="Как вас зовут?"
                value={formData.step3.callbackName}
                onChange={(e) => onInputChange("callbackName", e.target.value)}
                onBlur={() => onBlur?.("callbackName")}
                className={cn(
                  touched?.callbackName &&
                    errors?.callbackName &&
                    "border-error focus-visible:ring-error placeholder:text-error",
                )}
              />
              {touched?.callbackName && errors?.callbackName && (
                <FormError>{errors.callbackName}</FormError>
              )}
            </div>

            <div className="space-y-2 w-full md:w-1/2">
              <Label htmlFor="callbackPhone">
                <div className="flex items-center gap-2.5 tracking-wide">
                  <CallIcon className="ml-1" />
                  <span>Телефон</span>
                </div>
              </Label>
              <Input
                id="callbackPhone"
                type="tel"
                placeholder="+7 ___ ___ ____"
                value={formData.step3.callbackPhone}
                onChange={(e) =>
                  handlePhoneChange(e.target.value, (value) =>
                    onInputChange("callbackPhone", value),
                  )
                }
                onBlur={() => onBlur?.("callbackPhone")}
                className={cn(
                  touched?.callbackPhone &&
                    errors?.callbackPhone &&
                    "border-error focus-visible:ring-error placeholder:text-error",
                )}
              />
              {touched?.callbackPhone && errors?.callbackPhone && (
                <FormError>{errors.callbackPhone}</FormError>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Checkbox
              label="Я согласен(а) на обработку персональных данных согласно политике конфиденциальности"
              checked={formData.step3.isAgreed}
              onChange={(e) => onInputChange("isAgreed", e.target.checked)}
              onBlur={() => onBlur?.("isAgreed")}
              variant={
                touched?.isAgreed && errors?.isAgreed ? "error" : "default"
              }
            />
            {touched?.isAgreed && errors?.isAgreed && (
              <FormError>{errors.isAgreed}</FormError>
            )}
          </div>
          <div className="flex justify-end gap-4 pt-4 flex-col md:flex-row">
            <Button
              className="text-primary"
              variant="outline"
              size="large"
              onClick={onBackToOffers}
            >
              Вернуться к выбору офферов
            </Button>
            <Button
              variant="solid"
              size="large"
              onClick={handleSubmit}
              className="text-white"
            >
              Отправить
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
