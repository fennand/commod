const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector("nav");
const menuItems = document.querySelector("ul");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  menuItems.classList.toggle("hidden");
});

function toggleReadMore(contentId, hiddenContentId, mobileContentId) {
  const content = document.getElementById(contentId);
  const hiddenContent = document.getElementById(hiddenContentId);
  const mobileContent = document.getElementById(mobileContentId);

  // Toggle the visibility of hidden content
  hiddenContent.classList.toggle("hidden");

  // Toggle the visibility of the "Read More" button on smaller screens
  mobileContent.nextElementSibling.style.display =
    mobileContent.nextElementSibling.style.display === "none"
      ? "inline"
      : "none";
}
