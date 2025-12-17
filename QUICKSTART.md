# Быстрый старт

## 1. Установка зависимостей

```bash
npm install
```

## 2. Запуск в режиме разработки

```bash
npm run dev
```

Откройте http://localhost:5173 в браузере.

## 3. Перенос дизайна из Figma

Следуйте инструкциям в файле `FIGMA_INTEGRATION.md` для переноса цветов, шрифтов и компонентов из вашего дизайна.

## 4. Сборка

### Для WordPress

```bash
npm run build:wordpress
```

После сборки файлы будут в папке `dist/`:
- `inssmart-form.js` - JavaScript файл
- `inssmart-form.css` - CSS файл

### Обычная сборка React

```bash
npm run build
```

Создаст стандартную сборку React приложения.

## 5. Интеграция в WordPress

### Вариант A: Использование плагина

1. Скопируйте `wordpress-integration.php` в `wp-content/plugins/inssmart-form/`
2. Скопируйте папку `dist/` в ту же директорию
3. Активируйте плагин в WordPress
4. Используйте шорткод: `[inssmart_form]`

### Вариант B: Через functions.php

1. Загрузите файлы из `dist/` на сервер
2. Добавьте код из `README.md` в `functions.php`
3. Используйте шорткод: `[inssmart_form]`

## Структура проекта

```
inssmart/
├── src/
│   ├── components/
│   │   ├── ui/           # Компоненты shadcn/ui
│   │   └── FormStepper.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── dist/                 # Собранные файлы (после npm run build)
├── wordpress-integration.php
└── package.json
```

## Кастомизация формы

Откройте `src/components/FormStepper.tsx` для изменения:
- Количества шагов
- Поля формы
- Валидации
- Логики отправки

## Полезные команды

- `npm run dev` - запуск dev сервера
- `npm run build` - сборка для production
- `npm run preview` - предпросмотр собранной версии
- `npm run lint` - проверка кода

