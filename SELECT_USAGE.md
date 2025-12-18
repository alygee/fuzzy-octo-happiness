# Компонент Select - Руководство по использованию

Компонент выпадающего списка с поиском и фильтрацией.

## Базовое использование

```tsx
import { Select } from "@/components/ui/select"

const brands = [
  { value: "ac", label: "AC" },
  { value: "ace", label: "Ace" },
  { value: "acura", label: "Acura" },
  { value: "adler", label: "Adler" },
  // ... больше опций
]

function MyComponent() {
  const [selectedBrand, setSelectedBrand] = React.useState<string>()

  return (
    <Select
      options={brands}
      value={selectedBrand}
      onChange={setSelectedBrand}
      placeholder="Марка"
    />
  )
}
```

## С Label

```tsx
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="brand">Марка</Label>
  <Select
    id="brand"
    options={brands}
    value={selectedBrand}
    onChange={setSelectedBrand}
    placeholder="Выберите марку"
  />
</div>
```

## Без поиска

```tsx
<Select
  options={brands}
  value={selectedBrand}
  onChange={setSelectedBrand}
  placeholder="Марка"
  searchable={false}
/>
```

## Отключенное состояние

```tsx
<Select
  options={brands}
  value={selectedBrand}
  onChange={setSelectedBrand}
  placeholder="Марка"
  disabled={true}
/>
```

## Полный пример

```tsx
import { useState } from "react"
import { Select, type SelectOption } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const carBrands: SelectOption[] = [
  { value: "ac", label: "AC" },
  { value: "ace", label: "Ace" },
  { value: "acura", label: "Acura" },
  { value: "adler", label: "Adler" },
  { value: "adria", label: "Adria" },
  { value: "aeolus", label: "Aeolus" },
  { value: "aito", label: "Aito" },
  { value: "aiways", label: "Aiways" },
  { value: "ajp", label: "AJP" },
  { value: "ajs", label: "AJS" },
  { value: "alfa-romeo", label: "Alfa Romeo" },
]

function CarBrandSelect() {
  const [brand, setBrand] = useState<string>()

  return (
    <div className="space-y-2">
      <Label htmlFor="car-brand">Марка</Label>
      <Select
        id="car-brand"
        options={carBrands}
        value={brand}
        onChange={setBrand}
        placeholder="Марка"
        searchable={true}
      />
    </div>
  )
}
```

## Props

### SelectProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | **required** | Массив опций для выбора |
| `value` | `string?` | `undefined` | Выбранное значение |
| `onChange` | `(value: string) => void?` | `undefined` | Callback при выборе |
| `placeholder` | `string` | `"Выберите..."` | Placeholder текста |
| `className` | `string?` | `undefined` | Дополнительные CSS классы |
| `disabled` | `boolean` | `false` | Отключить компонент |
| `searchable` | `boolean` | `true` | Включить поиск/фильтрацию |

### SelectOption

```tsx
interface SelectOption {
  value: string  // Уникальное значение
  label: string  // Отображаемый текст
}
```

## Особенности

- ✅ Поиск и фильтрация опций
- ✅ Автоматическое закрытие при клике вне компонента
- ✅ Клавиатурная навигация (можно добавить)
- ✅ Адаптивный дизайн
- ✅ Соответствие дизайн-системе
- ✅ Поддержка disabled состояния
- ✅ Выделение выбранного элемента

## Стилизация

Компонент использует стили из дизайн-системы:
- Border radius: 16px (rounded-2xl)
- Padding: 16px горизонтально, 20px вертикально
- Тени: elevation-2 для dropdown
- Цвета: из цветовой палитры проекта

## Кастомизация

Вы можете передать дополнительные классы через `className`:

```tsx
<Select
  options={brands}
  value={selectedBrand}
  onChange={setSelectedBrand}
  className="max-w-md" // Ограничить ширину
/>
```


