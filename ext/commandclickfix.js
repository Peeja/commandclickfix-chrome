jQuery.noConflict(true)(function($) {
  document.addEventListener("click", function(event) {
    if ((event.metaKey || event.altKey) && $(event.target).parents().andSelf().is("a")) {
      event.stopPropagation();
    }
  }, true);
});
