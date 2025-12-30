# Использование через CDN

После публикации пакета в npm, он автоматически становится доступен через CDN. Никакой дополнительной настройки не требуется!

## Доступные CDN

### 1. Unpkg (рекомендуется)
- URL: `https://unpkg.com/inssmart-form@VERSION/...`
- Автоматически обновляется при публикации в npm
- Поддержка версионирования

### 2. jsDelivr
- URL: `https://cdn.jsdelivr.net/npm/inssmart-form@VERSION/...`
- Альтернативный CDN с хорошей производительностью
- Также автоматически синхронизируется с npm

## Примеры использования

### iframe версия

#### Unpkg
```html
<iframe 
  src="https://unpkg.com/inssmart-form@latest/dist/iframe/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: none;"
></iframe>
```

#### jsDelivr
```html
<iframe 
  src="https://cdn.jsdelivr.net/npm/inssmart-form@latest/dist/iframe/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: none;"
></iframe>
```

### WordPress версия

#### Unpkg
```html
<link rel="stylesheet" href="https://unpkg.com/inssmart-form@latest/dist/inssmart-form.css">
<div id="inssmart-form-container"></div>
<script src="https://unpkg.com/inssmart-form@latest/dist/inssmart-form.js"></script>
<script>
  if (typeof window.initInssmartForm === 'function') {
    window.initInssmartForm('inssmart-form-container');
  }
</script>
```

#### jsDelivr
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/inssmart-form@latest/dist/inssmart-form.css">
<div id="inssmart-form-container"></div>
<script src="https://cdn.jsdelivr.net/npm/inssmart-form@latest/dist/inssmart-form.js"></script>
<script>
  if (typeof window.initInssmartForm === 'function') {
    window.initInssmartForm('inssmart-form-container');
  }
</script>
```

## Версионирование

### Использование последней версии
```html
<!-- @latest всегда указывает на последнюю опубликованную версию -->
<script src="https://unpkg.com/inssmart-form@latest/dist/inssmart-form.js"></script>
```

### Использование конкретной версии (рекомендуется для продакшена)
```html
<!-- Фиксированная версия для стабильности -->
<script src="https://unpkg.com/inssmart-form@1.1.0/dist/inssmart-form.js"></script>
```

### Использование диапазона версий
```html
<!-- Минорные обновления (1.1.x) -->
<script src="https://unpkg.com/inssmart-form@~1.1.0/dist/inssmart-form.js"></script>

<!-- Патч обновления (1.1.0 - 1.1.x) -->
<script src="https://unpkg.com/inssmart-form@^1.1.0/dist/inssmart-form.js"></script>
```

## Проверка доступности

После публикации пакета в npm, проверьте доступность через CDN:

1. **Unpkg**: Откройте в браузере `https://unpkg.com/inssmart-form@latest/package.json`
2. **jsDelivr**: Откройте в браузере `https://cdn.jsdelivr.net/npm/inssmart-form@latest/package.json`

Если видите содержимое `package.json`, значит пакет доступен через CDN!

## Преимущества использования CDN

1. **Быстрая загрузка** - файлы кешируются на CDN серверах по всему миру
2. **Не нужно хранить файлы** - не требуется загружать файлы на свой сервер
3. **Автоматические обновления** - можно использовать `@latest` для получения последней версии
4. **Кеширование браузера** - браузеры кешируют файлы с CDN
5. **HTTPS по умолчанию** - все CDN используют HTTPS

## Рекомендации

- **Для разработки**: используйте `@latest` для получения последних обновлений
- **Для продакшена**: используйте конкретную версию (например, `@1.1.0`) для стабильности
- **Для тестирования**: можно использовать `@beta` или `@next` если такие теги существуют

## Troubleshooting

### Пакет не доступен через CDN

1. Убедитесь, что пакет опубликован в npm: `npm view inssmart-form`
2. Подождите несколько минут - CDN может обновляться с задержкой
3. Попробуйте очистить кеш браузера
4. Проверьте правильность имени пакета и версии

### Ошибки CORS

Если возникают ошибки CORS при использовании iframe версии через CDN, убедитесь, что:
- Используете HTTPS (CDN всегда использует HTTPS)
- Сервер `https://kubiki.ai` настроен для приема запросов с CDN доменов


