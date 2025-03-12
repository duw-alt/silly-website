const buyButton = document.getElementById("buy-now");
const message = document.getElementById("message");
const content = document.getElementById("content");

const form = document.getElementById("user-form");
const name = document.getElementById("name");

buyButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  message.style.display = "block";
  content.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  alert(
    `Shauna strapman with oak 8.5inch strap launching at you in the near future insider information alert!! be careful ${name.value} 😔`
  );

  form.reset();
});

function pulseButton() {
  let scale = 1;

  setInterval(() => {
    scale = scale === 1 ? 1.2 : 1;
    buyButton.style.transform = `scale(${scale})`;
  }, 400);
}

pulseButton();
