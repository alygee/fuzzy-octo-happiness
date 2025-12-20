import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { FormData } from "@/types/form";
import { handlePhoneChange } from "@/utils/phoneMask";

interface CallbackFormProps {
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
  onSubmit: () => void;
  onBackToOffers?: () => void;
}

export function CallbackForm({
  formData,
  onInputChange,
  onSubmit,
  onBackToOffers,
}: CallbackFormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="callbackName">Ваше имя</Label>
        <Input
          id="callbackName"
          type="text"
          placeholder="Как вас зовут?"
          value={formData.step3.callbackName}
          onChange={(e) => onInputChange("callbackName", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="callbackPhone">Телефон</Label>
        <Input
          id="callbackPhone"
          type="tel"
          placeholder="+7 ___ ___ ____"
          value={formData.step3.callbackPhone}
          onChange={(e) =>
            handlePhoneChange(e.target.value, (value) =>
              onInputChange("callbackPhone", value)
            )
          }
        />
      </div>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          size="large"
          onClick={onBackToOffers}
        >
          Вернуться к выбору офферов
        </Button>
        <Button
          variant="solid"
          size="large"
          onClick={onSubmit}
          className="text-white"
        >
          Отправить
        </Button>
      </div>
    </div>
  );
}

