fetch('https://www.kontests.net/api/v1/codeforces').then((apidata)=>{
  return apidata.text();
})
.then((actualdata)=>{
  const mydata = actualdata[1,5];
  document.getElementById('contests').innerHTML = mydata;
  console.log(actualdata);
})