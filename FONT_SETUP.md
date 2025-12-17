# Настройка шрифта

## Текущая конфигурация

Проект использует **Nunito Sans** из Google Fonts как альтернативу Futura PT.

### Почему Nunito Sans?

- ✅ Бесплатный и доступен в Google Fonts
- ✅ Похож на Futura PT по геометрическим формам
- ✅ Поддерживает кириллицу
- ✅ Имеет несколько весов (400, 600, 700)
- ✅ Хорошая читаемость

## Использование Futura PT (если есть лицензия)

Если у вас есть лицензия на Futura PT и файлы шрифта:

### 1. Поместите файлы шрифта в проект

Создайте папку `public/fonts/` и поместите туда файлы:
- `FuturaPT-Book.woff2` (weight 400)
- `FuturaPT-Medium.woff2` (weight 450)
- `FuturaPT-Demi.woff2` (weight 500)

### 2. Обновите `src/index.css`

Добавьте в начало файла:

```css
@font-face {
  font-family: 'Futura PT';
  src: url('/fonts/FuturaPT-Book.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Futura PT';
  src: url('/fonts/FuturaPT-Medium.woff2') format('woff2');
  font-weight: 450;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Futura PT';
  src: url('/fonts/FuturaPT-Demi.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
```

### 3. Обновите конфигурацию

В `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Futura PT', 'system-ui', 'sans-serif'],
}
```

В `src/index.css`:
```css
body {
  font-family: 'Futura PT', system-ui, sans-serif;
}
```

### 4. Удалите Google Fonts из `index.html`

Удалите строки с подключением Google Fonts.

## Альтернативные шрифты из Google Fonts

Если нужен другой похожий шрифт:

### Hind
```html
<link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
```js
fontFamily: {
  sans: ['Hind', 'system-ui', 'sans-serif'],
}
```

### Didact Gothic
```html
<link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet">
```
```js
fontFamily: {
  sans: ['Didact Gothic', 'system-ui', 'sans-serif'],
}
```

## Текущие веса шрифта

Проект использует веса:
- 400 (normal) - для Body, Input, Caption
- 450 (medium) - для Subtitle, H4, H5
- 500 (semibold) - для H1, H3, H6

**Примечание:** Nunito Sans не имеет веса 450, поэтому используется 600 для средних весов и 500 заменяется на 600.

