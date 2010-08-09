jQuery.noConflict(true)(function($) {
  document.addEventListener("click", function(event) {
    console.log("Captured event:", event);
    if ($(event.target).parents().andSelf().is("a") && event.metaKey) {
      event.stopPropagation();
    }
  }, true);
});
