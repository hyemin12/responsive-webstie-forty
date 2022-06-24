const btn_nav = document.querySelector(".btn_nav");
const btn_close = document.querySelector(".btn_close");

function handleNav(event) {
  const nav = document.querySelector("#nav");
  if (event.target.className === "btn_nav") {
    nav.classList.add("visible");
  } else if (event.target.className === "btn_close") {
    nav.classList.remove("visible");
  }
}

btn_nav.addEventListener("click", handleNav);
btn_close.addEventListener("click", handleNav);
