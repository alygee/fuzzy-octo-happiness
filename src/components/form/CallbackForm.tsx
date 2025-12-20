import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { FormData } from "@/types/form";
import { handlePhoneChange } from "@/utils/phoneMask";
import { CallIcon, ContactIcon } from "../icons";
import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui/typography";

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
              />
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
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
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
              onClick={onSubmit}
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
