
  const testimonials = document.querySelectorAll(".testimonial");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);

  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".navbar_menu");

  mobileMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

