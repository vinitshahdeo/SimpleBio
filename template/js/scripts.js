const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
btn.addEventListener("click", function () {
  console.log("click", click);

  document.body.classList.toggle("dark");
});
