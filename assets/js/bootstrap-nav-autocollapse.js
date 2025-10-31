    document.addEventListener("DOMContentLoaded", function () {
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      const navCollapse = document.getElementById("navbarNav");

      navLinks.forEach((link) => {
        link.addEventListener("click", function () {
          // Close the navbar on mobile when a link is clicked
          if (navCollapse.classList.contains("show")) {
            const bsCollapse = new bootstrap.Collapse(navCollapse, {
              toggle: false,
            });
            bsCollapse.hide();
          }
        });
      });
    });

