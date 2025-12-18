import type { FormData, FormErrors, TouchedFields } from "@/types/form";

export function validateStep1(
  formData: FormData,
  coverageLevel: string,
  selectedCities: string[]
): FormErrors['step1'] {
  const errors: FormErrors['step1'] = {};
  
  if (!formData.step1.numberOfEmployees.trim()) {
    errors.numberOfEmployees = "Обязательное поле";
  }
  
  if (!coverageLevel) {
    errors.coverageLevel = "Выберите уровень покрытия";
  }
  
  if (selectedCities.length === 0) {
    errors.selectedCities = "Выберите хотя бы один регион";
  }
  
  return errors;
}

export function isStepValid(
  step: number,
  formData: FormData,
  errors: FormErrors['step1'],
  coverageLevel: string,
  selectedCities: string[]
): boolean {
  switch (step) {
    case 1:
      return (
        formData.step1.numberOfEmployees.trim() !== "" &&
        coverageLevel !== "" &&
        selectedCities.length > 0 &&
        !errors.numberOfEmployees &&
        !errors.coverageLevel &&
        !errors.selectedCities
      );
    case 2:
      return (
        formData.step2.company.trim() !== "" &&
        formData.step2.position.trim() !== ""
      );
    case 3:
      return formData.step3.message.trim() !== "";
    default:
      return false;
  }
}

