// Clothes array
const clothes = [
  {
    clotheId: 1,
    clotheImg: "./img/products/shirt01.jpg",
    clotheName: "Shirt 01",
    clothePrice: "$ 34.99",
    clotheCategory: "shirt",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 2,
    clotheImg: "./img/products/pant01.jpg",
    clotheName: "Pant 01",
    clothePrice: "$ 31.99",
    clotheCategory: "pant",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 3,
    clotheImg: "./img/products/shirt02.jpg",
    clotheName: "Shirt 02",
    clothePrice: "$ 59.99",
    clotheCategory: "shirt",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 4,
    clotheImg: "./img/products/shoe01.jpg",
    clotheName: "Shoe 01",
    clothePrice: "$ 99.99",
    clotheCategory: "shoe",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 5,
    clotheImg: "./img/products/shoe02.jpg",
    clotheName: "Shoe 02",
    clothePrice: "$ 29.99",
    clotheCategory: "shoe",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 6,
    clotheImg: "./img/products/shirt03.jpg",
    clotheName: "Shirt 03",
    clothePrice: "$ 32.99",
    clotheCategory: "shirt",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 7,
    clotheImg: "./img/products/pant02.jpg",
    clotheName: "Pant 02",
    clothePrice: "$ 37.99",
    clotheCategory: "pant",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 8,
    clotheImg: "./img/products/shoe03.jpg",
    clotheName: "Shoe 03",
    clothePrice: "$ 45.99",
    clotheCategory: "shoe",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 9,
    clotheImg: "./img/products/pant03.jpg",
    clotheName: "Pant 03",
    clothePrice: "$ 39.99",
    clotheCategory: "pant",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 10,
    clotheImg: "./img/products/pant04.jpg",
    clotheName: "Pant 04",
    clothePrice: "$ 45.99",
    clotheCategory: "pant",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 11,
    clotheImg: "./img/products/shirt04.jpg",
    clotheName: "Shirt 04",
    clothePrice: "$ 35.99",
    clotheCategory: "shirt",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 12,
    clotheImg: "./img/products/shoe04.jpg",
    clotheName: "Shoe 04",
    clothePrice: "$ 44.99",
    clotheCategory: "shoe",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 13,
    clotheImg: "./img/products/shoe05.jpg",
    clotheName: "Shoe 05",
    clothePrice: "$ 38.99",
    clotheCategory: "shoe",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 14,
    clotheImg: "./img/products/pant05.jpg",
    clotheName: "Pant 05",
    clothePrice: "$ 42.99",
    clotheCategory: "pant",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 15,
    clotheImg: "./img/products/shirt05.jpg",
    clotheName: "Shirt 05",
    clothePrice: "$ 55.99",
    clotheCategory: "shirt",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
  {
    clotheId: 16,
    clotheImg: "./img/products/shirt06.jpg",
    clotheName: "Shirt 06",
    clothePrice: "$ 35.99",
    clotheCategory: "shirt",
    clotheDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiand dolore ipsum, exercitationem esse.",
  },
];

window.addEventListener("DOMContentLoaded", (e) => {
  const clothesMapped = clothes.map((clothe) => {
    return `<div class="clothe ${clothe.clotheCategory}">
        <div class="clothePicture"><img src=${clothe.clotheImg} alt=${clothe.clotheName}></div>
        <div class="clotheInfos">
          <div class="clotheNameAndPrice">
            <p class="clotheName">${clothe.clotheName}</p>
            <p class="clothePrice">${clothe.clothePrice}</p>
          </div>
          <div class="clotheDescription">${clothe.clotheDescription}</div>
        </div>
      </div>`;
  });

  let mainElts = clothesMapped.join("");
  const mainElt = document.querySelector(".main");
  mainElt.innerHTML = mainElts;

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let classValue = button.textContent.slice(0, -1).toLocaleLowerCase();
      const clothes = document.querySelectorAll(".clothe");
      clothes.forEach((clothe) => {
        if (classValue === "al") {
          clothe.classList.remove("hidden");
        } else if (!clothe.classList.contains(classValue)) {
          clothe.classList.add("hidden");
        } else {
          clothe.classList.remove("hidden");
        }
      });
    });
  });
});
