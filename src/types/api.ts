// Типы для API ответа /api/filter

export interface InsurancePrices {
  polyclinic: string;
  dentistry: string;
  ambulance: string;
  hospitalization: string;
  doctor_home: string;
}

export interface InsuranceRecord {
  level: string;
  employees: string;
  prices: InsurancePrices;
  total_price: number;
}

export interface Insurer {
  name: string;
  count: number;
  records: InsuranceRecord[];
}

export interface CityResult {
  city: string;
  count: number;
  insurers: Insurer[];
}

export interface FilterFilters {
  cities: string[];
  levels: string[];
  count: number | null;
}

export interface FilterResponse {
  success: boolean;
  count: number;
  cities_count: number;
  not_found_cities: string[];
  filters: FilterFilters;
  results: CityResult[];
}

