fetch('https://kontests.net/api/v1/all')
.then(res => res.json())
.then ((data) => 
{
var text = "<table><tr><th></th><th>Upcoming Contests</th><th>Date and Time</th></tr>";    
for(var info in data)
{
    if(data[info].status == "BEFORE" && data[info].site!="Toph" )
    {
        var TIME = data[info].start_time;
        var date = new Date(TIME);
        var time=date.toString();
        text += `
        <tr>
        <td>
          <img src="assets/${data[info].site}.png" class="img-fluid rounded rounded-circle" alt="Kick Start" width="60px">
        </td>
        <td>
        <a href=\" ${data[info].url} \"> ${data[info].name} </a> <br>
        </td>
        <td> ${date} </td>
        </tr>
        `
    }
}
text += "</table>"
var myClasses = document.getElementsByClassName("mypanel");

for (var i = 0; i < myClasses.length; i++) {
    myClasses[i].innerHTML = text;
}
})
