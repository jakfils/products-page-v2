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
