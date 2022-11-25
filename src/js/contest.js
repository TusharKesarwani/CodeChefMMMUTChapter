fetch("https://www.kontests.net/api/v1/codeforces")
  .then((apidata) => {
    return apidata.text();
  })
  .then((actualdata) => {
    const mydata = actualdata[(1, 5)];
    document.getElementById("contests").innerHTML = mydata;
    console.log(actualdata);
  });

//JS for Date and Time

// Javascript for analog date and time
window.onload = setInterval(clock, 1000);

function clock() {
  var d = new Date();

  var date = d.getDate();

  var month = d.getMonth();
  var montharr = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  month = montharr[month];

  var year = d.getFullYear();
  var day = d.getDay();
  var dayarr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  day = dayarr[day];

  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  document.getElementById("date").innerHTML =
    day + ", " + date + " " + month + " " + year;
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}
