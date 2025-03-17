// Ramen data with 8  Ramen dishes
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "RamenDish 1.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "RamenDish 2.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "RamenDish 3.jpg",
    rating: 7,
    comment: "Very tasty!",
  },
  {
    id: 4,
    name: "Tsukemen",
    restaurant: "Ramen Nagi",
    image: "RamenDish 4.jpg",
    rating: 5,
    comment: "Amazing dipping noodles!",
  },
  {
    id: 5,
    name: "Karaage Ramen",
    restaurant: "Ramen Ken",
    image: "RamenDish 5.jpg",
    rating: 4,
    comment: "Spicy and satisfying",
  },
  {
    id: 6,
    name: "Pilau Ramen",
    restaurant: "Ramen Tanaka",
    image: "AddDish 1.jpg",
    rating: 3,
    comment: "Simple but tasty",
  },
  {
    id: 7,
    name: "Chicken Tikka Ramen",
    restaurant: "Ramen Ichibei",
    image: "AddDish 2.jpg",
    rating: 4,
    comment: "Rich and flavorful curry broth",
  },
  {
    id: 8,
    name: "Pork Ramen",
    restaurant: "Ramen Kuro",
    image: "AddDish 3.jpg",
    rating: 5,
    comment: "Oil-based noodles with unique texture",
  },
];

// DOM Elements for accessing the elements on the hmtl file
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const newRamenForm = document.getElementById("new-ramen-form");

// this function displays all ramen dishes
function displayRamens() {
  ramenMenu.innerHTML = "";

  ramens.forEach((ramen) => {
    const ramenCard = document.createElement("div");
    ramenCard.className = "ramen-card";
    ramenCard.dataset.id = ramen.id;

    ramenCard.innerHTML = `
            <img src="${ramen.image}" alt="${ramen.name}">
        `;

    ramenCard.addEventListener("click", () => {
      showRamenDetails(ramen);
    });

    ramenMenu.appendChild(ramenCard);
  });

  //    this if function will show first ramen details by default
  if (ramens.length > 0) {
    showRamenDetails(ramens[0]);
  }
}

// Show ramen details
function showRamenDetails(ramen) {
  ramenDetail.innerHTML = "";

  const detailContent = document.createElement("div");
  detailContent.className = "ramen-detail-content";

  detailContent.innerHTML = `
        <img src="${ramen.image}" alt="${
    ramen.name
  }" class="ramen-detail-image">
        <div class="ramen-detail-info">
            <h3>${ramen.name}</h3>
            <p><strong>Restaurant:</strong> ${ramen.restaurant}</p>
            ${ramen.rating ? `<p class="rating">★ ${ramen.rating}/5</p>` : ""}
            ${
              ramen.comment
                ? `<p><strong>Comment:</strong> ${ramen.comment}</p>`
                : ""
            }
        </div>
    `;

  ramenDetail.appendChild(detailContent);
}

// Handle form submission for new ramen
function addSubmitListener() {
  newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restaurant").value;
    const image = document.getElementById("image").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    // Create new ramen object
    const newRamen = {
      id: Date.now(),
      name,
      restaurant,
      image,
      rating: parseInt(rating),
      comment,
    };

    // Add to ramens array
    ramens.push(newRamen);

    // this function will update UI
    displayRamens();

    // eset form
    newRamenForm.reset();
  });
}

// Initialize the app
function main() {
  displayRamens();
  addSubmitListener();
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", main);
