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

  const sliders = [
    {
      el: ".js-banner-slider",
      options: {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 600,
        autoplay: { delay: 3000, disableOnInteraction: false },
        navigation: {
          nextEl: ".js-banner-slider .swiper-button-next",
          prevEl: ".js-banner-slider .swiper-button-prev",
        },
        pagination: {
          el: ".js-banner-slider .swiper-pagination",
          clickable: true,
        },
      },
    },
  ];

  sliders.forEach(({ el, options }) => {
    if (document.querySelector(el)) {
      new Swiper(el, options);
    }
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

  const productsTabs = jSuites.tabs(document.getElementById('products__tabs'), {
    animation: true,

    /*  Содержимое табов */
    data: [
      {
        title: 'Запчасти',
        content:
          `
            <div class="products-section__slider swiper js-products-slider">
              <!-- Обертка слайдов -->
              <div class="swiper-wrapper">
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
              </div>
              <!-- Элемент пагинации -->
              <div class="swiper-pagination"></div>
              <!-- Кнопка переключения назад -->
              <div class="swiper-button-prev"></div>
              <!-- Кнопка переключения вперед -->
              <div class="swiper-button-next"></div>
              <!-- Полоса прокрутки слайдера -->
              <div class="swiper-scrollbar"></div>
            </div>
        `
      },
      {
        title: 'Моторы',
        content:
          `
                  <!-- Контейнер Сладйера - Swiper -->
            <div class="products-section__slider swiper js-products-slider">
              <!-- Обертка слайдов -->
              <div class="swiper-wrapper">
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
              </div>
              <!-- Элемент пагинации -->
              <div class="swiper-pagination"></div>
              <!-- Кнопка переключения назад -->
              <div class="swiper-button-prev"></div>
              <!-- Кнопка переключения вперед -->
              <div class="swiper-button-next"></div>
              <!-- Полоса прокрутки слайдера -->
              <div class="swiper-scrollbar"></div>
            </div>
        `
      },
      {
        title: 'Шины',
        content:
          `
            <div class="products-section__slider swiper js-products-slider">
              <!-- Обертка слайдов -->
              <div class="swiper-wrapper">
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
              </div>
              <!-- Элемент пагинации -->
              <div class="swiper-pagination"></div>
              <!-- Кнопка переключения назад -->
              <div class="swiper-button-prev"></div>
              <!-- Кнопка переключения вперед -->
              <div class="swiper-button-next"></div>
              <!-- Полоса прокрутки слайдера -->
              <div class="swiper-scrollbar"></div>
            </div>
        `
      },
      {
        title: 'Электроника',
        content:
          `
            <div class="products-section__slider swiper js-products-slider">
              <!-- Обертка слайдов -->
              <div class="swiper-wrapper">
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
              </div>
              <!-- Элемент пагинации -->
              <div class="swiper-pagination"></div>
              <!-- Кнопка переключения назад -->
              <div class="swiper-button-prev"></div>
              <!-- Кнопка переключения вперед -->
              <div class="swiper-button-next"></div>
              <!-- Полоса прокрутки слайдера -->
              <div class="swiper-scrollbar"></div>
            </div>
        `
      },
      {
        title: 'Инструменты',
        content:
          `
            <div class="products-section__slider swiper js-products-slider">
              <!-- Обертка слайдов -->
              <div class="swiper-wrapper">
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
              </div>
              <!-- Элемент пагинации -->
              <div class="swiper-pagination"></div>
              <!-- Кнопка переключения назад -->
              <div class="swiper-button-prev"></div>
              <!-- Кнопка переключения вперед -->
              <div class="swiper-button-next"></div>
              <!-- Полоса прокрутки слайдера -->
              <div class="swiper-scrollbar"></div>
            </div>
        `
      },
      {
        title: 'Аксессуары',
        content:
          `
            <div class="products-section__slider swiper js-products-slider">
              <!-- Обертка слайдов -->
              <div class="swiper-wrapper">
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
                <a class="swiper-slide" href="#">
                  <div class="banner-section__item sale-item" href="#">
                    <div class="sale-item__top">
                      <div class="sale-item__info">Акция</div>
                      <div class="sale-item__price">
                        <div class="price sale-item__price-new">190 000</div>
                        <div class="price sale-item__price-old">225 000</div>
                      </div>
                    </div>
                    <img
                      class="sale-item__img"
                      src="./src/assets/images/content/sale-banner.png"
                      width="127"
                      height="178"
                      alt="sale-item"
                    />
                    <h5 class="sale-item__title">
                      Лодочный мотор Suzuki DF9.9BRS
                    </h5>
                    <div class="sale-item__footer">
                      <div class="sale-item__text-info">Акция действует до</div>
                      <span class="sale-item__date">31.08.2026</span>
                    </div>
                  </div>
                </a>
              </div>
              <!-- Элемент пагинации -->
              <div class="swiper-pagination"></div>
              <!-- Кнопка переключения назад -->
              <div class="swiper-button-prev"></div>
              <!-- Кнопка переключения вперед -->
              <div class="swiper-button-next"></div>
              <!-- Полоса прокрутки слайдера -->
              <div class="swiper-scrollbar"></div>
            </div>
        `
      },
    ],
    /* Активный таб по умолчанию */
    onload: (el, inst) => {
      inst.open(0);
      new Swiper(".products-section__slider ", {
        modules: [Navigation, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 600,
        autoplay: { delay: 5000, disableOnInteraction: false },
        navigation: {
          nextEl: ".js-products-slider .swiper-button-next",
          prevEl: ".js-products-slider .swiper-button-prev",
        },
        pagination: {
          el: ".js-products-slider .swiper-pagination",
          clickable: true,
        },
      });
    }

  });

});
