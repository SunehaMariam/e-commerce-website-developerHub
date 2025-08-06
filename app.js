function handleSearch() {
  const category = document.getElementById("categoryDropdown").value;
  const searchTerm = document.getElementById("searchInput").value;
  alert(`Searching for "${searchTerm}" in category "${category}"`);
  
}

function openProfile() {
  alert("Open Profile Page");
  // Redirect or open modal
}

function openMessages() {
  alert("Open Messages Page");
}
function cartPage() {
  window.location.href = "./products.html.html";
}

function cart() {
  window.location.href = "./cart.html";
}

function openOrders() {
  alert("Open Orders Page");
  window.location.href = "./products.html";
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const minVal = document.getElementById('minVal');
    const maxVal = document.getElementById('maxVal');

    priceMin.addEventListener('input', () => {
      minVal.textContent = priceMin.value;
    });

    priceMax.addEventListener('input', () => {
      maxVal.textContent = priceMax.value;
    });

    function toggleWishlist(el) {
      el.classList.toggle('active');
    }
function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const productCards = document.querySelectorAll(".product");

  productCards.forEach(card => {
    const name = card.querySelector(".product-name").textContent.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

// const checkboxes = document.querySelectorAll('.rating-checkbox');

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', () => {
//     const selectedRatings = Array.from(checkboxes)
//       .filter(cb => cb.checked)
//       .map(cb => parseInt(cb.value));

//     console.log("Filter products with ratings:", selectedRatings);

//     // Example: you can filter your product list based on rating
//     // filterProductsByRating(selectedRatings);
//   });
// });
document.querySelectorAll('.brand-filter').forEach(checkbox => {
  checkbox.addEventListener('change', filterProductsByBrand);
});

function filterProductsByBrand() {
  const selectedBrands = Array.from(document.querySelectorAll('.brand-filter:checked'))
    .map(cb => cb.value.toLowerCase());

  document.querySelectorAll('.product').forEach(product => {
    const brand = product.getAttribute('data-brand').toLowerCase();
    if (selectedBrands.length === 0 || selectedBrands.includes(brand)) {
      product.style.display = 'flex'; // show
    } else {
      product.style.display = 'none'; // hide
    }
  });
}

const itemsPerPage = document.getElementById('itemsPerPage');
const pageButtons = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPage = 1;

function updatePagination() {
  pageButtons.forEach(btn => btn.classList.remove('active'));
  document.getElementById(`page${currentPage}`).classList.add('active');
  console.log(`Showing ${itemsPerPage.value} items from page ${currentPage}`);
}

itemsPerPage.addEventListener('change', updatePagination);

pageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentPage = parseInt(btn.textContent);
    updatePagination();
  });
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pageButtons.length) {
    currentPage++;
    updatePagination();
  }
});

updatePagination(); // initialize



// grid view
function switchToGrid() {
  const container = document.getElementById("productContainer");
  container.classList.add("grid-view");
}
  function switchToListView() {
    const container = document.getElementById('productContainer');
    container.classList.remove('grid-view');
  }



  // rating
  const ratingCheckboxes = document.querySelectorAll('.rating-checkbox');
  const products = document.querySelectorAll('.product');

  ratingCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterByRating);
  });

  function filterByRating() {
    // Get selected ratings
    const selectedRatings = Array.from(ratingCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    products.forEach(product => {
      const productRating = product.getAttribute('data-rating');

      if (selectedRatings.length === 0 || selectedRatings.includes(productRating)) {
        product.style.display = 'flex';
      } else {
        product.style.display = 'none';
      }

      // If in grid view, ensure display block for hidden items
      if (product.closest('.products').classList.contains('grid-view')) {
        product.style.display = selectedRatings.includes(productRating) ? 'block' : 'none';
      }
    });
  }

//    shop now




document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // Hide all content
      contents.forEach(c => c.classList.add("hidden"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Show associated content
      const targetId = tab.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove("hidden");
      }
    });
  });
});



