document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add the "visible" class to trigger the animation
          observer.unobserve(entry.target); // Optional: Stop observing after the animation
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  const target = document.querySelectorAll(".infocard");
  target.forEach((element) => observer.observe(element));
});
