import { Step1Form } from "./Step1Form";
import { InsuranceCards } from "./InsuranceCards";
import type { FormData, TouchedFields, FormErrors } from "@/types/form";
import type { FilterResponse, InsuranceRecord } from "@/types/api";
import type { MultiSelectOption } from "@/components/ui/multi-select";
import { Card, CardContent } from "@/components//ui/card";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components//ui/loader";

interface Step2FormProps {
  formData: FormData;
  touched: TouchedFields;
  errors: FormErrors["step1"];
  selectedCities: string[];
  coverageLevel: string;
  cities: MultiSelectOption[];
  onCreateCity?: (label: string) => string | null;
  apiData: FilterResponse | null;
  isLoadingRecalculate: boolean;
  onInputChange: (field: string, value: string) => void;
  onBlur: (field: keyof TouchedFields["step1"]) => void;
  onCoverageLevelChange: (value: string) => void;
  onCitiesChange: (value: string[]) => void;
  onRecalculate: () => void;
  onSelectOffer: (insurerName: string, city: string, record: InsuranceRecord) => void;
}

export function Step2Form({
  formData,
  touched,
  errors,
  selectedCities,
  coverageLevel,
  cities,
  onCreateCity,
  apiData,
  isLoadingRecalculate,
  onInputChange,
  onBlur,
  onCoverageLevelChange,
  onCitiesChange,
  onRecalculate,
  onSelectOffer,
}: Step2FormProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Форма первого шага - 1/3 ширины */}
      <div className="w-full md:w-1/3">
        <Card className="w-full">
          <CardContent>
            <div className="space-y-8">
              <Step1Form
                formData={formData}
                touched={touched}
                errors={errors}
                selectedCities={selectedCities}
                coverageLevel={coverageLevel}
                cities={cities}
                onCreateCity={onCreateCity}
                onInputChange={onInputChange}
                onBlur={onBlur}
                onCoverageLevelChange={onCoverageLevelChange}
                onCitiesChange={onCitiesChange}
              />
              <Button
                className="w-full text-white"
                variant="solid"
                size="medium"
                onClick={onRecalculate}
                disabled={isLoadingRecalculate}
              >
                {isLoadingRecalculate ? (
                  <>
                    <Loader size={20} className="mr-2" />
                    Загрузка...
                  </>
                ) : (
                  "Пересчитать"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Карточки страховых компаний - 2/3 ширины */}
      <div className="w-full md:w-2/3">
        <InsuranceCards apiData={apiData} onSelectOffer={onSelectOffer} />
      </div>
    </div>
  );
}
