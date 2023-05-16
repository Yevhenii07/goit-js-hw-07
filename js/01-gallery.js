import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listOfGallary = document.querySelector(".gallery");

const imagesList = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
  `;
  })
  .join("");

listOfGallary.insertAdjacentHTML("beforeend", imagesList);

listOfGallary.addEventListener("click", handleClick);

let lightboxInstance = null;

function handleClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    const largeImageURL = target.dataset.source;
    lightboxInstance = basicLightbox.create(
      `
		<img src="${largeImageURL}">
	`
    );
    lightboxInstance.show();
    document.addEventListener("keydown", handleKeyDown);
  }
}
function handleKeyDown(event) {
  if (event.key === "Escape") {
    lightboxInstance.close();
    document.removeEventListener("keydown", handleKeyDown);
  }
}

console.log(galleryItems);