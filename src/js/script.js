// const header = document.getElementById("header");

// const resize = () => {
//   header.removeAttribute("class");
//   if (window.innerWidth > 769) {
//     header.classList.add("animated_background");
//   } else {
//     header.classList.add("non_animated_background");
//   }
//   console.log(header);
// }

// window.onresize = resize;
// window.onload = resize;

VANTA.NET({
  el: document.getElementById("animated_background"),
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3fbbff,
  backgroundColor: 0xe18,
  points: 11.00,
  maxDistance: 22.00,
  spacing: 18.00
})