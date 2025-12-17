# Компонент Tooltip - Руководство по использованию

Компонент подсказки на основе Radix UI.

## Установка

Сначала установите зависимость:

```bash
npm install @radix-ui/react-tooltip
```

## Базовое использование

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function MyComponent() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Наведите на меня</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Это подсказка</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## С иконкой

```tsx
import { Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function InfoWithTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center">
            <Info className="h-4 w-4 text-muted-foreground" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Дополнительная информация</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## С кнопкой

```tsx
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function ButtonWithTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="solid" size="large">
            Отправить
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Нажмите для отправки формы</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Направление появления

```tsx
<TooltipContent side="top">Сверху</TooltipContent>
<TooltipContent side="bottom">Снизу</TooltipContent>
<TooltipContent side="left">Слева</TooltipContent>
<TooltipContent side="right">Справа</TooltipContent>
```

## Задержка появления

```tsx
<TooltipProvider delayDuration={300}>
  {/* delayDuration в миллисекундах */}
</TooltipProvider>
```

## Отключение задержки

```tsx
<TooltipProvider delayDuration={0}>
  {/* Tooltip появляется мгновенно */}
</TooltipProvider>
```

## Полный пример

```tsx
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function FormWithTooltips() {
  return (
    <TooltipProvider>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <label>Email</label>
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button" className="inline-flex">
                <Info className="h-4 w-4 text-muted-foreground" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Введите ваш рабочий email</p>
            </TooltipContent>
          </Tooltip>
        </div>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="solid" size="large">
              Отправить
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Нажмите для отправки формы</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
```

## Глобальный Provider

Рекомендуется обернуть приложение в `TooltipProvider` один раз:

```tsx
// App.tsx или main.tsx
import { TooltipProvider } from "@/components/ui/tooltip"

function App() {
  return (
    <TooltipProvider>
      {/* Ваше приложение */}
    </TooltipProvider>
  )
}
```

Тогда можно использовать Tooltip без обертки:

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button>Наведите</button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Подсказка</p>
  </TooltipContent>
</Tooltip>
```

## Props

### TooltipProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayDuration` | `number` | `700` | Задержка перед появлением (мс) |
| `skipDelayDuration` | `number` | `300` | Задержка при переключении между tooltips |

### TooltipContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Сторона появления |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Выравнивание |
| `sideOffset` | `number` | `4` | Отступ от элемента |
| `className` | `string` | `undefined` | Дополнительные классы |

## Кастомизация

Вы можете передать дополнительные классы для стилизации:

```tsx
<TooltipContent className="bg-primary text-white">
  <p>Кастомная подсказка</p>
</TooltipContent>
```

## Особенности

- ✅ Автоматическое позиционирование
- ✅ Анимации появления/исчезновения
- ✅ Доступность (ARIA)
- ✅ Клавиатурная навигация
- ✅ Соответствие дизайн-системе
- ✅ Поддержка всех направлений

