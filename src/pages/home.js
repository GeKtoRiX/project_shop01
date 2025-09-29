import { Swiper } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";

import "../styles/pages/_home.scss";

/*
 * Когда весь DOM полностью загружен (document готов),
 * выполняем инициализацию слайдера и вкладок.
 */
document.addEventListener("DOMContentLoaded", () => {
  /*
   * Создаём новый экземпляр Swiper.
   * Первый параметр — CSS-селектор контейнера слайдера (.banner-section__slider).
   * Второй параметр — объект настроек.
   */
  new Swiper(".banner-section__slider", {
    /*
     * Подключаем нужные модули.
     * Без них слайдер не будет знать про стрелки, точки и автопрокрутку.
     */
    modules: [
      /*
       * Navigation — добавляет стрелки «вперёд/назад».
       * Сопрягается с объектом настроек `navigation` ниже.
       */
      Navigation,

      /*
       * Pagination — рисует буллеты (точки) для навигации.
       * Работает в связке с объектом `pagination` ниже.
       */
      Pagination,

      /*
       * Autoplay — включает автоматическое пролистывание слайдов.
       * Конкретные параметры управляются в объекте `autoplay` ниже.
       */
      Autoplay,
    ],

    /*
     * Количество видимых слайдов одновременно.
     * Здесь всегда показывается один слайд.
     */
    slidesPerView: 1,

    /*
     * Включаем бесконечный цикл.
     * После последнего слайда снова идёт первый.
     */
    loop: true,

    /*
     * Скорость анимации переключения (в миллисекундах).
     * Здесь — 600 мс.
     */
    speed: 600,

    /*
     * Настройки автопрокрутки.
     * - delay: задержка между переключениями (3000 мс = 3 секунды).
     * - disableOnInteraction: false → автопрокрутка не останавливается при ручном управлении.
     */
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    /*
     * Настройки стрелок навигации.
     * Указываем селекторы кнопок "вперёд" и "назад".
     */
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    /*
     * Настройки пагинации (точки).
     * - el: контейнер для точек.
     * - clickable: true → точки можно кликать.
     */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  /* Переключение вкладок в секции search */
  const searchTabs = jSuites.tabs(document.getElementById('search__inner'), {
    /*  Содержимое табов */
    data: [
      {
        title: 'Поиск по номеру',
        content: `
          <form action="#" class="search__content-form">
            <input
              type="text"
              class="search__content-input"
              placeholder="Введите номер"
            />
            <button class="search__content-btn" type="submit">
              Искать
            </button>
          </form>
        `
      },
      {
        title: 'Поиск по марке',
        content: `
          <form action="#" class="search__content-form">
            <input
              type="text"
              class="search__content-input"
              placeholder="Введите марку"
            />
            <button class="search__content-btn" type="submit">
              Искать
            </button>
          </form>
        `
      },
      {
        title: 'Поиск по названию товара',
        content: `
          <form action="#" class="search__content-form">
            <input
              type="text"
              class="search__content-input"
              placeholder="Введите название"
            />
            <button class="search__content-btn" type="submit">
              Искать
            </button>
          </form>
        `
      },
    ],
    /* Активный таб по умолчанию */
    onload: (el, inst) => inst.open(1),
  });

});
