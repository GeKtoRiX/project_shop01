// Подключаем плагины PostCSS: автопрефиксер и минификатор.
import autoprefixer from "autoprefixer"
import cssnano from 'cssnano'

// Экспортируем конфигурацию PostCSS для Vite.
export default {
  // Список плагинов, которые последовательно обработают CSS.
  plugins: [
    // `autoprefixer` добавляет вендорные префиксы на основе настроек Browserslist.
    autoprefixer(),
    // `cssnano` минифицирует итоговый CSS (preset `default` сохраняет безопасные оптимизации).
    cssnano({
      preset: 'default',
    })
  ],
}
