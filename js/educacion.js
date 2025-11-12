$(function () {
    "use strict";
    $(".pCard_add").click(function () {
      // Busca el elemento padre más cercano con la clase .pCard_card y alterna la clase pCard_on
      $(this).closest(".pCard_card").toggleClass("pCard_on");
  
      // Dentro de la tarjeta específica, cambia el texto del botón
      if ($(this).closest(".pCard_card").hasClass("pCard_on")) {
        $(this).find("span").text("Ver menos");
      } else {
        $(this).find("span").text("Ver más");
      }
    });
  });