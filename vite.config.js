// Подключаем функции dirname и resolve для расчета путей.
import { dirname, resolve } from 'path'
// Импортируем утилиту для преобразования URL модуля в путь.
import { fileURLToPath } from 'url'

// Импортируем синхронный поиск файлов с поддержкой шаблонов.
import { globSync } from 'glob'
// Получаем утилиту defineConfig для типизированной конфигурации Vite.
import { defineConfig } from 'vite'
// Подключаем плагин сжатия ресурсов gzip и brotli.
import compression from 'vite-plugin-compression2'
// Импортируем плагин автоматической загрузки веб-шрифтов.
import webfontDownload from 'vite-plugin-webfont-dl'
// Плагин оптимизации изображений в процессе сборки.
import imagemin from 'unplugin-imagemin/vite'

// Определяем корневую директорию проекта относительно файла конфигурации.
const root = dirname(fileURLToPath(import.meta.url))
// Проверяем, что сборка выполняется в режиме production.
const isProd = process.env.NODE_ENV === 'production'

// Формируем объект входных HTML-файлов для MPA.
function getHtmlEntries() {
  // Находим все HTML-файлы главной страницы и поддиректорий pages.
  const files = globSync(['index.html', 'pages/**/*.html'], {
    // Определяем директорию поиска равной корню проекта.
    cwd: root,
    // Исключаем файлы с префиксом _
    ignore: ['pages/**/_*.html'],
    // Убеждаемся, что возвращаются только файлы, а не папки.
    nodir: true,
  })

  // Если index.html отсутствует в результате поиска, добавляем его.
  if (!files.includes('index.html')) {
    // Помещаем главную страницу в начало массива для приоритета.
    files.unshift('index.html')
  }

  // Преобразуем список файлов в объект точек входа.
  return files.reduce((entries, file) => {
    // Объявляем имя точки входа, зависящее от пути.
    const name =
      // Проверяем, является ли текущий файл главным.
      file === 'index.html'
        // Используем имя main для главной страницы.
        ? 'main'
        // В остальных случаях опираемся на путь файла.
        : file
          // Удаляем префикс каталога pages.
          .replace(/^pages[\\/]/, '')
          // Убираем расширение .html.
          .replace(/\.html$/, '')
          // Заменяем разделители путей на дефисы.
          .replace(/[\\/]/g, '-')

    // Формируем абсолютный путь и сохраняем в объекте по вычисленному ключу.
    entries[name] = resolve(root, file)
    // Возвращаем аккумулятор для следующей итерации reduce.
    return entries
  }, {})
}

// Базовый массив плагинов с загрузчиком веб-шрифтов.
const plugins = [webfontDownload()]

// В режиме production добавляем плагины оптимизации.
if (isProd) {
  // Расширяем набор плагинов дополнительными опциями.
  plugins.push(
    // Настраиваем плагин сжатия статических ресурсов.
    compression({
      // Определяем шаблоны файлов для компрессии.
      include: [/\.(js|mjs|cjs|css|html|svg|json|wasm|map)$/i],
      // Активируем алгоритмы gzip и brotli.
      algorithm: ['gzip', 'brotliCompress'],
      // Сжимаем файлы размером более 1 КБ.
      threshold: 1024,
      // Сохраняем исходные файлы рядом с сжатыми вариантами.
      deleteOriginalAssets: false,
      // Включаем подробный вывод процесса сжатия.
      verbose: true,
    }),
    // Добавляем оптимизацию изображений через imagemin.
    imagemin({
      // Перечисляем подключаемые плагины imagemin для различных форматов.
      plugins: [
        // Настраиваем компрессию JPEG с качеством 75.
        ['imagemin-mozjpeg', { quality: 75 }],
        // Оптимизируем PNG в заданном диапазоне качества.
        ['imagemin-pngquant', { quality: [0.6, 0.8] }],
        // Устанавливаем уровень оптимизации для GIF.
        ['imagemin-gifsicle', { optimizationLevel: 2 }],
        // Сохраняем viewBox при оптимизации SVG.
        ['imagemin-svgo', { plugins: [{ name: 'removeViewBox', active: false }] }],
        // Генерируем WebP с качеством 75.
        ['imagemin-webp', { quality: 75 }],
      ],
      // Обеспечиваем выполнение плагина только на этапе сборки.
      enforce: 'build',
    }),
  )
}

// Экспортируем конфигурацию Vite через defineConfig.
export default defineConfig({
  // Указываем базовый путь для всех ресурсов.
  base: '/',
  // Включаем режим мультистраничного приложения.
  appType: 'mpa',

  // Настройка резолюции модулей.
  resolve: {
    // Определяем набор псевдонимов для путей.
    alias: {
      // Создаем короткий путь для каталога src.
      '@': resolve(root, 'src'),
    },
  },

  // Передаем список активных плагинов.
  plugins,

  // Конфигурация dev-сервера.
  server: {
    // Открываем доступ к серверу со всех сетевых интерфейсов.
    host: '0.0.0.0',
    // Указываем порт разработки.
    port: 5173,
    // Автоматически открываем браузер при запуске сервера.
    open: true,
  },

  // Опции сервера предпросмотра.
  preview: {
    // Устанавливаем порт для preview-сервера.
    port: 4173,
  },

  // Настройки процесса сборки.
  build: {
    // Включаем минификацию через esbuild.
    minify: 'esbuild',
    // Определяем директорию вывода собранного проекта.
    outDir: 'dist',
    // Обозначаем папку для статических ресурсов.
    assetsDir: 'assets',
    // Включаем sourcemap по переменной окружения.
    sourcemap: process.env.SOURCE_MAP === 'true',
    // Отключает inline, всегда создаёт отдельные файлы
    assetsInlineLimit: 0,
    // Дополнительная конфигурация Rollup.
    rollupOptions: {
      // Подключаем динамически сформированный объект точек входа.
      input: getHtmlEntries(),
    },
  },
})


