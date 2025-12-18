import { Label } from "@/components/ui/label";
import type { FormData } from "@/types/form";

interface Step3FormProps {
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
}

export function Step3Form({ formData, onInputChange }: Step3FormProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="message">Сообщение *</Label>
        <textarea
          id="message"
          className="flex min-h-[120px] w-full rounded-2xl border border-input bg-background px-4 py-5 text-input ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Расскажите о вашем проекте..."
          value={formData.step3.message}
          onChange={(e) => onInputChange("message", e.target.value)}
        />
      </div>
    </div>
  );
}

