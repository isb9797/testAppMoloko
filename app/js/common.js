"use strict";

//? Ввиду того, что данный проект имеет скудный функционал, было решено
//? использовать gulp и один файл JS. В будущем возможен переход на модульность Gulp+Webpack

//? header

const headerFunc = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".header-filter_btn");
    const header = document.querySelector(".header");
    const filter = document.querySelector(".filter");

    header.addEventListener("click", (elem) => {
      const target = elem.target;

      if (target.closest(".header-filter_btn")) {
        const filterMenu = document.querySelector(".filter");
        filterMenu.classList.add("visible");

        filterMenu.classList.remove("animate__fadeOutRight");
        filterMenu.classList.add("animate__bounceInRight");
      }
    });

    filter.addEventListener("click", (elem) => {
      const target = elem.target;

      if (target.closest(".filter-close_btn")) {
        const filterMenu = document.querySelector(".filter");
        filterMenu.classList.add("animate__fadeOutRight");
      }
    });
  });
};

headerFunc();

//? Плагин для "Ленивой загрузки изображений"

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    yall();
  }, 3800);
});

/