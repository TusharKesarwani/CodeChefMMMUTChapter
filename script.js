VANTA.NET({
  el: document.getElementById("animated_background"),
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  points: 14.00,
  maxDistance: 22.00,
  spacing: 16.00,
  showDots: false
})
fetch('https://www.kontests.net/api/v1/codeforces').then((apidata)=>{
  return apidata.text();
})
.then((actualdata)=>{
  const mydata = actualdata[1,5];
  document.getElementById('contests').innerHTML = mydata;
  console.log(actualdata);
})