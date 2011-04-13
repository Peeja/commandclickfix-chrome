jQuery.noConflict(true)(function($) {
  document.addEventListener("click", function(event) {
    if ($(event.target).parents().andSelf().is("a") && (event.metaKey || event.altKey)) {
      event.stopPropagation();
    }
  }, true);
});
