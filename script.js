document.addEventListener("DOMContentLoaded", () => {
  const ramenContainer = document.getElementById("ramen-container");
  const detailName = document.getElementById("detail-name");
  const detailImage = document.getElementById("detail-image");
  const detailRating = document.getElementById("detail-rating");
  const detailComment = document.getElementById("detail-comment");
  const newRatingInput = document.getElementById("new-rating");
  const newCommentInput = document.getElementById("new-comment");
  const updateBtn = document.getElementById("update-btn");
  const deleteBtn = document.getElementById("delete-btn");
  const errorMessage = document.getElementById("error-message");
});
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
    rating: 8,
    comment: "Rich and creamy broth!",
  },
  {
    id: 4,
    name: "Spicy Ramen",
    restaurant: "Ichiban",
    image: "RamenDish 4.jpg",
    rating: 7,
    comment: "Super spicy and tasty!",
  },
  {
    id: 5,
    name: "Shio Ramen",
    restaurant: "Ramen House",
    image: "RamenDish 5.jpg",
    rating: 6,
    comment: "Light and refreshing!",
  },
  {
    id: 6,
    name: "Pilau Ramen",
    restaurant: "Veggie Delight",
    image: "AddDish 1.jpg",
    rating: 9,
    comment: "Best vegetarian option!",
  },
  {
    id: 7,
    name: "Pork Ramen",
    restaurant: "Tonkotsu King",
    image: "AddDish 3.jpg",
    rating: 10,
    comment: "Amazing flavor!",
  },
  {
    id: 8,
    name: "Chicken Tikka Ramen",
    restaurant: "Tikka King",
    image: "AddDish 2.jpg",
    rating: 5,
    comment: "Nice seafood taste!",
  },
];
function loadRamens() {
ramenContainer.innerHTML = "";
ramens.forEach((ramen) => {
  const ramenItem = document.createElement("div");
  ramenItem.classList.add("ramen-item");
  ramenItem.innerHTML = `<img src="${ramen.image}" alt="${ramen.name}"><p>${ramen.name}</p>`;
  ramenItem.addEventListener("click", () => selectRamen(ramen));
  ramenContainer.appendChild(ramenItem);
});
