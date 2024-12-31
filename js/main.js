const showModel = Array.from(document.querySelectorAll("img"));
let lightContainer = document.getElementById("lightContainer");
let closeBtn = document.getElementById("close");
let nextBtn = document.getElementById("nextBtn");
let preveBtn = document.getElementById("preveBtn");
let lightBox = document.getElementById("lightBox");
let curentIndex = 0;
for (let i = 0; i < showModel.length; i++) {
  let model = showModel[i];
  model.addEventListener("click", function (e) {
    curentIndex = showModel.indexOf(e.target);
    let curentsrc = e.target.getAttribute("src");
    lightBox.style.backgroundImage = `url(../${curentsrc})`;
    lightContainer.classList.remove("d-none");
  });
}
nextBtn.addEventListener("click", next);
closeBtn.addEventListener("click", close);
preveBtn.addEventListener("click", pereve);
function next() {
  curentIndex++;
  if (curentIndex == showModel.length) {
    curentIndex = 0;
  }
  curentSrc = showModel[curentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(../${curentSrc})`;
}
function close() {
  lightContainer.classList.add("d-none");
}
function pereve() {
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = showModel.length - 1;
  }
  curentSrc = showModel[curentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(../${curentSrc})`;
}
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    next();
  } else if (e.key == "ArrowLeft") {
    pereve();
  } else if (e.key == "Escape") {
    close();
  }
});
