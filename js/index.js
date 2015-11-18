;(function(){
  if (typeof window.accordion == "undefined") {
    window.accordion = {};
  }

  accordion.toggleAccordion = function (event) {
    var accordionOpened, accordion = $(event.currentTarget);
    if (accordion.hasClass("open")) {
      accordion.removeClass("open")
    } else {
      accordionOpened = $(".accordion-header.open");
      accordionOpened && accordionOpened.removeClass("open");
      accordion.addClass("open");
    }
  };

  $(".accordion").delegate(".accordion-header", "click", accordion.toggleAccordion);
})();
