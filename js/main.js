// ! loading

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 1500);
};

$(document).ready(function () {
  // ! Header__burger

  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
    $(".header__mobile").toggleClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".header__burger, .header__mobile").length) {
      $(".header__mobile").removeClass("active");
      $(".header__burger").removeClass("active");
    }
    e.stopPropagation();
  });

  // ! Header__language

  $(".header__language-current").on("click", function () {
    $(".header__language-dropdown").addClass("active");
  });

  $(".header__language-dropdown").on("click", function () {
    $(this).removeClass("active");
  });

  // ! Questions__body

  $(".questions__header").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });

  // ! Send__downoload

  $(".send__downoload-button").on("click", function () {
    $(".send__downoload-dropdown").addClass("active");
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".send__downoload-dropdown, .send__downoload-button")
        .length
    ) {
      $(".send__downoload-dropdown").removeClass("active");
    }
    e.stopPropagation();
  });
});
