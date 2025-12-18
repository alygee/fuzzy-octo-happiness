# Компонент MultiSelect - Руководство по использованию

Компонент множественного выбора с отображением выбранных элементов в виде тегов (чипсов).

## Базовое использование

```tsx
import { MultiSelect } from "@/components/ui/multi-select"
import { Label } from "@/components/ui/label"

const cities = [
  { value: "moscow", label: "Москва" },
  { value: "spb", label: "Санкт-Петербург" },
  { value: "novosibirsk", label: "Новосибирск" },
  { value: "krasnoyarsk", label: "Красноярск" },
  { value: "ekaterinburg", label: "Екатеринбург" },
]

function MyComponent() {
  const [selectedCities, setSelectedCities] = React.useState<string[]>([])

  return (
    <div className="space-y-2">
      <Label>Регион обслуживания</Label>
      <MultiSelect
        options={cities}
        value={selectedCities}
        onChange={setSelectedCities}
        placeholder="Выберите города"
      />
    </div>
  )
}
```

## С Label

```tsx
import { MultiSelect } from "@/components/ui/multi-select"
import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="regions">Регионы</Label>
  <MultiSelect
    id="regions"
    options={cities}
    value={selectedCities}
    onChange={setSelectedCities}
    placeholder="Выберите регионы"
  />
</div>
```

## Без поиска

```tsx
<MultiSelect
  options={cities}
  value={selectedCities}
  onChange={setSelectedCities}
  placeholder="Выберите города"
  searchable={false}
/>
```

## Отключенное состояние

```tsx
<MultiSelect
  options={cities}
  value={selectedCities}
  onChange={setSelectedCities}
  placeholder="Выберите города"
  disabled={true}
/>
```

## Полный пример

```tsx
import { useState } from "react"
import { MultiSelect, type MultiSelectOption } from "@/components/ui/multi-select"
import { Label } from "@/components/ui/label"

const regions: MultiSelectOption[] = [
  { value: "moscow", label: "Москва" },
  { value: "spb", label: "Санкт-Петербург" },
  { value: "novosibirsk", label: "Новосибирск" },
  { value: "krasnoyarsk", label: "Красноярск" },
  { value: "ekaterinburg", label: "Екатеринбург" },
  { value: "kazan", label: "Казань" },
  { value: "nizhny", label: "Нижний Новгород" },
]

function RegionSelect() {
  const [regions, setRegions] = useState<string[]>([])

  return (
    <div className="space-y-2">
      <Label htmlFor="service-regions">Регион обслуживания</Label>
      <MultiSelect
        id="service-regions"
        options={regions}
        value={regions}
        onChange={setRegions}
        placeholder="Выберите регионы"
        searchable={true}
      />
    </div>
  )
}
```

## Особенности

- ✅ Множественный выбор
- ✅ Отображение выбранных элементов в виде тегов
- ✅ Удаление элементов по клику на крестик
- ✅ Удаление последнего элемента по Backspace
- ✅ Поиск и фильтрация опций
- ✅ Автоматическое закрытие при клике вне компонента
- ✅ Адаптивный дизайн (теги переносятся на новую строку)
- ✅ Соответствие дизайн-системе

## Управление с клавиатуры

- **Backspace** - удаляет последний выбранный элемент (когда поле поиска пустое)
- **Enter** - можно добавить для выбора первой опции из списка

## Props

### MultiSelectProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `MultiSelectOption[]` | **required** | Массив опций для выбора |
| `value` | `string[]` | `[]` | Массив выбранных значений |
| `onChange` | `(value: string[]) => void?` | `undefined` | Callback при изменении выбора |
| `placeholder` | `string` | `"Выберите..."` | Placeholder текста |
| `className` | `string?` | `undefined` | Дополнительные CSS классы |
| `disabled` | `boolean` | `false` | Отключить компонент |
| `searchable` | `boolean` | `true` | Включить поиск/фильтрацию |

### MultiSelectOption

```tsx
interface MultiSelectOption {
  value: string  // Уникальное значение
  label: string  // Отображаемый текст
}
```

## Стилизация тегов

Теги используют стили из дизайн-системы:
- Фон: `bg-primary-4p` (4% opacity primary)
- Граница: `border-primary`
- Текст: `text-text-primary`
- Крестик: темно-серый с hover эффектом

## Кастомизация

Вы можете передать дополнительные классы:

```tsx
<MultiSelect
  options={cities}
  value={selectedCities}
  onChange={setSelectedCities}
  className="max-w-md" // Ограничить ширину
/>
```

## Пример использования в форме

```tsx
function FormWithMultiSelect() {
  const [formData, setFormData] = useState({
    regions: [] as string[]
  })

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="regions">Регион обслуживания</Label>
        <MultiSelect
          id="regions"
          options={regions}
          value={formData.regions}
          onChange={(regions) => 
            setFormData(prev => ({ ...prev, regions }))
          }
          placeholder="Выберите регионы"
        />
      </div>
    </div>
  )
}
```


