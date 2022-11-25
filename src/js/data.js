fetch("https://kontests.net/api/v1/all")
  .then((res) => res.json())
  .then((data) => {
    var text =
      "<table> <thead><tr><th>CONTEST <span>SITE</span></th><th>UPCOMING <span>CONTESTS</span></th><th>DATE & <span>TIME</span></th></tr></thead>";
    for (var info in data) {
      if (data[info].status == "BEFORE" && data[info].site != "Toph") {
        var TIME = data[info].start_time;
        var date = new Date(TIME);
        var time = date.toString();
        text += `
        <tr>
          <td>
            <img src="../../assets/${data[info].site}.png" class="img-fluid rounded" alt="Contest" width="60px" margin="20px">
          </td>
          <td>
          <a href=\" ${data[info].url} \" class="link"> ${data[info].name} </a>
          </td>
          <td> ${date} </td>
        </tr>
        `;
      }
    }
    text += "</table>";
    var myClasses = document.getElementsByClassName("mypanel");

    for (var i = 0; i < myClasses.length; i++) {
      myClasses[i].innerHTML = text;
    }
  });
