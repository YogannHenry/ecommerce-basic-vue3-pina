var section = document.querySelector("main");
var images = document.querySelectorAll(".intersection");

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      section.style.backgroundColor = entry.target.getAttribute("data-color");
    }
  });
}, {
  threshold: 0.5
});

images.forEach(function(el, i) {
  observer.observe(el);
});
