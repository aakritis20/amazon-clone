document.addEventListener("DOMContentLoaded", function () {
    // Search functionality
    const searchButton = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert("Please enter a search query.");
        }
    });

    // Cart click event
    const cart = document.querySelector(".nav-cart");
    cart.addEventListener("click", function () {
        alert("Your cart is currently empty!");
    });

    // Back to top functionality
    const backToTop = document.querySelector(".foot-panel1");
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Box hover effect
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", function () {
            box.style.transform = "scale(1.05)";
            box.style.transition = "0.3s";
        });

        box.addEventListener("mouseout", function () {
            box.style.transform = "scale(1)";
        });
    });
});
