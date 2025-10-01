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

  /* Конфигурация слайдеров */
  const sliders = [
    {
      el: ".js-banner-slider",
      options: {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        loop: true,
        speed: 600,
        autoplay: { delay: 5000, disableOnInteraction: false },
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
    {
      el: ".js-products-slider",
      options: {
        modules: [Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 600,
        autoplay: { delay: 3000, disableOnInteraction: false },
        navigation: {
          nextEl: ".js-products-slider .swiper-button-next",
          prevEl: ".js-products-slider .swiper-button-prev",
        },
        pagination: {
          el: ".js-products-slider .swiper-pagination",
          clickable: true,
        },
      },
    },
  ];
  /* Инициализация слайдеров */
  sliders.forEach(({ el, options }) => {
    if (document.querySelector(el)) {
      new Swiper(el, options);
    }
  });

  /* Конфигурации табов */
  const tabs = [
    {
      el: "#search__tabs",
      options: {
        data: [
          {
            title: "Поиск по номеру",

          },
          {
            title: "Поиск по марке",

          },
          {
            title: "Поиск по названию товара",
          },
        ],
        onload: (el, inst) => inst.open(1),
      },
    },
    {
      el: "#products__tabs",
      options: {
        animation: true,
        data: [
          { title: "Запчасти" },
          { title: "Моторы" },
          { title: "Шины" },
          { title: "Электроника" },
          { title: "Инструменты" },
          { title: "Аксессуары" },
        ],
      },
    },
  ];
  /* Инициализация табов */
  tabs.forEach(({ el, options }) => {
    const container = document.querySelector(el);
    if (container) {
      jSuites.tabs(container, options);
    }
  });
});
