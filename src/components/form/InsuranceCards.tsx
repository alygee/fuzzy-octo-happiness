import { Typography } from "@/components/ui/typography";
import type { FilterResponse, InsuranceRecord } from "@/types/api";
import { CitySection } from "./CitySection";

interface InsuranceCardsProps {
  apiData: FilterResponse | null;
  onSelectOffer: (insurerName: string, city: string, record: InsuranceRecord) => void;
}

export function InsuranceCards({ apiData, onSelectOffer }: InsuranceCardsProps) {
  if (!apiData || !apiData.results || apiData.results.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <Typography variant="body1" className="text-text-secondary">
          Нет доступных предложений
        </Typography>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Typography className="text-h4">Предложения для вас</Typography>
      {apiData.results.map((cityResult, cityIndex) => (
        <CitySection
          key={`${cityResult.city}-${cityIndex}`}
          cityResult={cityResult}
          onSelectOffer={onSelectOffer}
        />
      ))}
    </div>
  );
}
