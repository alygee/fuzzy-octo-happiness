// Типы для формы

export interface FormData {
  step1: {
    numberOfEmployees: string;
    email: string;
    phone: string;
  };
  step2: {
    company: string;
    position: string;
  };
  step3: {
    message: string;
  };
}

export interface TouchedFields {
  step1: {
    numberOfEmployees: boolean;
    coverageLevel: boolean;
    selectedCities: boolean;
  };
}

export interface FormErrors {
  step1: {
    numberOfEmployees?: string;
    coverageLevel?: string;
    selectedCities?: string;
  };
}

