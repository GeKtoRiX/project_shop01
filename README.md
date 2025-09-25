# Vite MPA Starter

## Возможности

- Vite 7.1.7 в режиме `appType: "mpa"` с алиасом `@` на каталог `src`
- Автоматический поиск `index.html` и `pages/**/*.html` (файлы `_*.html` игнорируются)
- Архитектура стилей: `globals.scss` подключает base, components и pages-стили
- PostCSS (autoprefixer + cssnano) поверх Sass 1.93.2
- Готовый пример слайдера на Swiper 12 и миксином `default-swiper`
- Продакшн-оптимизации: gzip/brotli (`vite-plugin-compression2`) и imagemin
- Автоматическая загрузка web-font CSS через `vite-plugin-webfont-dl`

## Требования

- Node.js 18+ (рекомендуется управлять версиями через nvm, fnm или Volta)
- Любой менеджер пакетов из npm/pnpm/yarn/bun (пример ниже — для npm)

## Быстрый старт

1. Установите зависимости: `npm install`
2. Запустите дев-сервер: `npm run dev` (откроется `http://localhost:5173`)
3. Соберите продакшн: `npm run build`
4. Посмотрите сборку локально: `npm run preview`

## Структура проекта

```
.
|-- index.html               # главная точка входа
|-- pages/                   # дополнительные HTML-страницы (по желанию)
|-- public/                  # статичные файлы, копируются как есть
|-- src/
|   |-- assets/              # изображения, иконки, шрифты
|   |-- main.js              # общая логика и глобальные стили
|   |-- pages/
|   |   `-- home.js          # пример страницы с Swiper
|   `-- styles/
|       |-- base/            # reset, typography
|       |-- components/      # UI-компоненты
|       |-- mixins.scss      # общие миксины (есть default-swiper)
|       |-- variables.scss   # переменные проекта
|       `-- pages/           # стили конкретных страниц
|           `-- _home.scss
`-- vite.config.js           # конфигурация Vite и плагинов
```

## Мультистраничность

- Создавайте новые HTML-файлы в `pages/` (например, `pages/about/index.html`)
- Файлы, начинающиеся с `_`, игнорируются — удобно для шаблонов
- Внутри страниц подключайте общий `main.js` и модуль страницы, например:
  ```html
  <script type="module" src="/src/main.js"></script>
  <script type="module" src="/src/pages/about.js"></script>
  ```
- Путь страницы формируется автоматически: `pages/about/team.html` → `/pages/about/team.html`

## Стили и дизайн-система

- `globals.scss` подключает reset, типографику и набор компонентов
- Общие переменные и миксины лежат в `variables.scss` и `mixins.scss`
- Стили страниц размещайте в `styles/pages/_<page>.scss` и импортируйте их из соответствующего JS-модуля
- Миксин `default-swiper` задаёт базовый вид слайдера; подключите его в нужном блоке, как в `_home.scss`

## Скрипты страниц

- Логику конкретной страницы храните в `src/pages/<page>.js`
- Для импортов используйте алиас `@`, например `import { initMenu } from '@/modules/menu.js'`
- `src/pages/home.js` показывает, как подключить Swiper, его модули и стили

## Слайдер по умолчанию

- В разметке страницы добавьте контейнер с классом `.mySwiper` и базовой структурой Swiper:
  ```html
  <div class="mySwiper swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Первый слайд</div>
      <div class="swiper-slide">Второй слайд</div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  ```
- Стили смешиваются через миксин `default-swiper`, а JS-инициализация уже подключена в `home.js`
- Для дополнительных модулей импортируйте нужные CSS (`import 'swiper/css/scrollbar'`) и добавьте их в массив `modules`

## Работа с ассетами

- Локальные изображения и шрифты храните в `src/assets`; импорт через `new URL('./img.jpg', import.meta.url)`
- Папка `public/` попадает в корень сборки без обработки (favicon, robots.txt и т. п.)
- В сборке `vite-plugin-webfont-dl` скачивает внешние `<link rel="stylesheet">` в `dist/assets`

## Переменные окружения

- Переменные, которые должны попасть в браузер, начинайте с `VITE_`
- Создавайте `.env`, `.env.local` и другие файлы по стандарту Vite (dotenv)
- Для генерации sourcemap в продакшн используйте `SOURCE_MAP=true npm run build`

## Сборка и оптимизация

- `npm run build` использует esbuild-минификацию и Rollup с множеством точек входа
- В production автоматически включаются gzip/brotli и оптимизация изображений (mozjpeg, pngquant, gifsicle, svgo, webp)
- dev-сервер доступен по всем интерфейсам (`host: 0.0.0.0`) и автоматически открывает браузер

## CI/CD

- **npm**: `npm ci && npm run build`
- **pnpm**: `pnpm install --frozen-lockfile && pnpm build`
- **yarn (berry)**: `yarn install --immutable && yarn build`
- **bun**: `bun install --frozen-lockfile && bun run build`
- Пример блока GitHub Actions:
  ```yaml
  - uses: actions/setup-node@v4
    with:
      node-version: 20
      cache: npm
  - run: npm ci
  - run: npm run build
  ```

## npm-скрипты

- `npm run dev` — запуск среды разработки
- `npm run build` — production-сборка в `dist/`
- `npm run preview` — локальный предпросмотр собранного проекта
