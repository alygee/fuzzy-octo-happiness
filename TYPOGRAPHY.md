# Типографика из дизайн-системы

Все стили типографики из Figma интегрированы в проект.

## Шрифт

**Futura PT** - основной шрифт проекта, подключен через Google Fonts.

## Использование

### Через Tailwind классы

```tsx
// Заголовки
<h1 className="text-h1">H1 Heading</h1>
<h2 className="text-h2">H2 Heading</h2>
<h3 className="text-h3">H3 Heading</h3>
<h4 className="text-h4">H4 Heading</h4>
<h5 className="text-h5">H5 Heading</h5>
<h6 className="text-h6">H6 Heading</h6>

// Подзаголовки
<p className="text-subtitle1">Subtitle 1</p>
<p className="text-subtitle2">Subtitle 2</p>

// Основной текст
<p className="text-body1">Body 1 - основной текст</p>
<p className="text-body2">Body 2 - вторичный текст</p>

// Специальные стили
<span className="text-input">Input text</span>
<span className="text-caption">Caption</span>
<span className="text-overline">OVERLINE</span>
```

### Через компонент Typography

```tsx
import { Typography } from "@/components/ui/typography"

<Typography variant="h1">H1 Heading</Typography>
<Typography variant="h2">H2 Heading</Typography>
<Typography variant="body1">Body text</Typography>
<Typography variant="caption">Caption text</Typography>

// С кастомным тегом
<Typography variant="h1" as="div">Custom tag</Typography>
```

## Стили типографики

### H1. Heading
- **Размер:** 96px
- **Line height:** 104px
- **Letter spacing:** -1.0px
- **Weight:** 500 (Medium)

### H2. Heading
- **Размер:** 60px
- **Line height:** 72px
- **Letter spacing:** -0.6px
- **Weight:** 450

### H3. Heading
- **Размер:** 48px
- **Line height:** 64px
- **Letter spacing:** -0.2px
- **Weight:** 500 (Medium)

### H4. Heading
- **Размер:** 34px
- **Line height:** 48px
- **Letter spacing:** 0.0px
- **Weight:** 450

### H5. Heading
- **Размер:** 24px
- **Line height:** 32px
- **Letter spacing:** 0.4px
- **Weight:** 450

### H6. Heading
- **Размер:** 20px
- **Line height:** 32px
- **Letter spacing:** 0.6px
- **Weight:** 500 (Medium)

### Subtitle 1
- **Размер:** 18px
- **Line height:** 24px
- **Letter spacing:** 0.4px
- **Weight:** 450

### Subtitle 2
- **Размер:** 16px
- **Line height:** 24px
- **Letter spacing:** 0.4px
- **Weight:** 450

### Body 1
- **Размер:** 18px
- **Line height:** 24px
- **Letter spacing:** 0.0px
- **Weight:** 400 (Normal)

### Body 2
- **Размер:** 16px
- **Line height:** 24px
- **Letter spacing:** 0.0px
- **Weight:** 400 (Normal)

### Input
- **Размер:** 16px
- **Line height:** 16px
- **Letter spacing:** 0.0px
- **Weight:** 400 (Normal)

### Caption
- **Размер:** 12px
- **Line height:** 12px
- **Letter spacing:** 0.4px
- **Weight:** 400 (Normal)

### OVERLINE
- **Размер:** 13px
- **Line height:** 16px
- **Letter spacing:** 1.0px
- **Weight:** 400 (Normal)

## Веса шрифта

- `font-normal` или `font-weight-400` - 400 (Normal)
- `font-medium` или `font-weight-450` - 450
- `font-semibold` или `font-weight-500` - 500 (Medium)

## Примеры использования

```tsx
// Заголовок страницы
<h1 className="text-h1 text-text-primary">Главный заголовок</h1>

// Подзаголовок
<h2 className="text-h3 text-text-primary">Подзаголовок</h2>

// Основной текст
<p className="text-body1 text-text-primary">
  Основной текст страницы
</p>

// Вторичный текст
<p className="text-body2 text-text-secondary">
  Дополнительная информация
</p>

// Мелкий текст
<span className="text-caption text-text-secondary">
  Подпись к изображению
</span>

// Компонент с типографикой
<Typography variant="h4" className="text-primary">
  Заголовок с цветом
</Typography>
```

## Адаптивность

Типографика адаптивная и автоматически меняется в зависимости от ширины экрана:

### Мобильные устройства (≤480px)
- Базовые стили применяются автоматически
- Меньшие размеры для лучшей читаемости на маленьких экранах

### Десктоп (>480px)
- Увеличенные размеры для больших экранов
- Применяются автоматически через медиа-запросы

### Различия между breakpoints

| Стиль | Мобильная (≤480px) | Десктоп (>480px) |
|-------|-------------------|------------------|
| H1 | 76px / 80px | 96px / 104px |
| H2 | 48px / 56px | 60px / 72px |
| H3 | 38px / 48px | 48px / 64px |
| H4 | 28px / 40px | 34px / 48px |
| H5 | 20px / 24px | 24px / 32px |
| H6 | 16px / 24px | 20px / 32px |
| Subtitle 1 | 16px / 24px | 18px / 24px |
| Subtitle 2 | 14px / 24px | 16px / 24px |
| Body 1 | 16px / 24px | 18px / 24px |
| Body 2 | 14px / 16px | 16px / 24px |
| Input | 16px / 16px | 16px / 16px |
| Caption | 12px / 12px | 12px / 12px |
| OVERLINE | 13px / 16px | 13px / 16px |

*Формат: размер / line-height*

## Кастомизация

Все стили определены в `tailwind.config.js` в секции `fontSize`. Вы можете:

1. Изменить значения в конфигурации
2. Добавить новые варианты
3. Создать адаптивные версии для разных breakpoints

Пример добавления адаптивных стилей:

```js
fontSize: {
  'h1': ['48px', { /* mobile */ }],
  'lg:h1': ['96px', { /* desktop */ }],
}
```

