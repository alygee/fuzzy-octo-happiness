# Использование цветов из дизайн-системы

Все цвета из Figma интегрированы в проект. Вот как их использовать:

## Primary Colors

```tsx
// Основной цвет
<div className="bg-primary text-white">Primary Main</div>

// Темный вариант
<div className="bg-primary-dark text-white">Primary Dark</div>

// Светлый вариант
<div className="bg-primary-light text-white">Primary Light</div>

// Варианты с прозрачностью
<div className="bg-primary-4p">4% opacity</div>
<div className="bg-primary-8p">8% opacity</div>
<div className="bg-primary-12p">12% opacity</div>
<div className="bg-primary-20p">20% opacity</div>
<div className="bg-primary-30p">30% opacity</div>
<div className="bg-primary-50p">50% opacity</div>
<div className="bg-primary-80p">80% opacity</div>
```

## Secondary Colors

Используется аналогично Primary:

```tsx
<div className="bg-secondary">Secondary Main</div>
<div className="bg-secondary-dark">Secondary Dark</div>
<div className="bg-secondary-light">Secondary Light</div>
<div className="bg-secondary-4p">4% opacity</div>
// и т.д.
```

## Grey Colors

```tsx
<div className="bg-grey-900 text-white">Grey 900</div>
<div className="bg-grey-800 text-white">Grey 800</div>
<div className="bg-grey-700 text-white">Grey 700</div>
<div className="bg-grey-600 text-white">Grey 600</div>
<div className="bg-grey-500">Grey 500</div>
<div className="bg-grey-400">Grey 400</div>
<div className="bg-grey-300">Grey 300</div>
<div className="bg-grey-200">Grey 200</div>
<div className="bg-grey-100">Grey 100</div>
<div className="bg-grey-50">Grey 50</div>
```

## Error, Warning, Success

```tsx
// Error
<div className="bg-error text-white">Error Main</div>
<div className="bg-error-dark text-white">Error Dark</div>
<div className="bg-error-light text-white">Error Light</div>
<div className="bg-error-4p">Error 4% opacity</div>

// Warning
<div className="bg-warning text-white">Warning Main</div>
<div className="bg-warning-dark text-white">Warning Dark</div>
<div className="bg-warning-light text-white">Warning Light</div>

// Success
<div className="bg-success text-white">Success Main</div>
<div className="bg-success-dark text-white">Success Dark</div>
<div className="bg-success-light text-white">Success Light</div>
```

## Background

```tsx
// Фон по умолчанию
<div className="bg-background-default">Default Background</div>

// Бумажный фон (белый)
<div className="bg-background-paper">Paper Background</div>
```

## Actions

```tsx
// Primary action (54% opacity черного)
<div className="bg-action-primary">Primary Action</div>

// Hover (4% opacity черного)
<div className="hover:bg-action-hover">Hover State</div>

// Selected (8% opacity черного)
<div className="bg-action-selected">Selected State</div>

// Disabled (26% opacity черного)
<div className="bg-action-disabled">Disabled</div>

// Disabled background (12% opacity черного)
<div className="bg-action-disabled-bg">Disabled Background</div>

// Focus (12% opacity черного)
<div className="focus:bg-action-focus">Focus State</div>
```

## Text

```tsx
// Primary text (87% opacity черного)
<p className="text-text-primary">Primary Text</p>

// Secondary text (60% opacity черного)
<p className="text-text-secondary">Secondary Text</p>

// Disabled text (38% opacity черного)
<p className="text-text-disabled">Disabled Text</p>
```

## Elevation (Тени)

```tsx
// Elevation 1
<div className="shadow-elevation-1">Card with elevation 1</div>

// Elevation 2
<div className="shadow-elevation-2">Card with elevation 2</div>

// Elevation 3
<div className="shadow-elevation-3">Card with elevation 3</div>

// Elevation 4
<div className="shadow-elevation-4">Card with elevation 4</div>
```

## Примеры комбинаций

```tsx
// Кнопка Primary
<button className="bg-primary text-white hover:bg-primary-dark shadow-elevation-2">
  Click me
</button>

// Карточка
<div className="bg-background-paper shadow-elevation-1 rounded-lg p-6">
  <h2 className="text-text-primary">Title</h2>
  <p className="text-text-secondary">Description</p>
</div>

// Input с фокусом
<input className="border border-grey-300 focus:border-primary focus:ring-action-focus" />

// Сообщение об ошибке
<div className="bg-error-light text-error-dark border border-error p-4 rounded">
  Error message
</div>
```

## Использование в компонентах shadcn/ui

Компоненты уже настроены на использование цветов через CSS переменные:

- `Button` использует `primary` для варианта `default`
- `Card` использует `background-paper` и `shadow-elevation-1`
- `Input` использует `grey-300` для границ
- Все компоненты автоматически используют правильные цвета из дизайн-системы

## Кастомизация

Если нужно изменить цвета, отредактируйте CSS переменные в `src/index.css`:

```css
:root {
  --primary: 205 73% 60%; /* Измените значения здесь */
  /* ... */
}
```

Или добавьте новые цвета в `tailwind.config.js`:

```js
colors: {
  custom: {
    DEFAULT: "hsl(var(--custom-color))",
  }
}
```


