let images = [
  "img/icon 2.webp",
  "img/icon 3.webp",
  "img/icon 4.jpg",
  "img/icon 1.webp",
  "img/icon 6.jpg",
  "img/icon 7.jpg",
  "img/love.webp",
];
function renderImages() {
  let text = "";
  for (let i = 0; i < images.length; i++) {
    if (i != 3) {
      text += `
        <li>
        <img  id="1" onclick="click()" class="opacity" src="${images[i]}" alt="">
        </li>
        `;
    } else {
      text += `
    <li>
    <img  onclick="click()" src="${images[i]}" alt="">
    </li>
    `;
    }
    let element = document.getElementById("images");
    element.innerHTML = `
    <button onclick="preImage()" >Sau</button> ${text}<button onclick="nextImage()">Tiep</button>
    `;
  }
}
renderImages();
function nextImage() {
  let result = images.pop();
  images.unshift(result);
  document.getElementById("img-main").src = images[3];
  renderImages();
}
function preImage() {
  let result2 = images.shift();
  document.getElementById("img-main").src = images[3];
  images.push(result2);
  renderImages();
}

