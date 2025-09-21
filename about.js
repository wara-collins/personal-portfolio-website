document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      const tab = button.getAttribute('data-tab');
      document.getElementById(tab).classList.add('active');
    });
  });

  // Animate stats numbers on scroll
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  let animated = false;
  const statsSection = document.querySelector(".stats-section");
  const statItems = document.querySelectorAll(".stat-item h3");

  function checkAndAnimateStats() {
    if (!animated && isElementInViewport(statsSection)) {
      statItems.forEach((item) => {
        const endValue = parseInt(item.textContent.replace(/,/g, ""));
        animateValue(item, 0, endValue, 1500);
      });
      animated = true;
    }
  }

  window.addEventListener("scroll", checkAndAnimateStats);
  window.addEventListener("load", checkAndAnimateStats);
});
