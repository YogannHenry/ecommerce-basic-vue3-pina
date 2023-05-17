export default {
  observeImages() {
    const section = document.querySelector("main");
    const images = document.querySelectorAll(".intersection");

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          section.style.backgroundColor = entry.target.getAttribute("data-color");
        }
      });
    }, {
      threshold: 0.7
    });

    images.forEach(function(el, i) {
      observer.observe(el);
    });
  }
};
