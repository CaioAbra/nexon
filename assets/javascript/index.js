$(document).ready(function () {
    $(".faq-question").on("click", function () {
      const parent = $(this).closest(".faq-item");
  
      // Fecha outros dropdowns abertos
      $(".faq-item").not(parent).removeClass("active").find(".faq-answer").css("max-height", "0");
  
      // Alterna o dropdown atual
      parent.toggleClass("active");
  
      // Ajusta a altura do dropdown atual
      const answer = parent.find(".faq-answer");
      if (parent.hasClass("active")) {
        const scrollHeight = answer[0].scrollHeight; // Altura total do conteúdo
        answer.css("max-height", "100%");
      } else {
        answer.css("max-height", "0");
      }
    });
  });
  