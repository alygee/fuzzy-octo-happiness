import type { FormData, Step3Mode, FormErrors, TouchedFields } from "@/types/form";
import type { InsuranceRecord } from "@/types/api";
import { OrderForm } from "./OrderForm";
import { CallbackForm } from "./CallbackForm";
import { getCityLabels } from "@/utils/cities";
import { cities } from "@/constants/form";

interface Step3FormProps {
  formData: FormData;
  step3Mode: Step3Mode;
  selectedOffer: {
    insurerName: string;
    city: string;
    record: InsuranceRecord;
  } | null;
  coverageLevel: string;
  selectedCities: string[];
  numberOfEmployees: string;
  errors?: FormErrors['step3'] | null;
  touched?: TouchedFields['step3'];
  onInputChange: (field: string, value: string) => void;
  onCoverageLevelChange?: (value: string) => void;
  onBlur?: (field: keyof NonNullable<TouchedFields['step3']>) => void;
  onSubmit: () => void;
  onBackToOffers?: () => void;
}

export function Step3Form({
  formData,
  step3Mode,
  selectedOffer,
  coverageLevel,
  selectedCities,
  numberOfEmployees,
  errors,
  touched,
  onInputChange,
  onCoverageLevelChange,
  onBlur,
  onSubmit,
  onBackToOffers,
}: Step3FormProps) {
  // Получаем названия городов из selectedCities
  const serviceRegion = getCityLabels(selectedCities, cities);

  // Форма оформления
  if (step3Mode === "order" && selectedOffer) {
    return (
      <OrderForm
        formData={formData}
        insurerName={selectedOffer.insurerName}
        totalPrice={selectedOffer.record.total_price}
        coverageLevel={coverageLevel}
        numberOfEmployees={numberOfEmployees}
        serviceRegion={serviceRegion}
        errors={errors || undefined}
        touched={touched}
        onInputChange={onInputChange}
        onCoverageLevelChange={onCoverageLevelChange}
        onBlur={onBlur}
        onSubmit={onSubmit}
      />
    );
  }

  // Форма обратного звонка
  if (step3Mode === "callback") {
    return (
      <CallbackForm
        formData={formData}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        onBackToOffers={onBackToOffers}
      />
    );
  }

  return null;
}
