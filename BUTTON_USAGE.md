# Компонент Button - Руководство по использованию

Компонент кнопки с поддержкой различных размеров, стилей и цветов из дизайн-системы.

## Варианты (variant)

### Solid - Сплошной фон
Кнопка с сплошным цветным фоном.

```tsx
<Button variant="solid">Primary Solid</Button>
<Button variant="solid-secondary">Secondary Solid</Button>
<Button variant="solid-error">Error Solid</Button>
<Button variant="solid-success">Success Solid</Button>
<Button variant="solid-warning">Warning Solid</Button>
```

### Contained - С границей
Кнопка с границей и прозрачным фоном.

```tsx
<Button variant="contained">Primary Contained</Button>
<Button variant="contained-secondary">Secondary Contained</Button>
<Button variant="contained-error">Error Contained</Button>
<Button variant="contained-success">Success Contained</Button>
<Button variant="contained-warning">Warning Contained</Button>
```

### Text - Текстовый вариант
Текстовая кнопка без фона и границы.

```tsx
<Button variant="text">Primary Text</Button>
<Button variant="text-secondary">Secondary Text</Button>
<Button variant="text-error">Error Text</Button>
<Button variant="text-success">Success Text</Button>
<Button variant="text-warning">Warning Text</Button>
```

## Размеры (size)

### Small
- Высота: 40px (h-10)
- Padding: 24px горизонтально, 8px вертикально
- Border radius: 32px
- Текст: Body 2

```tsx
<Button size="small">Small Button</Button>
```

### Medium (по умолчанию)
- Высота: 48px (h-12)
- Padding: 32px горизонтально, 12px вертикально
- Border radius: 40px
- Текст: Body 1

```tsx
<Button size="medium">Medium Button</Button>
```

### Large
- Высота: 56px (h-14)
- Padding: 32px горизонтально, 16px вертикально
- Border radius: 64px
- Текст: Body 1

```tsx
<Button size="large">Large Button</Button>
```

## Иконки

Компонент поддерживает иконки слева и справа через пропы `leftIcon` и `rightIcon`.

```tsx
import { ChevronRight, ChevronLeft } from "lucide-react"

<Button 
  variant="solid" 
  size="large"
  leftIcon={<ChevronLeft className="w-5 h-5" />}
>
  Назад
</Button>

<Button 
  variant="solid" 
  size="large"
  rightIcon={<ChevronRight className="w-5 h-5" />}
>
  Далее
</Button>

<Button 
  variant="solid" 
  size="large"
  leftIcon={<ChevronLeft className="w-5 h-5" />}
  rightIcon={<ChevronRight className="w-5 h-5" />}
>
  С иконками
</Button>
```

## Примеры использования

### Основная кнопка действия
```tsx
<Button variant="solid" size="large">
  Отправить
</Button>
```

### Вторичная кнопка
```tsx
<Button variant="contained" size="medium">
  Отмена
</Button>
```

### Текстовая кнопка
```tsx
<Button variant="text" size="medium">
  Подробнее
</Button>
```

### Кнопка с ошибкой
```tsx
<Button variant="solid-error" size="large">
  Удалить
</Button>
```

### Кнопка успеха
```tsx
<Button variant="solid-success" size="large">
  Сохранить
</Button>
```

### Полная ширина
```tsx
<Button variant="solid" size="large" className="w-full">
  Полная ширина
</Button>
```

### Отключенное состояние
```tsx
<Button variant="solid" size="large" disabled>
  Недоступно
</Button>
```

## Комбинации

```tsx
// Большая основная кнопка с иконкой
<Button 
  variant="solid" 
  size="large"
  rightIcon={<ArrowRight className="w-5 h-5" />}
>
  Продолжить
</Button>

// Средняя кнопка с границей
<Button variant="contained" size="medium">
  Вторичное действие
</Button>

// Маленькая текстовая кнопка
<Button variant="text" size="small">
  Отмена
</Button>
```

## Соответствие дизайну из Figma

Компонент полностью соответствует спецификации из Figma:

- **Size="Large"**: `size="large"` - высота 56px, border-radius 64px
- **Style="Solid"**: `variant="solid"` - сплошной фон
- **Style="Contained"**: `variant="contained"` - с границей
- **Style="Text"**: `variant="text"` - текстовый вариант
- **Color="Primary"**: используется автоматически для `variant="solid"`
- **Icon Left/Right**: через пропы `leftIcon` и `rightIcon`

## Обратная совместимость

Старые варианты все еще работают:
- `variant="default"` → `variant="solid"`
- `variant="outline"` → `variant="contained"`
- `variant="ghost"` → `variant="text"`
- `size="sm"` → `size="small"`
- `size="lg"` → `size="large"`

