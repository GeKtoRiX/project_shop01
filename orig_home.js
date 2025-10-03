import { Swiper } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";

import "../styles/pages/_home.scss";

/*
 * ╨Ü╨╛╨│╨┤╨░ ╨▓╨╡╤ü╤î DOM ╨┐╨╛╨╗╨╜╨╛╤ü╤é╤î╤Ä ╨╖╨░╨│╤Ç╤â╨╢╨╡╨╜ (document ╨│╨╛╤é╨╛╨▓),
 * ╨▓╤ï╨┐╨╛╨╗╨╜╤Å╨╡╨╝ ╨╕╨╜╨╕╤å╨╕╨░╨╗╨╕╨╖╨░╤å╨╕╤Ä ╤ü╨╗╨░╨╣╨┤╨╡╤Ç╨░ ╨╕ ╨▓╨║╨╗╨░╨┤╨╛╨║.
 */
document.addEventListener("DOMContentLoaded", () => {

  /* ╨Ü╨╛╨╜╤ä╨╕╨│╤â╤Ç╨░╤å╨╕╤Å ╤ü╨╗╨░╨╣╨┤╨╡╤Ç╨╛╨▓ */
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
  /* ╨ÿ╨╜╨╕╤å╨╕╨░╨╗╨╕╨╖╨░╤å╨╕╤Å ╤ü╨╗╨░╨╣╨┤╨╡╤Ç╨╛╨▓ */
  sliders.forEach(({ el, options }) => {
    if (document.querySelector(el)) {
      new Swiper(el, options);
    }
  });

  /* ╨Ü╨╛╨╜╤ä╨╕╨│╤â╤Ç╨░╤å╨╕╨╕ ╤é╨░╨▒╨╛╨▓ */
  const tabs = [
    {
      el: "#search__tabs",
      options: {
        data: [
          {
            title: "╨ƒ╨╛╨╕╤ü╨║ ╨┐╨╛ ╨╜╨╛╨╝╨╡╤Ç╤â",

          },
          {
            title: "╨ƒ╨╛╨╕╤ü╨║ ╨┐╨╛ ╨╝╨░╤Ç╨║╨╡",

          },
          {
            title: "╨ƒ╨╛╨╕╤ü╨║ ╨┐╨╛ ╨╜╨░╨╖╨▓╨░╨╜╨╕╤Ä ╤é╨╛╨▓╨░╤Ç╨░",
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
          { title: "╨ù╨░╨┐╤ç╨░╤ü╤é╨╕" },
          { title: "╨£╨╛╤é╨╛╤Ç╤ï" },
          { title: "╨¿╨╕╨╜╤ï" },
          { title: "╨¡╨╗╨╡╨║╤é╤Ç╨╛╨╜╨╕╨║╨░" },
          { title: "╨ÿ╨╜╤ü╤é╤Ç╤â╨╝╨╡╨╜╤é╤ï" },
          { title: "╨É╨║╤ü╨╡╤ü╤ü╤â╨░╤Ç╤ï" },
        ],
      },
    },
  ];
  /* ╨ÿ╨╜╨╕╤å╨╕╨░╨╗╨╕╨╖╨░╤å╨╕╤Å ╤é╨░╨▒╨╛╨▓ */
  tabs.forEach(({ el, options }) => {
    const container = document.querySelector(el);
    if (container) {
      jSuites.tabs(container, options);
    }
  });
});
